// التحقق من صحة نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;
    
    // التحقق من البريد الإلكتروني
    if (!email) {
      document.getElementById('emailError').textContent = 'يجب إدخال البريد الإلكتروني';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'بريد إلكتروني غير صالح';
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
    
    // التحقق من كلمة المرور
    if (!password) {
      document.getElementById('passwordError').textContent = 'يجب إدخال كلمة المرور';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل';
      isValid = false;
    } else {
      document.getElementById('passwordError').textContent = '';
    }
    
    if (isValid) {
      // يمكنك هنا إرسال البيانات إلى الخادم
      alert('تم تسجيل الدخول بنجاح!');
      window.location.href = 'index.html';
    }
  });
  
  // التحقق من صحة نموذج التسجيل
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;
    
    // التحقق من الاسم الكامل
    if (!fullName) {
      document.getElementById('nameError').textContent = 'يجب إدخال الاسم الكامل';
      isValid = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
    
    // التحقق من البريد الإلكتروني
    if (!email) {
      document.getElementById('emailError').textContent = 'يجب إدخال البريد الإلكتروني';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'بريد إلكتروني غير صالح';
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
    
    // التحقق من كلمة المرور
    if (!password) {
      document.getElementById('passwordError').textContent = 'يجب إدخال كلمة المرور';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل';
      isValid = false;
    } else {
      document.getElementById('passwordError').textContent = '';
    }
    
    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      document.getElementById('confirmError').textContent = 'كلمة المرور غير متطابقة';
      isValid = false;
    } else {
      document.getElementById('confirmError').textContent = '';
    }
    
    if (isValid) {
      // يمكنك هنا إرسال البيانات إلى الخادم
      alert('تم إنشاء الحساب بنجاح!');
      window.location.href = 'index.html';
    }
  });