export const setCurrentPage = (activeIndex) => {
    // console.log(`setCurrentPage(${activeIndex}`);
    const pages = document.body.getElementsByTagName('nav')[0].getElementsByTagName('li')
    
    for (let i = 0; i < 3; i++) {
        if (i == activeIndex) {
            pages[i].className = ''
        }
        else {
            pages[i].className = 'activePage'
        }
    }
}