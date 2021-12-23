import '../index.css';

function ClassCard(props){
    return(
        <div>
        <div class=" transition ease-in-out  delay-150 group block bg-gray-300 max-w-xl h-max  rounded-lg p-6 bg-whitering-1 ring-gray-900/5 shadow-lg space-y-3 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 hover:ring-sky-500 duration-700">
        <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 group-hover:text-white text-sm font-semibold">
            {props.className}
            </h3>
        </div>
        <p class="text-gray-500 group-hover:text-white text-sm">
        What the class is about?<br/>
            {props.text}
        </p>
        <p class="text-gray-500 group-hover:text-white text-sm">
        Languages and Techonologies Used<br/>
            {props.techs}
            </p>
        </div>
        </div>
    );
}

export default ClassCard;