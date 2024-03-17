import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data/my-info.json';
import Header from './components/Header.js';
import Address from './components/Address.js';
import Skills from './components/Skills.js';
import Objective from './components/Objective.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';

function App() {
  const person = useState(data)[0];
  return (
    <>
    <div id="header" className="row border-bottom border-dark">
      <Address address={person.address} />
      <Header name={person.name} email={person.email}/>
    </div>
    <Skills {...person.skills}/>
    <Objective quote={person.objective} />
    <Education schools={person.education} />
    <Experience companies={person.experience} />
    <Projects projects={person.project} />
    </>
  );
}

export default App;
