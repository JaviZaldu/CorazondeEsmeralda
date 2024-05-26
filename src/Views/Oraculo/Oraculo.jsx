import React from "react";
import styles from "./Oraculo.module.css";
import logo from "../../Assets/tituloArcoirisChica.png";
import { getRandomLink } from "./randomLink";

import whatsappImg from "../../Assets/whatsapp2.png";
import instagramImg from "../../Assets/instagram2.png";
import tiktokImg from "../../Assets/tiktok2.png";
import spotifyImg from "../../Assets/spotify2.png";

const DRIVE_ORACULO = process.env.REACT_APP_DRIVE_ORACULO;

function Oraculo() {

    const handleRandomLinkClick = () => {
        const randomLink = getRandomLink();
        window.open(randomLink, "_blank");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <div className={styles.textContent}>
                    <p className={styles.text}>Respira suave, tráete a este momento presente.</p>
                    <p className={styles.text}>Abre y guía tu espacio sagrado</p>
                    <div className={styles.fraseContent}>
                        <p className={styles.frase}><b>Oración apertura del Espacio Sagrado:</b><br/>“A ALEPH HEY YUD HEY y a GAIA:
                            <br/>Bendigan este oráculo y a quiénes lo utilizamos.
                            <br/>Que sea una puerta hacia una nueva posibilidad,<br/>de mayor expansión y consciencia.
                            <br/>Que nuestra conexión con la Tierra y la Divinidad<br/>nos acerque a nuestro Verdadero Ser.
                            <br/>Que nuestra intuición se haga cada vez más clara y contundente,<br/>y nuestra escucha más receptiva.
                            <br/>Que todas las personas que lo usen se sientan<br/>alegres, amadas, poderosas, inspiradas y plenas.
                            <br/>Que sea un instrumento de crecimiento y evolución,<br/>al servicio de la Vida y en beneficio del Bien Mayor.
                        </p>
                        <p className={styles.frase}>
                            Convoco también a mis animales de poder y a mis guías,<br/>solo seres de Luz, para que protejan este espacio,
                            <br/>les pido que cuando no esté en mi lugar, me acompañen a regresar a mi centro;<br/>que me inspiren para que despierte mi sabiduría interior;
                            <br/>que me guíen hacia mi orden interior; que me muestren la Verdad.<br/>Elijo manifestar mi deseo auténtico y compartirlo con el Mundo
                            <br/>como mi aporte creativo y único.<br/>Esa es mi Luz.
                            <br/>Gracias, gracias, gracias”.
                        </p>
                    </div>
                    <div className={styles.PContent}>
                        <p className={styles.Ptext}>Una vez abierto tu espacio, puedes hacer una pregunta específica, intencionar un mensaje para tu día,<br/>pedir una carta en general, o una carta para el punto exacto en el que te encuentras hoy en tu viaje con el E-Book.</p>
                        <p className={styles.Ptext}>Cuando estés list@ haz click el botón “quiero mi carta” y el oráculo te llevará al mensaje que tiene para vos en este presente.
                        <br/>Recuerda que puedes leer la descripción completa de tu carta en el E-Book.
                        </p>
                        <p className={styles.Ptext}>También puedes acceder al mazo completo haciendo click en el botón correspondiente.</p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleRandomLinkClick}>Quiero mi carta</button>
                    <a href={DRIVE_ORACULO} target="_blank" rel="noopener noreferrer" className={styles.button2}>Acceder al mazo completo</a>
                </div>
                </div>
                <div className={styles.links}>
                    <a href="https://www.tiktok.com/@corazon.de.esmeralda" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src={tiktokImg} alt="TikTok" className={styles.icon} />
                    </a>
                    <a href="https://open.spotify.com/playlist/01GT2h0mxYgm4PCuEleHIh?si=b80dd13ac8b7426f" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src={spotifyImg} alt="Spotify" className={styles.icon} />
                    </a>
                    <a href="https://wa.link/mu5zqa" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src={whatsappImg} alt="WhatsApp" className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/corazon.de.esmeralda/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src={instagramImg} alt="Instagram" className={styles.icon} />
                    </a>
                </div>
        </div>
    );
}

export default Oraculo;
