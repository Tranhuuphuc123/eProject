
/* Portfolio part */
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j < list.length; j++){
      list[j].classList.remove('focus');
    }
    this.classList.add('focus');

    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k < itemBox.length; k++){
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }
    }
  })
}

/* Image model part */
var modal = document.getElementsByClassName('modal');
var img = document.getElementsByClassName('myImg');
var myModelImg = document.getElementsByClassName("myModelImg");
var captionText = document.getElementsByClassName("caption");
var captionInfo = document.getElementsByClassName("inFo");
for(let i = 0; i < modal.length; i++){
  img[i].addEventListener('click', function(){
    modal[i].style.display = "block";
    myModelImg[i].src = this.src;
    captionText[i].innerHTML = captionInfo[i].innerHTML;
    document.body.style.overflow = "hidden";
  })
}

var span = document.getElementsByClassName("close");
for(let i = 0; i < span.length; i++){
  span[i].addEventListener('click', function(){
    modal[i].style.display = "none";
    document.body.style.overflow = "visible";
  })
}
