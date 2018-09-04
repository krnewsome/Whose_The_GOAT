import React from 'react';

function TopRatedGOATList() {
  return [
    <h3 key= "1" >Top 5 Rated G.O.A.Ts</h3>,
      <ul key= "2" >
        <li> Kobe [insert votes] </li>
        <li> Lebron [insert votes] </li>
        <li> KD  [insert votes] </li>
        <li> Curry [insert votes] </li>
        <li> Shack [insert votes] </li>
      </ul>,
      <div key= "3" className = 'userVotedGOAT'>
        <h4> My Voted G.O.A.T </h4>
        <ul>
          <li>
            <div className="card">
              <img className="card-img-top" src=".../100px180/" alt="PlayerAvatar"></img>
              <div className="card-body">
                <h5 className="card-title">[Insert Player Name]</h5>
                <ul>
                  <li className="card-text">[Insert Player PPG]</li>
                  <li>[Insert Player RPG]</li>
                  <li>[Insert Player APG]</li>
                </ul>
                <button className="btn btn-primary">Vote up</button>
                <button className="btn btn-primary">Remove Vote</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
  ];
}

export default TopRatedGOATList;
