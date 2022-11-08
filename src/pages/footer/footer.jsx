import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './footer-style.css'
import { Typography } from '@mui/material';
import newsLetter from '../../assets/Banner/Newsletter.png'
import emailjs from '@emailjs/browser'
import toast,{ Toaster } from "react-hot-toast";
import spotify from '../../assets/Banner/spotify.png'
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
                <div class="form-container">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <TextField type="email" id="outlined-basic" label="Email" variant="outlined" name="to_person" value={name} onChange={handleChange}/>
                    <Button type="submit "className='MuiButtonBase' variant="outlined">Enviar</Button>
                </Box>
                </div>
                </div>
                <div class="links-container"><a><link rel="stylesheet" href="https://open.spotify.com/artist/5B5XqL4rO1jF2Y76LC0E7P" /><img src={spotify} alt= "Spotify" width={50}/></a></div>
            </footer>
        </>
    );
}