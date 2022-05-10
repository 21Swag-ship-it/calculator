import React, { Component } from 'react';

class Button extends Component {
    state = {  };



    render() { 
        return ( 
            <button 
                className={"btn-lg m-1 btn-" + this.props.type} 
                onClick={ () => this.props.setOutput(this.props.func) } >
                {this.props.id}
            </button>
        );
    }
}
 
export default Button;