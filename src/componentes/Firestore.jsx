
import { useEffect, useState } from 'react'
import {getFirestore,doc,getDoc} from "firebase/firestore";


function Firestore() {

    const  [data,setData] = useState({});

  const db = getFirestore();

  useEffect(() => {
    
    const prodRef = doc(db,"Lista de productos","vIaPRjAIJ3I8NL64YgG8");

    // traigo el elemento

    getDoc(prodRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setData(snapshot.data());
    })
  },[])

  //  return (
  //    <>
  //      <h2>{data.name}</h2>
  //      <h3>{data.description}</h3>
  //      <h2>{data.price}</h2>
  //    </>
  //  )
}

export default Firestore
