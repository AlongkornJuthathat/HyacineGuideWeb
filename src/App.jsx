import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div class="grid-container">
      <div class="left-side-page">
      </div>

      {/* inside article part */}
      <div class="inside-article">
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text">Hyacine Guide</h1>
          </div>
        </div>

        {/* updated version */}
        <div class="container">
          <div id="updated-version">
            <i>Latest Updated for Version 3.3</i>
          </div>
        </div>

        {/* Hyacine's splash art */}
        <div class="container">
          <div>
            <img id="hyacine-splash-art" src="src/assets/Hyacine_Character_Splash_Art.webp"/>
          </div>
        </div>

        {/* introduction */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text">Introduction</h1>
          </div>
        </div>
        <div class="container">
          <div id="introduction-text-description">
            <p>
              Hyacine is 5☆ Wind-type Head Healer of The Twilight Courtyard in Honkai: Star Rail following the Path of Remembrance.
              Hyacine is a healer character who can summon memosprite Little Ica and increase all allies' max HP.
              When allies' HP decreases, Little Ica instantly restores their HP.
              The more healing Hyacine and Little Ica provide, the higher the DMG Little Ica deals to enemies.
              This guide will help you with her best Relics, Light Cones, teams, synergies, and more!</p>
          </div>
        </div>

        {/* infographic */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text">Infographic</h1>
          </div>
        </div>
        <div class="container">
          <div>
            <img id="hyacine-infographic" src=""/>
          </div>
        </div>

        {/* character overview */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text">Character Overview</h1>
          </div>
        </div>
        <div class="grid-container-pro-con">
          <div class="pro">
            <div class="container">
              <div class="small-box">
                <h3 class="small-box-text">Pros</h3>
              </div>
              <ul id="pro-bullet-point">
                <li>Extremely strong AoE damage</li>
                <li>Provide all allies' max HP increase</li>
                <li>Provide teamwide debuff cleansing</li>
                <li>Extremely strong AoE healing</li>
                <li>Very speedy</li>
                <li>My sky can't possibly be this cute</li>
              </ul>
            </div>
          </div>
          <div class="con">
            <div class="container">
              <div class="small-box">
                <h3 class="small-box-text">Cons</h3>
              </div>
              <ul id="con-bullet-point">
                <li>SP-inefficient</li>
                <li>Reliant on Ultimate for max HP buff and to deal damage</li>
                <li>Signature Light Cone provides significant benefits for multiple teams</li>
                <li>Her cuteness will melt your heart</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text">Playstyle</h2>
          </div>
        </div>
      </div>

      <div class="right-side-page">
      </div>
    </div>
    </>
  );
}

export default App
