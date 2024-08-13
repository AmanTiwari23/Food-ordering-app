import React from "react";

class UserClass extends React.Component{
   constructor(props){
    super(props)

    this.state = {
        userInfo : {
            name : "dummy",
            location:"dafault",
            avatar_url : "#",
        }
    };
    // console.log("child constructor is called")
   }
    async componentDidMount(){
    //   console.log("child didmount called")
    const data = await fetch("https://api.github.com/users/AmanTiwari23")
    const json = await data.json()
    this.setState({
        userInfo : json,
    })
    console.log(json);
   }
    render(){
          const {name,id,avatar_url} = this.state.userInfo
       
    //    console.log("child render id called")
        return(
            <div className="usercard">
             <h2>Name: {name}</h2>
            <img src={avatar_url}></img>
             <h3>Location : {id}</h3>
             <h3>Contact : amanclass@123</h3>
            </div>
        )
            
        
    }
}

export default UserClass;