import UserContext from "../Utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    // console.log("parent constructor is called");
  }
  componentDidMount() {
    // console.log("parent did mount is called")
  }
  render() {
    //     console.log("parent render is called");

    return (
      <div>
        <h1>About</h1>
        <div>
            Logged in User : 
            <UserContext.Consumer>
                {({loggedInUser})=>  <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>
        <h3>thia is food ordering app</h3>
        <User name="Aman Tiwari" />
        <UserClass name="Aman Class" />
      </div>
    );
  }
}

// const About = ()=>{
//     return (
//         <div>

//         </div>
//     )
// }
export default About;
