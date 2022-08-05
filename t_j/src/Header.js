import React from 'react'
import logo from "./Fill 213.png"

export default function Header() {
    return (

    <div className = "header">
        <img src = {logo} alt = "" className = "logo" />
        <p className = "header-text">my travel journal.</p>
    </div>
    );
}