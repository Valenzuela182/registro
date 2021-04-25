import React, { useState } from 'react'
import { auth } from '../firebaseconfig'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const RegistrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => {
                historial.push('/inicio')
            })
            .catch(e => {
                if (e.code === 'auth/invalid-email') {
                    setMsgError('Formato email incorrecto')
                }
                if (e.code === 'auth/weak-password') {
                    setMsgError('La contraseña debe tener al menos 6 caracteres')
                }
            })
    }
    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => {
                historial.push('/inicio')
            })
            .catch((err) => {
                if (err.code === 'auth/wrong-password') {
                    setMsgError('Contraseña incorrecta')
                }
            })
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={RegistrarUsuario} className='form-group'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                        placeholder='Ingresa tu email'
                        type='email'></input>
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        className='form-control mt-1'
                        placeholder='Contraseña'
                        type='password'></input>
                    <input
                        className='btn btn-dark btn-block mt-3'
                        value='Registrar Usuario'
                        type='submit'></input>
                </form>
                <button
                    onClick={LoginUsuario}
                    className='btn btn-success btn-block'>
                    Iniciar Sesion
                </button>
                {
                    msgerror != null ?
                        (
                            <div>
                                {msgerror}
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
