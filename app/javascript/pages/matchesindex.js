import React, {Component} from 'react'
import MatchCard from '../components/matchcard'

export default class MatchesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: this.props.matches,
      current_user: this.props.current_user
    }
  }


  render(){
    var current_user = this.state.current_user
    var matches = this.state.matches.map(function(el, i){
      return (
        <MatchCard key={i} current_user={current_user} user_name={el.user_name} id={el.id} location={el.location} timeslot={el.timeslot} user2_id={el.user2_id} user_id={el.user_id} user_skill={el.user_skill} user2_name={el.user2_name} />
      )
    })

    return(
      <div id = {"matchesindex"}>
        {matches}
        <div id = {"new"}>
          <a href="/matches/new">New match</a>
        </div>
        <p>Current user ID: {this.state.current_user}</p>
      </div>
    )
  }
}
