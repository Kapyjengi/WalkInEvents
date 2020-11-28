import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
    render,
    fireEvent,
    cleanup
} from '@testing-library/react'

import {
    NavBar,
    NavLinks
} from '../NavBar'
import GetTagList from '../../LogicalFunctions/GetTagList'

afterEach(cleanup)

const startingState = {
    allTags: GetTagList(),
    filteredEvents: [],
}

function reducer(state = startingState) { }

function renderWithRedux(
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('NavBar', () => {
    it('renders with redux', () => { renderWithRedux(<NavBar />) })
    it('brand is named correctly', () => {
        const { getByText } = renderWithRedux(<NavBar />)
        getByText('WalkInEvents')
    })
    test('allows user to click brand link', () => {
        const { getByText } = renderWithRedux(<NavBar />)
        fireEvent.click(getByText('WalkInEvents'))
    })
})

describe('NavLinks', () => {
    test('renders with redux', () => { renderWithRedux(<NavLinks />) })
    test('renders correctly', () => { render(<NavLinks />) })
    it('are named correctly', () => {
        const { getByText } = renderWithRedux(<NavLinks />)
        getByText('Events')
        getByText('About')
        getByText('Instructions')
    })
    test('allows user to click events link', () => {
        const { getByText } = renderWithRedux(<NavLinks />)
        fireEvent.click(getByText('Events'))
    })
    test('allows user to click about link', () => {
        const { getByText } = renderWithRedux(<NavLinks />)
        fireEvent.click(getByText('About'))
    })
    test('allows user to click instructions link', () => {
        const { getByText } = renderWithRedux(<NavLinks />)
        fireEvent.click(getByText('Instructions'))
    })
})




