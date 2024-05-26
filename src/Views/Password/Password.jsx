import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "./PasswordValidator";
import styles from "./Password.module.css";
import { useAuth } from "../../AuthContext";

import whatsappImg from "../../Assets/whatsapp1.png";
import instagramImg from "../../Assets/instagram1.png";
import tiktokImg from "../../Assets/tiktok1.png";
import spotifyImg from "../../Assets/spotify1.png";

const CORRECT_PASSWORD = process.env.REACT_APP_CORRECT_PASSWORD;

function Password() {
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate({ password: input });
        if (Object.keys(validationErrors).length === 0) {
            if (input === CORRECT_PASSWORD) {
                login();
                navigate("/Oraculo");
            } else {
                setErrors({ password: "Contraseña incorrecta" });
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>¡Bienvenid@!</h1>
                <h2 className={styles.subtitle}>Iniciar sesión</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="password" className={styles.label}>Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className={styles.input} 
                        value={input} 
                        onChange={handleChange} 
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                    <button type="submit" className={styles.button}>Ingresar</button>
                </form>
            </div>
            <div className={styles.text}>
                <p>Este acceso es sólo para tu uso personal.<br/>La contraseña es individual e intransferible.<br/>Todos los derechos reservados.<br/>Gracias.</p>
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

export default Password;
