import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} className="tarjeta">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={{ width: '150px' }} />
          <p>Precio: ${product.price}</p>
          <Link to={`/item/${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

