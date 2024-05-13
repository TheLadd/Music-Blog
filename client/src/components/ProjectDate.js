export default function ProjectDate({ date }) {
    if (date === null || date === undefined) {
        return null
    }

    const intToMonth = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    
    const myDate = new Date(date)
    const projectMonth = intToMonth[ myDate.getMonth() ]
    const projectYear = myDate.getFullYear()

    return `${projectMonth} ${projectYear} | `
}