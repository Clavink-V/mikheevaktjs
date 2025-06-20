// Данные о мобах
const mobsData = [
    { 
        id: 'creeper', 
        name: 'Крипер', 
        type: 'hostile', 
        health: 20, 
        damage: 'Высокий (взрыв)', 
        description: 'Тихий моб, который подкрадывается к игроку и взрывается.' 
    },
    { 
        id: 'zombie', 
        name: 'Зомби', 
        type: 'hostile', 
        health: 20, 
        damage: 'Средний', 
        description: 'Враждебный моб, который атакует игроков и деревни.' 
    },
    { 
        id: 'skeleton', 
        name: 'Скелет', 
        type: 'hostile', 
        health: 20, 
        damage: 'Средний (дистанционный)', 
        description: 'Стреляет из лука по игрокам с расстояния.' 
    },
    { 
        id: 'cow', 
        name: 'Корова', 
        type: 'friendly', 
        health: 10, 
        damage: 'Нет', 
        description: 'Мирный моб, дающий молоко и кожу.' 
    },
    { 
        id: 'pig', 
        name: 'Свинья', 
        type: 'friendly', 
        health: 10, 
        damage: 'Нет', 
        description: 'Мирный моб, которого можно оседлать с помощью седла.' 
    },
    { 
        id: 'enderman', 
        name: 'Эндермен', 
        type: 'neutral', 
        health: 40, 
        damage: 'Высокий', 
        description: 'Нейтральный моб, который становится враждебным, если на него смотреть.' 
    },
    { 
        id: 'spider', 
        name: 'Паук', 
        type: 'hostile', 
        health: 16, 
        damage: 'Средний', 
        description: 'Враждебный моб, который может карабкаться по стенам.' 
    },
    { 
        id: 'villager', 
        name: 'Житель', 
        type: 'friendly', 
        health: 20, 
        damage: 'Нет', 
        description: 'Мирный моб, с которым можно торговать.' 
    }
];

// Заполнение галереи мобов
function setupMobsGallery() {
    const gallery = document.getElementById('mobs-gallery');
    const mobViewer = document.getElementById('mob-viewer');
    const mobInfo = document.getElementById('mob-info');
    
    // Создаем карточки для всех мобов
    mobsData.forEach(mob => {
        const card = document.createElement('div');
        card.className = `mob-card ${mob.type}`;
        card.dataset.mobId = mob.id;
        card.innerHTML = `
            <img src="../images/mobs/${mob.id}.png" alt="${mob.name}">
            <h3>${mob.name}</h3>
            <p>${mob.type === 'hostile' ? 'Враждебный' : mob.type === 'friendly' ? 'Дружелюбный' : 'Нейтральный'}</p>
        `;
        
        // Анимация при наведении
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(255, 170, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
        
        // Показ деталей при клике
        card.addEventListener('click', () => {
            showMobDetails(mob);
        });
        
        gallery.appendChild(card);
    });
    
    // Фильтрация мобов
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            const mobCards = document.querySelectorAll('.mob-card');
            
            mobCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Управление с клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '8') {
            const index = parseInt(e.key) - 1;
            if (index < mobsData.length) {
                showMobDetails(mobsData[index]);
                document.querySelector(`.mob-card[data-mob-id="${mobsData[index].id}"]`).scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }
    });
    
    // Показываем первого моба по умолчанию
    if (mobsData.length > 0) {
        showMobDetails(mobsData[0]);
    }
}

function showMobDetails(mob) {
    const mobViewer = document.getElementById('mob-viewer');
    const mobInfo = document.getElementById('mob-info');
    
    // Анимация моба
    mobViewer.innerHTML = `
        <img src="../images/mobs/${mob.id}.png" alt="${mob.name}" class="mob-image">
    `;
    
    const mobImage = mobViewer.querySelector('.mob-image');
    mobImage.style.animation = 'mobFloat 2s infinite ease-in-out';
    
    // Информация о мобе
    mobInfo.innerHTML = `
        <h2>${mob.name}</h2>
        <p><strong>Тип:</strong> ${mob.type === 'hostile' ? 'Враждебный' : mob.type === 'friendly' ? 'Дружелюбный' : 'Нейтральный'}</p>
        <p><strong>Здоровье:</strong> ${mob.health}</p>
        <p><strong>Урон:</strong> ${mob.damage}</p>
        <p><strong>Описание:</strong> ${mob.description}</p>
    `;
    
    // Подсвечиваем выбранную карточку
    document.querySelectorAll('.mob-card').forEach(card => {
        card.style.borderColor = '#5a5a5a';
    });
    
    const selectedCard = document.querySelector(`.mob-card[data-mob-id="${mob.id}"]`);
    if (selectedCard) {
        selectedCard.style.borderColor = '#ffaa00';
    }
}

// Инициализация галереи
document.addEventListener('DOMContentLoaded', () => {
    setupMobsGallery();
});