import React from 'react'
import AboutView from '../About'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('About', () => {
    it('renders the component with correct header', () => {
        act(() => {
            render(<AboutView />, container)
        })
        const AboutHeader = "About Walk-In-Events"
        expect(container.textContent).toContain(AboutHeader)
    })
})