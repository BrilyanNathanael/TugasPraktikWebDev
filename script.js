function clickHamBtn()
{
    const hamList = document.getElementById('ham-list');
    hamList.classList.toggle('active');
}

let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');
let product = document.getElementsByClassName('item');
let carousel = document.getElementsByClassName('items-carousel');
let items = document.getElementsByClassName('items');

let l = 0;
let movePer = 20.34;
let maxMove = 61;
let productPage = Math.ceil(product.length/1);
let id = 0;

function slideRight()
{
  l = l + movePer;
  if (product == 1){
    l = 0; 
  }


  for(const i of product)
  {
    if (l > maxMove){l = l - movePer;}
    i.style.left = '-' + l + '%';
  }
}

function slideLeft(){
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of product){
        if (productPage>1){
            i.style.left = '-' + l + '%';
        }
    }
}

window.addEventListener('scroll', (event) =>{
  const navbar = document.getElementById('desktop');

  if(window.pageYOffset > 50)
  {
    navbar.style.backgroundColor = 'white';
    navbar.style.transition = '.5s';
  }
  else if(window.pageYOffset == 0)
  {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.transition = '.5s';
  }
})