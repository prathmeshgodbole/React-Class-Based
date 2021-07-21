import { Component } from "react";

class ErrorBoundry extends Component {
    constructor
  componentDidCatch(error) {}
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
