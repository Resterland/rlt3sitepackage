document.addEventListener("DOMContentLoaded", function () {
    dropdownExtension();

    function dropdownExtension() {
        const submenus = document.querySelectorAll("nav.navbar-main li > ul");
        for (let submenu of submenus) {
            submenu.classList.add("submenu");
            submenu.insertAdjacentHTML(
                "beforebegin",
                `
                        <button aria-expanded="false">
                            <span class="visually-hidden">Untermenü aufklappen</span>
                            <img src="EXT:rlt3sitepackage/Resources/Public/Icons/Fontawesome/solid/chevron-right.svg"
            alt="down-arrow"
            class="dropdown-arrow"/>
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
