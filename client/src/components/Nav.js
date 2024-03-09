export default function BlogNav({activePage}) {
    console.log(`activePage: ${activePage}`)
    function isActive(i) {
        console.log(i == activePage)
        return (i == activePage) ? "currentPage" : ""
    }

    return (
        <nav>
            <div>
                <h1>Owen Ribera</h1>
            </div>
            <ul>
                <li className={isActive(0)}>Portfolio</li>
                <li className={isActive(1)}>Blog</li>
                <li className={isActive(2)}>About</li>
            </ul>
        </nav>
    )
}