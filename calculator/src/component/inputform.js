import React , {Component} from 'react';
import {Formwrapper} from "../styled-component/styledcomponent";
import {Row,Col} from 'react-bootstrap'

const InputForm = (props) => {
    
    return (
        <Row>
            <Col xs={10}>
                <Formwrapper onChange={props.inputHandler} type="text" value={props.value} />
            </Col>
        </Row>
    )
}
export default InputForm;