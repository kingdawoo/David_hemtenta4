import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === 'bond' && password === 'alam') {
            alert('Admin inloggad!')
            navigate('/tider');
        } else {
            alert('Fel!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Namn:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Lösenord:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>

            <input type="submit" name="login" value="Logga in" />
        </form>
    );
};

export default Admin;
