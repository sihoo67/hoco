window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const onboarding = document.querySelector('.onboarding');
    const mainTitle = document.querySelector('.main-title');
    const infoTopLeft = document.querySelector('.info-top-left');
    const infoTopRight = document.querySelector('.info-top-right');
    const infoBottomLeft = document.querySelector('.info-bottom-left');
    const infoBottomRight = document.querySelector('.info-bottom-right');
    const imageGallery = document.querySelector('.image-gallery');
    const galleryImages = document.querySelectorAll('.gallery-image');

    if (scrollY > 100 && scrollY < 500) {
        const scale = 1 - (scrollY - 100) / 400;
        const fontSize = 5 - 2 * (scrollY - 100) / 400;

        mainTitle.style.transform = `scale(${scale})`;
        mainTitle.style.fontSize = `${fontSize}rem`;

        infoTopLeft.style.opacity = `${(scrollY - 100) / 400}`;
        infoTopRight.style.opacity = `${(scrollY - 100) / 400}`;
        infoBottomLeft.style.opacity = `${(scrollY - 100) / 400}`;
        infoBottomRight.style.opacity = `${(scrollY - 100) / 400}`;
    }

    if (scrollY >= 500) {
        onboarding.style.transform = `translateY(-${scrollY - 500}px)`;
        mainTitle.style.fontSize = `7rem`;
        infoTopLeft.style.opacity = `1`;
        infoTopRight.style.opacity = `1`;
        infoBottomLeft.style.opacity = `1`;
        infoBottomRight.style.opacity = `1`;
    }

    if (scrollY > 1000) {
        imageGallery.style.opacity = '1';
        galleryImages.forEach((image, index) => {
            setTimeout(() => {
                image.style.opacity = '1';
            }, index * 200);
        });
    }
});
