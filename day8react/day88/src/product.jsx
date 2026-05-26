import { useParams } from "react-router-dom";

function Product() {

  const { id } = useParams();

  return (
    <>
      <h1>Product Page</h1>

      <h2>Product ID : {id}</h2>
      <h1>smartphones</h1>
    </>
  )
}

export default Product