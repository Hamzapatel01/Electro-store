// // src/Components/Navbar.jsx
// import { NavLink } from 'react-router-dom';
// import { useCart } from '../Context/Context';

// const Navbar = () => {
//   const { cart } = useCart(); // Use cart context

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid brand1">
//           <NavLink className="navbar-brand" to="/">
//             Shop
//           </NavLink>
//           <button className="navbar-toggler" type="button">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/products">
//                   Products
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//             <div className="button">
//               <NavLink to="/login">
//                 <button>Login</button>
//               </NavLink>
//               <NavLink to="/signup">
//                 <button>Register</button>
//               </NavLink>
//               <NavLink to="/cart">
//                 <button>Cart({cart.length})</button> {/* Display cart length */}
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
