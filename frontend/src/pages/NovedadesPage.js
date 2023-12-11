import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/novedades.css'

const Novedades = (props) => {
    const [loading,setLoading] = useState(false);
    const [novedades,setNovedades] = useState([]);
    
    useEffect(() => {
            const cargarNovedades = async() => {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/novedades');
                setNovedades(response.data);
                setLoading(false);
            };
            
            cargarNovedades();
},[]);
return (
    <main className='holder'>
        <div className='Novedades'>
        <h2>Consulte su viaje</h2>
        {
            loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.fecha} subtitle={item.salida}
                    imagen={item.imagen} body={item.arribo} />)
            )
        }
        </div>
        <section className="Info">
                <h3>IMPORTANTE</h3><i class="fa-solid fa-circle-exclamation fa-shake fa-lg"></i>
                <span>Para los viajes de larga distancia necesitás confirmar tu viaje entre las 72 y 24 horas previas a la partida de tu servicio, para el viaje de ida y para el de vuelta con tu número de reserva. Es muy importante ya que sin esto no vas a poder subir al tren.</span>
            </section>
    </main>            

    );
}

export default Novedades;