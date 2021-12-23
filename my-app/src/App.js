import './index.css';
import test from './test.png';
import NavCard from './components/NavCard';
import TextCard from './components/TextCard';


function App() {
  return (
    <div class="grid place-items-center h-screen">
            
    <h1 class="w-full text-3xl text-white font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600">
      Nicholas Heleta's Portfolio Website
    </h1>

    <div class="px-2">
    <div class="flex -mx-2">
      <div class="w-1/3 px-2">
      <NavCard title="Projects" text="Click here to see some of my projects!"/>
      </div>
      <div class="w-1/3 px-2">
        <NavCard title="About me" text="Click here to learn more about me!"/>
      </div>
      <div class="w-1/3 px-2">
      <NavCard title="Classes" text="Click here to see some of the classes I've taken!"/>
      </div>
      
    </div>
    </div>
  
    <TextCard photo={test} text="Sample dice text box" tag1="Tag 1" tag2="Tag 2" tag3="Tag 3"/>
  
    </div>
  );
}

export default App;
