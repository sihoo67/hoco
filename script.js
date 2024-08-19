window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollTitle = document.querySelector('.scroll-title');
    const info = document.querySelector('.info');
    const imageGallery = document.querySelector('.image-gallery');

    // 글씨가 화면 중간에 도달하면 크고 두껍게 나오도록 설정
    if (scrollY > 100) {
        scrollTitle.style.opacity = '1';
        scrollTitle.style.transform = 'translateY(0)';
    }

    // 스크롤 도착 시 정보 나타남
    if (scrollY > 300) {
        info.style.opacity = '1';
    }

    // 스크롤 도착 시 이미지 갤러리 나타남
    if (scrollY > 600) {
        imageGallery.style.opacity = '1';
    }
});
