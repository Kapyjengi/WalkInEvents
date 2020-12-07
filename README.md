![CI/CD](https://github.com/Kapyjengi/WalkInEvents/workflows/Build%20and%20test%20React-client,%20build%20and%20deploy%20Node.js%20to%20Azure%20Web%20App/badge.svg)

![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)
# WalkIn-Events

> explore the events near you

<p>
<img alt="Walk-In Events" src="https://i.imgur.com/qCMgqDu.png">
</p>

## Description

Walk-in Events was made to answers the question "What events in Helsinki could I go to right now?"

The project provides a way to view events from the [Helsinki Open API](http://open-api.myhelsinki.fi/). Events are filtered and then displayed as markers on a map and as a list. The filters we use are: time, distance to user, topic(tags) and when using the search-field, by name of event.

## Getting started

Follow these steps to run our application locally!

### Prerequisities

Be sure you are running node and npm on your computer.

Open command-line tool, f.e. powershell and type `node -v` and then `npm -v`

<img alt="powershell - npm and node versions" src="https://i.imgur.com/z63jbCR.jpeg">

If you don't have node and/or npm installed on you computer just follow [these steps](https://treehouse.github.io/installation-guides/windows/node-windows.html) and then come back!

### Installation

1. Clone
```
$ git clone https://github.com/Kapyjengi/WalkInEvents.git
```
2. Install npm packages in \WalkInEvents
```
$ npm install
```
3. Install npm packages in \WalkInEvents\react-front
```
$ npm install
$ npm install -g nodemon
```
4. Run build in \WalkInEvents\react-front
```
$ npm run dev
```
> Visit localhost:3001/api/events to be sure the the server is working correctly

### Run tests
```
$ npm run test
```

## How to use our app?

On starting the application, it asks the location of the user. If the user grants access to the location information, then the application shows the location on a map. Otherwise the application will show the user on a default location, which is the center of Helsinki. By default the application will display events on a 3 km radius and today.

> LISÄÄ KUVA ALOITUSNÄKYMÄSTÄ

Our application has a number of ways for modifying the search results. Radius can be changed from the slider beneath the map, also the date picker is found underneath the map. There is also a sidebar for filters from which the different tags can be changed.

> LISÄÄ KUVA, JOISSA RANGESLIDER JA TAGIT ON KOROSTETTUINA

If the preliminary search parameters can't locate any events, use the mentioned filtering methods to find events. The events are shown in the map through pins. By clicking the pin, the events information pops up.

> LISÄÄ KUVA KARTAN POPUPISTA

All the events can be seen on the list tab aswell as the map tab. There is a search bar on the list tab with which you can filter from the events shown by their names.

> LISÄÄ KUVA LISTANÄKYMÄSTÄ JOSSA NÄKYY MYÖS HAKUKENTTÄ

## Modifying the code to take other event data

The project takes JSON data from an open API. If you want to use this as a base for your own project, the data you use should have **at least** these fields: 

- Name/Description
- Location(coordinates, or use a geocoding tool with an address)
- Start time

For the lightest implementation, you could build a function that converts your data into our format in between it being fetched and being saved to redux-store. For each field youre lacking in your data, either disable the functionality in the code or generate empty fields.

### The structure of the relevant fields in the event-object we use from Helsinki-API:

```
{
    "name": {
        "fi": "<Finnish>", 
        "en": "<English>",
        "sv": "<Swedish>"
    },
    "info_url": "<Link to event organizers page>",
    "location": {
        "lat": 60,
        "long": 25,
        "streeet_address": "",
        "postal_code": "",
        "locality": ""
    },
    "description": {
        "intro": "<Title>",
        "body": ""
    },
    "tags": [
        {
            "name": "<Tag name, we use these for filtering>"
        }
    ],
    "event_dates": {
        "starting_day": "2020-11-07T12:00:00.000Z",
        "ending_day": "2020-11-07T12:00:00.000Z"
    }
}

```

The tag categories were made by hand and are hardcoded into LogicalFunctions/GetTagList.js. They probably wont be useful for your data, but you can use it as a base for your own division.

Youll find our data-fetch functions in the Services-folder. For changing the url you'll also need to edit "proxy"-field in package.json.

## Project group
This project was part of Software Project II -course in Haaga-Helia University of Applied Sciences.

- [Anton Javits](https://github.com/AntonJavits)
- [Petja Koivu](https://github.com/bgh312)
- [Olli Kuikka](https://github.com/pineappletea)
- [Sami Kulonpää](https://github.com/samikul)
- [Päivi Lampinen](https://github.com/PaiviL)
- [Jukka Lehikoinen](https://github.com/JukkaLehikoinen)

## Licence

Helsinki Open API [terms of use](http://open-api.myhelsinki.fi/terms).

![CC BY-SA 4.0](https://i.creativecommons.org/l/by/4.0/88x31.png)

## Domain

[WalkIn-Events](https://wie-dev.azurewebsites.net/)