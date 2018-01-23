import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    this.listTopRecent();
  }

  listTopRecent() {
    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function(json) {
      $("span").remove();
      $("#listRecent").append("<span class='glyphicon glyphicon-sort-by-attributes-alt'></span>");
      $("tbody").html("");
      for (var i=1; i<101; i++) {
        $("tbody").append("<tr><td>" + i + "</td><td class='username'><a href='https://www.freecodecamp.org/" + json[i-1].username + "' target='_blank'><img src='" + json[i-1].img + "'>" + json[i-1].username + "</a></td><td>" + json[i-1].recent + "</td><td>" + json[i-1].alltime + "</td></tr>");
      }
    });
  }

  listAllTime() {
    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", function(json) {
      $("span").remove();
      $("#listAll").append("<span class='glyphicon glyphicon-sort-by-attributes-alt'></span>");
      $("tbody").html("");
      for (var i=1; i<101; i++) {
        $("tbody").append("<tr><td>" + i + "</td><td class='username'><a href='https://www.freecodecamp.org/" + json[i-1].username + "' target='_blank'><img src='" + json[i-1].img + "'>" + json[i-1].username + "</a></td><td>" + json[i-1].recent + "</td><td>" + json[i-1].alltime + "</td></tr>");
      }
    });
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick = {this.listTopRecent} className="listType" id="listRecent">Points in past 30 days</th>
              <th onClick = {this.listAllTime} className="listType" id="listAll">All time points</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default App;
