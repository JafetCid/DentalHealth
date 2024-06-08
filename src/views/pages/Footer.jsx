import imagenes from "../../assets/imagenes"
import '../style/footer.css'

export const Footer = () => {
    return (
        
        <footer className="footer">
            <img className="foo" src={imagenes.foot} alt="" />
            <img className="foo2" src={imagenes.foot2} alt="" />
        </footer>
    )
}