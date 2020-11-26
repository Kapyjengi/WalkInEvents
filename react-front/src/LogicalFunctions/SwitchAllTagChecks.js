import store from '../GlobalStore/Store'
import {setTags} from '../GlobalStore/TagActions'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'

export default function SwitchAllTagChecks() {
    const state = store.getState()
    const tagCategories = state.allTags

    // If the first option is checked, uncheck all. If unchecked, check all.
    if (tagCategories[0].isChecked) {
        tagCategories.forEach(element => {
            element.isChecked = false
        });
    } else {
        tagCategories.forEach(element => {
            element.isChecked = true
        });
    }

    store.dispatch(setTags(tagCategories))
    RunEventFilters()

  }