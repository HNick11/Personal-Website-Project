import './index.css';
import test from './test.png';

function App() {
  return (
    <div class="grid place-items-center h-screen">
        <h1 className="text-3xl font-bold underline">
      Nicholas Heleta's Portfolio Website
    </h1>

    {/*Start of card here*/}
    <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-blue-600">
    <img class="w-full" src={test} alt="Test photo"></img>
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dice</div>
    <p class="text-gray-700 text-base">
      Test info for a card type approach
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tag 1</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tag 2</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tag 3</span>
  </div>
</div>
{/*Start of project card here */}
<a href="#" class="group block bg-gray-300 max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-gray-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">

    <h3 class="text-gray-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>

    </div>
  );
}

export default App;
