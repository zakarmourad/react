import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked'
import MarkedArea from './components/MarkedArea';
import TexteArea from './components/textarea';
import Headers from './components/headers';
import Login from './components/login';

class App extends React.Component {
constructor(props){
  super(props);
this.state = {
 textval :'',
 username : '',
password:'',
 loggedIn : false,
 FalseCred : false

}

this.SignIn = this.SignIn.bind(this);
this.onchangeUsr = this.onchangeUsr.bind(this);
this.onchangePass = this.onchangePass.bind(this);

this.onchangeText = this.onchangeText.bind(this);
}

onchangeText(e){
this.setState({
  textval : e.target.value
})
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
    FalseCred: false
    

  })

}else{
  this.setState({
    FalseCred: true
    

  })}
}
  render() {

    return(
<div className="container">
       {!this.state.loggedIn ?  <form  onSubmit={this.SignIn} >
         {this.state.FalseCred ?   <div className='alert alert-danger'>Erreur false credentials</div> :""}
                <div className="from-group">
            <label>Username</label>
                <input type="text" className="form-control" name="username" id="user" onChange={this.onchangeUsr} placeholder="username" />
                </div>
                <div className="from-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" id="pass" onChange={this.onchangePass} placeholder="password" />
                </div>
                <button disabled={this.state.username == "" || this.state.password ==  ""} className="btn btn-primary"  >Signin</button>

            </form> :    <div> <div className="alert alert-success">Logged In successfully</div> <Headers  />
        <div className="row">
          <div className="col-sm-6"><TexteArea value={this.state.textval} onchng= {this.onchangeText}/></div>
          <MarkedArea dnghtml ={this.state.textval} />
        </div></div>}
      
      
     

      </div>

    );
  }
}


export default App;