/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/09/2023 15:31:37
*/
import React, { FC, useEffect } from 'react';
import './PublicRoute.css';


interface PublicRouteProps {
 
}


const PublicRoute : FC<PublicRouteProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="PublicRoute">
          PublicRoute Component
      </div>
  );
}

export default PublicRoute;