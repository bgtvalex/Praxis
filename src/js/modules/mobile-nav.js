function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const btnClose = document.querySelector('.close'); 
	const mobileLinks = document.querySelectorAll('.mobile__link')

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	btnClose.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.remove('no-scroll');
	};

	for (let link of mobileLinks) {
		link.addEventListener('click', () => {
			nav.classList.remove('mobile-nav--open');
			menuIcon.classList.remove('nav-icon--active');
			document.body.classList.remove('no-scroll');
			
		})
	}
}

export default mobileNav;