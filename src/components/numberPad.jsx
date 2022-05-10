import React, { Component } from 'react';
import Button from './button';

class numberPad extends Component {


    transferOutput = data => {
        this.props.output(data)
    }

    render() { 

        return ( 

            <div>

                <div>
                    <Button key={7} id={7} func={7} type="info" setOutput={this.transferOutput}/>
                    <Button key={8} id={8} func={8} type="info" setOutput={this.transferOutput}/>
                    <Button key={9} id={9} func={9} type="info" setOutput={this.transferOutput}/>
                    <Button key={"÷"} id={"÷"} func={'/'} type="primary"setOutput={this.transferOutput}/>
                </div>

                <div>
                    <Button key={4} id={4} func={4} type="info" setOutput={this.transferOutput}/>
                    <Button key={5} id={5} func={5} type="info" setOutput={this.transferOutput}/>
                    <Button key={6} id={6} func={6} type="info" setOutput={this.transferOutput}/>
                    <Button key={"×"} id={"×"} func={'*'} type="primary" setOutput={this.transferOutput}/>
                </div>

                <div>
                    <Button key={1} id={1} func={1} type="info" setOutput={this.transferOutput}/>
                    <Button key={2} id={2} func={2} type="info" setOutput={this.transferOutput}/>
                    <Button key={3} id={3} func={3} type="info" setOutput={this.transferOutput}/>
                    <Button key={"-"} id={"-"} func={'-'} type="primary" setOutput={this.transferOutput}/>
                </div>

                <div>
                    <Button key={"."} id={"."} func={'.'} type="info" setOutput={this.transferOutput}/>
                    <Button key={0} id={0} func={0} type="info" setOutput={this.transferOutput}/>
                    <Button key={"="} id={"="} func={'='} type="primary" setOutput={this.transferOutput}/>
                    <Button key={"+"} id={"+"} func={'+'} type="primary" setOutput={this.transferOutput}/>
                </div>
            </div>
         );
    }
}
 
export default numberPad;