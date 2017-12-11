import React, {Component} from 'react'
import MatchCard from '../components/matchcard'

export default class MatchesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: this.props.matches
    }
    console.log(this.state.matches)
  }


  render(){
    var matches = this.state.matches.map(function(el, i){
      return (
        <MatchCard key={i} id={el.id} location={el.location} timeslot={el.timeslot} user2_id={el.user2_id} user_id={el.user_id} />
      )
    })

    return(
      <div>
      {matches}
        <div id = "new">
          <a href="/matches/new">New match</a>
          </div>
      </div>
    )
  }
}
