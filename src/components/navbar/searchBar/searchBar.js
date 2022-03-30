import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: "",
    }
  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${this.state.search}?&type=track`,
      {
        method:"GET",
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      })

    const data = await response.json()
    console.log(data)
    this.props.onChange(data.tracks.items)
  }

  render() {
    return (
      <div className="search-bar">
        <form action="" class="search-bar" onSubmit={this.handleSubmit}>
          <input type="search" name="search" required onChange={this.handleOnChange}/>
          <button class="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;