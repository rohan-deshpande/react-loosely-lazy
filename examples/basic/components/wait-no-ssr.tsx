import React from 'react';

let hasThrown = false;

const ComponentNoSSR = () => {
  if (!hasThrown) {
    hasThrown = true;
    throw new Promise(r => setTimeout(r, 1000));
  }

  return (
    <div
      style={{ borderBottom: `2px solid #E1E` }}
    >{`<ComponentWaitNoSSR />`}</div>
  );
};

export default ComponentNoSSR;
