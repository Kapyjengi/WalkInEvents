![CI/CD](https://github.com/Kapyjengi/WalkInEvents/workflows/Build%20and%20test%20React-client,%20build%20and%20deploy%20Node.js%20to%20Azure%20Web%20App/badge.svg)




# WalkIn-Events


> explore the events near you


<p>
<img alt="Walk-In Events" src="https://imgur.com/a/yNlZI6U">
</p>


## Description

Walk-in Events was made to answers the question "What events in Helsinki could I go to right now?"

The project provides a way to view events from the [Helsinki Open API](http://open-api.myhelsinki.fi/). Events are filtered and then displayed as markers on a map and as a list. The filters we use are: time, distance to user, topic(tags) and when using the search-field, by name of event.


### table of contents


1. tarvitaanko
2. me
3. tätä?



## getting started


just follow these simple steps to run our project!



### prerequisities



Be sure you are running node and npm on your computer.

Open command-line tool, f.e. powershell and type `node -v`
and then `npm -v`

> the output should be something like this

tähän_tulee_kuva_powershellistä.png

> if not

just follow [these steps](https://treehouse.github.io/installation-guides/windows/node-windows.html) and then come back!



### installation


> first you have to clone this repo to your local machine
```
$ git clone https://github.com/Kapyjengi/WalkInEvents.git

```

> and then you have to install the npm packages:
1) in WalkInEvents\walkin-node-backend
```
$ npm install
```
2) in WalkInEvents\react-front
```
$ npm install
```
3) Install global Nodemon
```
npm install -g nodemon
```
> after that you're good to go! Open folder "react-front" and start server in background, while react app is running at localhost:3000. To check, if server is working, visit localhost:3001/api/events
```
$ npm run dev
```

## Deployment to Heroku

> From "\walkin-node-backend" run 

```
$ npm run build:ui
```
> From repo root run
```
$ heroku login
$ git subtree push --prefix walkin-node-backend heroku master
```

## how to use our web-app?

tähän tehdään hienot käyttöohjeet kuvineen ja sepustuksineen




### npm packages that we have used in our project
```
npm install leaflet
npm install react-leaflet
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install moment
```
localhost linkki

## How to use our app?

miten sovellusta käytetään?
tähän olisi hyvä lisätä screenshotteja projektin eri käyttövaiheista.

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


## project group


tässä ehkä jotain liirumlaarumia
halutessa linkitys `#` merkin tilalle

- [Anton Javits](http://#)
- [Petja Koivu](http://xd)
- [Olli Kuikka](https://github.com/pineappletea)
- [Sami Kulonpää](http://#)
- [Päivi Lampinen](http://#)
- [Jukka Lehikoinen](http://#)



## lisenssi

minkä lisenssin alla projekti on?



## Domain


Currently we have a redirect from [walkingevents.tech](http://walkinevents.tech/) to our [heroku build](https://walk-in-events.herokuapp.com/).



---
githubin omat readme.md dokumentointiohjeet löytyy [täältä](https://guides.github.com/features/wikis/)

perustoimintojen kirjoittamisen ja muotoilun ohjeet löytyy [täältä](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

tässä vois olla aika passeli [esimerkkipohja](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
---
