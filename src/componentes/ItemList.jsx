// import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"



function ItemList({  }) {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const db = getFirestore();
    

    const productsCollection= collection(db,"Lista de productos");

    

    getDocs(productsCollection).then((snapshot) => {
      const productList = snapshot.docs.map((docu) => ({
        id: docu.id, 
        ...docu.data(), 
      }));


      setProducts(productList); 
    });
  }, []);


  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="tarjeta">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: "200px"}} />
            <p><strong>${product.price}</strong></p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}




export default ItemList;


// *****************************************************************************

// function ItemList({ products }) {
//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id} className="tarjeta">
//           <h2>{product.name}</h2>
//           <img src={product.image} alt={product.name} style={{ width: '150px' }} />
//           <p>Precio: ${product.price}</p>
//           <p>{product.description}</p>
//           <button>
//             <Link to={`/item/${product.id}`}>Ver detalles</Link>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

  // return (
    

  //       <>
  // //      <h2>{data.name}</h2>
  // //      <h3>{data.description}</h3>
  // //      <h2>{data.price}</h2>
  // //    </>
    


    // <div>
    //   {products.map(product => (
    //     <div key={product.id} className="tarjeta">
    //       <h2>{product.name}</h2>
    //       <img src={product.image} alt={product.name} style={{ width: '150px' }} />
    //       <p>Precio: ${product.price}</p>
    //       <p>{product.description}</p>
    //       <button>
    //         <Link to={`/item/${product.id}`}>Ver detalles</Link>
    //       </button>
    //     </div>
    //   ))}
    // </div>

  // );

