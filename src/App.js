// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import ViewResume from './components/viewResume'
import CreateResume from './components/createResume';


class App extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            <nav>
                <Link to={'/createresume'}> Edit/Create Resume </Link><br />
                <Link to={'/viewresume'}> View Resume </Link><br />
            </nav>
            <div>
                <Route exact path="/" render={() => (<Redirect to="/createresume"></Redirect>)}/>
                <Route exact path="/createresume" component={CreateResume}/>
                <Route exact path="/viewresume" component={ViewResume}/>
            </div>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
