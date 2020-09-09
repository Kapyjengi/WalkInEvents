
export default function Sorting(filtered) {

    const changeArrays = (filtered, x, y) => {
        let temp = filtered[x];
        filtered[x] = filtered[y];
        filtered[y] = temp;
      };

    for (let i = 0; i < filtered.length-1; i++) {
        for (let x = 0; x < filtered.length-i-1; x++) {
             if (filtered[x].event_dates.starting_day > filtered[x+1].event_dates.starting_day) {
                changeArrays(filtered,x,x+1)     
            } 
        }        
    }

    return filtered

}