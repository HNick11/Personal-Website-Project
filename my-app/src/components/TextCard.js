import '../index.css';
import GitHubButton from './GitHubButton';

function TextCard(props){
return (
    <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-blue-600">
    <img class="w-64" src={props.photo} alt="Test photo"></img>
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.title}</div>
    <p class="text-gray-700 text-base">
      {props.text}
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag3}</span>
    <GitHubButton link={props.link} title={props.title}/>
    </div>
</div>
    </div>
);
}

export default TextCard;