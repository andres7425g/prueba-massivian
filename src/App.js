import React from 'react';
import './App.css';
import Comic from './components/Comic'
import SetComic from './components/SetComic'
import RatingStar from './components/Stars';



class App extends React.Component {
  state = {
    comicData: {}
  };

  getComic = (num) => {
    // If there is no `num` param get the default url, otherwise load in the specific number
    const comicNumber = num ===undefined?300:num;
    console.log(comicNumber);
    const url = `https://xkcd.now.sh/?comic=${comicNumber}`;
    fetch(url)
      .then(res => res.json())
      .then((out) => {
        this.setState({
          comicData: out
        })
      })
      .catch(err => { 
        return this.setState({
          comicData: {
            safe_title: "NOT FOUND",
            alt: "Sorry, comic not found"
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prueba massivian</h1>
        </header>
        <SetComic getComic={this.getComic} currentComic={this.state.comicData.num}/>
        <Comic comicData={this.state.comicData}/>
        <RatingStar />
      </div>
    );
  }
  componentDidMount() {this.getComic()};
  
}

export default App;
