import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import Features2 from "./features2";
import Logo from '../images/logo.png';

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ThemeProvider theme={{
                background: '#f5f8fb',
                headerBgColor: '#58CAF1',
                headerFontColor: '#fff',
                headerFontSize: '15px',
                botBubbleColor: '#58CAF1',
                botFontColor: '#fff',
                userBubbleColor: '#fff',
                userFontColor: '#4a4a4a',
            }}>
                <ChatBot
                    floating={true}
                    headerTitle={'Monkey Money'}
                    botAvatar={Logo}
                    hideUserAvatar={true}
                    steps={[
                        {
                            id: '1',
                            message: 'Bonjour, je suis à votre écoute',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'enchanté de vous connaitre {previousValue} que puis je faire pour vous',
                            end: true,
                        }
                    ]}
                />
            </ThemeProvider>
        );
    }
}

export default Chatbot;