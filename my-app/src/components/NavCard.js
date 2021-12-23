import '../index.css';

function NavCard(props){
    return (
    <div>
    <a href="#" class="group block bg-gray-300 max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-gray-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <div class="flex items-center space-x-3">

        <h3 class="text-gray-900 group-hover:text-white text-sm font-semibold">{props.title}</h3>
        </div>
    <p class="text-gray-500 group-hover:text-white text-sm">{props.text}</p>
    </a>
    </div>
    );
}

export default NavCard;