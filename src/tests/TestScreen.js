import React, { useState, useEffect } from 'react';
import {useStore, useDispatch, connect} from 'react-redux'
import {addTag, removeTag, setTags} from '../GlobalStore/tagActions'

export default function TestScreen() {
    const store = useStore()
    connect()
    console.log('Running redux tests')
    console.log(store.getState())
    //store.dispatch(firstReducer('ADD_TAG','testitagi'))
    //store.dispatch(addTag('testitagi'))
    store.dispatch({type: 'ADD_TAG', tag: 'uusitagi1'})
    //store.dispatch(addTag('uusitagi2'))
    console.log(addTag('uusitagi2'))
    store.dispatch(addTag('uusitagi2'))
    store.dispatch(removeTag('Testitagi1'))
    console.log('state on', store.getState())
    store.dispatch(setTags(['SetTag1', 'SetTag2', 'SetTag3']))
    console.log(store.getState().chosenTags)
    return (
        "Tests here"
    )
    
}