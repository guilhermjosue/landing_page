$(document).ready(function(){	
	$('#fullpage').fullpage({
		scrollOverflow: true,
		scrollBar: true,
		fitToSectionDelay: 100,
	});
});


$(document).ready(function(){
  $('.slider').slick({
      	arrows: true,
      	autoplay: true,
		infinite: true,
		adaptiveHeight: true,
		speed: 800,
		slider: true,
		cssEase: 'linear'
  });
});

$(document).ready(function(){
	$('.depoimentos').slick({	  
		dots: true,
      	arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		cssEase: 'linear',
		fade: true,
		dotsClass: 'dots'
	});
});


if (window.innerWidth > 767) {
    document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css" /><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.extensions.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.css" /><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/jquery.easings.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/scrolloverflow.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/scrolloverflow.min.js"></script>');
	// var element = document.querySelector("section");
 //  	element.classList.remove('section') 
}

// var $slick-next = document.querySelector('.slick-next'),
//     // Pega a string do conteúdo atual
//     HTMLTemporario = $slick-next.innerHTML,
//     // Novo HTML que será inserido
//     HTMLNovo = '<i class="fas fa-chevron-left"></i></br>';

// // Concatena as strings colocando o novoHTML antes do HTMLTemporario
// HTMLTemporario = HTMLNovo + HTMLTemporario;

// // Coloca a nova string(que é o HTML) no DOM
// $slick-next.innerHTML = HTMLTemporario;

// var $slick-prev = document.querySelector('.slick-prev'),
//     // Pega a string do conteúdo atual
//     HTMLTemporario = $slick-prev.innerHTML,
//     // Novo HTML que será inserido
//     HTMLNovo = '<i class="fas fa-chevron-left"></i></br>';

// // Concatena as strings colocando o novoHTML antes do HTMLTemporario
// HTMLTemporario = HTMLNovo + HTMLTemporario;

// // Coloca a nova string(que é o HTML) no DOM
// $slick-prev.innerHTML = HTMLTemporario;