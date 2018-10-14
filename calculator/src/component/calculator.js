
import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import Inputlist from './Inputlist';
import InputForm from './inputform';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            inputExpression : ''
        };
        this.hanldeInputExpression = this.hanldeInputExpression.bind(this);
        this.handleOutputExpression = this.handleOutputExpression.bind(this);
        this.handleButtonInputExpression = this.handleButtonInputExpression.bind(this);
        this.clearInputExpression = this.clearInputExpression.bind(this);



    }
    hanldeInputExpression(event) { 
        this.setState({
            inputExpression : event.target.value
        })

    }

    handleOutputExpression() {

        let value = eval(this.state.inputExpression);
        this.setState ({
            inputExpression:value
        })
    }
    handleButtonInputExpression(data){
        let newExpession = this.state.inputExpression + data;
        this.setState({
            inputExpression:newExpession
        })
    }

    clearInputExpression() {
        this.setState({
            inputExpression:''
        })
    }



    render() {
        return (
            <Row>
                <Col xs={4} ></Col>
                <Col xs={3} >
                    <InputForm inputHandler={this.hanldeInputExpression} value={this.state.inputExpression} />
                    <Inputlist clearHandler={this.clearInputExpression} buttonInputHandler= {this.handleButtonInputExpression} outputHandler={this.handleOutputExpression} />
                </Col>
                <Col xs={5} ></Col>


            </Row>
        )
    }
}

export default Calculator;