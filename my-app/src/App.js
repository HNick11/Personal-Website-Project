import './index.css';
import NavCard from './components/NavCard';
import { Link } from 'react-router-dom';


function App() {
  //TODO Add more stuff to this page
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
    <div class="grid place-items-center h-screen">

    <p>Hi! My name is Nicholas Heleta, I am a Computer Science student in my third year of study at the University of Saskatchewan.<br></br>
      Click the buttons below to learn about my projects, the classes I've taken, and some more info about me!
    </p>
    
    <div class="px-2">
    <div class="flex -mx-2">
      <div class="w-1/3 px-2">
        <Link to="/projects">
      <NavCard title="Projects" text="Click here to see some of my projects!"/>
      </Link>
      </div>
      <div class="w-1/3 px-2">
        <Link to="/about"><NavCard title="About me" text="Click here to learn more about me!"/></Link>
      </div>
      <div class="w-1/3 px-2">
      <Link to="/classes"><NavCard title="Classes" text="Click here to see the classes I've taken!"/></Link>
      </div>
      
    </div>
    </div>

    </div>
    </div>
  );
}

export default App;
