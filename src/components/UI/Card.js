import React from 'react';
// import styled from 'styled-components';
import './Card.css';

// const Card = styled.div`
//   border-radius: 12px;
//   box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
// `;

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
