// ===== Гамбургер-меню =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Создаём оверлей (затемнение фона)
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));

    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');

    // блокируем прокрутку страницы при открытом меню
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Закрытие на Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});

// Если растянули окно до десктопа — закрываем меню
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});


// ===== Кнопка "Наверх" =====
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
