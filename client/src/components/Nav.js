export default function BlogNav({activePage}) {
    function isActive(i) {
        return (i == activePage) ? "currentPage" : ""
    }

    function goTo(page) {
        const newPage = page

        return () => {
            console.log(newPage)
            window.location.assign(newPage)
        }        
    }

    return (
        <nav>
            <div>
                <h1>Owen Ribera</h1>
            </div>
            <ul>
                <li className={isActive(0)} onClick={goTo('portfolio')} id="portfolioBtn">Portfolio</li>
                <li className={isActive(1)} onClick={goTo('blog')} id="blogBtn">Blog</li>
                <li className={isActive(2)} onClick={goTo('about')} id="aboutBtn">About</li>
            </ul>
        </nav>
    )
}