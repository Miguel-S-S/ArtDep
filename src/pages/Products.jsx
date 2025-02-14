 //src/pages/Products.jsx
//import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../components/ProductCard';
import Product from '../models/Product';
import imagen1 from '../assets/imagen1 (1).jpeg';
import imagen2 from '../assets/imagen1 (2).jpeg';
import imagen3 from '../assets/imagen1 (3).jpeg';
import imagen4 from '../assets/imagen1 (9).jpg';
import imagen5 from '../assets/imagen1 (10).jpg';
import imagen6 from '../assets/imagen1 (11).jpg';


const products = [
  new Product(1, 'Chaleco 15 Kgs', '$3500', imagen1),
  new Product(2,'Chaleco 10 Kgs', '$2000', imagen2), 
  new Product(3,'Tobilleras pesos varios','$852r', imagen3),
  new Product(4, 'Corebag', '$1000', imagen4),
  new Product(5,'Corebag', '$20100', imagen5), 
  new Product(6,'Bandas para algo','$3500', imagen6),
];

export default function Products() {
  //configurar el carrusel
  const settings = {
    dots: true, // muestra los puntos de navegacion
    infinite: true, // permite un desplazamiento infinito
    speed: 500, // velocidad de transicion (en ms)
    slidesToShow: 3, //numero de productos visibles a la vez
    slidesToScroll: 1, // numero de productos visibles a la vez
    responsive:[
      {
      breakpoint: 1024,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1, 
      },
    },
    {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1>Productos</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} >
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}