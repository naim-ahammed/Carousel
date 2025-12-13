// keyboard support
window.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight'){
    reviewsLTR.scrollBy({left:300,behavior:'smooth'});
    reviewsRTL.scrollBy({left:300,behavior:'smooth'});
  }
  if(e.key==='ArrowLeft'){
    reviewsLTR.scrollBy({left:-300,behavior:'smooth'});
    reviewsRTL.scrollBy({left:-300,behavior:'smooth'});
  }
});