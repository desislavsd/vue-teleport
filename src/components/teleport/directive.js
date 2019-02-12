
export default {
  
  inserted(el){
    setup(el)
    teleport(...arguments)
  },
  
  update(){

    teleport(...arguments)
  },
  
  unbind(el){

    el._anchor.remove();
    el.remove();
  }
}

function setup(el) {

  if (el._anchor) return el;

  el.parentElement.insertBefore(
    el._anchor = document.createTextNode(''),
    el.nextSibling
  )
  return el;
}

function teleport(el, b) {

  if (b.value) return el._anchor.parentElement.insertBefore(el, el._anchor);

  document.querySelector(b.arg).append(el);
}