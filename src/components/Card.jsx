import React from 'react';

const style = {
    width: '18rem',
    margin: '24px'
}

const Card = (props) => {
    const {name, desc, username, website} = props;
    return (
        <div className="card" style={style}>
  <img className="card-img-top" src={`https://github.com/${username}.png`} alt='github profile'/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{desc}</p>
  </div>
  <div className="card-body">
    <a href={`https://github.com/${username}`} className="card-link">Github</a>
    <a href={website} className="card-link">Website</a>
  </div>
</div>
    );
}

export default Card;