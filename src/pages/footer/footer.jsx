import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './footer-style.css'
import { Typography } from '@mui/material';
import newsLetter from '../../assets/Banner/Newsletter.png'
import emailjs from '@emailjs/browser'
import toast,{ Toaster } from "react-hot-toast";
import Spotify from '../../assets/Banner/Spotify-8.png'
import Facebook from '../../assets/Banner/Facebook-8.png'
import Instagram from '../../assets/Banner/Instagram-8.png'
import Youtube from '../../assets/Banner/Youtube-8.png'
import TikTok from '../../assets/Banner/Tiktok-8.png'

export default function Footer(props) {
    const [name, setName] = React.useState('');
    const form = React.useRef();
    const handleChange = (event) => {
      setName(event.target.value);
    };

    function sendEmail(event){
        event.preventDefault()
        //'SERVICE_ID' 'TEMPLATE_ID' event.target 'publickey'
        emailjs.sendForm("gmail_message", "template_b3j0o2g", form.current, "uHyB5gHqZfLCxNIFp")
        .then((response) => {toast.success('Se ha enviado con exito')})
        .catch((error) => {toast.error("Lo sentimos, ha ocurrido un error con el envio")})

        event.target.reset()
    }
    
    return (
        <>  
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <footer class='footer' id='newsLetter' ref={props.reference}>
                <div class="footer-content-container">
                <img src={`${newsLetter}`} alt='news-letter' class='newsLetter'></img>
                <Typography className="footer-text">Accedé a mi contenido de news letter
                    para poder adquirir videos de lirics y canciones que no saque aún</Typography>
                
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={sendEmail}
                    ref={form}
                    className="form-style"
                >
                    <TextField className='text-field' type="text" id="outlined-basic" label="Email" variant="outlined" name="to_person" value={name} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please enter a valid email address"/>
                    <Button type="submit "className='MuiButtonBase' variant="outlined">Enviar</Button>
                </Box>
                </div>
                
                <div class="links-container">
                    <a href="https://open.spotify.com/artist/5B5XqL4rO1jF2Y76LC0E7P"><img src={Spotify} alt= "Spotify" width={50}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100087363105854"><img src={Facebook} alt= "Facebook" width={50}/></a>
                    <a href="https://www.instagram.com/restdeep.pf/"><img src={Instagram} alt= "Instagram" width={50}/></a>
                    <a href="https://www.youtube.com/c/RestDeep"><img src={Youtube} alt= "Youtube" width={50}/></a>
                    <a href="https://www.tiktok.com/@restdeeppf?lang=es"><img src={TikTok} alt= "TikTok" width={50}/></a>
                </div>
            </footer>
        </>
    );
}