const coursel_wrapper=document.querySelector('.coursel-wrapper');
const slider=document.getElementsByClassName('slider');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const dots=document.getElementsByClassName('dot');
const container=document.querySelector('.container');

let index=0;

let width=slider[0].clientWidth;
coursel_wrapper.style.transform='translate('+ (- width * index) +'px)';

next.addEventListener('click',nextSlider)
function nextSlider(){
 
  if(index < slider.length-1){
    index++;
    coursel_wrapper.style.transition="transform 1s ease-out";
    coursel_wrapper.style.transform='translate('+ (- width * index) +'px)';
    dotsLabel(); 
  }else{
    return index=0;
  }
}



prev.addEventListener('click',function(){

  if(index > 0){
    index--;
    coursel_wrapper.style.transition="transform .5s ease-out";
    coursel_wrapper.style.transform='translate('+ (- width * index) +'px)';
    dotsLabel();
  }else{
    return index=slider.length;
  }
  
  });
  // dots.forEach(dot=>{
  // dot.className=dot.className.replace('active','');
  // dots(index-0).className += 'active';

  // });
  for(let j=1;j<slider.length;j++){
    let div=document.createElement('div');
    div.classList.add('dot');
    document.querySelector('.nav-dots').appendChild(div);
  }

  function dotsLabel(){
    for(i=0;i<dots.length;i++){

      dots[i].className=dots[i].className.replace(' active','');
    }
    dots[index-0].className += ' active';
  }




  function autoSlider(){
    deleteInterval=setInterval(timer,3000);
    function timer(){
    nextSlider();
    }
  }
  autoSlider();


  container.addEventListener('mouseover',function(){
    clearInterval(deleteInterval);
  });

  container.addEventListener('mouseout',autoSlider);

  // const firstImageDuplicate=document.getElementById('firstImageDuplicate');
  // const lastImageDuplicate=document.getElementById('lastImageDuplicate');

coursel_wrapper.addEventListener('transitionend',function(){
if(slider[index]==='firstImageDuplicate'){
  coursel_wrapper.style.display='none';
  index=slider.length-index;
  coursel_wrapper.style.transform='translate('+ (- width * index) +'px)';
}
if(slider[index]==='lastImageDuplicate'){
  coursel_wrapper.style.display='none';
  index=slider.length-index;
  coursel_wrapper.style.transform='translate('+ (- width * index) +'px)';
}
  });





