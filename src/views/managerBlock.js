import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import Line from './line';
import {Icon,Popup} from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import {storeWebsite,storeFooter,storeMenu} from '../../redux/actions'
import genericFb from '../../functions/genericFb.js';

import {connect} from 'react-redux'

var dotProp = require('dot-prop-immutable');

const ContainerTotal = styled.div`
  display: flex;
  position: fixed;
  left: 30%;
  ${props => (props.isFooter ? 'top' : 'bottom')}: 10px;
  z-index: 10000;
  box-shadow: 0 0 20px 10px grey;
  border: 2px solid grey;
  border-radius: 0.1rem;
`;

const ContainerLines = styled.div`
  display: flex;
  flex-direction: column;
  width: 408px;
  background-color: white;
`;

const ContainerSpe = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  float: left;
  border-right: 2px solid grey;
`;

const ContainerSpeDroppable = styled.div`
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContainerCardRow = styled.div`
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ContainerCard = styled.div`
  border: 1px solid grey;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : '#F7D358')};
  flex: 0 0 48px;
  text-align: center;
  line-height: 50px;
  width: 48px;
  transition: flex-basis 500ms ease-in-out;
`;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function mapStateToProps(state){
  return {
    draftWebsite : state.draftWebsite,
    draftFooter : state.draftFooter,
    draftMenu : state.draftMenu,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({storeWebsite,storeFooter,storeMenu}, dispatch)
}

 class ManagerBlock extends React.PureComponent {

  constructor(props) {
      super(props);
      this.state={copyMode:false};
  }

  componentWillMount(){
    //nettoyage du bloc (elementMap peut ne pas commencer à 0)
    let block;
    switch (this.props.type) {
      case "block":
        block = this.props.draftWebsite[this.props.index];
        break;
      case "footer":
        block = this.props.draftFooter;
        break;
      case "menu":
        block = this.props.draftMenu;
        break;
      default:
        block = {};
    }
    //avoid bug from incomplete database
    if (!block.column_properties) {
      block = {
        block_properties: {display:"false"},
        elementMap : [],
        column_properties : [],
        line_properties : [],
      };
    }//same
    if (!block.elementMap[0]) {
      block.elementMap.splice(0,1);
      block.column_properties.splice(0,1);
    }

    this.setState({data:this.blockToData(block,null)});
}


/***********************/
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    //CASES WHERE DOES NOTHING
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    //almost any change on newData has to be made on newBlock, dispatched at the end
    let newData = this.state.data;
    let startLine, finishLine, cardId;

    //initiate cardId
    //CASE CREATE CARD
    if (source.droppableId === 'speContainer') {
      //update cardId
      cardId = 'newCard';
      let newCard = {
          id: 'newCard',
          color: getRandomColor(),
          widthOn16: 2,
          iLine: newData.lineOrder.indexOf(destination.droppableId),
          jColumn: destination.index,
      };
      newData = dotProp.merge(newData,'cards.'+cardId,newCard);
    } else {
      //initiate startLine
      startLine = newData.lines[source.droppableId];               //ref
      if (this.state.copyMode) {
        cardId = 'new'+draggableId;
        //update newData.cards
        let newCard = {
            id: cardId,
            color:newData.cards[draggableId].color,
            widthOn16:newData.cards[draggableId].widthOn16,
            iLine: newData.lineOrder.indexOf(destination.droppableId),
            jColumn: destination.index,
        };
        newData = dotProp.merge(newData,'cards.'+cardId,newCard);
        this.setState({copyMode:false});
      } else {
      cardId = draggableId;
      }
    }

    //////////////COMPLETE CASE DELETE CARD
    if (destination.droppableId === 'speContainer'
      && source.droppableId !== 'speContainer') {
      let lineId = source.droppableId;
      newData = this.arrangeStartLineCards(newData,lineId,cardId);
      //delete in cards :
      newData = dotProp.delete(newData,'cards.'+cardId);
      newData = this.rmvLineIfNeeded(newData);
      // on traduit la nouvelle data en block
      let newBlock = this.dataToBlock(newData);
      switch (this.props.type) {
        case "block":
          this.props.storeWebsite(dotProp.set(this.props.draftWebsite,this.props.index,newBlock));
          break;
        case "footer":
          this.props.storeFooter(newBlock);
          break;
        case "menu":
          this.props.storeMenu(newBlock);
          break;
        default:
      }


      // on renormalise la data
      this.setState({data:this.blockToData(newBlock,newData)});
      return;
    }
    //initiate finishLine
    //CASE CREATE FINISHLINE
    if (destination.droppableId === 'lineEmpty'){
      let lineId = 'newLine-0';
      while (newData.lines.hasOwnProperty(lineId)) {
        let num = parseInt(lineId.split('-')[1])+1;
        lineId = 'newLine-'+num; /*unique ID*/
      }
      let newLine = {
          id: lineId,
          cardIds:[],
      };
      newData = dotProp.merge(newData,'lines.'+lineId,newLine);
      newData.lineOrder.push(lineId);
      finishLine = newData.lines[lineId];                       //ref
    } //ELSE
    else finishLine = newData.lines[destination.droppableId];    //ref


    //cancel if finishline already full
    if (finishLine.cardIds.length === 16) return;
    //CASE SWITCH IN SAME LINE
    if (startLine === finishLine && !this.state.copyMode) {
      let cardIds = startLine.cardIds;                           //ref
      let tempCardId = cardIds[destination.index];
      cardIds[destination.index] = cardId;
      cardIds[source.index] = tempCardId;
    }//ELSE
    else {//ARRANGE STARTLINE CARDS if not new card/clone
      if (source.droppableId !== 'speContainer' && !this.state.copyMode) {
        newData = this.arrangeStartLineCards(newData,startLine.id,cardId);
      }
      //ARRANGE FINISHLINE CARDS if not delete card
      if (!(destination.droppableId === 'speContainer' && source.droppableId !== 'speContainer')) {
        newData = this.arrangeFinishLineCards(newData,finishLine.id,cardId,destination.index);
      }
      //clean empty lines
      newData = this.rmvLineIfNeeded(newData);
    }
    // on traduit la nouvelle data en block
    let newBlock = this.dataToBlock(newData);

    switch (this.props.type) {
      case "block":
        this.props.storeWebsite(dotProp.set(this.props.draftWebsite,this.props.index,newBlock));
        break;
      case "footer":
        this.props.storeFooter(newBlock);
        break;
      case "menu":
        this.props.storeMenu(newBlock);
        break;
      default:
    }
    // on renormalise la data
    this.setState({data:this.blockToData(newBlock,newData)});
  }

  blockToData(block,formerData){

    let data = {
      cards : {},
      lines : {},
      lineOrder : []
    };

    for (var iLigne=0; iLigne < block.column_properties.length; iLigne++) {
      //line
      let lineId = 'line-'+iLigne;
      data.lineOrder.push(lineId);
      data.lines[lineId] = {
        id : lineId,
        cardIds : []
      };

      for (var jCard = 0; jCard<block.column_properties[iLigne].length; jCard++) {
        //initiate width in column_properties
        block.column_properties[iLigne][jCard] = {
          ...block.column_properties[iLigne][jCard],
          width : block.column_properties[iLigne][jCard].width || Math.floor(16/block.column_properties[iLigne].length),
        };

        //card
        let cardId = 'card-'+Object.keys(data.cards).length;
        data.lines[lineId].cardIds.push(cardId);

        let color;
        if (formerData) {
          let formerCardId = dotProp.get(formerData.lines,formerData.lineOrder[iLigne]+'.cardIds.'+jCard);
          color = formerData.cards[formerCardId].color;
        } else {
          color = getRandomColor();
        }
        data.cards[cardId] = {
          id : cardId,
          color : color,
          widthOn16 : block.column_properties[iLigne][jCard].width,
          iLine : iLigne,
          jColumn : jCard,
        };
      }
    }
    return data;
  }

  dataToBlock(data) {
    //DATA TO BLOCK
    let block;
    switch (this.props.type) {
      case "block":
        block = this.props.draftWebsite[this.props.index];
        break;
      case "footer":
        block = this.props.draftFooter;
        break;
      case "menu":
        block = this.props.draftMenu;
        break;
      default:
        block = {};
    }
    let newBlock = {
      block_properties: block.block_properties,
      elementMap : [],
      column_properties : [],
      line_properties : [],
    };

    if (this.props.type === 'footer' || this.props.type === 'menu') {
      newBlock = {
        ...newBlock,
        name: block.name,
        pages: block.pages,
      };
    }

    for (var i = 0; i < data.lineOrder.length; i++) {
      //initiate line
      newBlock.elementMap[i] = [];
      newBlock.column_properties[i] = [[]];
      if (!block.line_properties || !block.line_properties[i]) {
        newBlock.line_properties[i] = {minHeight:100};
      } else {
        newBlock.line_properties[i] = block.line_properties[i];
      }
      let cardIds = data.lines[data.lineOrder[i]].cardIds;

      for (var j = 0; j < cardIds.length; j++) {
        let card = data.cards[cardIds[j]];
        //case newCard
        if (card.id === 'newCard') {
          newBlock.elementMap[i][j] = [{type:'paragraph'}];
          newBlock.column_properties[i][j] = {padding:'0 1rem'};
        } //case clone
        else if (card.id.includes('newcard-')) {
          let num = parseInt(card.id.split('-')[1]);
          let clonedCard = data.cards['card-'+num];
          newBlock.elementMap[i][j] = block.elementMap[clonedCard.iLine][clonedCard.jColumn];
          newBlock = dotProp.set(newBlock,'column_properties.'+i+'.'+j,block.column_properties[clonedCard.iLine][clonedCard.jColumn]);
        }//case simple switch or nothing
        else {
          newBlock.elementMap[i][j] = block.elementMap[card.iLine][card.jColumn];
          newBlock.column_properties[i][j] = block.column_properties[card.iLine][card.jColumn];
        }
          //rewrite width
        newBlock = dotProp.set(newBlock,'column_properties.'+i+'.'+j+'.width',card.widthOn16);
      }
    }
    return newBlock;
  }

  arrangeStartLineCards(data,lineId,cardId){
    let lineIndex = data.lineOrder.indexOf(lineId);
    let cardIds = data.lines[lineId].cardIds;
    let cardIndex = cardIds.indexOf(cardId);
    //delete the card in the line
    cardIds.splice(cardIndex,1);
    //on rallonge la dernière card de la start line
    if (cardIds.length > 0) {
      let lastCardId = cardIds[cardIds.length-1];
      let widthOn16LastCard = dotProp.get(data.cards,lastCardId+'.widthOn16');
      let widthOn16Card = dotProp.get(data.cards,cardId+'.widthOn16');
      data = dotProp.set(data,'cards.'+lastCardId+'.widthOn16',widthOn16Card+widthOn16LastCard);
    }
    return data;
  }

  arrangeFinishLineCards(data,lineId,cardId,index){
    let lineIndex = data.lineOrder.indexOf(lineId);
    let cardIds = data.lines[lineId].cardIds; //ref
    //case new line
    if (cardIds.length === 0) {
      //insert
      cardIds.push(cardId);
      data = dotProp.set(data,'cards.'+cardId+'.widthOn16',16);
    }else{
      //insert
      cardIds.splice(index, 0, cardId);
      if (index === 0 && data.cards[cardIds[1]].widthOn16 > 3) {
        let w = data.cards[cardIds[1]].widthOn16;
        data = dotProp.set(data,'cards.'+cardId+'.widthOn16',Math.floor(w/2));
        data = dotProp.set(data,'cards.'+cardIds[1]+'.widthOn16',Math.floor((w+1)/2));
        return data;
      }
      if (index === cardIds.length - 1 && data.cards[cardIds[cardIds.length - 2]].widthOn16 > 3) {
        let w = data.cards[cardIds[cardIds.length - 2]].widthOn16;
        data = dotProp.set(data,'cards.'+cardId+'.widthOn16',Math.floor(w/2));
        data = dotProp.set(data,'cards.'+cardIds[cardIds.length - 2]+'.widthOn16',Math.floor((w+1)/2));
        return data;
      }
      if (index !== 0 && index !== cardIds.length - 1){
        let widthAtLeft = dotProp.get(data.cards,cardIds[index-1]+'.widthOn16');
        let widthAtRight = dotProp.get(data.cards,cardIds[index+1]+'.widthOn16');
        if (widthAtLeft > 2 && widthAtRight > 2) {
          //case big neighbors
          data = dotProp.set(data,'cards.'+cardId+'.widthOn16',2)
          data = dotProp.set(data,'cards.'+cardIds[index-1]+'.widthOn16',widthAtLeft-1);
          data = dotProp.set(data,'cards.'+cardIds[index+1]+'.widthOn16',widthAtRight-1);

          return data;
        }
      }
      //other case : check all modulo neighbors in range 1 then 2 etc
      data = dotProp.set(data,'cards.'+cardId+'.widthOn16',1);
      let range = 1;
      while( range < cardIds.length ) {
        let rightRangedNeighborIndex = Math.abs((index+range) % cardIds.length);
        let rightRangedNeighborWidthOn16 = dotProp.get(data.cards,cardIds[rightRangedNeighborIndex]+'.widthOn16');
        if (rightRangedNeighborWidthOn16 > 1) {
          data = dotProp.set(data,'cards.'+cardIds[rightRangedNeighborIndex]+'.widthOn16',rightRangedNeighborWidthOn16-1);
          break;
        }
        let leftRangedNeighborIndex = Math.abs((index-range) % cardIds.length);
        let leftRangedNeighborWidthOn16 = dotProp.get(data.cards,cardIds[leftRangedNeighborIndex]+'.widthOn16');
        if (leftRangedNeighborWidthOn16 > 1) {
          data = dotProp.set(data,'cards.'+cardIds[leftRangedNeighborIndex]+'.widthOn16',leftRangedNeighborWidthOn16-1);
          break;
        }
        range++;
      }
    }
    return data;
  }

  rmvLineIfNeeded(data){
    for(var lineId in data.lines) {
      if (data.lines[lineId].cardIds.length === 0) {
        data = dotProp.delete(data,'lines.'+lineId);
        data.lineOrder.splice(data.lineOrder.indexOf(lineId),1);
      }
    }
    return data;
  }

  add1OnRight(lineId,index) {
    let line =  this.state.data.lines[lineId];
    let cards = line.cardIds.map(cardId => this.state.data.cards[cardId]);
    if (index < cards.length-1 && cards[index+1].widthOn16 > 1) {
      let newData = dotProp.set(this.state.data,'cards.'+cards[index].id+'.widthOn16',cards[index].widthOn16+1);
      newData = dotProp.set(newData,'cards.'+cards[index+1].id+'.widthOn16',cards[Number(index)+1].widthOn16-1);
      this.setState({data:newData});
      let newBlock;
      switch (this.props.type) {
        case "block":
          newBlock = this.props.draftWebsite[this.props.index];
          break;
        case "footer":
          newBlock = this.props.draftFooter;
          break;
        case "menu":
          newBlock = this.props.draftMenu;
          break;
        default:
          newBlock = {};
      }

      let indexLine = this.state.data.lineOrder.indexOf(lineId);
      newBlock = dotProp.set(newBlock,'column_properties.'+indexLine+'.'+index+'.width'
        ,newBlock.column_properties[indexLine][index].width+1);
      newBlock = dotProp.set(newBlock,'column_properties.'+indexLine+'.'+Number(index+1)+'.width'
        ,newBlock.column_properties[indexLine][Number(index)+1].width-1);

        switch (this.props.type) {
          case "block":
            this.props.storeWebsite(dotProp.set(this.props.draftWebsite,this.props.index,newBlock));
            break;
          case "footer":
            this.props.storeFooter(newBlock);
            break;
          case "menu":
            this.props.storeMenu(newBlock);
            break;
          default:
        }
    }
    return;
  }

  rmv1OnRight(lineId,index) {
    let line =  this.state.data.lines[lineId];
    let cards = line.cardIds.map(cardId => this.state.data.cards[cardId]);
    if (cards[index].widthOn16 > 1) {
      let newData = dotProp.set(this.state.data,'cards.'+cards[index].id+'.widthOn16',cards[index].widthOn16-1);
      newData = dotProp.set(newData,'cards.'+cards[index+1].id+'.widthOn16',cards[index+1].widthOn16+1);
      this.setState({data:newData});

      let newBlock;
      switch (this.props.type) {
        case "block":
          newBlock = this.props.draftWebsite[this.props.index];
          break;
        case "footer":
          newBlock = this.props.draftFooter;
          break;
        case "menu":
          newBlock = this.props.draftMenu;
          break;
        default:
          newBlock = {};
      }

      let indexLine = this.state.data.lineOrder.indexOf(lineId);
      newBlock = dotProp.set(newBlock,'column_properties.'+indexLine+'.'+index+'.width'
        ,newBlock.column_properties[indexLine][index].width-1);
      newBlock = dotProp.set(newBlock,'column_properties.'+indexLine+'.'+Number(index+1)+'.width'
        ,newBlock.column_properties[indexLine][index+1].width+1);
        switch (this.props.type) {
          case "block":
            this.props.storeWebsite(dotProp.set(this.props.draftWebsite,this.props.index,newBlock));
            break;
          case "footer":
            this.props.storeFooter(newBlock);
            break;
          case "menu":
            this.props.storeMenu(newBlock);
            break;
          default:
        }
    }
    return;
  }


  switchLines(index) {
    //switch line index et index+1
    let newData = this.state.data;
    let lineIdTemp = newData.lineOrder[index];
    newData = dotProp.set(newData,'lineOrder.'+index,newData.lineOrder[index+1]);
    newData = dotProp.set(newData,'lineOrder.'+Number(index+1),lineIdTemp);
    // on traduit la nouvelle data en block
    let newBlock = this.dataToBlock(newData);

    let linePropTemp = newBlock.line_properties[index];
    newBlock = dotProp.set(newBlock,'line_properties.'+index,newBlock.line_properties[index+1]);
    newBlock = dotProp.set(newBlock,'line_properties.'+Number(index+1),linePropTemp);

    //on propaage et normalise
    switch (this.props.type) {
      case "block":
        this.props.storeWebsite(dotProp.set(this.props.draftWebsite,this.props.index,newBlock));
        break;
      case "footer":
        this.props.storeFooter(newBlock);
        break;
      case "menu":
        this.props.storeMenu(newBlock);
        break;
      default:
    }
    // on renormalise la data
    this.setState({data:this.blockToData(newBlock,newData)});
  }
  render() {

    return (
        <DragDropContext onDragEnd={this.onDragEnd} >
          <ContainerTotal
            isFooter = {(this.props.type === 'footer')}
          >
            {/***********************  CONTAINER SPE   *****************************/}
            <ContainerSpe>
              <Popup content={genericFb.replaceString("%close")} trigger = {
                  <Icon circular color='red' inverted name='close' link style={{position:'absolute'}} onClick={()=>this.props.onClose()}/>
              }/>
            <Popup content={genericFb.replaceString("%clickToCopy")} trigger = {
                  <Icon circular color='blue' inverted={(this.state.copyMode)} name='copy outline' link style={{position:'absolute',left:'172px'}}
                    onClick={()=>this.setState({copyMode:(!this.state.copyMode)})}/>
              }/>
              <Droppable droppableId={'speContainer'} direction="vertical">
                {(provided, snapshot) => (
                <ContainerSpeDroppable
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                {/*** NEW CARD ***/}
                <ContainerCardRow>
                  <Draggable draggableId={'newCard'} index={0}>
                    {(provided, snapshot) => (
                      <ContainerCard
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        widthOn16={2}
                      >
                        Drag!
                      </ContainerCard>
                    )}
                  </Draggable>
                  </ContainerCardRow>
                  {provided.placeholder}
                </ContainerSpeDroppable>
                )}
              </Droppable>
              {/**********************  SWITCH LINES BUTTONS ***************/}
              {this.state.data.lineOrder.map((val,iButton)=>{
                if (iButton !== this.state.data.lineOrder.length-1)
                return(
                  <Icon key={iButton} name="arrows alternate vertical" link inverted color="black" size="large" style={{position:'absolute',left:'170px',top:iButton*50+43+'px'}}
                    onClick={()=>this.switchLines(iButton)}
                    />
                )
              })}
            </ContainerSpe>
            {/***************************** CONTAINER LINES **************************/}
            <ContainerLines>
              {this.state.data.lineOrder.map(lineId => {
                const line =  this.state.data.lines[lineId];
                const cards = line.cardIds.map(cardId => this.state.data.cards[cardId]);
                return (
                  <Line
                    key={line.id}
                    line={line}
                    cards={cards}
                    rmv1OnRight={(e)=>this.rmv1OnRight(lineId,e)}
                    add1OnRight={(e)=>this.add1OnRight(lineId,e)}/>
                  );
              })}
              {/*** EMPTY LINE ***/}
              <Line line={{id:'lineEmpty'}} cards={[]}/>
            </ContainerLines>

        </ContainerTotal>
        </DragDropContext>
    )
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(ManagerBlock)
