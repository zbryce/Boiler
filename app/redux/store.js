const init = {
    team: 'No Team'
}

const ADD_TEAM = 'ADD_TEAM'

export const newTeamCreator = (team) => {
    return {
        type: ADD_TEAM,
        team
    }
}

const reducer = (state = init, action) => {
    switch(action.type){
        case ADD_TEAM:
            return {
                team: action.team
            }
        default: 
            return state
    }
}

export default reducer