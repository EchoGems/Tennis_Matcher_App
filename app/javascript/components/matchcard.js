import React, { Component } from 'react'

export default class MatchCard extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     match: {
  //       user2_id: this.props.user2_id,
  //       location: this.props.location,
  //       timeslot: this.props.timeslot,
  //       user_id: this.props.user_id,
  //       id: this.props.id
  //     }
  //   }
  // }
  render(){
    return (
      <div>
        test
        <p>
          id: {this.props.id}, timeslot: {this.props.timeslot}, location: {this.props.location}, user_id: {this.props.user_id}, user2_id: {this.props.user2_id}
        </p>
      </div>
    )
  }
}
