import './App.css';
import Options from './Options';
import Feed from './Feed';
import Trendtopics from './Trendtopics';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Login from './Login';

function App() {
  return (
    // twitter color #00acee

    <BrowserRouter>
    <Routes>
    <Route path="login" component={Login}/>

    <Route path="home" component={Feed}/>
    </Routes>

    <div className="App">

      <div className='app-left'>
      <Options /> 
      </div>
      <div className='app-right'>
      <Feed />
      <Trendtopics />
     
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
