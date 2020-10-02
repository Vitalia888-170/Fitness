//create burger menu
$('.burger').click(function(){
$('.burger').toggleClass('active');
$('.menu').toggleClass('active');
$('.menu__items').toggleClass('active');
$('.logo').toggleClass('active');
$('.back-menu').toggleClass('active');
$("body").toggleClass('lock');
});

$('.menu__items').click(function(){
$('.burger').removeClass('active');
$('.menu').removeClass('active');
$('.menu__items').removeClass('active');
$('.logo').removeClass('active');
$('.back-menu').removeClass('active');
$("body").removeClass('lock');
});


//create cards moving
const cards = document.querySelectorAll('.card');
for (let i = 0; i <cards.length; i++){
  const cardChoose=cards[i];
  cardChoose.addEventListener('mousemove', rotate);
  cardChoose.addEventListener('mouseout', stop);
}

function rotate(event){
  const items = this.querySelector('.specifity__items');
  const halfHeight=items.offsetHeight / 2;
  const halfWidth=items.offsetWidth / 2;
  items.style.transform = 'rotateX('+  (event.offsetY - halfHeight) / 10 + 'deg) rotateY('+  (event.offsetX - halfWidth) / 10 + 'deg)';
}

function stop(){
  const items = this.querySelector('.specifity__items');
  items.style.transform = 'rotate(0)';
}


//Hide headerscroll for gadjets that have window width less than 831px
function name(){
	if($(window).width() > 831){
		$(window).scroll(function(){
 			if($(this).scrollTop()>650){
 				$('.header').addClass('scrolHeader');
 			}else{
 				$('.header').removeClass('scrolHeader');
			 }
		});
	}else{
		return;
	}
};

	name();
