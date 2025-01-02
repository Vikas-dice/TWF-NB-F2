import React from 'react'
import A from './A'
import B from './B';
import S from './S';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
const App = () => {
  const isLogin=true;
  return (
    <BrowserRouter>
    <h1>i am header</h1>
    <ul>
      <li><Link to="/a">click me to get to a</Link></li>
      <li><Link to="/b">click me to get to b</Link></li>
    </ul>
     <Routes>
      {isLogin && <><Route path="/" element={<h1>hi welcome to app</h1>}/>
      <Route path="/a" element={<A/>}/>
      <Route path="/b" element={<B/>}/>
      <Route path="/b/:id" element={<S/>}/>
      <Route path="/b/c" element={<><B/> b ke andr c</>}/>
      <Route path="*" element={<h1>not found</h1>}/></>}
      {!isLogin && <>
        <Route path="/" element={<h1>login page</h1>}/>
        <Route path="*" element={<h1>not found</h1>}/></>}
     </Routes>
     <h1>i am footer</h1>
     </BrowserRouter>
  
  )
}

export default App