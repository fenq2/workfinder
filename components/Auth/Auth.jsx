import React, { useState } from 'react';
import { useAuth } from '../../context/auth.context';
import { useHistory } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";

const Auth = () => {
    const { signIn, signUp, loading, handleLoading } = useAuth();
    const history = useHistory();

    const [userField, setUserField] = useState({
        name: '',
        password: ''
    });
    const [showForm, setShowForm] = useState(true);
    const [error, setError] = useState(false);

    const handleChangeField = (e) => {
        setUserField({ ...userField, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        try {
            e.preventDefault();
            handleLoading(true);
            await signIn(userField.name, userField.password);
            setError(false);
            handleLoading(false);
            history.push('/');
        } catch(error) {
            setError(true);
            handleLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        await signUp(userField.name, userField.password);
        // !error && history.push('/');
    };

    return (
        <div className="auth">
            { loading && (
                <div className="loader">
                    <DotLoader color={'grey'} size={60} />
                </div>
            ) }
            { showForm ? (
                <div className="auth__signin">
                    <span className="auth__title">Вход</span>
                    <span className="auth__desc">Добро пожаловать!</span>
                    <form className="auth__form" onSubmit={handleSignIn}>
                        <div className="input">
                            <input onChange={handleChangeField} className="input__field" placeholder="Введите email" name="name" type="email" />
                        </div>
                        <div className="input">
                            <input onChange={handleChangeField} className="input__field" placeholder="Введите пароль" name="password" type="password" />
                        </div>
                        <span>{ error && 'Некорректные данные! Попробуйте снова' }</span>
                        <button className="btn">Войти</button>
                    </form>
                    <div className="auth__footer">
                        <span className="auth__reg">Нет аккаунта? <button className="auth__reg-btn" onClick={() => setShowForm(false)}>Зарегистрироваться</button></span>
                    </div>
                </div>
            ) : (
                    <div className="auth__signup">
                        <span className="auth__title">Регистрация</span>
                        <span className="auth__desc">Добро пожаловать!</span>
                        <form className="auth__form" onSubmit={handleSignUp}>
                            <div className="input">
                                <input onChange={handleChangeField} className="input__field" placeholder="Введите email" name="name" type="email" />
                            </div>
                            <div className="input">
                                <input onChange={handleChangeField} className="input__field" placeholder="Введите пароль" name="password" type="password" />
                            </div>
                            <div className="input">
                                <input onChange={handleChangeField} className="input__field" placeholder="Подтвердите пароль" name="password" type="password" />
                            </div>
                            <button className="btn">Зарегистрироваться</button>
                        </form>
                        <div className="auth__footer">
                            <span className="auth__reg">Есть аккаунт? <button className="auth__reg-btn" onClick={() => setShowForm(true)}>Войти</button></span>
                        </div>
                    </div>
                )}
        </div>
    )
};

export default Auth;