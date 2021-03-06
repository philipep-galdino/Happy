import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'

const mapBoxURL = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Bahia</strong>
                    <span>Jequié</span>
                </footer>
            </aside>

            <Map 
                center={[-13.8781004,-40.0735607]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={mapBoxURL} />

                <Marker
                    icon={mapIcon}
                    position={[-13.8781004,-40.0735607]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar da kali
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphanagesMap