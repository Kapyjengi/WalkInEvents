import { combineReducers } from 'redux'
import GetToday from './LogicalFunctions/GetToday'
import GetTagList from './LogicalFunctions/GetTagList'

//rootReducer = combineReducers({})
/* // Jatkossa ehkä tarvittavia kenttiä: 
searchLocation, 

*/
let initialState = {
    range: 1,
    chosenTags: [],
    allTags: GetTagList(),
    filteredEvents: [],
    allEvents: [],
    // latitude: ja  longitude: 
    userLocation: {},
    selectedTime: {},
    timeNow: GetToday(),
    selectedFilters: {
        timeFilter: true,
        tagFilter: true,
        locationFilter: true
    }
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TAG':
            // Yhdistetään kolme objectia: tyhjä objecti, nykyinen state ja
            // tagilista, jossa myös uusi tagi
            return Object.assign({}, state,
                { chosenTags: [...state.chosenTags, action.tag] })

        case 'REMOVE_TAG':
            // Create new array of tags which are not the removed tag
            let newTags = state.chosenTags.filter(tag => tag != action.tag)
            return Object.assign({}, state,
                { chosenTags: [newTags] })

        case 'SET_CHOSEN_TAGS':
            return Object.assign({}, state,
                { chosenTags: action.tags })

        // Time
        case 'SET_TIME_NOW':
            return Object.assign({}, state,
                { timeNow: action.time })

        case 'SET_SELECTED_TIME':
            return Object.assign({}, state,
                { selectedTime: action.selectedTime })

        // Location
        case 'SET_USER_LOCATION':
            return Object.assign({}, state,
                { userLocation: action.location })

        case 'SET_LOCATION_RANGE':
            return Object.assign({}, state,
                { range: action.range })

        // Events
        case 'SET_ALL_EVENTS':
            return Object.assign({}, state,
                { allEvents: action.allEvents })

        case 'SET_FILTERED_EVENTS':
            return Object.assign({}, state,
                { filteredEvents: action.filteredEvents })

        default:
            return initialState
    }
}


/* const rootReducer = combineReducers({
    firstReducer
}) */

export default rootReducer