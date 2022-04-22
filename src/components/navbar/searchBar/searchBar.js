import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./searchBar.css";

const SearchBar = ({onChange}) => {
    const [ search, setSearch ] = useState("");
    const accessToken = useSelector((state) => state.global.accessToken)
    console.log("token", accessToken)
    const handleOnChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${search}?&type=track`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

        const data = await response.json()
        console.log(data)
        onChange(data.tracks.items)
    }
        return (
            <div className="search-bar">
              <form action="" class="search-bar" onSubmit={handleSubmit}>
                <input type="search" name="search" required onChange={handleOnChange} placeholder="Search..." />
                <button class="search-btn" type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          )
}

    export default SearchBar;