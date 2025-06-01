window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const langToggle = document.getElementById('lang-toggle'); // Tüm butonu seçiyoruz
  const langText = document.querySelector('#lang-toggle .lang-text'); // Sadece metin kısmını seçiyoruz

  // Çevirilerimizi bir obje içinde, data-key'lerle eşleşecek şekilde saklıyoruz
  const translations = {
    'tr': {
      'about_me': 'Hakkımda',
      'education': 'Eğitim',
      'certificates': 'Sertifika',
      'projects_nav_link': 'Projelerim',
      'lang_button': 'EN', // Türkçe olduğunda "EN" gösterecek
      'hello_selva': 'Selamm, ben Selva',
      'about_me_paragraph': "Ben Selva Demir, 16 yaşında bir 11. sınıf öğrencisiyim. Teknolojiye duyduğum ilgi sayesinde mobil uygulama geliştirme, web sitesi yapımı ve frontend tasarımı alanlarında eğitim aldım ve kendimi bu alanlarda geliştirmeye çalışıyorum. Şuanda kodluyoruz'da aktif olarak gönüllülük yapıyorum.",
      'education_title': 'Eğitim',
      'trainings_taken': 'Aldığım eğitimler:',
      'frontend_dev': 'Front-End Web Geliştirme',
      'frontend_dev_back': 'Front-End Web Geliştirme:',
      'frontend_dev_desc': 'Mayıs 2025’te mezun oldum. HTML ve CSS dillerini öğrenerek temel web sayfası yapımında yetkinlik kazandım.',
      'mobile_app_dev': 'Mobil Uygulama Geliştirme',
      'mobile_app_dev_back': 'Mobil Uygulama Geliştirme:',
      'mobile_app_dev_desc': "Kasım 2024'te mezun oldum. Flutter eğitimiyle Dart dilini öğrendim. Mobil arayüz geliştirme ve uygulama mantığını kavradım.",
      'my_certificates': 'Sertifikalarım:',
      'view_button': 'Görüntüle',
      'frontend_certificate_desc': 'Kodluyoruz - Frontend Web Geliştirme Eğitimi Sertifikası',
      'mobile_certificate_desc': 'Kodluyoruz - Mobil Uygulama Geliştirme Sertifikası',
      'projects_title': 'Projelerim:',
      'project_link_button': 'Link',
      'github_button': 'GitHub',
      'personal_blog_page': 'Kişisel Blog Sayfası'
    },
    'en': {
      'about_me': 'About Me',
      'education': 'Education',
      'certificates': 'Certificates',
      'projects_nav_link': 'Projects',
      'lang_button': 'TR', // İngilizce olduğunda "TR" gösterecek
      'hello_selva': 'Hello, I\'m Selva',
      'about_me_paragraph': "I'm Selva Demir, a 16-year-old 11th grade student. My interest in technology led me to take courses in mobile app development, website building, and frontend design. I'm actively volunteering at Kodluyoruz.",
      'education_title': 'Education',
      'trainings_taken': 'My Trainings:',
      'frontend_dev': 'Front-End Web Development',
      'frontend_dev_back': 'Front-End Web Development:',
      'frontend_dev_desc': 'I graduated in May 2025. I learned HTML and CSS and became proficient in building basic web pages.',
      'mobile_app_dev': 'Mobile App Development',
      'mobile_app_dev_back': 'Mobile App Development:',
      'mobile_app_dev_desc': 'I graduated in November 2024. I learned Dart through Flutter training and understood mobile UI development and app logic.',
      'my_certificates': 'My Certificates:',
      'view_button': 'View',
      'frontend_certificate_desc': 'Kodluyoruz - Frontend Web Development Training Certificate',
      'mobile_certificate_desc': 'Kodluyoruz - Mobile App Development Certificate',
      'projects_title': 'My Projects:',
      'project_link_button': 'View',
      'github_button': 'GitHub',
      'personal_blog_page': 'Personal Blog Page'
    }
  };

  let currentLang = 'tr'; // Başlangıç dili Türkçe

  // Metinleri mevcut dile göre güncelleme fonksiyonu
  function updateTexts() {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Dil değiştirme butonu metnini de güncelle
    // Sadece .lang-text sınıfına sahip span'in içeriğini güncelliyoruz
    if (langText) {
        langText.textContent = translations[currentLang]['lang_button'];
    }
  }

  // Hamburger menüsü
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  } else {
    console.warn("HTML'inizde 'hamburger' veya 'nav-links' ID'li elementler bulunamadı.");
  }

  // Dil değiştirme butonu
  if (langToggle && langText) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'tr' ? 'en' : 'tr';
      currentLang = newLang;

      updateTexts(); // Metinleri yeni dile göre güncelle
    });
  } else {
    console.warn("HTML'inizde 'lang-toggle' butonu veya 'lang-text' span'i bulunamadı.");
  }

  // Sayfa yüklendiğinde ilk dili ayarla
  updateTexts();
});