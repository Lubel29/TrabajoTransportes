import '../styles/contacto.css'

const ContactoPage = (props) => {
    return (
        <main className="holdercontacto">
            <div>
                <h2> Ante cualquier inquietud, estamos para responderte. </h2>
                <hr />

                <h4>Nuestra prioridad sos vos, nos interesa tu opinion y nos interesa que recibas la mejor
                    informacion para tus consultas.
                    Tenemos a los mejores asesores disponibles.
                    No dudes en consultarnos por acá o por cualquiera de nuestras redes.
                </h4>
            
            <form>
                <div>
                    <i className="fa-regular fa-envelope-open fa-2xl"></i>
                    <div className="formulario">
                    <h2>Contacto</h2>

                    <label for="name"> Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Nombre" />

                    <label for="phone">Telefono</label>
                    <input type="tel" name="phone" id="phone" placeholder="Telefono" />

                    <label for="email"> Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" />

                    <label for="message"> Mensaje</label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

                    <input className="btn" type="submit" value="Enviar" />
                </div>
                </div>
            </form>
        </div>
        </main>

    );
}

export default ContactoPage;