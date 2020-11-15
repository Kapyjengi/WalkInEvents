import React, { createRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import GetTagList from './GetTagList';
import SelectedTags from './SelectedTags'
import SearchByTag from './SearchByTag'
import {useStore, useDispatch, connect} from 'react-redux'
import {setTags} from '../actions/tagActions'

// {value:'Teatteri', label: 'Teatteri'}

export default function ShowTagOptions(props) {
    const store = useStore()
    connect()

    
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