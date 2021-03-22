// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import CreateResume from'./createResume'
import { BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import ViewResume from './viewResume'

// const CreateResume = () => <h2> Edit/Create Resume </h2>;
// const ViewResume = () => <h2> View Resume </h2>;

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
                <Route path="/viewresume" component={ViewResume}/>
            </div>
          </React.Fragment>
        </Router>

    );
  }
}

export default App;
