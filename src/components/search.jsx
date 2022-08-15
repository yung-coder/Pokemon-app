import React from "react";
import "./search.scss";
import pokeball from '../images/pokeball.png';
const search = (props) => {
  const {setname , Pokemon} = props;
  return (
    <div class="form-container sign-in-container">
      <div className="imager">
      <h1 className="heading">Pokemon Info</h1>
      <img src={pokeball} alt="Pokeball" className="pokeball"/>
      </div>
      <div class="demo-flex-spacer"></div>

      <div class="webflow-style-input">
        <input  type="text" placeholder="Pokemon"  onChange={(e) => setname(e.target.value)}></input>
      </div>

      <div class="demo-flex-spacer"></div>
      <button className="button-56" onClick={Pokemon}>Search</button>
    </div>
  );
};

export default search;
