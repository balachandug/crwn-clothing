import React from 'react';
import { Route, Link } from 'react-router-dom';

// import HomePage from './components/homepage/homepage.component'
import './App.css';

const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
);

const HomePage = (props) => (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>HomePage</h1>
    </div>
);

const TopicList = (props) => (
    <div>
      <h1>TopicList Page</h1>
      <Link to={`${props.match.url}/13`}>Topic # 13</Link>
      <Link to={`${props.match.url}/14`}>Topic # 14</Link>
      <Link to={`${props.match.url}/17`}>Topic # 17</Link>
    </div>
);

const TopicDeatils = (props) => (
    <div>
      <h1>TopicDeatils Page: {props.match.params.topicId}</h1>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
);

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/topics' component={TopicList}/>
        <Route exact path='/topics/:topicId' component={TopicDeatils}/>
      </div>
  );
}

export default App;
