import '../../styles/components/layout/footer.css'

const Footer = (props) => {
    return (
        <footer>
        <div className="contenidoFooter">
            <div className="iconosRedes">
            <i className="fa-brands fa-facebook"></i>Seguinos en Facebook
            <i className="fa-brands fa-instagram"></i>Seguinos en Instagram
            <i className="fa-brands fa-x-twitter"></i>Seguinos en Twitter
            </div>
            <hr/>
        </div>
        <p>Diseñado por Lucia Belmonte - &copy;2023 </p>
    </footer>
    );
}

export default Footer;