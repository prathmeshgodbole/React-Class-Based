import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={hasError:false};
    }
  componentDidCatch(error) {
      this.setState({has})
  }
  render() {
    return this.props.children;
  }
}
export default ErrorBoundry;
