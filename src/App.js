import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
       {/*<News country= 'in' category='sports' pageSize={9}/>*/}
        <Routes>
        {/* <Route exact path='/' element={<News key='general'country= 'in' category='general' pageSize={9}/>}></Route> */}
          <Route exact path='/general' element={<News key='general'country= 'in' category='general' pageSize={9}/>}></Route>
          <Route exact path='/business' element={<News key='business' country= 'in' category='business' pageSize={9}/>}></Route>
          <Route exact path='/entertainment' element={<News key='entertainment' country= 'in' category='entertainment' pageSize={9}/>}></Route>
          <Route exact path='/health' element={<News key='health' country= 'in' category='health' pageSize={9}/>}></Route>
          <Route exact path='/science' element={<News key='science' country= 'in' category='science' pageSize={9}/>}></Route>
          <Route exact path='/sports' element={<News key='sports' country= 'in' category='sports' pageSize={9}/>}></Route>
          <Route exact path='/technology' element={<News key='technology' country= 'in' category='technology' pageSize={9}/>}></Route>
        </Routes>
      </div>
    )
  }
}
