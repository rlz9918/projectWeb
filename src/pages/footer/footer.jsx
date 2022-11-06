import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './footer-style.css'
import { Typography } from '@mui/material';
import newsLetter from '../../assets/Banner/Newsletter.png'
export default function Footer() {
    return (
        <>
            <footer class='footer' id='newsLetter'>
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
                    
                >
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <Button className='MuiButtonBase' variant="outlined">Enviar</Button>
                </Box>
                </div>
                </div>
            </footer>
        </>
    );
}