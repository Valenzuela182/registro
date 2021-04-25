import React, { useEffect, useState } from 'react'
import { store } from '../firebaseconfig'

const Formulario = () => {

    const [modoEdicion, setModoEdicion] = useState(null)
    const [idusuario, setIdUsuario] = useState('')
    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [usuario, setUsuario] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const getUsuarios = async () => {
            const { docs } = await store.collection('agenda').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setUsuario(nuevoArray)
        }
        getUsuarios()
    }, [])

    const setUsuarios = async (e) => {
        e.preventDefault()

        if (!nombre.trim() && !numero.trim()) {
            setError('Debe llenar ambos campos')
        } else {
            if (!nombre.trim()) {
                setError('Campo nombre vacio')
            } else
                if (!numero.trim()) {
                    setError('Campo numero vacio')
                } else {
                    const usuario = {
                        nombre: nombre,
                        numero: numero
                    }

                    try {
                        const data = await store.collection('agenda').add(usuario)
                        const { docs } = await store.collection('agenda').get()
                        const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
                        setUsuario(nuevoArray)
                        alert('Agregado')
                    } catch (e) {
                        console.log(e)
                    }
                    setNombre('')
                    setNumero('')
                }
        }

    }

    const borrarUsuario = async (id) => {
        try {
            await store.collection('agenda').doc(id).delete()
            const { docs } = await store.collection('agenda').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setUsuario(nuevoArray)
        } catch (e) {
            console.log(e)
        }
    }

    const actualizarUsuario = async (id) => {
        try {
            const data = await store.collection('agenda').doc(id).get()
            const { nombre, numero } = data.data()
            setNombre(nombre)
            setNumero(numero)
            setIdUsuario(id)
            setModoEdicion(true)
            console.log(id)
        } catch (e) {
            console.log(e)
        }
    }

    const setUpdate = async (e) => {
        e.preventDefault()
        if (!nombre.trim() && !numero.trim()) {
            setError('Debe llenar ambos campos')
        } else {
            if (!nombre.trim()) {
                setError('Campo nombre vacio')
            } else
                if (!numero.trim()) {
                    setError('Campo numero vacio')
                } else {
                    const userUpdate = {
                        nombre: nombre,
                        numero: numero
                    }

                    try {
                        await store.collection('agenda').doc(idusuario).set(userUpdate)
                        const { docs } = await store.collection('agenda').get()
                        const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
                        setUsuario(nuevoArray)
                    } catch (e) {
                        console.log(e)
                    }
                    setNombre('')
                    setNumero('')
                    setIdUsuario('')
                    setModoEdicion(false)
                }
        }
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <h2>Formulario de usuario</h2>
                    <form className="form-group"
                        onSubmit={
                            modoEdicion ?
                                (setUpdate)
                                :
                                (setUsuarios)
                        }>
                        <input
                            value={nombre}
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="form-control"
                            placeholder="Introduce el nombre"
                            type="text">
                        </input>
                        <input
                            value={numero}
                            onChange={(e) => { setNumero(e.target.value) }}
                            className="form-control mt-3"
                            placeholder="Introduce el numero"
                            type="text">
                        </input>
                        {
                            modoEdicion ?
                                (
                                    <input
                                        type="submit"
                                        value="Editar"
                                        className="btn btn-dark btn-block mt-3">
                                    </input>
                                )
                                :
                                (
                                    <input
                                        type="submit"
                                        value="Registrar"
                                        className="btn btn-dark btn-block mt-3">
                                    </input>
                                )
                        }

                    </form>
                    {
                        error ?
                            (
                                <div>
                                    <p>{error}</p>
                                </div>
                            )
                            :
                            (
                                <span></span>
                            )
                    }
                </div>
                <div className="col">
                    <h2>Lista de personas</h2>
                    <ul className='list-group'>
                        {
                            usuario.length !== 0 ? (
                                usuario.map(item => (
                                    < li
                                        className='list-group-item'
                                        key={item.id} >
                                        { item.nombre} -- { item.numero}
                                        <button
                                            onClick={(id) => { borrarUsuario(item.id) }}
                                            className='btn btn-danger float-right'>
                                            Eliminar
                                        </button>
                                        <button
                                            onClick={(id) => { actualizarUsuario(item.id) }}
                                            className='btn btn-info float-right mr-2'>
                                            Actualizar
                                        </button>
                                    </li>
                                ))
                            )
                                :
                                (
                                    <span>No hay usuarios</span>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Formulario
