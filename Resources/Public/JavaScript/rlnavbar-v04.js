document.addEventListener("DOMContentLoaded", function () {
    dropdownExtension();

    function dropdownExtension() {
        const submenus = document.querySelectorAll("nav li > ul");
        for (let submenu of submenus) {
            submenu.classList.add("submenu");
            submenu.insertAdjacentHTML(
                "beforebegin",
                `
			<button aria-expanded="false">
				<span class="visually-hidden">Untermenü aufklappen</span>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'>
				  <path d='M0.3,0.1 0.3,0.9 0.8,0.5z' />
				</svg>
			</button>
		`
            );
        }
        document.documentElement.addEventListener("click", (event) => {
            if (
                event.target.tagName == "BUTTON" &&
                event.target.hasAttribute("aria-expanded")
            ) {
                event.target.setAttribute(
                    "aria-expanded",
                    event.target.getAttribute("aria-expanded") != "true"
                );
                event.target.nextElementSibling.classList.toggle("visible");
                event.target.parentNode.childNodes.classList.toggle("visible");
            }
        });
        document.addEventListener("mouseover", (event) => {
            if (!event.target.classList.contains("visible")) {
                hideSubmenu();
            }
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === "Escape") {
                hideSubmenu();
            }
            if (event.key === "Tab" && !event.target.closest(".visible")) {
                hideSubmenu();
            }
        });

        function hideSubmenu() {
            let buttons = document.querySelectorAll('[aria-expanded="true"]');
            buttons.forEach(function (button) {
                button.setAttribute("aria-expanded", "false");
            });
            let elements = document.querySelectorAll(".visible");
            elements.forEach(function (element) {
                element.classList.remove("visible");
            });
        }
    }
});
