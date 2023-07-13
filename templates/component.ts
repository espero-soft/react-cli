/*
GENERATE WITH MUDEY FORMATION
CREATED AT : {{date}}
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
import Loading from '../Loading/Loading';
import './{{Name}}.css';


interface {{Name}}Props {
 
}


const {{Name}} : FC<{{Name}}Props> = () =>{

    // const entityService = new EntityService()
    const [state, setState] = useState<any>(null)
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