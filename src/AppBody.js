import React, { Component } from 'react'
import GroupsContainer from "./GroupsContainer";
import PropTypes from "prop-types"


export class AppBody extends Component {
constructor(props) {
    super(props)
}

    render() {
        return (
            <div>
                <GroupsContainer groups={this.props.groups} checked={this.props.checked}/>
            </div>
        )
    }
}

AppBody.propTypes = {
    groups: PropTypes.array.isRequired
  }

export default AppBody
