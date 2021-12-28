import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [details, setDetails] = useState({})
  
  const productDetails = 
      { 
          id: 1, 
          title: 'Teclado Gamer Luces Led Ergonomico Antideslizante', 
          description: 'Teclado - Teclado retroiluminado (16.8 millones de colores) - Conexión USB 2.0', 
          price: '$ 5300',
          foto: 'https://spacegamer.com.ar/img/Public/1058-producto-teclado-mecanico-redragon-kumara-white-switch-blue5-6210.jpg'
      };

  const getItemsDetails = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(productDetails)
    }, 2000);
})

  useEffect(() => {
    getItemsDetails
    .then( res => { setDetails (res)})
  }, [])

  // console.log(details);

  return (
    <div>
      {
        <ItemDetail detalles = {details} />
      }
       
    </div>
  )

}

export default ItemDetailContainer
