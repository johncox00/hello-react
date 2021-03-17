import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Clickable = ({text, href, onClick, color, newTab}) => {
   const [clickCount, setCount] = useState(0);

  if (href) {
    return (
      <a
       href={href}
       target={newTab ? '_blank' : '_self'}
       style={{ color }}
       onClick={() => setCount(clickCount + 1)}
      >
        {`${text} (${clickCount})`}
      </a>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        onClick={
          () => {
            setCount(clickCount + 1);
            onClick();
          }
        }
        style={{ backgroundColor: color, color: 'white' }}
      >
        {`${text} (${clickCount})`}
      </button>
    );
  }
  return null;
}

export default Clickable;

Clickable.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['red', 'purple']),
  newTab: PropTypes.bool,
};

Clickable.defaultProps = {
  text: null,
  href: null,
  onClick: null,
  color: 'red',
  newTab: false,
};
