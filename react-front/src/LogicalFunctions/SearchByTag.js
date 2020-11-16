import { useSelector } from 'react-redux'


// Takes input of events array. 
// Ouputs array of events that include one of selected tags.

export default function SearchByTag(events) {
    // tätä vois korjata?

    const selectedTagsInCategories = useSelector(state => state.allTags)
    

    

    let selectedTags= []
    selectedTagsInCategories.forEach(tagObject => {
        if(tagObject.isChecked) {
        selectedTags = selectedTags.concat(tagObject.tags)
    }
    })
    console.log('Tags: ', selectedTags)
    let filtered = []

    // if no tags are selected, return unaltered list
    if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        return events
    }

    // for each event, if a selected tag is among the event tags, the event passes

    if (events != undefined) {
    events.forEach(event => {
        if (includesTag(event)) {
            filtered.push(event)
        }
    })
}

    // checks if an event tag is among selectedtags. Returns true if it does include 
    function includesTag(event) {
        let includes = false
        if (event.tags.some(tag => {
            return selectedTags.includes(tag.name)
        })) {
            includes = true
        }
        return includes

    }

    return filtered
//

}
