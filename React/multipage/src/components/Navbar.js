import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      home:true,
      articles:false,
      about:false
    }
    this.OnClick=this.OnClick.bind(this);
    
  }
  OnClick(e){
     if(e.target.name=="ho"){
      this.setState({
        home:true,
        articles:false,
        about:false
      })
     } else if(e.target.name=="ar"){
      this.setState({
        home:false,
        articles:true,
        about:false
      })
     } else if(e.target.name=="ab"){
      this.setState({
        home:false,
        articles:false,
        about:true
      })
     } 
  }
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" name="ho" onClick={this.OnClick} to="/">Blog</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class={this.state.home ? "nav-item active":"nav-item"}>
                          <Link  class="nav-link" name="ho" onClick={this.OnClick} to="/">Home</Link>
                        </li>
                        <li class={this.state.articles ? "nav-item active":"nav-item"}>
                          <Link  class="nav-link" name ="ar" onClick={this.OnClick} to="/articles">Articles</Link>
                        </li>
                        <li class={this.state.about ? "nav-item active":"nav-item"}>
                          <Link  class="nav-link" name="ab" onClick={this.OnClick} to="/about">About</Link>
                        </li>                      
                    </ul>
                </div>
            </nav>
           
        );
    }
}

export default Navbar;
