import React, { Component } from 'react';
import NumberPad from './numberPad';

class OutputBox extends Component {
    state = { 
        boxContents: " "
    }

    handleOutput = output => {

        if(output === "=") {
            try {
                this.setState({boxContents: eval(this.state.boxContents).toString()})
            } catch (err) {
                this.setState({boxContents: 'Error'});
            }
        } else {
            let boxContents = this.state.boxContents + output.toString();

            this.setState({boxContents}); 
        }
    }

    clear = () => {
        this.setState({boxContents: ""})
    }

    render() { 

        return (

            <div>

                <div className="row">
                    <div className="col-sm-1">
                        <input disabled="disabled" className="form-control" value={this.state.boxContents.replace("/", "÷").replace("*", "×")}/>   
                    </div>
                    <div className="col-sm-1">
                        <button className="btn-success btn-lg m-1" onClick={this.clear}>CE</button>
                    </div>
                </div>
                


                <NumberPad
                    key={1}
                    output={this.handleOutput}
                />

            </div>
        );
    }
}
 
export default OutputBox;