export default function createElement(
  tag,
  className,
  dataAttrName,
  dataAttr,
  textContent,
) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (dataAttr) element.dataset[dataAttrName] = dataAttr;
  if (textContent) element.textContent = textContent;

  return element;
}
