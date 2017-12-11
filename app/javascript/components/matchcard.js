import React, { Component } from 'react'

export default class MatchCard extends Component {

  render(){
    var edit
    var destroy
    if (this.props.current_user == this.props.user_id) {
      edit = (<a href={"/matches/" + this.props.user_id + "/edit"}>Edit</a>)
    }
    if (this.props.current_user == this.props.user_id) {
      destroy = (<a data-confirm="Are you sure you want to delete this appointment?" href={"/matches/" + this.props.user_id} data-method="delete">Delete</a>)
    }
    return (
      <div>
        <p>
          Match time: {this.props.timeslot} <br /> Location: {this.props.location} <br /> user_id: {this.props.user_id} <br /> user2_id: {this.props.user2_id}
        </p>
        <span id={"edit"}>
          {edit} &nbsp;
        </span>

        <span id ={"destroy"}>
          {destroy}
        </span>
      </div>
    )
  }
}
