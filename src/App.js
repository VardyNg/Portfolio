import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';

function App(){
  return(
    <Router >
      <Routes >        
        <Route path="/*" element={<Main/>} />
        {/* <Route path="*" element={<Navigate to="/"/>}/> */}
      </Routes>
    </Router >
  )
}

export default App