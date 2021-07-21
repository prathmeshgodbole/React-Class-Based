import { Component } from "react";

class ErrorBoundry extends Component{
    componentDidCatch
    render(){
return this.props.children;
    }
}
export default ErrorBoundry;