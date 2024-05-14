import React from 'react'
import { useState } from 'react'
import data from '../data/data.json'
import AddForm from './addForm/addForm'
import Search from './search/search'

function List() {
    const [input, setInput] = useState(
        {
            name: '',
            age: '',
            city: '',
        }
    )
    const [people, setPeople] = useState(data.people)
    const [sort, setSort] = useState('default')
    const [search, setSearch] = useState('')
    const [searchBy, setSearchBy] = useState('name')

    const handleAdd = () => {
        const newPerson = {
            id: people.length + 1,
            name: input.name,
            age: input.age,
            city: input.city,
        }
        setPeople([...people, newPerson])
        setInput(
            {
                name: '',
                age: '',
                city: '',
            }
        )
    }

    const handleDelete = (id) => {
        const newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }

    const handleSortChange = (event) => {
        const selectedSort = event.target.value
        setSort(selectedSort)
        console.log(sort)
        if (selectedSort === 'name a-z') {
            const sortedPeople = people.sort((a, b) => a.name.localeCompare(b.name))
            setPeople(sortedPeople)
        } else if (selectedSort === 'name z-a') {
            const sortedPeople = people.sort((a, b) => b.name.localeCompare(a.name))
            setPeople(sortedPeople)
        } else if (selectedSort === 'age asc') {
            const sortedPeople = people.sort((a, b) => a.age - b.age)
            setPeople(sortedPeople)
        } else if (selectedSort === 'age desc') {
            const sortedPeople = people.sort((a, b) => b.age - a.age)
            setPeople(sortedPeople)
        } else if (selectedSort === 'city a-z') {
            const sortedPeople = people.sort((a, b) => a.city.localeCompare(b.city))
            setPeople(sortedPeople)
        } else if (selectedSort === 'city z-a') {
            const sortedPeople = people.sort((a, b) => b.city.localeCompare(a.city))
            setPeople(sortedPeople)
        } else if (selectedSort === 'rating asc') {
            const sortedPeople = people.sort((a, b) => a.rating - b.rating)
            setPeople(sortedPeople)
        } else if (selectedSort === 'rating desc') {
            const sortedPeople = people.sort((a, b) => b.rating - a.rating)
            setPeople(sortedPeople)
        } else {
            setPeople(people)
        }
        console.log(people)
    }

  return (
        <>
            <AddForm people={people} setPeople={setPeople} />
            <Search setSearch={setSearch} setSearchBy={setSearchBy} />

            <div className="list-header">
                <select 
                    id='name-select'
                    value={sort}
                    onChange={handleSortChange}
                    className="header-item"
                >
                    <option value="default">Name</option>
                    <option value='name a-z'>Name A-Z</option>
                    <option value='name z-a'>Name Z-A</option>
                </select>
                <select 
                    id='age-select'
                    value={sort}
                    onChange={handleSortChange}
                    className="header-item"
                >
                    <option value="default">Age</option>
                    <option value='age asc'>Age asc</option>
                    <option value='age desc'>Age desc</option>
                </select>
                <select 
                    id='city-select'
                    value={sort}
                    onChange={handleSortChange}
                    className="header-item"
                >
                    <option value="default">City</option>
                    <option value='city a-z'>City A-Z</option>
                    <option value='city z-a'>City Z-A</option>
                </select>
                <div className="header-item">Photo</div>
                <select
                    id='rating-select'
                    value={sort}
                    onChange={handleSortChange}
                    className="header-item"
                >
                    <option value="default">Rating</option>
                    <option value='rating asc'>Rating asc</option>
                    <option value='rating desc'>Rating desc</option>
                </select>
                <div className="header-item">Actions</div>
            </div>
            <ul className='list'>
                {
                    people.map(person => (
                        (search.length == 0 || 
                            searchBy === 'name' && person.name.includes(search) ||
                            searchBy === 'rating' && person.rating.toString().includes(search) ||
                            searchBy === 'city' && person.city.includes(search) ||
                            searchBy === 'age' && person.age.toString().includes(search)
                        ) ? (
                            <li key={person.id} className="list-item">
                                <div className="item">{person.name}</div>
                                <div className="item">{person.age}</div>
                                <div className="item">{person.city}</div>
                                <div className="item">
                                    <img className='photo' src={person.photo} alt={person.name + 's photo'} />
                                </div>
                                <div className='item'>{person.rating}</div>
                                <div className="item">
                                    <button onClick={() => handleDelete(person.id)}>delete</button>
                                    <button>edit</button>
                                </div>
                            </li>
                        ) : null
                    ))
                }
            </ul>
        </>
  )
}

export default List