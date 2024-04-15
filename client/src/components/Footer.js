import github from '../images/github.png'
import soundcloud from '../images/soundcloud.png'

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/TheLadd'>
                <img src={github} />
            </a>
            <a href='https://soundcloud.com/user-6222342?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
                <img src={soundcloud} />
            </a>
        </footer>
    )
}