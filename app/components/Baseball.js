import React, { Component } from 'react'
import { newTeamCreator } from '../redux/store'
import { connect } from 'react-redux'
export class Baseball extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: 'Umpires'
        }
    }
    render() {
        return (
            <div>
              <h1 id='baseball'>Batter Up!</h1>  
            </div>
        )
    }
}

const mapDispatchToProps = (props) => {
    return {
        addTeam: () => dispatch(newTeamCreator(team))
    }
}

const mapToState = (state) => {
    return {
        team: state.team
    }
}
export default connect(mapToState, mapDispatchToProps)(Baseball)


