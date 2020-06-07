import React, { Component } from 'react';


class Student extends Component{
        constructor(){
        super();

        this.state = {
        name: "Waseem",
        roll: "2205",
        subject: "IT"
    }; 

    
    }
    


   handlerClick = () => {
        this.setState({name: "Malik", roll: "105" })
    };
    render(){

        return(
            <div>
               

                <h1 className="nrs">Hello {this.state.name} Your Roll No is  {this.state.roll} <br></br>Your suject is <strong>{this.state.subject}</strong></h1>
          
            <button className="btn1" onClick={this.handlerClick}>Click to Change Name</button>
        </div>
        );
    }

}
export default Student;


