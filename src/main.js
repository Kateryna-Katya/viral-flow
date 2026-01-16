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
});