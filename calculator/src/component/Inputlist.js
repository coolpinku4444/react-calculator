import React,{Component} from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import {Rwrapper} from '../styled-component/styledcomponent'

import ButtonList from './buttonlist'
class Inputlist extends Component {
    constructor(){
        super();

    }

    render() {
        return (
            <div>
                <ButtonList val1={'1'} val2={'2'} val3={'3'} val4={4} val5={'+'} buttonInputHandler={this.props.buttonInputHandler}  />
                <ButtonList val1={'5'} val2={'6'} val3={'7'} val4={8} val5={'-'} buttonInputHandler={this.props.buttonInputHandler}  />
                <Rwrapper>
                    <Col xs={2} >
                        <div>
                            <Button onClick={() => { this.props.buttonInputHandler('9')}}>9</Button>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div>
                        <Button onClick={() => { this.props.buttonInputHandler('0')}}>0</Button>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div>
                        <Button onClick={this.props.outputHandler}>=</Button>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div>
                        <Button onClick={this.props.clearHandler}>clr</Button>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div>
                        <Button onClick={() => { this.props.buttonInputHandler('*')}}>*</Button>
                        </div>
                    </Col>
                </Rwrapper>
        </div>
        )
    }
}

export default Inputlist;