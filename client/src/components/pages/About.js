import Nav from '../Nav'
import Footer from '../Footer'

export default function About() {
    return (
        <>
            <Nav activePage={2} />            
            <div className='AboutDescription'>
                <p>
                    My name is Owen, and I make things. I built this website to share my thoughts about music and to display the software projects 
                    I've worked on. Here's some more about me, if you're curious:
                </p>
                <p>
                    One of the passions I most pursue most actively is programming! I began programming in high school with a web development and
                    a game development class. I had no idea what I was doing, but discovering what I could create with my keyboard was so fun! I 
                    decided to pursue programming in my higher education and I've been learning ever since. I graduated from the University
                    of California, Riverside with my B.S. in computer science in early 2024, and I'm eager to dive further into the world of software
                    development and continue learning!
                </p>
                <p>
                    My other dominant passion is music. My dad fostered a love for music when I was young, and the friends of my youth encouraged me
                    to nurture that love. I've played a variety of instruments in my life, starting with various percussive instruments 
                    (including the Konga, Timpani, Marimba, and Vibraphone). I've since jumped from instrument to instrument, learning the piano 
                    and bass guitar before fixating on the guitar in 2019. The busyness of college put a lot of my musical projects on hold, but as a 
                    recent graduate I hope to dive back into these soon! 
                </p>
            </div>
            {/* Resume is here somewhere */}
            {/* Link to GitHub? */}
            <Footer />
        </>
    )
}