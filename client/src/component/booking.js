import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted!');

        try {
            await axios.post('http://localhost:3000/boka', {
                name,
                time
            });

            setName('');
            setTime('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ditt namn:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Tid:
                <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>

            <input type="submit" name="book" value="Boka" />
        </form>
    );
}

export default Booking;
