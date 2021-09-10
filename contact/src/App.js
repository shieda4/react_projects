import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import './App.css';



function App() {

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5").then(response => response.json()).then(data => setResults(data.results));
  }, []);

  return (
    <>
      {results.map((result) => {
        return <ContactCard key={result.cell} image={result.picture.large} name={result.name.first} email={result.email} />
      })}
    </>

  );
}

export default App;
