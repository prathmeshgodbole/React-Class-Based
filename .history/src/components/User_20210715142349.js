import React,{Component} from'react';
import classes from './User.module.css';

class User extends Component{
  render(){
    
  }
}

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
