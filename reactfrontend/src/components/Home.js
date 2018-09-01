import React from 'react';
import TopRatedGOATList from './TopRatedGOATList';
import SearchForm from './SearchForm';
import SearchResultsSection from './SearchResultsSection';



class Home extends React.Component {
  render(){

    return [
      <div class="container">
        <div class="row">
          <div class="col hCol-1">
            <h1>Welcome to Whose the G.O.A.T</h1>
              <p> Vote on who you think is the Greatest of All Time (G.O.A.T) and see how your vote compares against others.
                  As the NBA star accumlates votes watch as your voted palyer rises to the top.
                  The top 5 NBA Stars will be displayed on the home page for everyone to see.
                  Join other voters in the <a href= '#'> Discussion Area </a> to debate and sway votes to get your G.O.A.T NBA Star to rise to the top!
              </p>
          </div>
        </div>
        <div class="row">
          <div class="col hCol-3">
            <h3> Instructions </h3>
              <p> Search for your favorite NBA player and select the 'up' arrow to place your vote
                or the down arrow to remove your vote. Each user only is able to place one vote so choose carefully!.
                You are able to change your vote at anytime.
              </p>
              <SearchForm/>
          </div>
        </div>
        <div class="row">
          <div class="col hCol-4">
            <div class= 'searchResults'>
              <SearchResultsSection />
            </div>
          </div>
          <div class="col-4 hCol-2">
            <div class= 'topGoatList'>
              <TopRatedGOATList />
            </div>
          </div>
        </div>
      </div>//end of container
      /*---------------------*/
    ]// end of return
  }// end of render
};// end of Home component
export default Home
