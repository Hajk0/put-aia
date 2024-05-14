import React from "react"
import { useState } from "react"

function Search(props) {
    const [input, setInput] = useState(
        {
            search: '',
        }
    )

    const handleSearch = (event) => {
        event.preventDefault()
        props.setSearch(input.search)
        setInput(
            {
                search: '',
            }
        )
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }

    const handleSearchByChange = (event) => {
        const selectedSearchBy = event.target.value
        props.setSearchBy(selectedSearchBy)
        props.setSearch('')
    }

    return (
        <form>
            <h2>Search</h2>
            <label htmlFor='search-input'>Search</label>
            <input
                id='search-input'
                type='text'
                name='search'
                placeholder='Search...'
                value={input.search}
                onChange={handleInputChange}
            />
            <select onChange={handleSearchByChange}>
                <option value='name'>Name</option>
                <option value='age'>Age</option>
                <option value='city'>City</option>
                <option value='rating'>Rating</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </form>
    )
}

export default Search