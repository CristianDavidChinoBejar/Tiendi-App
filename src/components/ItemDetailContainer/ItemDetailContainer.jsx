import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import prod from '../../mock';

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([])
  const {id} = useParams();
  console.log("prod:", prod);
  
  useEffect(() => {
    if(id){
      console.log("id:", id);
      const detailFilter = prod.filter( (items) => items.id === parseInt(id))
      console.log("detailFilter:", detailFilter);
      setDetails(detailFilter)
    }
  }, [])

  return (
    <div>
      {
        <ItemDetail key={details.id} detalles = {details} />
      }
       
    </div>
  )

}

export default ItemDetailContainer
