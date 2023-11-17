import '../styles/novedades.css'

const Novedades = (props) => {
    return (
        <main className="holder">
        <div className="novedades">
            <h2>Novedades</h2>
            <h3>Nuevo recorrido - TREN</h3>
            <p>Informamos que nuestro tren tendrá un nuevo ramal, será desde Buenos Aires a Cordoba.
                La duracion del viaje es de tan solo 6hs! Ya que nuestros servicios cuentan con alta tecnología, similar
                a la del tren bala en Japón.
                Tomamos ruta directa y exclusiva, para que su viaje sea rapido y seguro.
            </p>
            <img src="img/novedades/High_speed_railway_map_4_es.jpg" width="400" alt="Mapa"/>
        </div>

        <section className="Info">
            <h3>IMPORTANTE</h3><i class="fa-solid fa-circle-exclamation fa-shake fa-lg"></i>
            <span>Para los viajes de larga distancia necesitás confirmar tu viaje entre las 72 y 24 horas previas a la partida de tu servicio, para el viaje de ida y para el de vuelta con tu número de reserva. Es muy importante ya que sin esto no vas a poder subir al tren.</span>
        </section>
    </main>
    );
}

export default Novedades;