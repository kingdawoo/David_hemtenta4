import React, { useState } from 'react';

const Booking = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted!');

        try {
            const response = await fetch('http://localhost:3000/boka', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, time }),
            });

            setName('');
            setTime('');
        } catch (error) {
            console.error('Error med form:', error);
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
};

export default Booking;
