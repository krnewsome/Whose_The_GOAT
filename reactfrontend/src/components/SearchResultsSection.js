import React from 'react';

function SearchResultsSection() {
  return [
    <h1> Search Results </h1>,
    <div className = 'searchResultsContainer'>
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

export default SearchResultsSection;
