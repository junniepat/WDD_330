import { useState, useEffect } from 'react';

export default function Quiz(props){
    const [choice, setChoice] = useState(false);
    const [correct, setCorrect] = useState(false);
    
    const {category, difficulty, question, index} = props;


 function selectAnswer(choice) {
    setChoice(choice);
    sessionStorage.clear();
    const answers = sessionStorage['answers'];
    var arr = answers ? JSON.parse(answers) : [];
    
    console.log('arr', arr)
    arr.push(index);
    var newArr = arr;

    if (choice === props.correct) {
        setCorrect(true);
        sessionStorage.setItem("answers", JSON.stringify(newArr));
    }
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
                    <input type="radio" name={index} value="True" onChange={(e) => selectAnswer(e.target.value)} />
                    <span className="True">True</span>
                </label>
                <label>
                    <input type="radio" name={index} value="False" onChange={(e) => selectAnswer(e.target.value)} />
                    <span className="False">False</span>
                </label>

            </div>
            
          </div>
   
      </>
    )
  }