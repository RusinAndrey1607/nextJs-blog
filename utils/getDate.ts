
const monthNamesList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


export const getDate = (dateString: string) => {
    const date = new Date(dateString)
    const result = `${monthNamesList[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return result

}