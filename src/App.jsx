import React, { useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout'

function App() {

  useEffect(() => {
    document.title = 'The BonkPark - Have Fun, Burn Bonk';
  }, []);

  return (
    <>
    <Layout />
    </>
  );
}

export default App;