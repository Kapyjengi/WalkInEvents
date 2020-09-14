import Sort from './Sort'
import SelectedTags from './SelectedTags'


// an event has an array of tags in event.tags

//TODO: SearchByTag(events, selectedTags): get selectedTags array as prop instead of hard coded
export default function SearchByTag(events) {    
    //console.log('SearchByTags')
    //console.log(events)

    let filtered = [];
    let selectedTags = SelectedTags()
    //console.log("tags in SearByTag")
    //console.log(selectedTags)
    let selectedArray = []
    //console.log(selectedTags)
    selectedTags.forEach(element => console.log(element))
    selectedTags.forEach(element => console.log(element.value))
    //console.log(selectedTags)
    // if no tags are selected, return unaltered list
    if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        return events
    }

    // for each event, if a selected tag is among the event tags, the event passes
    events.forEach(event => {
        if (includesTag(event)) {
            filtered.push(event)
        }
    })

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

    //console.log("Filtered list")
    //console.log(filtered)



    return filtered
}
