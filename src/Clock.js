import React,{Component} from 'react';

class Clock extends Component{
    constructor(){
        super();
        this.state ={
            date:new Date()
        };
    }
    //Recall tick() method after a interval of 1000ms
    componentDidMount(){
        var TimerId = setInterval(
            ()=> this.tick(),1000
        )
    }
    //Clear the already present timer
    componentWillMount(){
        clearInterval(this.TimerID);
    }
    //invoked after 1000ms which displays the updated time
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                {/* Render only the time hh/mm/ss from the date*/}
                <h1>My Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock