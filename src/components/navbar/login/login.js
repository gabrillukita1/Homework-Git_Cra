import React, { Component } from "react";
import "./login.css";
import Button from '@mui/material/Button';

class Login extends Component {
    loginUrl = () => {
        const url = new URL("https://accounts.spotify.com/authorize")

        const params = {
            response_type: "token",
            client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
            scope: "playlist-modify-private",
            redirect_uri: "http://localhost:3000/callback",
        }

        url.search = new URLSearchParams(params).toString();
        return url.href;
    }

    render() {
        // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
        return (
            <div className="login">
                <Button variant="contained" href={this.loginUrl()}>
                    Login
                </Button>
            </div>
        )
    }
}

export default Login;