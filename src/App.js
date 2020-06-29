import React from 'react';
import left from './Assets/left.png'
import Content from './landing'
import Points from './Assets/points.png' 
import './index.css';
import Searchbox from './searchbox';
import { BrowserRouter as Router, Switch , Route , Link} from 'react-router-dom';
import logo from './Assets/logo.png'
// import Navbar from './navbar'
// import bottom from './Assets/bottom.png'

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  } , [darkMode])

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false
  }

  const [tab, setTab] = React.useState(getInitialTab())
  React.useEffect(() => {
    localStorage.setItem('Home', JSON.stringify(tab));
  } , [tab])

  function getInitialTab(){
    const saver = JSON.parse(localStorage.getItem('Home'));
    console.log(saver);
    return saver || true
  }
// console.log(tab)


  return (
    <Router>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="container center">
                <nav className={darkMode ? "darkmenu" : "menu"}>
                <img src={logo} className="logo" alt="logo"/>
                <h3 className="logo-head">Wiki Web</h3>

                    <div className="menu__right">
                        <ul className="menu__list">
                          <Link to="/">
                            <li className={tab ? "menu__list-item menu__link active" : "menu__list-item menu__link"} onClick={tab ? null : () => setTab(prevMode => !prevMode) }>Home</li>
                            </Link>
                            <Link to="/search">
                            <li className={tab ? "menu__list-item menu__link" : "menu__list-item menu__link active2"} onClick={tab ? () => setTab(prevMode => !prevMode) : null }>Search</li>
                            </Link>
                        </ul>
                    </div>
                        
                    
                </nav>
            </div>
      
      <Switch>
      <Route path="/" exact>
      
      <img src={left} alt="left" className="left"/>
      <Content mode={JSON.parse(localStorage.getItem('dark'))}/>
      <div className="feature-grid">
          <img src={Points} alt="point-icon" style={{paddingLeft:"20px"}}/>
          <h5 style={{paddingLeft:"20px"}}>We have <span onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-button">{darkMode ? "light mode" : "dark mode"}</span> for you </h5>
        </div>
      </Route>
      <Route path="/search" component={Searchbox}/>
      </Switch>
      

    {/* <img src={bottom} alt="bottom" className="bottom"/> */}
    </div>
    </Router>
  );
}

export default App;