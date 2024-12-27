import { useState } from 'react';
import ItemList from './ItemList';
import { products } from '../data/products';

const categorias = {
  ALIMENTOS: 'Alimentos',
  ACCESORIOS: 'Accesorios',
  JUGUETES: 'Juguetes',
};

function ItemListContainer() {
  const [selectedCategory, setSelectedCategory] = useState('');


  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section>
      <h1>Productos</h1>
      <div>
        <button onClick={() => setSelectedCategory(categorias.ALIMENTOS)}>Alimentos</button>
        <button onClick={() => setSelectedCategory(categorias.ACCESORIOS)}>Accesorios</button>
        <button onClick={() => setSelectedCategory(categorias.JUGUETES)}>Juguetes</button>
        <button onClick={() => setSelectedCategory('')}>Mostrar Todos</button>
      </div>
      <ItemList products={filteredProducts} />
    </section>
  );
}

export default ItemListContainer;
