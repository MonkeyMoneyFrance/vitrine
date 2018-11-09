import React, {Component} from 'react'
import smoothScroll from 'smoothscroll'
import { withRouter } from 'react-router-dom'
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      smoothScroll(0, 500)
    }

  }

  render() {
    return this.props.children
  }
}
export default withRouter(ScrollToTop)
