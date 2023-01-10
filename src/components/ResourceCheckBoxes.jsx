// import {useState} from "react";
//
// import { Resources } from "./Resources.json";
//
// export default function ResourceCheckBoxes() {
//   const [checkedState, setCheckedState] = useState(
//     new Array(Resources.length).fill(false)
//   );
//
//   const [total, setTotal] = useState(0);
//
//   const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );
//
//     setCheckedState(updatedCheckedState);
//
//     const totalPrice = updatedCheckedState.reduce(
//       (sum, currentState, index) => {
//         if (currentState === true) {
//           return sum + Resources[index].price;
//         }
//         return sum;
//       },
//       0
//     );
//
//     setTotal(totalPrice);
//   };
//
//   return (
//     <div className="App">
//       <h3>Select Toppings</h3>
//       <ul className="toppings-list">
//         {Resources.map(({ name, price }, index) => {
//           return (
//             <li key={index}>
//               <div className="toppings-list-item">
//                 <div className="left-section">
//                   <input
//                     type="checkbox"
//                     id={`custom-checkbox-${index}`}
//                     name={name}
//                     value={name}
//                     checked={checkedState[index]}
//                     onChange={() => handleOnChange(index)}
//                   />
//                   <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
//                 </div>
//                 <div></div>
//               </div>
//             </li>
//           );
//         })}
//         <li>
//           <div className="toppings-list-item">
//             <div className="left-section">Total:</div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }
