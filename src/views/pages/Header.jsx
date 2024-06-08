import '../style/header.css'
import imagenes from '../../assets/imagenes'

export const Header = () => {
    return (
        
        <div className='header mb-4'>
            <img className="head" src={imagenes.head} alt=""/>    
            <img className="head-2 " src={imagenes.head2} alt=""/>
        </div>
        
    )
}

