import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Question from "./Question";
import QuestionControls from "./QuestionControls"

export default function AppHeader(props) {
    return (
        <Container className>
            <Row>
                <Col>
                    <h1 className="text-center">Subnetting Lab 2</h1>
                    <Question />
                    <QuestionControls checkAnswers={props.checkAnswers} generateQuestion={props.generateQuestion}/>
                </Col>
            </Row>
        </Container>
    )
}
