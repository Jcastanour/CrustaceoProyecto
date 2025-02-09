// // frontend/src/views/Cart.tsx
// import React from "react";
// import "./Cart.css";
// import { Product } from "../App";

// interface CartProps {
//   cartItems: Product[];
//   removeFromCart: (productId: number) => void;
// }

// export const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
//   return (
//     <div className="cart">
//       <h1>Carrito</h1>
//       {cartItems.length === 0 ? (
//         <p>Tu carrito está vacío.</p>
//       ) : (
//         <div className="cartList">
//           {cartItems.map((item) => (
//             <div key={item.id} className="cartItem">
//               <h2>{item.name}</h2>
//               <p>{item.description}</p>
//               <p className="price">${item.price.toFixed(2)}</p>
//               <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
