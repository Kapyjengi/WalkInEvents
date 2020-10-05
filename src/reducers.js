import { combineReducers } from 'redux'
import GetToday from './components/GetToday'
import GetTagList from './components/GetTagList'

//rootReducer = combineReducers({})
let initialState = {
    range: 3,
    chosenTags: [],
    allTags: GetTagList(),
    filteredEvents: [],
    allEvents: [],
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
            // We create new array of tags which are not the removed tag
            let newTags = state.chosenTags.filter(tag => tag != action.tag)
            return Object.assign({}, state,
                { chosenTags: [newTags] })
        case 'SET_CHOSEN_TAGS':
            return Object.assign({}, state,
                { chosenTags: action.tags })

        // TIME
        case 'SET_TIME_NOW':
            return Object.assign({}, state,
                { timeNow: action.time })

        default:
            return initialState
    }
}


/* const rootReducer = combineReducers({
    firstReducer
}) */

export default rootReducer