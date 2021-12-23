import './index.css';
import TextCard from './components/TextCard';
import test from './test.png';
import { Link } from 'react-router-dom';


function Projects(){
    // TODO Add github links
    return (
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
            <TextCard photo={test} text="Sample text for dice card" tag1="Dice 1" tag2="Dice 2" tag3="Dice 3"/>
            
        </div>
        </div>
    );
}


export default Projects;