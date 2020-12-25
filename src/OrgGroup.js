import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import './OrgGroup.css'

export class OrgGroup extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //Need to add properties
        this.props.inputHandler(event.target.value, this.props.answerIndex);
      }

    render() {
        return (
            <Card className={this.props.checked ? 
                this.props.correct ? "correct" : "incorrect"
                : "unchecked"}>
                <Card.Header className="text-center">
                    {this.props.name}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.props.name === "Leftover IPs" ? <p>Enter the CIDR Notation for the remaining IPs or /32 for none:</p> : <p>This group in the organization requires <strong>{this.props.hosts} hosts</strong>.</p>}
                        
                    </Card.Text>
                    <Form.Label>CIDR Notation:</Form.Label>
                    <Form.Control type="text" placeholder="/xx" onChange={this.handleChange}>

                    </Form.Control>
                </Card.Body>

                {/* <div className="card-body">
                    
                    <label for="CIDR-notation">CIDR Notation:</label>
                    <input className="form-control" type="text" name="CIDR-notation" id="CIDR-notation" placeholder="/XX">
                    <p class="text-center" id="answer-text">Please enter an answer</p>
                </div> */}
            </Card>
        )
    }
}

export default OrgGroup
