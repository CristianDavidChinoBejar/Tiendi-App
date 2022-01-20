import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {getItems} from '../../mock';

const ItemDetailContainer = () => {
  const [details, setDetails] = useState()
  const {id} = useParams();
  console.log("getItems:", getItems);

  useEffect(() => {
    getItems
    .then(data =>{
        if(id){
            console.log("se muestra filter");
            // console.log(typeof(id));
            const detailFilter = data.filter( (items) =>  items.id === parseInt(id))
            setDetails(detailFilter)
        }else{
            console.log("se muestra category");
            setDetails(data)
        }
    })

  }, [id])

  return (
    <div>
      {
        details && <ItemDetail key={details.id} detalles = {details[0]} />
      }
       
    </div>
  )

}

export default ItemDetailContainer
