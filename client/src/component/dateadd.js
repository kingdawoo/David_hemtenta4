import React, { useState } from 'react';

const AddDate = () => {
    const [time, setTime] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted!');

        try {
            const response = await fetch('http://localhost:3000/tider', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ time }),
            });

            setTime('');
        } catch (error) {
            console.error('Error med form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Ny tid:
                <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>

            <input type="submit" name="add" value="Lägg till ny tid" />
        </form>
    );
};

export default AddDate;