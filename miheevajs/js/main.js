// Общие функции для всех страниц
document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Эффект параллакса для фона
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('main').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    
    // Анимация загрузки страницы
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Добавляем звук при клике на элементы
    document.querySelectorAll('button, .mob-card, .feature, .inventory-slot').forEach(element => {
        element.addEventListener('click', () => {
            playSound('click');
        });
    });
});

// Воспроизведение звуков
function playSound(type) {
    const sounds = {
        click: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        jump: 'https://assets.mixkit.co/sfx/preview/mixkit-quick-jump-arcade-game-239.mp3',
        explosion: 'https://assets.mixkit.co/sfx/preview/mixkit-explosion-impact-1684.mp3'
    };
    
    if (sounds[type]) {
        const audio = new Audio(sounds[type]);
        audio.volume = 0.3;
        audio.play();
    }
}