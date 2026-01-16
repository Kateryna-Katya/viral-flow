document.addEventListener('DOMContentLoaded', () => {
    // Инициализация иконок Lucide
    lucide.createIcons();

    // Липкий хедер с изменением прозрачности
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(26, 22, 20, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(26, 22, 20, 0.85)';
        }
    });

    // Бургер меню (базовая логика)
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        // Здесь можно добавить полноценное мобильное меню
        alert('Меню в разработке. Переходим к следующему этапу?');
    });

    // Плавная прокрутка для ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Функция инициализации анимаций появления
const initScrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // После активации можно прекратить наблюдение за этим элементом
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
};

// Вызываем функцию в DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... предыдущий код (lucide, header) ...
    initScrollReveal();
});
});