import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={has}
    }
  componentDidCatch(error) {}
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
