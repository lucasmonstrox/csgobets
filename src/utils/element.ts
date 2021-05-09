export const getElement = (selector: string): HTMLElement => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    throw new Error('Cannot get element');
  }
  return element;
};
