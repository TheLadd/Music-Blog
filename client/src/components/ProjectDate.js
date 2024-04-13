export default function ProjectDate({ date }) {
    if (date === null || date === undefined) {
        return null
    }

    const intToMonth = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    
    const myDate = new Date(date)
    const projectMonth = intToMonth[ myDate.getMonth() ]
    const projectYear = myDate.getFullYear()

    return `${projectMonth} ${projectYear} | `
}