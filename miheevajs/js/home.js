// Создание случайных блоков на фоне
function createBlocks() {
    const container = document.getElementById('blocks-container');
    const blockTypes = ['dirt', 'stone', 'grass', 'wood', 'sand'];
    const blockCount = 30;
    
    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        
        // Случайные параметры блока
        const type = blockTypes[Math.floor(Math.random() * blockTypes.length)];
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const rotation = Math.random() * 360;
        const size = 20 + Math.random() * 30;
        
        block.style.backgroundImage = `url('../images/blocks/${type}.png')`;
        block.style.left = `${posX}%`;
        block.style.top = `${posY}%`;
        block.style.transform = `rotate(${rotation}deg)`;
        block.style.width = `${size}px`;
        block.style.height = `${size}px`;
        
        container.appendChild(block);
    }
}

// Анимация персонажа Minecraft
function setupCharacterAnimation() {
    const character = document.getElementById('character');
    const jumpBtn = document.getElementById('jump-btn');
    const head = character.querySelector('.head');
    const leftArm = character.querySelector('.left-arm');
    const rightArm = character.querySelector('.right-arm');
    const leftLeg = character.querySelector('.left-leg');
    const rightLeg = character.querySelector('.right-leg');
    
    // Реакция на наведение
    character.addEventListener('mouseenter', () => {
        character.style.transform = 'scale(1.1)';
    });
    
    character.addEventListener('mouseleave', () => {
        character.style.transform = 'scale(1)';
    });
    
    // Прыжок при клике на персонажа
    character.addEventListener('click', () => {
        jumpCharacter();
    });
    
    // Прыжок при клике на кнопку
    jumpBtn.addEventListener('click', jumpCharacter);
    
    // Управление с клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') { // Пробел для прыжка
            jumpCharacter();
        } else if (e.key === 'ArrowLeft') {
            character.style.transform = 'translateX(-20px) scale(1)';
        } else if (e.key === 'ArrowRight') {
            character.style.transform = 'translateX(20px) scale(1)';
        }
    });
    
    document.addEventListener('keyup', () => {
        character.style.transform = 'translateX(0) scale(1)';
    });
    
    function jumpCharacter() {
        // Анимация прыжка
        character.style.animation = 'jump 0.5s ease-in-out';
        leftArm.style.animation = 'armSwing 0.5s ease-in-out';
        rightArm.style.animation = 'armSwing 0.5s ease-in-out reverse';
        leftLeg.style.animation = 'legKick 0.5s ease-in-out';
        rightLeg.style.animation = 'legKick 0.5s ease-in-out reverse';
        
        // Сбрасываем анимацию через 0.5 секунды
        setTimeout(() => {
            character.style.animation = '';
            leftArm.style.animation = '';
            rightArm.style.animation = '';
            leftLeg.style.animation = '';
            rightLeg.style.animation = '';
        }, 500);
    }
}

// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    createBlocks();
    setupCharacterAnimation();
});