import { Component } from "react";

class ErrorBoundry extends Component{
    render(){
return this.props.children;
    }
}
export default ErrorBoundry;