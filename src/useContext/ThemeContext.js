import React, { createContext, useEffect, useState } from 'react'


const ThemeContext=createContext();

const ThemeProvider = ({children}) => {
  const [data,setData]=useState({});
    const value={
      data,
      setData
    }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext,ThemeProvider}
