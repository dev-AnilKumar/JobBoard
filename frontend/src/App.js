import React from 'react';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import JobForm from './components/JobForm';
import PhaseForm from './components/PhaseForm';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobform' element={<JobForm />} />
        <Route path='/phaseform' element={<PhaseForm />} />
      </Routes>
  )
}

export default App