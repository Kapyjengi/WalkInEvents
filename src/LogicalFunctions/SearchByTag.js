import Sort from './SortEvents'
import { useStore, useDispatch, connect, useSelector } from 'react-redux'


// an event has an array of tags in event.tags

//TODO: SearchByTag(events, selectedTags): get selectedTags array as prop instead of hard coded
export default function SearchByTag(events) {

    console.log("Filtering by tag")
    const dispatch = useDispatch()
    const selectedTagsInCategories = useSelector(state => state.allTags)

    let selectedTags= []
    selectedTagsInCategories.forEach(tagObject => {
        selectedTags.concat(tagObject.tags)
        console.log('No. of tags: ', selectedTags.length)
    })
    //console.log('Filtering with', selectedTags)
    let filtered = []
    // if no tags are selected, return unaltered list
    if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        console.log("returning unaltered events")
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

    return filtered
}
