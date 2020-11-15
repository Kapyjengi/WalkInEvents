
// param is string
export function addTag(newTag) {
    return ({
        type: 'ADD_TAG',
        tag: newTag
    })
}
// param is string
export function removeTag(targetTag) {
    return ({
        type: 'REMOVE_TAG',
        tag: targetTag
    })
}
// param is array of all selected tags
export function setTags(tagArray) {
    return ({
        type: 'SET_CHOSEN_TAGS',
        tags: tagArray
    })
}