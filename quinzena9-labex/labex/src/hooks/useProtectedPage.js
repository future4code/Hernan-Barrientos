import React from "react"
import { useEffect } from "react"
import { useHistory } from "react-router"

export const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() =>{
      const token = localStorage.getItem('token')
      
      if(token === null){
        console.log('Não está logado')
        alert('Acesso restrito! Entre com Login e Senha')
        history.push("/login")
      }
  
  
  
    }, [])
  }