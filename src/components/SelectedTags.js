import React, { createRef, useState } from 'react';
import Select from 'react-select';

// This function keeps track of the tags that are selected, so that we can call this function from anywhere
// to update selected tags, call with tagArray as parameter
// to get tags, call without parameter

export default function SelectedTags(tagArray){
    let incomingArray = tagArray
    let selected =[]
    if (incomingArray === undefined) {
        //console.log('Tags returned')
        return selected
    } else {
        selected = tagArray
        //console.log("Tagged Array Changed")
        console.log(selected)
    }
}