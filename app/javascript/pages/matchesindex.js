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
    var today = new Date()
    today = parseInt(today.getFullYear()+""+(today.getMonth()+1)+today.getDate())
    var current_user = this.state.current_user
    var matches = this.state.matches.map(function(el, i){
      var matchdate = parseInt("" + el.timeslot.toString().slice(0, 4) + el.timeslot.toString().slice(8, 10) + el.timeslot.toString().slice(5, 7))
      if (matchdate >= today) {
        return (
          <MatchCard key={i} current_user={current_user} user_name={el.user_name} id={el.id} location={el.location} timeslot={el.timeslot} user2_id={el.user2_id} user_id={el.user_id} user_skill={el.user_skill} user2_name={el.user2_name} user2_skill={el.user2_skill}/>
        )
      }
    })

    return(
      <div id = {"matchesindex"}>
        {matches}
        <div id = {"new"}>
          <a href="/matches/new">New match</a>
        </div>
      </div>
    )
  }
}
