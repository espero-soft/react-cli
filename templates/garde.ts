/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : {{date}}
*/
import { Navigate } from 'react-router-dom';

const {{Name}} = ({ children }: any) => {

  let isAuth = false
  let auth: any = localStorage.getItem("auth")

  if (auth) {
    const { token, userId } = JSON.parse(auth)
    isAuth = !!token && !!userId
  }

  return isAuth ? children : <Navigate replace to="/signin" />
  
}

export default {{Name}};


