import { Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './assets/styles/main.sass';
import { useEffect, useState } from 'react';

function App() {
  const [count , setCount] = useState(0)
  const location = useLocation();
  useEffect(() => {
    if(location.state !== null){
      setCount(location.state)
    }
  } , [])
  return (
    <>
      <Header count={count} />
      <Main count={count} />
      <Footer />
    </>
  );
}

export default App;