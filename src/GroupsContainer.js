import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import OrgGroup from "./OrgGroup";

import PropTypes from "prop-types"

export class GroupsContainer extends Component {
    constructor(props) {
        super(props)
    
        }

    render() {
        let groupCards = [];
        this.props.groups.forEach(element => {
            groupCards.push(<Col md={6} lg ={4}>
                <OrgGroup 
                    key={element.id} 
                    name={element.name} 
                    hosts={element.hosts} 
                    inputHandler={element.inputHandler} 
                    answerIndex={element.answerIndex} 
                    correct={element.correct}
                    checked={this.props.checked}/>
                </Col>)
        });
        

        return (
            <Container>
                <Row>
                    {groupCards}
                </Row>
                
            </Container>
        )
    }
}

GroupsContainer.propTypes = {
    groups: PropTypes.array.isRequired
  }
  

export default GroupsContainer
