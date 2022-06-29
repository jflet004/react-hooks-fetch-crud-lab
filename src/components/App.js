import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionData, setQuestionData] = useState([])

  const addNewQuestion = (newQuestion) => setQuestionData([...questionData, newQuestion])

  const deleteQuestion = (id) => setQuestionData(questionData.filter(question => question.id !== id))

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm 
        onAddNewQuestion={addNewQuestion}
      /> : 
      <QuestionList 
        questionData={questionData}
        setQuestionData={setQuestionData}
        onDeleteQuestion={deleteQuestion}
      />}
    </main>
  );
}

export default App;
