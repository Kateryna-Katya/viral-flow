document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация иконок
    if (window.lucide) {
        lucide.createIcons();
    }

    // --- НАВИГАЦИЯ И ХЕДЕР ---
    const header = document.getElementById('header');
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Липкий хедер
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
    });

    // Мобильное меню
    const toggleMenu = () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    };

    burger.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) toggleMenu();
        });
    });

    // --- SCROLL REVEAL (Анимация появления) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- КОНТАКТНАЯ ФОРМА ---
    const contactForm = document.getElementById('main-form');
    if (contactForm) {
        const captchaText = document.getElementById('captcha-question');
        const captchaInput = document.getElementById('captcha-answer');
        const phoneInput = document.getElementById('phone');
        const successMsg = document.getElementById('success-message');

        // Генерация капчи
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 5) + 1;
        const result = n1 + n2;
        if (captchaText) captchaText.innerText = `${n1} + ${n2}`;

        // Только цифры в телефоне
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (parseInt(captchaInput.value) !== result) {
                alert('Ошибка капчи. Пожалуйста, решите пример верно.');
                return;
            }

            const btn = contactForm.querySelector('button');
            btn.disabled = true;
            btn.innerText = 'Отправка...';

            setTimeout(() => {
                contactForm.style.display = 'none';
                successMsg.style.display = 'block';
                lucide.createIcons();
            }, 1500);
        });
    }

    // --- COOKIE POPUP ---
    const cookiePopup = document.getElementById('cookie-popup');
    const cookieBtn = document.getElementById('cookie-accept');

    if (!localStorage.getItem('viralFlowCookies')) {
        setTimeout(() => {
            cookiePopup.classList.add('active');
        }, 2000);
    }

    cookieBtn.addEventListener('click', () => {
        localStorage.setItem('viralFlowCookies', 'true');
        cookiePopup.classList.remove('active');
    });

    // --- ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ ---
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (targetLink) targetLink.classList.add('active');
            }
        });
    });
});