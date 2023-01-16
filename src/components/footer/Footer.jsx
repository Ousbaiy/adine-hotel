import React from 'react'
import LogoWhite from "../../assets/img/logo-white.svg"
import "./style.scss"

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto'>
        <img src={LogoWhite} alt="logo" />
        Copyright &copy; 2022. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer