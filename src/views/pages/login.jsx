import '../style/login.css'
import imagenes from '../../assets/imagenes'

export const Login = () => {
    return (
        <div className='cont mb-4'>
            <div className='d-flex justify-content-center'>
                <div className="card text-center p-5">
                    <div className='mb-5'>
                        <h2>Bienvenido</h2>
                    </div>
                    
                    <button className="btn btn-primary mb-4" type="button">Crear cuenta</button>
                    <button className="btn btn-outline-primary mb-4" type="button">Iniciar sesión</button>
                    
                    <a className='mb-5' href="#">
                        <img src={imagenes.iconG} alt="" />
                    </a>
                </div>
            </div>
        </div>

    )
}
