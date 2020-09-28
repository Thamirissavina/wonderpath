const element = document.querySelector('h1');

(function typeWriter(element){
  'use strict'
  const elementText = element.innerHTML.split('')

  element.innerHTML= ''

  elementText.forEach((letter, i) => {

    setTimeout(function() {
      element.innerHTML += letter;

    }, 100*i)
  })
}(element))
