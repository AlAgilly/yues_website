import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--primarysmall'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize, 
  link
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkLink = link;
  return (
    <Link to={`${checkLink}`} className='my-4'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} w-full mm:py-0 py-2`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button