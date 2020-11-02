import React, { createRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import GetTagList from '../LogicalFunctions/GetTagList';
import SearchByTag from '../LogicalFunctions/SearchByTag'
import {useStore, useDispatch, connect} from 'react-redux'
import {setTags} from '../GlobalStore/TagActions'
import store from '../GlobalStore/Store'


export default function ShowTagOptions(props) {
    
    const animatedComponents = makeAnimated();
    // Muutos array[string] => array{value: string, label: string}
    const options = store.getState().allTags;
    const tagSelected = (arrayOfSelectedTags) => {
        store.dispatch(setTags(arrayOfSelectedTags))
        console.log(store.getState().chosenTags)
    }

    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                options={options}
                components={animatedComponents}
                isMulti
                onChange={tagSelected}
            />
        </div>
    )
}