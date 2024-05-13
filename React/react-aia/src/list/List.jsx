import React from 'react'
import { useState } from 'react'
import data from '../data/data.json'

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
        } else {
            setPeople(people)
        }
        console.log(people)
    }

  return (
        <>
            <div className="input-group">
                <label htmlFor="name-input">Name</label>
                <input
                    type="text"
                    value={input.name}
                    id="name-input"
                    onChange={e => setInput(
                        {
                            ...input,
                            name: e.target.value
                        }
                    )}
                />
                <label htmlFor="age-input">Age</label>
                <input
                    type="text"
                    value={input.age}
                    id='age-input'
                    onChange={e => setInput(
                        {
                            ...input,
                            age: e.target.value
                        }
                    )}
                />
                <label htmlFor='input-city'>City</label>
                <input
                    type="text"
                    value={input.city}
                    id='input-city'
                    onChange={e => setInput(
                        {
                            ...input,
                            city: e.target.value
                        }
                    )}
                />
            </div>

            <button onClick={handleAdd}>Add</button>
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
                <div className="header-item">Actions</div>
            </div>
            <ul className='list'>
                {
                    people.map(person => (
                        <li key={person.id} className="list-item">
                            <div className="item">{person.name}</div>
                            <div className="item">{person.age}</div>
                            <div className="item">{person.city}</div>
                            <div className="item">
                                <button onClick={() => handleDelete(person.id)}>delete</button>
                                <button>edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
  )
}

export default List