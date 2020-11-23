import store from '../GlobalStore/Store'


// Takes input of events array. 
// Ouputs array of events that include one of selected tags.

export default function SearchByTag(events) {

    const selectedTagsInCategories = store.getState().allTags


    let selectedTags = []
    selectedTagsInCategories.forEach(tagObject => {
        if (tagObject.isChecked) {
            selectedTags = selectedTags.concat(tagObject.tags)
        }
    })
    let filtered = []

    // if no tags are selected, return empty list
    if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        return []
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
