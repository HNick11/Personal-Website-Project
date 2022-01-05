import './index.css';
import TextCard from './components/TextCard';
import timer from './fb-stopwatch2.png';
import xv6 from './xv6.PNG';
import bot from './discord.png';
import sitescreenshot from './site-homepage.PNG';
import { Link } from 'react-router-dom';


function Projects(){
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
        <p>Here are some of my projects from various classes or side projects!</p>
        <br></br>
        <div class="flex flex-row">
            <div class="px-2"><TextCard photo={sitescreenshot} title="Portfolio Website" text="This is a website I created to showcase my webdev skills and show off my portfolio of other projects"
            tag1="React" tag2="TailwindCSS" tag3="JSX" link="https://github.com/HNick11/Personal-Website-Project"/></div>
            <div class="px-2"><TextCard photo={xv6} title="XV6 Scheduler" text="This is a class assignment for creating a new process scheduler in xv6 operating system"
            tag1="XV6" tag2="C" tag3="Multithreaded" link="https://github.com/HNick11/CMPT332Scheduler"/></div>
            <div class="px-2"><TextCard photo={timer} title="TimerTask" text="This is a class assignment for creating a timer system from a given task description"
            tag1="Java" tag2="JavaFX" tag3="Design" link="https://github.com/HNick11/CMPT-381-Assignment-2"/></div>
            <div class="px-2"><TextCard photo={bot} title="Question Discord Bot" text="This is a side project, my friends and i are working on to deliever a question of the week over discord"
            tag1="Node" tag2="Docker" tag3="Discord.js" link="https://github.com/Holden-bot/discord-bot"/></div>
        </div>


        </div>
    );
}


export default Projects;