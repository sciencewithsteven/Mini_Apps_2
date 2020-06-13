import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      lastQuery: '',
      searchResults: [],
    }
    this.historySearch = this.historySearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEnterClick = this.onEnterClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    axios(`/events?q=Italy&_page=1&_limit=10`)
    .then(history => {
      this.setState({searchResults: history.data})
    })
    .catch(error => {
      console.error(error);
    });
  }

  clearField(){
    this.setState({query: ''});
  }

  historySearch() {
    let oldQuery = this.state.query;
    this.clearField()
    this.setState({lastQuery: `Search Results For: ${oldQuery}`})

    axios(`/events?q=${this.state.query}&_page=1&_limit=10`)
    .then(history => {
      this.setState({searchResults: history.data})
    })
    .catch(error => console.error(error));
  }

  handlePageChange(event) {
    axios(`/events?q=${this.state.query}&_page=${event.selected + 1}&_limit=10`)
    .then(history => {
      this.setState({searchResults: history.data})
    })
    .catch(error => console.error(error));
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  onEnterClick(event) {
    if (event.key === 'Enter'){
      this.historySearch()
    }
  }

  render() {
    let {searchResults, query, lastQuery} = this.state;
    return(
      <React.Fragment>

      <h1>The History Database</h1>

        <input
          type='text'
          placeholder="Enter query here"
          value={query}
          onChange={this.handleChange}
          onKeyPress={this.onEnterClick}/>

        <button
          type='submit'
          onClick={this.historySearch}>
          Submit
        </button>

        <h2>{lastQuery}</h2>

        {searchResults.map((historicalFact, i) => {
          return (
            <React.Fragment
              key={i} >

              <div>
                <h4>Date: {historicalFact.date} AD</h4>
              </div>

              <div>
                {i+1}) {historicalFact.description}
              </div>

              <br/>

            </React.Fragment>
          )
        })}

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </React.Fragment>
    )
  }
}

export default App;