import github from '../images/github.png'
import soundcloud from '../images/soundcloud.png'

export default function Footer() {
    return (
        <footer>
            <a>
                <img src={github} />
            </a>
            <a>
                <img src={soundcloud} />
            </a>
        </footer>
    )
}