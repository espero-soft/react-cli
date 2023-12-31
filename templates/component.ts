/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : {{date}}
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './{{Name}}.css';


interface {{Name}}Props {
 
}


const {{Name}} : FC<{{Name}}Props> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[value])

  return (
    <Fragment>
    {
      loading ?
      <Loading />
      :
      <div className="{{Name}}">
          {{Name}} Component
      </div>
    }
    </Fragment>
  );
}

export default {{Name}};