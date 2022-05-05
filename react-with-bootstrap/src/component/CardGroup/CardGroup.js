import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop', price: '123', img: 'https://www.ubuy.com.sa/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFoNlBwR2F6OUwuX0FDX1NMMTUwMF8uanBn.jpg'},
        {id: 2, name: 'Laptop 2021', price: '200', img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Fm88?ver=c801&q=90&m=6&h=698&w=1083&b=%23FFFFFFFF&l=f&o=t&aim=true'},
        {id: 3, name: 'Laptop 2022', price: '300', img: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/img-0224/X-Pro-2022.png'},
    ]
    return (
        <div className="card-group">
            {
                products.map((product) => <Card product={product}/>)
            }
      </div>
    );
};

export default CardGroup;