import React, { Component } from 'react'

export default class MatchCard extends Component {

  render(){
    var destroy
    var edit
    var joinLeave
    var user2
    var user2_skill
    var user_skill

    if (this.props.user2_id) {
      user2_skill = this.props.user2_skill
    }

    if (this.props.user_skill) {
      user_skill = this.props.user_skill
    }
    if (!(this.props.user2_id) && this.props.user_id != this.props.current_user) {
      // join = (<a href={"/matches/" + this.props.id + "/join/" + this.props.current_user}>Edit</a>)
      joinLeave = (
        <form action="join" method="get">
          <input type="hidden" name="user2_id" value={this.props.current_user}/>
          <input type="hidden" name="id" value={this.props.id}/>
          <input type="submit" value="Join Match"/>
        </form>
      )
    } else if (this.props.user2_id == this.props.current_user) {
      joinLeave = (
        <form action="leave" method="get">
          <input type="hidden" name="id" value={this.props.id}/>
          <input type="submit" value="Leave Match"/>
        </form>
      )
    }
    if (this.props.current_user == this.props.user_id) {
      edit = (<a href={"/matches/" + this.props.id + "/edit"}>Edit</a>)
    }
    if (this.props.current_user == this.props.user_id) {
      destroy = (<a data-confirm="Are you sure you want to delete this appointment?" href={"/matches/" + this.props.id} data-method="delete">Delete</a>)
    }
    if (this.props.user2_id) {
        user2 = this.props.user2_name
    }

    if (this.props.user_skill) {
      user2_skill = this.props.user2_skill
    }

    return (
      <div>
        <p>
          Match time: {this.props.timeslot} <br /> Location: {this.props.location} <br /> Player 1: {this.props.user_name} <br />Skill level: {user_skill} <br /> Player 2: {user2}<br /> Skill level: {user2_skill}
        </p>
        <span id={"edit"}>
          {edit} &nbsp;
        </span>

        <span id ={"destroy"}>
          {destroy}
        </span>
        <span id ={"join"}>
          {joinLeave}
        </span>
      </div>
    )
  }
}
