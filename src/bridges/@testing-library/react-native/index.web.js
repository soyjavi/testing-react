import * as base from '@testing-library/react';

const fireEvent = {
  ...base.fireEvent,
  changeText: (node, value) => base.fireEvent.change(node, { target: { value } }),
  press: base.fireEvent.click,
};

const render = (node) => {
  const { asFragment: toJSON, ...others } = base.render(node);

  return { toJSON, ...others };
};

export * from '@testing-library/react';
export { fireEvent, render };
