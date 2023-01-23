
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import React from 'react';
import Media from './myComponents/media';

function App() {
  return(
    <>
      <Header title="useEffect Demo" name="useEffect Demo"/>
      <Media />
      <Footer />
    </>
  )
}

export default App;
