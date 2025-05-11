import { MONTHS, DAYS } from '../utils/constants.json'

const dateBuilder = (date) => {

    let day = DAYS[date.getDay()];
    let d = date.getDate(); 
    let month = MONTHS[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${d} ${month} ${year}`
}

export default dateBuilder;