import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={}
    }
  componentDidCatch(error) {}
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
