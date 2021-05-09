export const getElement = (selector: string): HTMLElement => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    throw new Error('Cannot get element');
  }
  return element;
};
export const getElements = (selector: string): HTMLElement[] => {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
  const hasNoElements = elements.length === 0;
  if (hasNoElements) {
    throw new Error('Cannot get elements');
  }
  return elements;
};
