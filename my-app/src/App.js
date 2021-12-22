import './index.css';
import test from './test.png';

function App() {
  return (
    <div class="grid place-items-center h-screen">
        <h1 className="text-3xl font-bold underline">
      Nicholas Heleta's Portfolio Website
    </h1>
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
    </div>
  );
}

export default App;
