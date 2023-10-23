export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((useEvent) => {
        html.addEventListener(useEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((useEvent) => {
      setTimeout(() => html.addEventListener(useEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
