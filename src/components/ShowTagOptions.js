import React, { Component, useState } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import GetTagList from './GetTagList';




export default function ShowTagOptions() {
    const animatedComponents = makeAnimated();

    const options = GetTagList();
    const [selected, setSelected] = useState([])
    tagSelected = (tag) => {

    }

    return (
            <Select
                closeMenuOnSelect={false}
                options={options}
                components={animatedComponents}
                isMulti
                onChange={this.tagSelected}
                
            />
    )
}