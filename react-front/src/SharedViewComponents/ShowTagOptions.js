import React, { createRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import GetTagList from '../LogicalFunctions/GetTagList';
import SearchByTag from '../LogicalFunctions/SearchByTag'
import { useStore, useDispatch, connect, useSelector } from 'react-redux'
import { setTags } from '../GlobalStore/TagActions'
import store from '../GlobalStore/Store'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'


export default function ShowTagOptions() {

    const options = useSelector(state => state.allTags)
    const dispatch = useDispatch()
    const [uselessState, setUselessState] = useState(0)

    //console.log(options)

    function boxChecked(event) {
        //console.log(event.target.checked)
        let tagID = options.findIndex(tag => tag.categoryTitle == event.target.id)
        let tagsCopy = options
        tagsCopy[tagID] = {...tagsCopy[tagID], isChecked: event.target.checked}
        dispatch(setTags(tagsCopy))
        //console.log(event.target.id)
        setUselessState(uselessState+1)
    }

    function getTagStatus(tag) {
        return tag.isChecked
    }
    
    return (
        <div>
            <Form>
                {options.map((tag) => (
                    <div key={tag.categoryTitle} className="mb-3">
                        <Form.Check
                            type={"checkbox"}
                            id={tag.categoryTitle}
                            label={tag.categoryTitle}
                            onChange={boxChecked}
                            checked={getTagStatus(tag)}
                            //onClick={boxChecked}
                        />
                    </div>
                ))}
            </Form>
        </div>
    )
}