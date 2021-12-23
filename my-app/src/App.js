import './index.css';
import ReactDOM from 'react-dom';
import test from './test.png';
import NavCard from './components/NavCard';
import TextCard from './components/TextCard';


function App() {
  return (
    <div class="grid place-items-center h-screen">
        <h1 className="text-3xl font-bold underline">
      Nicholas Heleta's Portfolio Website
    </h1>

    {/*Start of card here*/}
    <TextCard photo={test} text="Sample dice text box" tag1="Tag 1" tag2="Tag 2" tag3="Tag 3"/>
  
    <NavCard title="Test tile" text="Sample text box"/>

    </div>
  );
}

export default App;
