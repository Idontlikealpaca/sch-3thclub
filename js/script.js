// ============================
// 스플래시 스크린 애니메이션
// ============================
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.pointerEvents = 'none';
        }, 2500);
    }
});

// ============================
// 네비게이션 메뉴 토글
// ============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 링크 클릭 시 메뉴 닫기
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================
// 스크롤 시 활성화된 섹션 표시
// ============================
window.addEventListener('scroll', () => {
    if (!navMenu) return;

    const sections = document.querySelectorAll('section[id]');
    const navLinks = navMenu.querySelectorAll('a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================
// 부드러운 스크롤 처리
// ============================
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            if (navMenu) navMenu.classList.remove('active');
        });
    });

    console.log('Living-AiT 웹사이트가 성공적으로 로드되었습니다.');
});

// ============================
// 공통 IntersectionObserver 옵션
// ============================
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

// ============================
// Projects Flow 애니메이션
// ============================
const flowStepObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.flow-step').forEach(step => {
    flowStepObserver.observe(step);
});

// ============================
// INSIGHT PROJECT 애니메이션
// ============================
const projectStageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-stage').forEach(stage => {
    projectStageObserver.observe(stage);
});
