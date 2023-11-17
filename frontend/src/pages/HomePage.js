import '../styles/home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="Avion"/>
        </div>
        <div className="columnas">
            <section className="Bienvenidos">
                <h2> Bienvenidos a Transportes Anónimos</h2>
                <p>
                    Bienvenidos, somos un transporte exclusivo, privado y low cost. 
                    Nuestra empresa comenzó en 2015, en Argentina Bs as y desde entonces nos fuimos mundiales. Trabajamos en paises de Europa y America.
                    Las personas nos eligen por nuestra excelencia y calidad de transportes.
                    Contamos con ejecutivos e inversores de amplia experiencia en la industria.
                    Somos una compañia solida, , cumplimos con nuestra palabra y actuamos en consecuencia. Nos importa la seguridad y cumplimos con todos los procedimientos y regulaciones establecidas. SIEMPRE.
                    Nos interesamos por las personas, somos empáticos, cercanos y amigables, aceptando al otro tal y como es y dándole su lugar. Sin personas no tenemos nada y nos entusiasma ayudarlas.
                    Estamos 100% orientados a la mejora continua y buscamos simplificar nuestros procesos y potenciar nuestros recursos. Nos impulsa a negociar el mejor contrato y ofrecer los mejores precios.
                    <b>Te invitamos a recorrer nuestra pagina!</b>

                </p>
            </section>
            <section className="Testimonios">
                <h3>Testimonios de usuarios</h3>
                <div className="Testimonio">
                    <span className="cita">Excelente la privacidad y la comodidad</span>
                    <span className="autor">Famoso anónimo</span>
                    <hr/>
                    <span className="cita">Los volvería a elegir!</span>
                    <span className="autor">Melisa juarez</span>
                </div>
            </section>
        </div>

    </main>

    );
}

export default HomePage;