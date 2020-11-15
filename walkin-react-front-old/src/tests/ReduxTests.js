import React, { useState, useEffect } from 'react';
import {useStore, useDispatch} from 'react-redux'

export default function ReduxTests() {
    const store = useStore()

    console.log('Running redux tests')
    
}