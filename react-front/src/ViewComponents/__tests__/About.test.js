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
    it('renders the correct content', () => {
        act(() => {
            render(<AboutView />, container)
        })
        // about sivu renderöidään kokonaisuudessaan divin sisään
        // ja verrataan saatua dataa toBe()-funktioon kovakoodattuun dataan
        expect(container.textContent).toBe("About Walk-In-EventsWalk-In-Events on sovellus, joka näyttää käyttäjälle häntä lähellä olevia tapahtumia. Tapahtumat haetaan Helsinki Open APIsta. Tapahtumatietojen oikeuksien haltija on Helsingin kaupungin kanslia. Tiedoille on määritelty BY-lisenssi. Kyseinen sovellus on Haaga-Helian Ohjelmistoprojekti II -opintojaksolla Käpy-tiimin toteuttama ryhmätyö. Sovellus perustuu avoimeen lähdekoodiin. Repositoriomme on julkinen. Koodit ja tekninen dokumentaatio löytyvät GitHubista.Copyright (c) 2020 Walk-In-Events. v:0.1.1")
    })
})