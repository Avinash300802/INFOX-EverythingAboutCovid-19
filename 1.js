let buttons=document.querySelectorAll('navbar')
buttons.forEach(button => {
  button.addEventListener('click',function(){
buttons.forEach(btn => btn.class.remove('active'));
this.classList.add('active');
  });
});