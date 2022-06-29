import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questionData, setQuestionData, onDeleteQuestion }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questionData => setQuestionData(questionData))
  }, [setQuestionData])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionData.map(qObject => (
          <QuestionItem
            key={qObject.id}
            question={qObject}
            onDeleteQuestion={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
