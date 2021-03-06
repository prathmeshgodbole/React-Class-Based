import { Fragment, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import 



class UserFinder extends Component {
  constructor() {
      super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount(){
      //sends http request...
      this.setState({filteredUsers:DUMMY_USERS});
  }

  componentDidUpdate(prevProps,prevState) {
if(prevState.searchTerm !==this.state.searchTerm){
    this.setState({
      filteredUsers: DUMMY_USERS.filter((user) =>
        user.name.includes(this.state.searchTerm)
      ),
    });
  }
}

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
      <div className={classes.finder}>
        <input
          
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
        />
        </div>
        <Users users={this.state.filteredUsers} />
        
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

  //   return (
  //     <Fragment >
  //       <input className={classes.finder} type='search' onChange={searchChangeHandler} />
  //       <Users users={filteredUsers} />
  //     </Fragment>
  //   );
// };

export default UserFinder;
