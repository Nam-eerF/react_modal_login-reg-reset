import React, { useState } from "react"
import "./Modal.css"

function Modal() {
    const [modal, setModal] = useState(false)
    const [login, setLogin] = useState(false)
    const [reg, setReg] = useState(false)
    const [reset, setReset] = useState(false)

    return (
        <>
            <button
                onClick={() => {
                    setModal(true)
                    setLogin(true)
                }}
                id='open_modal'
            >
                Войти
            </button>
            {modal ? (
                <div className='modal'>
                    <div className='modal_body'>
                        <span
                            onClick={() => {
                                setModal(false)
                                setLogin(false)
                                setReset(false)
                                setReg(false)
                            }}
                            id='close'
                        ></span>
                        {login && (
                            <div className='modal_content' id='modal_login'>
                                <div className='modal_title'>Вход</div>
                                <form>
                                    <input
                                        type='text'
                                        name='login'
                                        placeholder='Ваш email'
                                    />
                                    <input
                                        type='password'
                                        name='psw'
                                        placeholder='Ваш пароль'
                                    />
                                    <input
                                        className='btn btn_form'
                                        type='submit'
                                        value='Войти'
                                    />
                                </form>
                            </div>
                        )}
                        {reg && (
                            <div id='reg' className='modal_content'>
                                <div className='modal_title'>Регистрация</div>
                                <form>
                                    <input
                                        type='text'
                                        name='login'
                                        placeholder='Ваш email'
                                    />
                                    <input
                                        type='password'
                                        name='psw'
                                        placeholder='Ваш пароль'
                                    />
                                    <input
                                        type='password'
                                        name='psw2'
                                        placeholder='Повторите пароль'
                                    />
                                    <span></span>
                                    <div className='argument'>
                                        Я принимаю условия соглашения
                                    </div>
                                    <input
                                        className='btn btn_form'
                                        type='submit'
                                        value='Зарегестрироваться'
                                    />
                                </form>
                            </div>
                        )}

                        {reset && (
                            <div id='reset_psw' className='modal_content'>
                                <div className='modal_title'>Сброс пароля</div>
                                <form>
                                    <input
                                        type='text'
                                        name='login'
                                        placeholder='Ваш email'
                                    />
                                    <input
                                        className='btn btn_form'
                                        type='submit'
                                        value='Сбросить пароль'
                                    />
                                </form>
                            </div>
                        )}

                        <div className='change_block'>
                            <button
                                onClick={() => {
                                    if (reset) {
                                        setReset(false)
                                        setLogin(false)
                                        setReg(true)
                                    } else {
                                        setReset(true)
                                        setLogin(false)
                                        setReg(false)
                                    }
                                }}
                                id='btn_reset_psw'
                                className='btn btn_change left'
                            >
                                {reset ? (
                                    <div>Регистрация</div>
                                ) : (
                                    <div>Сброс пароля</div>
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    if (login) {
                                        setReset(false)
                                        setLogin(false)
                                        setReg(true)
                                    } else {
                                        setReset(false)
                                        setLogin(true)
                                        setReg(false)
                                    }
                                }}
                                id='btn_login_reg'
                                className='btn btn_change'
                            >
                                {login ? (
                                    <div>Регистрация</div>
                                ) : (
                                    <div>Вход</div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Modal
