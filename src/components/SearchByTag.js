import Sort from './Sort'

// events and selectedTags are both arrays
// an event has an array of tags in event.tags

//TODO: SearchByTag(events, selectedTags): get selectedTags array as prop instead of hard coded
export default function SearchByTag(events) {
    console.log(events)
    //let selectedTags = ["Kuvataide","Muotoilu","Elokuvat","Kuvataide","Musiikki","Tanssi","Teatteri"]
    let selectedTags = ["Tanssi", "General"]
    let filtered = [];


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

    console.log(filtered)



    return filtered
}
