import './index.css';
import { Link } from 'react-router-dom';
import ClassCard from './components/ClassCard';

function Classes(){
return(

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
            <div class="flex justify-center">
            <p>This is a list of classes I've taken during my studies at the university of Saskatchewan that relate to the Computer Science field
            </p>
            </div>
            <br></br>
            <div class="flex flex-row justify-center space-x-4">
        <div class="flex-col justify-center space-y-4">
        

        <div class="flex justify-center">
        <ClassCard className="CMPT 332, Operating Systems Concepts" 
        text="This course taught and expanded upon the basic concepts of an operating system. Main topics discussed were: Processes and CPU scheduling, Memory, Concurrency and Multi-threading and File Systems."
         techs="C, XV6, Git"/>
        </div>

        <div class="flex justify-center">
            <ClassCard className="CMPT 353, Full Stack Web Developement"
        text="This course taught concepts on each level of full stack web developement. Subjects varied from containerization, front-end techonologies, servers, internet security and databases."
        techs="HTML5, CSS, Node.js, React, HTTPS, MYSQL, CouchDB, JavaScript"/></div>

        <div class="flex justify-center"><ClassCard className="CMPT 381, Introduction to Graphical Interfaces"
        text="This course taught about the design concepts behind graphical interfaces as well as how to implement them using JavaFX. Design topics such as
        design heuristics and prototyping were introduced."
        techs="Java, JavaFX, Git"/></div>
        
        </div>
        <div class="flex-col justify-center space-y-4">
        

        <div class="flex justify-center">
        <ClassCard className="CMPT 280, Intermediate Data Structures and Algorithms" 
        text="This course taught and expanded upon the basic concepts Data Structures and time analysis.Main topics discussed were: Lists and Cursors, Regression Testing, Abstract Data Types, Time Complexity, Trees, Dispensers, Dictionaries and Graphs."
         techs="Java, Git"/>
        </div>

        <div class="flex justify-center">
            <ClassCard className="CMPT 215, Introduction to Computer Organisation and Architecture"
        text="This course taught concepts on the low level and hardware end of computers. Subjects varied from basic architecture of a processor to basic assembly programs and logic gates."
        techs="Mips Assembly"/></div>

        <div class="flex justify-center"><ClassCard className="Math 266, Linear Algebra"
        text="This course taught and expanded upon the field of linear algebra. Assignments and computation heavily involved matrices which are often used in Computer Science, mainly in the area of graphics. "
        techs="Not Applicable"/></div>
        </div>
        </div>

    </div>
);
}

export default Classes;