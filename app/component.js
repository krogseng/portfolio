export default (text = "Hello From Component.js") => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
};