import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize, 
  link,
  otherstyles
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkLink = link;
  const more = otherstyles;
  return (
    <Link to={`${checkLink}`} className='my-4'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} w-full ${otherstyles}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
