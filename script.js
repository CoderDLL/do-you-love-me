const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

// Убираем переходы для кнопки, чтобы не было плавного перемещения
yesBtn.style.transition = 'none'; 

// Если курсор приближается к "ДА", кнопка убегает
yesBtn.addEventListener("mouseenter", () => {
    let maxX = window.innerWidth - yesBtn.offsetWidth - 20; // 20px отступ
    let maxY = window.innerHeight - yesBtn.offsetHeight - 20; // 20px отступ

    // Генерация случайных координат в пределах окна
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Мгновенно перемещаем кнопку в случайное место
    yesBtn.style.position = "fixed"; // используем fixed, чтобы не было прокрутки
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
});

// Если нажали "НЕТ"
noBtn.addEventListener("click", () => {
    message.innerHTML = "Я так и знал... 😭";
});
