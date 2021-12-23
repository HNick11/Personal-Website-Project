import '../index.css';
import logo from '../GitHub-Mark.png';

function GitHubButton(props){
    return(
        <div>
            <a href={props.link}>
                <button class=" inline-block w-full rounded-full bg-purple-600 text-white pr-10 pt-1 px-2">
                    <img class='float-left ml-4 pb-1 w-8 h-8'src={logo}></img>
                    GitHub repository for {props.title}
                    </button>
            </a>
        </div>
    );
}

export default GitHubButton;