import './index.css';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div>
         <h1 class="w-full text-3xl underline text-white font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600">
                Nicholas Heleta's Portfolio Website
                <h2>
                    <div class="flex    flex-row">
                        <div    ><Link to="/">
                    <button class="rounded hover:bg-pink-600"> Home</button>
                    </Link></div>
                        <div class="px-2"><Link to="/about">
                    <button class="rounded hover:bg-pink-600"> About</button>
                    </Link> </div>
                        <div class="px-2"><Link to="/classes">
                    <button class="rounded hover:bg-pink-600"> Classes</button>
                    </Link> </div>
                    <div class="px-2"><Link to="/projects">
                    <button class="rounded hover:bg-pink-600"> Projects</button>
                    </Link> </div>
                    </div>  
                </h2>    
        </h1>
        <br></br>
        <div>
            <p>My name is Nicholas Heleta, and I am a third year Computer Science student at the University of Saskatchewan. I’m pursing my bachelor’s degree in Computer Science as well as a Minor in Mathematics. I fell in love with coding in high school, through our school’s robotics club as well as my computer science classes. Some of my other passions include video games, music and sports! </p>
        </div>
        </div>
    );

}

export default About;