// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/ProductCard";
//import Product from "../models/Product"; // Corrige la importación del modelo de Producto

export default function Products() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "", 
    price: "",
    image: "",
  }); //estado del nuevo producto

  // Función para obtener productos de Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Asegúrate de que la colección existe
      const fetchedProducts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts); // Actualiza el estado con los productos obtenidos
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Cargar productos cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value});
  };

    // Eliminar un producto de Firebase
    const deleteProduct = async (id) => {
      const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
      if (!confirmDelete) return;
  
      try {
        await deleteDoc(doc(db, "products", id));
        console.log("Producto eliminado:", id);
        fetchProducts(); // Recargar productos
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    };

  // Función para agregar un producto a Firestore
  const addProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image){
      alert("complete la informacion del producto");
      return
    }

    try {
      const docRef = await addDoc(collection(db, "products"), newProduct);
      console.log("producto agregado exitosamente con el id:", docRef.id);      
      setNewProduct({ name: "", description: "", price: "", image: ""}); // limpiar
      fetchProducts(); // Recargar los productos después de agregar uno nuevo
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div>
      <h1>Productos</h1>
       {/* Formulario para agregar productos */}
       <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={newProduct.image}
          onChange={handleInputChange}
        />
        <button onClick={addProduct}>Agregar Producto</button>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={{ position: "relative", textAlign: "center" }}>
          <ProductCard product={product} />
          <button
            onClick={() => deleteProduct(product.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
      </Slider>
    </div>
  );
}
