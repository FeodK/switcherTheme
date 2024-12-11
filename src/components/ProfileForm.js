import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail } from '../actions/profileActions';

const ProfileForm = () => {
  const { name, email } = useSelector((state) => state);
  

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateName(newName));
    dispatch(updateEmail(newEmail));

    setNewName('')
    setNewEmail('')
  };

  return (
    <div>
      <h2>Обновить Профиль</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Введите ваше имя"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Введите ваш email"
          />
        </div>
        <button type="submit">Обновить</button>
      </form>
      <div>
        <h3>Текущий Профиль:</h3>
        <p>Имя: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default ProfileForm;
