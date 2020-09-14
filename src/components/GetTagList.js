
// This function is to control the tag options given to user
export default function GetTagList(){
    //let tagArray = ["Kuvataide","Muotoilu","Elokuvat","Kuvataide","Musiikki","Tanssi","Teatteri"]
    let tagArray = [
        {value:'Teatteri', label: 'Teatteri'},
        {value:'Tanssi', label: 'Tanssi'},
        {value:'General', label: 'General'}
    ]
    return tagArray
}