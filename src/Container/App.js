import React, { Component } from 'react';
import './App.css';
import Card from '../Components/Card.js';
import Filters from '../Components/Filters.js';
import SearchBox from '../Components/SearchBox.js';
import Button from '../Components/Button.js';
import Particles from 'react-particles-js';
import Subscript from '../Components/Subscript.js';

  const particleParams =  {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: '#ffffff',
    line_linked:
    {
      enable: true,
      color: '#ffffff',
      opacity: 0.4
    },
    move: {
      speed: 5,
    }
  }
}

var string = '';
var filters = [];

class App extends Component{

  constructor(){
    super();
    this.state =   {
      joke:{},
      type: '',
      filters: [],
      checkboxes: [
        {id: 1, value:"Programming", isChecked: false},
        {id: 2, value:"Miscellaneous", isChecked: false},
        {id: 3, value:"Dark", isChecked: false},
      ],
      searchField: '',
  }
  }

  checkBoxHandler = (event) => {
    const checkboxes = this.state.checkboxes;
    filters = this.state.filters;
    checkboxes.forEach(item => {
      if(item.value===event.target.value)
      {
        item.isChecked = event.target.checked;
        if(item.isChecked===true){
          filters.push(item.value);
        }
        else
        {
          filters = filters.filter(obj => {return obj!==item.value;});
        }
      }
    });
    this.setState({checkboxes: checkboxes});
    this.state.filters = filters;
  }

  onSearchHandler = (event) => {
    var queryString = this.state.filters.join(',');
    var searchField = this.state.searchField;
    if(searchField!=='')
    {
      searchField  = '&contains='+searchField;
    }
    if(queryString==='')
    {
      queryString = 'Any';
    }
  fetch(`https://sv443.net/jokeapi/v2/joke/${queryString}?type=twopart${searchField}`)
    .then((response) => response.json())
    .then((resp) => this.setState({joke: resp}))
    .then(() => {
    string = '';
    const { error } = this.state.joke;
    if(error===false)
    {
      const { flags } = this.state.joke;
      const flag = Object.entries(flags).filter(item => { if(item[1]===true){ return item;}});
      flag.forEach((item) => { string = string + " " + item[0]});
      const upper= string.toUpperCase();
      if(upper!=='')
      {
        this.setState({type: upper});
      }
      else
      {
        this.setState({type: 'General'})
      }
    }
    else
    {
      const joke = {
        "setup": '',
        "delivery": '',
      }
      joke.setup = this.state.joke.message;
      this.setState({joke: joke});
      this.setState({type: ''});
    }
})
}

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render(){

    return(
      <div className = "appContainer">
        <Particles 
        className = "particles"
        params={particleParams} 
        />
        <p className = "header tc">PUNTASTIC GUIDE</p>
        <nav className = "navigation tc bb bt b--black-60 mb3">
          <p className = "filter_header">CATEGORIES</p>
          <Subscript text = { 'Optional' } />
          <Filters checkBoxHandler = {this.checkBoxHandler}/>
          <div className = "searchContainer">
            <SearchBox onSearchChange = {this.onSearchChange}/>
            <Button name = { 'Search' } onSearchHandler = {this.onSearchHandler}/>
          </div>
        </nav>
        <div className = "Body tc">
          <Card state = {this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
