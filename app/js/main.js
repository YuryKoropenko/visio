$(document).ready(function() {

/**/
	$('.mob-menu__icon').on('click', function() {
		$(this).parent().children('.nav-toggle').stop(true, false).fadeToggle(300);
		$(document).click(function(event) {
			if ($(event.target).closest(".nav-toggle").length) return;
				$(".nav-toggle").fadeOut(300);
				event.stopPropagation();
			});
		return false
	});

/**/
	$('.sidebar .sidebar-menu__title').on('click', function() {
		$(this).parent().children('.sidebar-menu__wrapper').stop(true, false).slideToggle(300);
		$(this).children('.sidebar-menu__title-name').toggleClass('sidebar-menu__title-name-open');
	});

/**/
	$('.sidebar-toggle-menu .sidebar-menu__title').on('click', function() {
		$('.sidebar-menu__wrapper').fadeOut(300);
		$('.sidebar-menu__title').removeClass('sidebar-menu__title-active');
		$(this).parent().children('.sidebar-menu__wrapper').stop(true, false).fadeToggle(300);
		$(this).toggleClass('sidebar-menu__title-active');
	});

/**/
	$('.menu-sidebar').on('click', function() {
		$('.sidebar-toggle-menu').fadeOut(300);
		$('.menu-sidebar').removeClass('menu-sidebar-active');
		$(this).toggleClass('menu-sidebar-active');
		$(this).parent().children('.sidebar-toggle-menu').stop(true, false).slideToggle(300);
	});

/**/
	$(".sl1 .sl1__slide img").click(function(){	// Событие клика на маленькое изображение
		var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup-img'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup-bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup-img-active' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup-img").fadeIn(800); // Медленно выводим изображение
		$(".popup-bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup-img").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
				$(".popup-img").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
});