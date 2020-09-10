import Sort from './Sort'

// events and selectedTags are both arrays
// an event has an array of tags in event.tags

//TODO: SearchByTag(events, selectedTags): get selectedTags array as prop instead of hard coded
export default function SearchByTag(events) {
    let selectedTags = ["Kuvataide","Muotoilu","Elokuvat","Kuvataide","Musiikki","Tanssi","Teatteri"]
    let filtered = [];


    // for each event, if a selected tag is among the event tags, the event passes
    events.forEach(event => {
        if (includesTag(event)) {
            filtered.push(event)
        }
    })

    // checks if an event tag is among selectedtags. Returns true if it does include 
    function includesTag(event) {
        let intersection = event.tags.filter(x => selectedTags.includes(x))

        // if intersection-array has elements, there is a common tag. Return true
        if (intersection.length != 0) {
            return true
        } else {
            return false
        }

    }



    return filtered
}
