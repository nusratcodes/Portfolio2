
const catFace = document.getElementById('interactive-cat');
const catExpressions = ['😺', '😸', '😻', '😼', '😽', '🙀'];

catFace.addEventListener('click', (event) => {
    const randomExpression = catExpressions[Math.floor(Math.random() * catExpressions.length)];
    catFace.innerText = randomExpression;
    

    createHeart(event.clientX, event.clientY);
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerText = '💖';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 1s ease-out';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);

    
    setTimeout(() => {
        heart.style.transform = 'translateY(-100px) scale(1.5)';
        heart.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}


document.getElementById('work-btn').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});



const customCursor = document.getElementById('custom-cursor');


document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});


const clickableElements = document.querySelectorAll('a, .btn, .cat-face, .logo');


clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.innerText = '🧶';
        customCursor.classList.add('cursor-hover');
    });
    
    element.addEventListener('mouseleave', () => {
        customCursor.innerText = '🐾';
        customCursor.classList.remove('cursor-hover');
    });
    
});