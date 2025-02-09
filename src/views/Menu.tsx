// frontend/src/views/Menu.tsx
import React from "react";
import "../styles/Menu.css";

export const Menu: React.FC = () => {
  return <></>;
};

// import { Product } from "../App";

// interface MenuProps {
//   addToCart: (product: Product) => void;
// }

// export const Menu: React.FC<MenuProps> = ({ addToCart }) => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: "Cangreburger",
//       description: "La famosa hamburguesa del Crustáceo Cascarudo",
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "Patatas Fritas",
//       description: "Crujientes y deliciosas",
//       price: 2.99,
//     },
//     { id: 3, name: "Refresco", description: "Bebida refrescante", price: 1.5 },
//   ];

//   return (
//     <div className="menu">
//       <h1>Menú</h1>
//       <div className="productList">
//         {products.map((product) => (
//           <div key={product.id} className="productCard">
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="price">${product.price.toFixed(2)}</p>
//             <button onClick={() => addToCart(product)}>
//               Añadir al Carrito
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
