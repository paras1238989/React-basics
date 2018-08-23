import React,{Component} from 'react'

export default class Student extends Component{
    constructor(){
        super();
        this.state={
            marks:35
        }
    }
    //Method invoked everytime button is clicked. Increases state.marks by 5 until 100
    increase(){
        if(this.state.marks<100){
            this.setState({
                marks:this.state.marks+5
            });
        }
        else{
            this.setState({
                marks:100
            })
            alert("Marks cannot be greater than 100");
        }
    }

    render(){
        return(
            <div>
                {/* Render the name and roll no, update the latest state marks here after clicking*/}
                <h2>#{this.props.roll} Student name is {this.props.name} and his marks are : {this.state.marks}</h2>
                <button onClick={()=>this.increase()}>Click to inc. marks by 5</button>
            </div>
        )
    }
}