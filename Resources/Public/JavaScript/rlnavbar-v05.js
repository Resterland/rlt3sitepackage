document.addEventListener('DOMContentLoaded', function () {
    dropdownExtension();

    function dropdownExtension() {
        document.documentElement.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON' && event.target.hasAttribute(
                'aria-expanded')) {
                event.target.setAttribute('aria-expanded', event.target.getAttribute(
                    'aria-expanded') !== 'true');
                event.target.nextElementSibling.classList.toggle('visible');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                hideSubmenu();
            }
            if ((event.key === 'Tab') && (!event.target.closest('.visible'))) {
                hideSubmenu();
            }
        });

        function hideSubmenu() {
            let elements = document.querySelectorAll('.visible');
            elements.forEach(function (element) {
                element.classList.remove('visible');
            });
            let buttons = document.querySelectorAll('[aria-expanded="true"]');
            buttons.forEach(function (button) {
                button.setAttribute('aria-expanded', 'false');
            });
        }
    }
});
