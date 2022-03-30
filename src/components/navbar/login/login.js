import React, { Component } from "react";
import "./login.css";

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
                <a href={this.loginUrl()} >
                    Login
                </a>
            </div>
        )
    }
}

export default Login;