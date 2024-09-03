const outerBox = document.querySelector('.outer-box');
const innerBox = document.getElementById('draggable');

let isDragging = false;
let offsetX, offsetY;

innerBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - innerBox.offsetLeft;
    offsetY = e.clientY - innerBox.offsetTop;
    innerBox.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        // Calcular nueva posición del cuadro
        let newLeft = mouseX - offsetX;
        let newTop = mouseY - offsetY;

        // Asegurarse de que el cuadro no se salga del contenedor
        const minLeft = 0;
        const maxLeft = outerBox.clientWidth - innerBox.clientWidth;
        const minTop = 0;
        const maxTop = outerBox.clientHeight - innerBox.clientHeight;

        if (newLeft < minLeft) newLeft = minLeft;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop < minTop) newTop = minTop;
        if (newTop > maxTop) newTop = maxTop;

        // Aplicar nuevas posiciones
        innerBox.style.left = `${newLeft}px`;
        innerBox.style.top = `${newTop}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    innerBox.style.cursor = 'grab';
});
