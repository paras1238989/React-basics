import React,{Component} from 'react';

class Hello extends Component{
    constructor(){
        super();
        this.state = {
            noOfEmps:2000
        }
    }
    //Switching between 2000 and 3000 as no of employees
    modify(){
        if(this.state.noOfEmps===2000){
            this.setState({
                noOfEmps:3000
            });
        }
        else{
            this.setState({
                noOfEmps:2000   
            });
        }
    }

    render(){
        //Rendering the State and props
        return(
            <div>
                <h2>Hello!!!!  {this.props.name()}</h2>
                <h3>{this.props.name()} has {this.state.noOfEmps} Employees</h3>
                {/* Change the number of employees from 2000 to 3000 onClick */}
                <button onClick={()=>this.modify()}>Change EMPS</button>
            </div>
        )
    }
}

export default Hello;