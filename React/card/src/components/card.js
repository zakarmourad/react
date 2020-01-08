import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    return (

        <div className="card">
            <img  className="img" src={"https://robohash.org/"+this.props.url}/>    
            <div className="textA"> 
              {this.props.nom} 
              <br/>
              {this.props.filiere}
            </div>
        </div>
    );
  }
}

export default Card;