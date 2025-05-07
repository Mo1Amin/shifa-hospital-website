// تبديل بين الوضع الداكن والفاتح
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    // تغيير الأيقونة
    const icon = this.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // تحميل تفضيلات المستخدم
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('themeToggle').querySelector('i').classList.add('fa-sun');
    document.getElementById('themeToggle').querySelector('i').classList.remove('fa-moon');
  }