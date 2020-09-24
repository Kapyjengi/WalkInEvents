import React, { createRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import GetTagList from './GetTagList';
import SelectedTags from './SelectedTags'
import SearchByTag from './SearchByTag'


// {value:'Teatteri', label: 'Teatteri'}

export default function ShowTagOptions(props) {

    const animatedComponents = makeAnimated();

    const options = GetTagList();
    const tagSelected = (arrayOfSelectedTags) => {
        SelectedTags(arrayOfSelectedTags)
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