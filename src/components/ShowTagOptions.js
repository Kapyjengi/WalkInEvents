import React, { Component } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';




export default function ShowTagOptions() {
    const animatedComponents = makeAnimated();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]



    return (
            <Select
                closeMenuOnSelect={false}
                options={options}
                components={animatedComponents}
                isMulti
            />
    )
}