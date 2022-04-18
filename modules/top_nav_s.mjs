export function responsive() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navMenu = document.getElementsByClassName('navbar-links')[0];
    const navLinks = document.getElementsByClassName('nav-item');
    console.log(navLinks)
    toggleButton.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.add('closing');
            setTimeout(() => {
                navMenu.classList.remove('active');
                navMenu.classList.remove('closing')
            }, 500)
        }
        else if (navMenu.classList.contains('closing')) {
            
            navMenu.classList.remove('closing');
            navMenu.classList.add('active');
        }
        else {
            navMenu.classList.add('active');
        }
    })
}