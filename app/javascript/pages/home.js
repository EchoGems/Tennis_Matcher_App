import React, {Component} from 'react';
import Nav from 'pages/nav.js'

export default class Home extends Component {

    render() {
        return (
            <div className={"admin"}>
                <Nav />
                <div>You found the home page</div>
            </div>
        )
    }
}
