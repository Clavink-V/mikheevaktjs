// Анимация блоков на странице игры
function setupBlockAnimations() {
    const blocks = document.querySelectorAll('.block-animation');
    
    blocks.forEach(block => {
        // Анимация при наведении
        block.addEventListener('mouseenter', () => {
            block.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        block.addEventListener('mouseleave', () => {
            block.style.transform = 'scale(1) rotate(0)';
        });
        
        // Анимация при клике
        block.addEventListener('click', () => {
            block.style.animation = 'blockRotate 1s linear';
            
            setTimeout(() => {
                block.style.animation = '';
            }, 1000);
        });
    });
    
    // Быстрый переход по клавишам
    document.addEventListener('keydown', (e) => {
        if (e.key === 'm') {
            document.getElementById('mining-feature').scrollIntoView({ behavior: 'smooth' });
            highlightFeature('mining-feature');
        } else if (e.key === 'b') {
            document.getElementById('building-feature').scrollIntoView({ behavior: 'smooth' });
            highlightFeature('building-feature');
        } else if (e.key === 'c') {
            document.getElementById('crafting-feature').scrollIntoView({ behavior: 'smooth' });
            highlightFeature('crafting-feature');
        }
    });
    
    // Создание инвентаря
    createInventory();
}

function highlightFeature(featureId) {
    // Убираем подсветку со всех элементов
    document.querySelectorAll('.feature').forEach(feature => {
        feature.style.borderColor = '#5a5a5a';
    });
    
    // Подсвечиваем выбранный элемент
    const feature = document.getElementById(featureId);
    feature.style.borderColor = '#ffaa00';
    
    // Через 2 секунды убираем подсветку
    setTimeout(() => {
        feature.style.borderColor = '#5a5a5a';
    }, 2000);
}

function createInventory() {
    const inventory = document.getElementById('inventory');
    const items = [
        'diamond_sword', 'diamond_pickaxe', 'diamond_axe', 
        'bow', 'arrow', 'steak', 
        'torch', 'compass', 'map'
    ];
    
    items.forEach(item => {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';
        slot.innerHTML = `<img src="../images/items/${item}.png" alt="${item}">`;
        
        // Анимация при наведении на предмет
        slot.addEventListener('mouseenter', () => {
            slot.style.transform = 'scale(1.1)';
            slot.style.backgroundColor = '#ffaa00';
        });
        
        slot.addEventListener('mouseleave', () => {
            slot.style.transform = 'scale(1)';
            slot.style.backgroundColor = '#8b8b8b';
        });
        
        // Информация о предмете при клике
        slot.addEventListener('click', () => {
            alert(`Вы выбрали: ${item.replace('_', ' ')}`);
        });
        
        inventory.appendChild(slot);
    });
}

// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    setupBlockAnimations();
});