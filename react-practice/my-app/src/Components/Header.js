import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bio from '../Pages/Bio'
import Home from '../Pages/Home'
import Legacy from '../Pages/Legacy'
import Links from '../Pages/Links'




export default class Header extends Component {
  render() {
    return (
      <div class="head-container">
    <header class="header">
        <div class="header-container">
            <h1>Spider-Man</h1>
        </div>
        <nav class="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bio">Biography</a></li>
                    <li><a href="/legacy">Cultural impact and legacy</a></li>
                    <li><a href="/links">Links</a></li>
                </ul>
        </nav>
    </header>
      </div> 
    )
  }
}
