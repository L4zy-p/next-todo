"use client";

import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import { MainContext } from '../context/MainContext'

const ThemeIcon = () => {
  const { darkTheme, toggleDarkTheme } = useContext(MainContext)

  return (
    <span onClick={toggleDarkTheme}>
      {
        darkTheme
          ? <FaMoon size={24} className='top-navigation-icon' />
          : <FaSun size={24} className='top-navigation-icon' />
      }
    </span>
  )
}

export default ThemeIcon