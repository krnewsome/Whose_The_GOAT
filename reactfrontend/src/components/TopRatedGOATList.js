import React from 'react';

function TopRatedGOATList() {
  return [
    <h3>Top 5 Rated G.O.A.Ts</h3>,
      <ul>
        <li> Kobe [insert votes] </li>
        <li> Lebron [insert votes] </li>
        <li> KD  [insert votes] </li>
        <li> Curry [insert votes] </li>
        <li> Shack [insert votes] </li>
      </ul>,
      <div className = 'userVotedGOAT'>
        <h4> My Voted G.O.A.T </h4>
        <ul>
          <li>
            <div className="card">
              <img className="card-img-top" src=".../100px180/" alt="Player Image"></img>
              <div class="card-body">
                <h5 class="card-title">[Insert Player Name]</h5>
                <ul>
                  <li class="card-text">[Insert Player PPG]</li>
                  <li>[Insert Player RPG]</li>
                  <li>[Insert Player APG]</li>
                </ul>
                <a href="#" class="btn btn-primary">Vote up</a>
                <a href="#" class="btn btn-primary">Remove Vote</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
  ];
}

export default TopRatedGOATList;
