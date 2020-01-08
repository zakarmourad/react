import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/login.css';
class Login extends React.Component {
  constructor(props){
    super(props);
    

  }
  

  render() {
 
    return (
      
            <form style={{margin: '20%'}} onSubmit={this.props.sub} >
                <div className="from-group">
            <label id="lab">Username</label>
                <input type="text" className="form-control" onChange={this.props.usr} name="username" id="user" placeholder="username" />
                </div>
                <div className="from-group">
                <label id="lab">Password</label>
                <input type="password" className="form-control" onChange={this.props.pass} name="password" id="pass" placeholder="password" />
                </div>
                <button id="bt" disabled={this.props.disabled} className="btn btn-primary"  >Sign In</button>

            </form>
       
    );
  }
}

export default Login;

