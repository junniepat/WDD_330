import { useState, useEffect } from 'react';

export default function Quiz(props){
    const [choice, setChoice] = useState([]);
    const [nanswers, setAnswer] = useState([]);

    const {category, difficulty, question, index} = props;
    let answers = [];

  function selectAnswer(name, value){
    answers.push({name, value})

    setAnswer((prevVals) => [...prevVals, answers])
    localStorage.setItem('answers', JSON.stringify(nanswers))
  }


    return (
      <>
          <div className="card">
            <div className="card-header">
              <span className="card-difficulty"><b>Category:</b> {category}</span>
              <span className="card-difficulty"><b>Difficulty:</b> {difficulty}</span>
              <div dangerouslySetInnerHTML={{__html: question }} style={{ marginTop: "10px" }}></div>
            </div>
            <div className={"card-body"}>
                <label>
                    <input type="radio" name={'Q_' + index} value="True" onChange={(e) => selectAnswer(e.target.name, e.target.value)} />
                    <span className="True">True</span>
                </label>
                <label>
                    <input type="radio" name={'Q_' + index} value="False" onChange={(e) => selectAnswer(e.target.name, e.target.value)} />
                    <span className="False">False</span>
                </label>

            </div>
            
          </div>
   
      </>
    )
  }