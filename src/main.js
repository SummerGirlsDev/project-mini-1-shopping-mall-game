const mainUl = document.querySelector('.product-ul')
const filterP = document.querySelector('.filter-p')
const filterT = document.querySelector('.filter-t')
const filterS = document.querySelector('.filter-s')
const filterBlue = document.querySelector('.filter-blue')
const filterYellow = document.querySelector('.filter-yellow')
const filterPink = document.querySelector('.filter-pink')

const product = [{
   src : 'img/pink_s.png',
   text: 'female, small size'
},{
   src : 'img/blue_p.png',
   text : 'man, small size' 
},{
   src : 'img/pink_t.png',
   text: 'female, large size'
},{
   src : 'img/yellow_p.png',
   text: 'female, large size'
},{
   src : 'img/blue_p.png',
   text : 'man, small size' 
},{
   src : 'img/yellow_s.png',
   text: 'man, small size'
},{
   src :'img/pink_p.png',
   text: 'female, small size'
},{
   src : 'img/yellow_t.png',
   text: 'male, large size'
},{
   src : 'img/blue_s.png',
   text: 'female, small size'
},{
   src :'img/blue_t.png',
   text: 'male, large size'
},{
   src : 'img/pink_s.png',
   text: 'female, small size'
},{
   src : 'img/yellow_p.png',
   text: 'female, large size'
},{
   src : 'img/yellow_s.png',
   text: 'man, small size'
}]

function listshow(value){
   mainUl.innerHTML += `<li class="product-list"><img src="${value.src}"><span class="product-name">${value.text}</span></li>`
}

product.forEach((value) => listshow(value))

function listdel(){
   mainUl.innerHTML = '';
}

String.prototype.contain = function (data){
   return this.indexOf(data) >=0
}

filterP.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('_p')
   })
   test.forEach((value) => listshow(value))
})

filterT.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('_t')
   })
   test.forEach((value) => listshow(value))
})

filterS.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('_s')
   })
   test.forEach((value) => listshow(value))
})

filterBlue.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('blue')
   })
   test.forEach((value) => listshow(value))
})

filterYellow.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('yellow')
   })
   test.forEach((value) => listshow(value))
})

filterPink.addEventListener('click', (event) => {
   listdel()
   const test = product.filter(function(value){
      return value.src.contain('pink')
   })
   test.forEach((value) => listshow(value))
})