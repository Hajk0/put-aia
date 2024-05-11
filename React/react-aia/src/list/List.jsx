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
    console.log(people)

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

  return (
        <>
            <div className="input-group">
                <label for="name-input">Name</label>
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
                <label for="age-input">Age</label>
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
                <label for='input-city'>City</label>
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
            <ul>
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