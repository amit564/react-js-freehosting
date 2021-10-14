import { useState } from 'react';
import { BrowserRouter,Route ,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Post from './components/pages/Post';
import Profile from "./components/pages/Profile";
function App() {
  const [login,setLogin]= useState(false)

  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <button onClick={()=>setLogin(!login)}>{login?"Log Out":"Login"}</button>    
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/about" component={About}/>
    {/* <Route path="/profile" component={Profile}/> */}
    {/* <Route path="/profile">
      {login ? <Profile/> :<Redirect to="/" />}
    </Route> */}
    <Route  path="/profile">
      <Profile login={login}/>
    </Route>

    <Route path="/post/:id" component={Post}/>
    <Route component={NotFound}/>
    </Switch> </div>
    </BrowserRouter>   
  );
}
export default App;
