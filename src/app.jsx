import React, { Component } from "react";
import axios from "axios";
import TopSpot from "./topspot";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(data => this.setState({ topspots: data }));
  }

  render() {
    return (
      <div className="container">
<div className="fixedHeader">
            <h1>San Diego Top Spots</h1>
            <div className="subTitle"><p>
              A list of the top 30 places to see in San Diego, California.
            </p></div>
            </div>
        
          <div className="main">
        
            {this.state.topspots.map(topspot => {
              console.log(topspot)
              return (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                />
              );
            })}
          </div>
</div>
    );
  }
}
