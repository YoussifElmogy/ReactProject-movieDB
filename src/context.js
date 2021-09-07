import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b7225a6e`
console.log(API_ENDPOINT)


const AppContext = React.createContext()

const AppProvider = ({ children }) => {


  const [query,setquery]=useState("superman");
  const {isLoading,error,data:movies}=useFetch(`&s=${query}`)



  return <AppContext.Provider value={{
    error,query,movies,isLoading,setquery

  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
