import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {

    const products = [
        {id: 1, name: 'Laptop', price: '123', img: 'https://www.parallels.com/fileadmin/res/img/homepage/2021/home-pd_xs_upd_2.jpg'},
        {id: 2, name: 'Laptop 2021', price: '200', img: 'https://cdn.vox-cdn.com/thumbor/vGTTyiMMUHIHLs0FjoF0z99m6_E=/0x0:2040x1360/1200x800/filters:focal(895x304:1221x630)/cdn.vox-cdn.com/uploads/chorus_image/image/68592461/vpavic_4291_20201113_0366.0.0.jpg'},
        {id: 3, name: 'Laptop 2022', price: '300', img: 'https://www.soydemac.com/wp-content/uploads/2014/10/imac-retina.jpg'},
    ]


    return (
        <div>
            <CardGroup>
            {
                products.map((product) => <Card2 product={product}/>)
            }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;