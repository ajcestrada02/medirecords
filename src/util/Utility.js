import React, { Component } from 'react';

class Utility extends Component{

    constructor(props){
        super(props)

        this.state = {
            array: [],
            output:[]
        }
    }

    calculateHandler = (event) => {

        var calcDouble = [];
        var inputSplit = event.target.value.split(",")
        inputSplit.forEach(element => {
            calcDouble.push(element * 2) 
        });

        this.setState({
            output: calcDouble
        })
    }

    render(){
        return(

            <div className="row">
                <div>{this.state.array}</div>
                <div>
                    <div className="card">
                        <p className="card-title">Input</p>
                        <p>Array</p>
                        <input type="text" onChange={this.calculateHandler}></input>
                    </div>
                </div>

                <div>
                    <div className="card">
                        <p className="card-title">Output</p>
                        <p>Double</p>
                        <input type="text" value={this.state.output} readOnly></input>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Utility