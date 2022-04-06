import React, { useState } from "react";
import "./formPlaylist.css";

const FormPlaylist = ({
    defaultValue = {
        name: "",
        description: "",
    },
    onSubmit,
}) => {
    const [form, setForm] = useState(defaultValue);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    // Remove event default and callback to onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form className="form-playlist" onSubmit={handleSubmit}>
            <div class="form">
                <div class="title">Playlist</div>
                <div class="subtitle">Let's create your playlist!</div>
                <div class="input-container ic1">
                    <input 
                        id="playlist-name"
                        name="name"
                        onChange={handleOnChange}
                        class="input" 
                        type="text" 
                        minLength={10} 
                        placeholder=" " 
                    />
                    <div class="cut"></div>
                    <label for="playlist-name" class="placeholder">Your playlist name..</label>
                </div>
                <div class="input-container ic2">
                    <input 
                        id="description" 
                        name="description"
                        onChange={handleOnChange}
                        class="input" 
                        type="text" 
                        placeholder=" " 
                    />
                    <div class="cut"></div>
                    <label for="description" class="placeholder">Description..</label>
                </div>
                <button type="text" class="submit">submit</button>
            </div>
        </form>
    );
};

export default FormPlaylist;
