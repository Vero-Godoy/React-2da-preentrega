import { useParams } from 'react-router-dom';
import { products } from '../data/products';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const product = products.find(product => product.id === parseInt(itemId));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
