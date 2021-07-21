import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={hasError:false};
    }
  componentDidCatch(error) {
      this.setState
  }
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
