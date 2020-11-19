import store from '../GlobalStore/Store'

// Takes input of Event Array, gets keyword from store.
export default function SearchByName(events) {

    const state = store.getState()
    const keyWord = state.eventSearch.toString().toLowerCase();
    // console.log('haetaan ', keyWord)

    let filtered = events.filter(event => {
        let name=event.name.fi
        if (name === null) {
            name = event.name.sv
            if(name === null) {
                name = event.name.en
            }
        }
        //console.log("öpöp", name)
        return name.toLowerCase().toString().includes(keyWord)===true
    })
    

    return filtered

}
