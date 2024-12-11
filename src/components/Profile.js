import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";
import withLoadingIndicator from "../utils/withLoadingIndicator";



function Profile() {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  const { changeUserName } = useContext(UserContext);
  const [inputName, setInputName] = useState("");

  const handleChange = (e) => setInputName(e.target.value);
  const handleClick = () => {
    if (inputName === "") {
        alert("Введите имя");
      } else {
        changeUserName(inputName);
        setInputName("");
      }
  };

  return (
    <div>
      <p>Информация о пользователе...</p>
      
      <label htmlFor="name">
        Имя:
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Сохранить</button>
      </label>
      <p>Тема: {theme}</p>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
}

export default withLoadingIndicator(Profile);
