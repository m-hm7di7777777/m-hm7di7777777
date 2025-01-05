const menuButton = document.getElementById('menu-button'); // زر القائمة
const closeButton = document.getElementById('close-button'); // زر الخروج
const sidebar = document.getElementById('sidebar'); // القائمة الجانبية

// إظهار القائمة عند النقر على زر القائمة
menuButton.addEventListener('click', () => {
    sidebar.classList.add('show');
});

// إخفاء القائمة عند النقر على زر الخروج
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
});