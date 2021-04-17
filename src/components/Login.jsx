import React, { useState } from 'react'
import { auth } from '../firebaseconfig'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const RegistrarUsuario = (e) => {
        e.preventDefault()
        try {
            auth.createUserWithEmailAndPassword(email, pass)
            alert('Usuario registrado')
        } catch (e) {
            console.log(e)
        }
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
                        type='text'></input>
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
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
