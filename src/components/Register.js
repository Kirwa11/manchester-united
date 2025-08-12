import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [nationality, setNationality] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [favoritePlayer, setFavoritePlayer] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const usersCollection = collection(db, 'users');

    const register = async (e) => {
        e.preventDefault();
        try {
            // Create Firebase Auth user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Create user profile in Firestore
            await addDoc(usersCollection, {
                id: user.uid,
                fullName,
                nationality,
                phoneNumber,
                favoritePlayer,
                email,
                points: 0,
                rank: 0,
                createdAt: new Date()
            });

            alert('Registration successful');
            navigate('/login');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Register</h3>
                            <form onSubmit={register} className="needs-validation" noValidate>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="nationality" className="form-label">Nationality</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nationality"
                                        required
                                        value={nationality}
                                        onChange={(e) => setNationality(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneNumber"
                                        required
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="favoritePlayer" className="form-label">Favorite Player</label>
                                    <select
                                        className="form-select"
                                        id="favoritePlayer"
                                        required
                                        value={favoritePlayer}
                                        onChange={(e) => setFavoritePlayer(e.target.value)}
                                    >
                                        <option value="">Select a player</option>
                                        {players.map((player) => (
                                            <option key={player.id} value={player.name}>
                                                {player.name} ({player.position})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        required
                                        minLength="6"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mb-3"
                                    disabled={!fullName || !nationality || !phoneNumber || !favoritePlayer || !email || !password}
                                >
                                    Register
                                </button>
                                
                                <div className="text-center">
                                    Already have an account?{' '}
                                    <Link to="/login" className="btn btn-link">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Players list for the dropdown
const players = [
    { id: 1, name: "Rasmus Højlund", position: "Forward" },
    { id: 2, name: "Matheus Cunha", position: "Forward" },
    { id: 3, name: "Joshua Zirkzee", position: "Forward" },
    { id: 4, name: "Benjamin Sesko", position: "Forward" },
    // Add more players as needed
];

export default Register;