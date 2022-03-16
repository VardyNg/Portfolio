import react from 'react';
import {  BrowserRouter as Router,  Routes,  Route, Navigate} from "react-router-dom"
import Main from './Main'

function App(){
  return(
    <Router >
      <Routes >        
        <Route path="/" element={<Main/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router >
  )
}

export default App