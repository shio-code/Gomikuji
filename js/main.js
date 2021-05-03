'use strict';
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const n =Math.random();
    if(n <0.1){
      btn.textContent ='大吉';
    }else if(n<0.5){
      btn.textContent ='凶';
    }else{
      btn.textContent ='中吉';
    }

  });
}
