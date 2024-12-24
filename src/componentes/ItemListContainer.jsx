import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ItemList from './ItemList';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (categoryId) {
        setFilteredProducts(products.filter(product => product.category === categoryId));
      } else {
        setFilteredProducts(products);
        setCategories([...new Set(products.map(product => product.category))]);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [categoryId]);

  return (
    <section>
      <h1>Productos</h1>
      {!categoryId && (
        <div>
          <h2>Categorías</h2>
          <ul>
            {categories.map(category => (
              <li key={category}>
                <Link to={`/productos/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ItemList products={filteredProducts} />
    </section>
  );
}

export default ItemListContainer;


