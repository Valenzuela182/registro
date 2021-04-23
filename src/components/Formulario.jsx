import React, { useEffect, useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [usuario, setUsuario] = useState([])
    const [error, setError] = useState('')

    const setUsuarios = (e) => {
        e.preventDefault()
        if (!nombre.trim() && !numero.trim()) {
            setError('Debe llenar ambos campos')
        } else {
            if (!nombre.trim()) {
                setError('Campo nombre vacio')
            } else
                if (!numero.trim()) {
                    setError('Campo numero vacio')
                }
        }
    }
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <h2>Formulario de usuario</h2>
                    <form className="form-group"
                        onSubmit={setUsuarios}>
                        <input
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="form-control"
                            placeholder="Introduce el nombre"
                            type="text">
                        </input>
                        <input
                            onChange={(e) => { setNumero(e.target.value) }}
                            className="form-control mt-3"
                            placeholder="Introduce el numero"
                            type="text">
                        </input>
                        <input
                            type="submit"
                            value="Registrar"
                            className="btn btn-dark btn-block mt-3">
                        </input>
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
                </div>
            </div>
        </div>
    )
}

export default Formulario
