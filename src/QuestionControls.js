import React, { Component } from 'react'
import Button from "react-bootstrap/Button"

export class QuestionControls extends Component {
    constructor(props) {
        super(props)
    
        this.handleCheckAnswerClick = this.handleCheckAnswerClick.bind(this);
        this.handlegenerateQuestionClick = this.handlegenerateQuestionClick.bind(this);

    }
    handleCheckAnswerClick() {
        this.props.checkAnswers();
    }
    
    handlegenerateQuestionClick() {
        this.props.generateQuestion();
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <Button onClick={this.handlegenerateQuestionClick} variant="outline-warning" size="lg">Generate New Question</Button>
                <Button onClick={this.handleCheckAnswerClick} variant="outline-danger" size="lg">Check Answers</Button>
            </div>
        )
    }
}

export default QuestionControls
