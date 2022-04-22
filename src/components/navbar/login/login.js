import React, { Component } from "react";
import "./login.css";
import Button from '@mui/material/Button';
import Logo from '../../../assets/image/Logo.jpg';

class Login extends Component {
    loginUrl = () => {
        const url = new URL("https://accounts.spotify.com/authorize")

        const params = {
            response_type: "token",
            client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
            scope: "playlist-modify-private",
            redirect_uri: process.env.REACT_APP_URL,
        }

        url.search = new URLSearchParams(params).toString();
        return url.href;
    }

    render() {
        return (
            <div className="container">
                <img src={Logo} alt="logo" />
                <h1>Playpedia</h1>
                <div className="login">
                    <Button variant="contained" href={this.loginUrl()}>
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;