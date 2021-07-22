import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Quiz from './quiz';

function App() {
  const [count, setCount] = useState([]);
  const [finished, setFinished] = useState(false);
  const [quiz, setQuiz] = useState([]);


  useEffect(() => {
      var arr = JSON.parse(sessionStorage.getItem("answers"));
      setCount(arr);
  }, [finished])


  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=15&type=boolean&difficulty=medium')
    .then(response => {
      // console.log(response)
      setQuiz(response.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);


  return (
    <div className="App">


      {finished ? 

      (<>
      <h3>You got {count && count.length} questions right</h3>
      <div className="card-stats">
        <sub>Score</sub>
        <div>{count && count.length}</div>
      </div> 

      <button onClick={() => setFinished(false)}>
        Retry
      </button>
      </>): (
        <>
      <div className="card-stats">
        <sub>Questions</sub>
        <div>{quiz.length}</div>
      </div>

      {quiz && quiz.map((item, index) => (
        <Quiz key={index} index={index} question={item.question} correct={item.correct_answer} difficulty={item.difficulty} category={item.category} />
      ))}

<button onClick={() => setFinished(true)}>
        Submit Quiz
      </button>
        </>
      )}


      

    </div>
  );
}

export default App;
