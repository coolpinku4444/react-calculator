import React ,{Component } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import {Rwrapper} from '../styled-component/styledcomponent'


const ButtonList = (props) => {
    return(
        <Rwrapper>
            <Col xs={2} >
                <div>
                    <Button onClick={() => { props.buttonInputHandler(props.val1)}}>{props.val1}</Button>
                </div>
            </Col>
            <Col xs={2} >
                <div>
                    <Button onClick={() => { props.buttonInputHandler(props.val2)}}>{props.val2}</Button>
                </div>
            </Col>
            <Col xs={2} >
                <div>
                    <Button onClick={() => { props.buttonInputHandler(props.val3)}}>{props.val3}</Button>
                </div>
            </Col>
            <Col xs={2} >
                <div>
                    <Button onClick={() => { props.buttonInputHandler(props.val4)}}>{props.val4}</Button>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div>
                        <Button onClick={() => { props.buttonInputHandler(props.val5)}}>{props.val5}</Button>
                        </div>
                    </Col>
        </Rwrapper>
    )
}

export default ButtonList;