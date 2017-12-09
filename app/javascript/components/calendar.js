import React, {Component} from 'react'

export default class Calendar extends Component {

  componentWillMount() {
    fetch(`https://www.googleapis.com/calendar/v3/calendars/echogems2017@gmail.com/events`).then((rawResponse)=>{
      console.log(rawResponse)
      // rawResponse.json() returns a promise that we pass along
      return rawResponse.json()
    })
  }

  render() {
    return (
      <div>this is a calendar</div>
    )
  }
}
