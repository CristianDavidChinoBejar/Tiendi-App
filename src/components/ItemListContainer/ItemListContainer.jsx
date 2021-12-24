import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ( ) => {

    const urlProd_1 = 'https://static.mercadonegro.pe/wp-content/uploads/2019/01/23102112/musicas_sem_copyright.png'
    const urlProd_2 = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/07/razer-huntsman-mini-caja-2012177.jpg?itok=JQfAt_Sd'
    const urlProd_3 = 'https://mullbrand.com/wp-content/uploads/2019/11/bancoa-de-musica-sin-copyright.jpg'

    const prod = [
        { 
            id: 1, 
            title: 'Teclado REDRAGON', 
            description: 'Kumara - Switch Red', 
            price: 5300, 
            pictureUrl: urlProd_1
        },
        { 
            id: 2, 
            title: 'Teclado Razer', 
            description: 'Modelo - Blackwidow', 
            price: 9500, 
            pictureUrl: urlProd_2
        },
        { 
            id: 3, 
            title: 'Teclado Logitech', 
            description: 'Modelo x', 
            price: 7000, 
            pictureUrl: urlProd_3
        }
    ]


    return (
        <div>
            <ItemList prod = {prod} />
        </div>
    )
}

export default ItemListContainer