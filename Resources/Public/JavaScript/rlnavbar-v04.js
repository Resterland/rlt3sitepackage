document.addEventListener("DOMContentLoaded", function () {
    dropdownExtension();

    function dropdownExtension() {
        const submenus = document.querySelectorAll(".navbar-main li > ul");
        for (let submenu of submenus) {
            submenu.classList.add("nav-dropdown");
            submenu.insertAdjacentHTML(
                "beforebegin",
                `
			<button class="dropdown-button" aria-expanded="false" type="button" name="dropdown">
				<span class="visually-hidden">Untermenü aufklappen</span>
				<svg
				    xmlns="http://www.w3.org/2000/svg"
				    viewBox="0 0 24 24">
				    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
				 </svg>
			</button>
		`
            );
        }
        document.documentElement.addEventListener("click", (event) => {
            if (
                event.target.tagName === "BUTTON" &&
                event.target.hasAttribute("aria-expanded")
            ) {
                event.target.setAttribute(
                    "aria-expanded",
                    event.target.getAttribute("aria-expanded") !== "true"
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
