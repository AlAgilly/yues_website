// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../style';

// const STYLES = ['btn--primary', 'btn--secondary', 'btn--test'];
// const SIZES = ['btn--medium', 'btn--large'];

// export const Player = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize, 
//   link
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
//   const checkLink = link;
//   return (
//     <Link to={`${checkLink}`} className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };