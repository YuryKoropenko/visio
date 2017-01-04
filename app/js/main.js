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

});