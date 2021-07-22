import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setdifficulty] = useState('easy')


  function finshed() {
    setFinished(true);
    let correctAnswers = 0;
    for(const index in answers){
      if(answers[index] === quiz[+index].correct_answer)
        ++correctAnswers;
    }

    setCount(correctAnswers);
  }

function retry() {
  setFinished(false);
  sessionStorage.clear();
}


// let answers = JSON.parse(localStorage.getItem('answers')) || [];

function selectAnswer(name, value){
  if(!sessionStorage.hasOwnProperty('answers'))
  sessionStorage.setItem('answers', JSON.stringify({}))

  const ans = JSON.parse(sessionStorage.getItem('answers'));

  ans[name]= value;
  setAnswers(ans);
  sessionStorage.setItem('answers',JSON.stringify(ans));
}




  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=15&type=boolean&difficulty='+ difficulty)
    .then(response => {
      console.log(response)
      setQuiz(response.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }, [difficulty]);


  


  return (
    <div className="App">


      {finished ? 

      (<>
      <h3>You got {count} questions right</h3>
      <div className="card-stats">
        <sub>Score</sub>
        <div>{count} out of {quiz.length}</div>
      </div> 

      <button onClick={() => retry()}>
        Retry
      </button>
      </>): (
        <>


      <div className="card-Two">
        <div className="card-stats">
          <sub>Questions</sub>
          <div>{quiz.length}</div>
        </div>

        <div className="card-stats">
          <sub>Difficulty</sub>
          <div>
            <select onChange={(e) => setdifficulty(e.target.value)}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {quiz && quiz.map((item, index) => (
         <div className="card" key={index}>
         <div className="card-header">
           <span className="card-difficulty"><b>Category:</b> {item.category}</span>
           <span className="card-difficulty"><b>Difficulty:</b> {item.difficulty}</span>
           <div dangerouslySetInnerHTML={{__html: item.question }} style={{ marginTop: "10px" }}></div>
         </div>
         <div className={"card-body"}>
             <label>
                 <input type="radio" name={''+index} value="True" onChange={(e) => selectAnswer(e.target.name, e.target.value)} />
                 <span className="True">True</span>
             </label>
             <label>
                 <input type="radio" name={''+index} value="False" onChange={(e) => selectAnswer(e.target.name, e.target.value)} />
                 <span className="False">False</span>
             </label>

         </div>
         
       </div>
      ))}

<button onClick={() => finshed()}>
        Submit Quiz
      </button>
        </>
      )}


      

    </div>
  );
}

export default App;
