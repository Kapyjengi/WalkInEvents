import React from 'react'
import AboutView from '../About'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container = null;

beforeEach(() => {
    // luodaan dom-elementti
    container = document.createElement("div");
    // johon testi renderöidään
    document.body.appendChild(container);
});

afterEach(() => {
    // testin jälkeen dom-elementti tyhjennetään
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('About', () => {
    it('renders the correct content with correct header', () => {
        act(() => {
            render(<AboutView />, container)
        })
        // about sivu renderöidään kokonaisuudessaan divin sisään
        const AboutHeader = "About Walk-In-Events"
        expect(container.textContent).toContain(AboutHeader)
    })
})