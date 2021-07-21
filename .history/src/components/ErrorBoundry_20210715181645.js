import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={hasError:false};
    }
  componentDidCatch(error) {
      this.state
  }
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
