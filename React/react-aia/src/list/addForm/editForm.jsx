import React from 'react'
import { useState } from 'react'

function EditForm(props) {

    const [input, setInput] = useState(
        {
            name: props.people[props.id].name,
            age: props.people[props.id].age,
            city: props.people[props.id].city,
            photo: props.people[props.id].photo,
            rating: props.people[props.id].rating,
        }
    )

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            id: props.id,
            name: input.name,
            age: input.age,
            city: input.city,
            photo: input.photo,
            rating: input.rating,
        }
        const editedPeople = [...props.people]
        editedPeople[props.id] = newPerson
        props.setPeople(editedPeople)
        setInput(
            {
                name: '',
                age: '',
                city: '',
                photo: null,
                rating: '1',
            }
        )
        props.setEditingId(null)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }

    const handlePhotoChange = (event) => {
        const file = URL.createObjectURL(event.target.files[0])
        setInput({ ...input, photo: file })
    }
    
    const handleCancel = (event) => {
        event.preventDefault()
        props.setEditingId(null)
    }

    return (
        <form>
            <h3>Edit a Person</h3>
            <label htmlFor='name-input'>Name</label>
            <input
                id='name-input'
                type='text'
                name='name'
                placeholder='Enter name...'
                value={input.name}
                onChange={handleInputChange}
            />
            <label htmlFor="age-input">Age</label>
            <input
                id='age-input'
                type='text'
                name='age'
                placeholder='Enter age...'
                value={input.age}
                onChange={handleInputChange}
            />
            <label htmlFor='city-input'>City</label>
            <input
                id='city-input'
                type='text'
                name='city'
                placeholder='Enter city...'
                value={input.city}
                onChange={handleInputChange}
            />
            <label htmlFor="file-input">Photo</label>
            <input
                id='file-input'
                type='file'
                name='photo'
                placeholder='Upload photo...'
                onChange={handlePhotoChange}
            />
            <label htmlFor="rating-select">Rating</label>
            <select
                id='rating-select'
                name='rating'
                value={input.rating}
                onChange={handleInputChange}
            >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button type='submit' onClick={handleSubmit}>Add</button>
            <button type='submit' onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default EditForm