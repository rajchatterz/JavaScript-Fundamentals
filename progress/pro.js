window.addEventListener('scroll',()=>{
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const scrolled = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.bar').style.width = scrolled + '%';
});