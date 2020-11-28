import React from 'react'
import InstructionsView from '../InstructionsView'
import { render } from '@testing-library/react'

describe('Instructions', () => {
    it('renders correctly', () => {
        render(<InstructionsView />)
    })
    it('renders with correct header', () => {
        const { getByText } = render(<InstructionsView />)
        getByText("How to use")
    })
})

