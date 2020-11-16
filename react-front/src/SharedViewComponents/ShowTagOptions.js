import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '../GlobalStore/TagActions';


export default function ShowTagOptions() {

    const options = useSelector(state => state.allTags)
    const dispatch = useDispatch()
    const [uselessState, setUselessState] = useState(0)

    function boxChecked(event) {
        let tagID = options.findIndex(tag => tag.categoryTitle == event.target.id)
        let tagsCopy = options
        tagsCopy[tagID] = {...tagsCopy[tagID], isChecked: event.target.checked}
        dispatch(setTags(tagsCopy))
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
                        />
                    </div>
                ))}
            </Form>
        </div>
    )
}