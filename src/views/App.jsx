import React from 'react'
import Header from './Header'

const App = (props) => (
  <div>
    <Header location={props.location}/>
    <div className="wrap">
    {props.children}
    </div>
    <footer>
      <hr/>
      <div className="wrap">
        <a href="https://github.com/dunhuang">dunhuang</a>&nbsp;
        All Rights Reserved.
      </div>
    </footer>
  </div>
)

export default App


