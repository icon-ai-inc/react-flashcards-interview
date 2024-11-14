import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Placeholder = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch("/api/flashcards").then(async (flashcards) => {
      const flashcardsReturned = await flashcards.json();
      setFlashcards(flashcardsReturned);
    });
  }, []);

  return <div>{flashcards.join(",")}</div>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/flashcards" element={<Placeholder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
