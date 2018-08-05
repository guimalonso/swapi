import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';
import Scroll from '../components/Scroll';
import './App.css';

const MAIN_URL = 'https://swapi.co/api/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      categories: {},
      url: MAIN_URL + 'people',
      searchfield: '',
      nextpage: '',
      type: ''
    };
  }

  fetchItems = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(results => this.setState({ items: results.results, url: results.next }));
  }

  fetchCategories = () => {
    fetch(MAIN_URL)
      .then(response => response.json())
      .then(results => this.setState({ categories: results }));
  }

  componentDidMount() {
    const url = this.state.url;
    this.fetchItems(url);
    this.fetchCategories();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  onNextButtonClick = () => {
    this.fetchItems(this.state.url);
  }

  onCategoryButtonClick = (event) => {
    const newUrl = MAIN_URL + event.target.value;
    this.setState({ url: newUrl, type: event.target.value });
    this.fetchItems(newUrl);
  }

  render() {
    const { items, searchfield, url, categories } = this.state;
    
    let scrollContent;
    if (items.length === 0) {
      scrollContent = <h1>Loading</h1>;
    } else {

      const filteredItems = items.filter(item => {
        if (item.title) {
          return item.title.toLowerCase().includes(searchfield.toLowerCase());
        }
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
      });

      scrollContent = <ItemList items={filteredItems}/>;
    }

    let nextButton;
    if (url && items.length > 0) {
      nextButton = <button onClick={this.onNextButtonClick}>Next ></button>;
    } else {
      nextButton = <button disabled>Next ></button>;
    }

    return (
      <div className='tc flex flex-column items-center'>
        <h1 className='f1 white'>Star Wars API</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CategoryList categories={categories} categoryButtonClick={this.onCategoryButtonClick}/>
        <Scroll>
          {scrollContent}
        </Scroll>
        {nextButton}
      </div>
    );
  }
}

export default App;
