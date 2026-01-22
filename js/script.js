// ============================
// 스플래시 스크린 애니메이션
// ============================
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    if (splashScreen) {
        // 2.5초 후 스플래시 스크린 제거
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

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 링크 클릭 시 메뉴 닫기
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================
// 스크롤 시 활성화된 섹션 업데이트
// ============================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = navMenu.querySelectorAll('a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================
// 페이지 로드 시 초기화
// ============================
window.addEventListener('DOMContentLoaded', () => {
    // 부드러운 스크롤 앵커 처리
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    // 로드 시간 표시 (선택사항)
    console.log('Living-AiT 웹사이트가 성공적으로 로드되었습니다.');
});

// ============================
// Projects Flow 스크롤 애니메이션
// ============================
const flowStepObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const flowStepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            flowStepObserver.unobserve(entry.target);
        }
    });
}, flowStepObserverOptions);

document.querySelectorAll('.flow-step').forEach(step => {
    flowStepObserver.observe(step);
});

// ============================
// 애니메이션 효과 (스크롤 감지)
// ============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
