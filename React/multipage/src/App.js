import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'
// import Login from './components/login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Articles from './pages/Articles';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArticlesFull from './pages/ArticleFull';
import Login from './components/login';
import './components/Navbar.css';

class App extends React.Component {
constructor(props){
  super(props);
this.state = {
 textval :'',
 username : '',
password:'',
 loggedIn : false,
 FalseCred : false,
 page:'home',
 counting:false
}

this.SignIn = this.SignIn.bind(this);
this.onchangeUsr = this.onchangeUsr.bind(this);
this.onchangePass = this.onchangePass.bind(this);

// this.onchangeText = this.onchangeText.bind(this);
}


onchangeUsr(e){
  this.setState({
    username : e.target.value
  })
} 
onchangePass(e){
  this.setState({
    password : e.target.value
  })
}

SignIn(e){
  e.preventDefault();

if(this.state.username == 'client25' && this.state.password == 'ghoudanos'){
  this.setState({
    loggedIn : true,
    FalseCred: false,
    counting:true

  })

}else{
  this.setState({
    FalseCred: true
    

  })}
  setTimeout(
    function(){
      this.setState({counting:false});
    }.bind(this),
    9000
    );
  
}

  render() {

    return(
<div className="container">
       {!this.state.loggedIn ? 
       <div>
                    {this.state.FalseCred ?   <div className='alert alert-danger'>Erreur false credentials</div> :""}
                    <Login sub={this.SignIn} usr={this.onchangeUsr} pass={this.onchangePass} />

       </div>
      
           :  
           <Router>
               <Navbar  />
               <div className="altsucc">
               {this.state.counting?<div className="alert alert-success">Logged In successfully</div>:''}
               </div>
           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/articles' component={Articles} />
             <Route exact path='/articles/:nom' component={ArticlesFull} />

             <Route exact path='/about' component={About} />
    
          </Switch>
       
            <div>           
            
           

            </div>
            </Router>
          }
      
      
    

      </div>

    );
  }
}


export default App;
