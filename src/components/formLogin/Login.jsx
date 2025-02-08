import React, { useState } from 'react';
import './login.scss'

const Login = () => {
    const [login, setLogin] = useState('');
    const [passwort, setPasswort] = useState('');
    const [passwort2, setPasswort2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleCheckboxChange = () => {
        setShowPassword((prevState) => !prevState);
    };

    const comparePasswords = (password1, password2) => {
        if (!password1 & !password2) {
            console.log('login:', login);
            console.log('Passwort:', passwort);
            alert("Введите Пароль");
            return "Пароль не указан";
        }
        if (!password1 || !password2) {
            console.log('login:', login);
            console.log('Passwort:', passwort);
            alert("Подтвердите Пароль");
            return "Подтвердите Пароль";
        }
        if (password1 === password2) {
            console.log('login:', login);
            console.log('Passwort:', passwort);
            console.log('Passwort2:', passwort2);
            setIsModalOpen(true);
            setLogin('');
            setPasswort('');
            setPasswort2('');
            return "Успешная авторизация!";
        } else {
            console.log('Passwort:', passwort);
            console.log('Passwort2:', passwort2);
            alert("Пароли разные.");
            return "Пароли разные.";
        }
    };

    const closeModal = () => {
        setIsModalOpen(false); // Закрыть модальное окно
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (!isValidEmail(login)) {
            alert("Пожалуйста, введите корректный email.");
            console.log('Указаныи E-Mail="', login, '".  Не E-Mail')
            return;
        }
        const message = comparePasswords(passwort, passwort2);
        console.log(message);
        if (message === "Пароль верный.") {
            alert("Успешная авторизация!");
        }
    };

    return (
        <div className='Form'>
            <form>
                <label>
                    E-Mail <br />
                    <input
                        value={login}
                        type="text"
                        placeholder="E-Mail"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>
                <label>
                    Пароль <br />
                    <input
                        value={passwort}
                        type={showPassword ? 'text': 'password'}
                        placeholder="Password"
                        onChange={(e) => setPasswort(e.target.value)}
                    />
                </label>
                <label>
                    Повторите Пароль <br />
                    <input
                        value={passwort2}
                        type={showPassword ? 'text': 'password'}
                        placeholder="Passdord"
                        onChange={(e) => setPasswort2(e.target.value)}

                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                    />
                    Показать пароль
                </label>
                <button className='' onClick={handleLogin}>Login</button>
            </form>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Добро пожаловать!</h2>
                        <p>Вы успешно авторизовались.</p>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Login;

// Level 2
// Создайте компонент форму, которая собирает логин, пароль, подтверждение пароля.
// Функцией проверьте правильность введенного пароля,
// а regexp -ом проверьте, что в логине введена именно почта!
// Сделайте кнопку, которая выводит в консоль все данные.