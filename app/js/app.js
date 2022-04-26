// import '~/app/vendor/mmenu/dist/mmenu.js'
import { $ } from 'jquery'
import MicroModal from 'micromodal';
import { Fancybox } from "@fancyapps/ui";
import mixitup from 'mixitup';

document.addEventListener('DOMContentLoaded', () => {

	// const tabs = document.querySelectorAll("[data-target]"),
	// 			tabContents = document.querySelectorAll("[data-content]");

	// tabs.forEach((tab) => {
	// 	tab.addEventListener("click", () => {
	// 		const target = document.querySelector(tab.dataset.target);

	// 		tabContents.forEach((tc) => {
	// 			tc.classList.remove("is-active");
	// 		});
	// 		target.classList.add("is-active");

	// 		tabs.forEach((t) => {
	// 			t.classList.remove("is-active");
	// 		});
	// 		tab.classList.add("is-active");
	// 	});
	// });

	MicroModal.init({
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	});

	let containerEl = document.querySelector('.rent-products')

	if (containerEl) {
		let mixer = mixitup(containerEl, {
			"animation": {
				"duration": 0,
				"nudge": false,
				"reverseOut": false,
				"effects": ""
			}
		});
	}

	function burger() {
		const btn = document.querySelector('.header__burger')
		const nav = document.querySelector('.nav')

		btn.addEventListener('click', function () {
			if (nav.classList.contains('show')) {
				nav.classList.remove('show')
			} else {
				nav.classList.add('show')
			}
		})
	}
	burger()

	

	Fancybox.bind("[data-fancybox]", {});
})