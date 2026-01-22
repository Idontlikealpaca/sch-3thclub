# 🔍 INSIGHT - 송촌고등학교 이과 탐구 동아리

## 📌 프로젝트 개요

**INSIGHT**는 송촌고등학교의 이과 탐구 동아리 웹사이트입니다.
독서(Reading), 이슈(Issue), 융합(Fusion)을 중심으로 학생들의 탐구력과 사고력을 키우는 동아리를 소개합니다.

---

## 🎯 웹사이트의 목적

- ✅ 동아리의 **3대 핵심 활동** 체계적으로 소개
- ✅ **4단계 프로젝트 플로우** 명확하게 안내
- ✅ **모바일 친화적** 반응형 디자인
- ✅ 명확한 **신청 절차** 안내

---

## 🏗️ 페이지 구조

### 1️⃣ **Home (index.html)**
- Hero Section: INSIGHT 소개 및 핵심 메시지
- Features: 3가지 핵심 활동 (Reading, Issue, Fusion)
- Projects Flow: 4단계 프로젝트 진행 과정
- Join Us: QR코드 및 신청 버튼
- Question: 문의 연락처 (Instagram, Email)
- Footer: 저작권 정보 (Copyrightⓒ2026 INSIGHT, All Rights Reserved.)

---

## 📊 Features (특징)

### Reading
각자의 진로 분야와 관련된 도서를 선정하여 읽고 독서 과정에서 얻은 인사이트를 기록합니다.

### Issue
진로 분야와 관련된 이슈를 분석하고 논쟁적 주제에 대한 자신의 입장을 펼칩니다.

### Fusion
시너지를 낼 수 있는 분야와 팀을 구성하여 창의적인 프로젝트를 자유롭게 기획하고 수행합니다.

---

## 🔄 Projects Flow (프로젝트 진행 과정)

### 1단계: 진로 연계 독서 및 일지 작성
자신의 진로 분야와 관련된 도서 1권을 선정하고, 자율적으로 독서를 진행합니다. 독서하며 독서 일지를 작성합니다. 독서 일지에는 의문점, 나의 생각, 추가로 알고 싶은 내용, 연계 포인트 등을 작성합니다.

### 2단계: 독서 성찰 보고서 작성 및 공유
독서 일지를 바탕으로 종합적인 보고서를 작성하고, 동아리 시간에 발표하여 서로의 진로 분야에 대한 이해를 넓힙니다.

### 3단계: 이슈 탐구 및 논증적 글쓰기
각자 진로 분야와 관련된 신문 기사를 검색합니다. 논쟁의 여지가 있는 주제를 포함한 기사를 우선적으로 선택하여, 논증 주제를 선정하고 주장문을 작성합니다.

### 4단계: 융합 프로젝트
비슷한 분야 또는 융합 가능한 분야끼리 팀을 매칭합니다. 브레인스토밍 이후 계획서를 작성합니다. 실제로 이행 가능한 프로젝트를 구성하고, 실행까지 도달하여 보고서를 작성합니다. 이후 프로젝트의 과정과 결과를 설명하는 발표를 진행합니다.

---

## 🎨 디자인 특징

### 색상 팔레트
- **Primary Color**: `#1a3a52` (진한 남색)
- **Secondary Color**: `#2d5a7b` (중간 남색)
- **Accent Color**: `#20c997` (민트 녹색)
- **Light Background**: `#f8fafb` (밝은 회색)
- **Text Dark**: `#2c3e50` (진한 회색-검정)

### 디자인 요소
- 그래디언트 배경 (Hero, Question 섹션)
- 카드 기반 레이아웃
- 호버 애니메이션 효과
- 반응형 그리드 레이아웃
- 부드러운 스크롤 효과

---

## 📱 반응형 디자인

- **Desktop** (1200px 이상): 풀 너비, 3열 그리드
- **Tablet** (768px 이하): 단일 열 레이아웃, 최적화된 여백
- **Mobile** (480px 이하): 극소형 화면 최적화
- **Ultra-small** (320px 이하): 매우 작은 화면 대응

최적화 포인트:
- 터치 친화적 버튼 크기
- 읽기 쉬운 폰트 사이즈
- 적절한 간격 및 여백
- 모바일 메뉴 (햄버거 메뉴)

---

## 🚀 기능

### 네비게이션
- 고정 헤더 네비게이션
- 모바일 반응형 햄버거 메뉴
- 부드러운 앵커 스크롤
- 현재 섹션 활성화 표시

### 상호작용
- QR코드 클릭 시 신청 링크로 이동
- 신청 버튼 클릭 시 신청 폼으로 이동
- Instagram 및 Email 링크
- 호버 상태 트랜지션

### 애니메이션
- 스크롤 감지 페이드인 효과
- 호버 상태 변환 (카드 상승, 색상 변화)
- 부드러운 전환 효과 (0.3초)

---

## 📂 파일 구조

```
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 전체 스타일시트 (완벽한 모바일 최적화)
├── js/
│   └── script.js       # JavaScript 기능
└── README.md           # 이 파일
```

---

## 🛠️ 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - 그리드, 플렉스박스
  - 그래디언트
  - 미디어 쿼리 (4단계 반응형 대응)
  - 호버 애니메이션
- **JavaScript (Vanilla)**: 
  - 네비게이션 메뉴 토글
  - 부드러운 스크롤 링크
  - Intersection Observer API를 활용한 스크롤 애니메이션
  - 활성 섹션 추적

---

## 💻 로컬 실행 방법

1. 저장소 클론:
```bash
git clone <repository-url>
cd sch-3thclub
```

2. VS Code나 다른 에디터로 `index.html` 열기

3. Live Server 확장 사용:
   - `index.html` 파일에서 우클릭 → "Open with Live Server" 선택

4. 또는 간단한 HTTP 서버 실행:
```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 🎯 신청 링크 설정

QR코드와 신청 버튼의 링크를 실제 신청 폼으로 변경하세요:

```html
<!-- index.html에서 수정 -->
<a href="https://forms.gle/YOUR_FORM_ID" target="_blank">
```

---

## 📄 라이센스

Copyrightⓒ2026 INSIGHT, All Rights Reserved.

---

## 🤝 기여

이 프로젝트에 기여하고 싶으신가요? 
- 기능 요청 또는 버그 리포트는 Issues를 이용해 주세요.
- Pull Request도 환영합니다!

---

## 📞 연락처

- **Instagram**: @insight_songchon
- **Email**: insight@songchon.hs.kr
- **Location**: 송촌고등학교

---

**INSIGHT**와 함께 깊이 있는 탐구를 시작하세요! 🚀

---

## 🎨 디자인 특징

### 색상 팔레트
- **Primary Color**: `#1a3a52` (진한 남색)
- **Secondary Color**: `#2d5a7b` (중간 남색)
- **Accent Color**: `#20c997` (민트 녹색)
- **Light Background**: `#f8fafb` (밝은 회색)
- **Text Dark**: `#2c3e50` (진한 회색-검정)

### 디자인 요소
- 그래디언트 배경 (Hero, Question 섹션)
- 카드 기반 레이아웃
- 호버 애니메이션 효과
- 반응형 그리드 레이아웃
- 부드러운 스크롤 효과

---

## 📱 반응형 디자인

- **Desktop** (1200px 이상): 풀 너비, 3열 그리드
- **Tablet** (768px - 1199px): 2열 그리드, 최적화된 여백
- **Mobile** (480px - 767px): 1열 레이아웃, 모바일 메뉴
- **Small Mobile** (480px 이하): 극소형 화면 최적화

---

## 🚀 기능

### 네비게이션
- 고정 헤더 네비게이션
- 모바일 반응형 햄버거 메뉴
- 부드러운 앵커 스크롤
- 현재 섹션 활성화 표시

### 상호작용
- QR코드 클릭 시 신청 링크로 이동
- 신청 버튼 클릭 시 신청 폼으로 이동
- Instagram 및 Email 링크
- 호버 상태 트랜지션

### 애니메이션
- 스크롤 감지 페이드인 효과
- 호버 상태 변환
- 부드러운 전환 효과

---

## 📂 파일 구조

```
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 전체 스타일시트
├── js/
│   └── script.js       # JavaScript 기능
└── README.md           # 이 파일
```

---

## 🛠️ 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 그리드, 플렉스박스, 그래디언트, 미디어 쿼리
- **JavaScript (Vanilla)**: 
  - 네비게이션 메뉴 토글
  - 부드러운 스크롤 링크
  - Intersection Observer API를 활용한 스크롤 애니메이션
  - 활성 섹션 추적

---

## 📋 주요 섹션별 설명

### Features Section
- 3가지 핵심 활동:
  1. 📚 **독서** - 진로 분야 도서 읽기 및 인사이트 기록
  2. ⚡ **이슈** - 관련 이슈 분석 및 입장 펼치기
  3. 🔗 **융합** - 창의적인 프로젝트 기획 및 수행

### Join Us Section
- QR코드 (클릭하면 신청 링크로 이동)
- 신청 버튼 (클릭하면 신청 폼으로 이동)

### Question Section
- Instagram 링크
- Email 링크 (insight@songchon.hs.kr)

---

## 💻 로컬 실행 방법

1. 저장소 클론:
```bash
git clone <repository-url>
cd sch-3thclub
```

2. VS Code나 다른 에디터로 `index.html` 열기

3. Live Server 확장 사용:
   - `index.html` 파일에서 우클릭 → "Open with Live Server" 선택

4. 또는 간단한 HTTP 서버 실행:
```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 🎯 신청 링크 설정

QR코드와 신청 버튼의 링크를 실제 신청 폼으로 변경하세요:

```html
<!-- index.html에서 수정 -->
<a href="https://forms.gle/YOUR_FORM_ID" target="_blank">
```

---

## 📄 라이센스

© 2026 INSIGHT. 모든 권리 보유.

---

## 🤝 기여

이 프로젝트에 기여하고 싶으신가요? 
- 기능 요청 또는 버그 리포트는 Issues를 이용해 주세요.
- Pull Request도 환영합니다!

---

## 📞 연락처

- **Instagram**: @insight_songchon
- **Email**: insight@songchon.hs.kr
- **Location**: 송촌고등학교

---

**INSIGHT**와 함께 깊이 있는 탐구를 시작하세요! 🚀

---

## 🎨 디자인 특징

### 색상 팔레트
- **Primary Color**: `#1a3a52` (진한 남색)
- **Secondary Color**: `#2d5a7b` (중간 남색)
- **Accent Color**: `#20c997` (민트 녹색)
- **Light Background**: `#f8fafb` (밝은 회색)
- **Text Dark**: `#2c3e50` (진한 회색-검정)

### 디자인 요소
- 그래디언트 배경 (Hero, Contact 섹션)
- 카드 기반 레이아웃
- 호버 애니메이션 효과
- 반응형 그리드 레이아웃
- 부드러운 스크롤 효과

---

## 📱 반응형 디자인

- **Desktop** (1200px 이상): 풀 너비, 2-3열 그리드
- **Tablet** (768px - 1199px): 1-2열 그리드, 최적화된 여백
- **Mobile** (480px - 767px): 1열 레이아웃, 모바일 메뉴
- **Small Mobile** (480px 이하): 극소형 화면 최적화

---

## 🚀 기능

### 네비게이션
- 고정 헤더 네비게이션
- 모바일 반응형 햄버거 메뉴
- 부드러운 앵커 스크롤
- 현재 섹션 활성화 표시

### 애니메이션
- 스크롤 감지 페이드인 효과
- 호버 상태 트랜지션
- 부드러운 전환 효과

---

## 📂 파일 구조

```
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 전체 스타일시트
├── js/
│   └── script.js       # JavaScript 기능
└── README.md           # 이 파일
```

---

## 🛠️ 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 그리드, 플렉스박스, 그래디언트, 미디어 쿼리
- **JavaScript (Vanilla)**: 
  - 네비게이션 메뉴 토글
  - 부드러운 스크롤 링크
  - Intersection Observer API를 활용한 스크롤 애니메이션
  - 활성 섹션 추적

---

## 📋 주요 섹션별 설명

### About Section
- 동아리의 목표와 개념 설명
- 4가지 주요 특징 (AI&ML, 프로젝트, 협업, 대회)

### Activities Section
- 6가지 주요 활동:
  1. 📚 학습 - Python, TensorFlow, PyTorch 학습
  2. 🔬 연구 - AI 논문 분석 및 기술 탐구
  3. 🚀 프로젝트 - 팀 기반 문제 해결
  4. 🎯 경진대회 - AI 및 기술 대회 참여
  5. 🤝 세미나 - 정기 세미나 및 워크숍
  6. 💡 멘토링 - 선후배 멘토링

### Members Section
- 회장, 부회장, 회원 역할 소개

### Contact Section
- 이메일, 위치, 모임 시간 정보

---

## 💻 로컬 실행 방법

1. 저장소 클론:
```bash
git clone <repository-url>
cd sch-3thclub
```

2. VS Code나 다른 에디터로 `index.html` 열기

3. Live Server 확장 사용:
   - `index.html` 파일에서 우클릭 → "Open with Live Server" 선택

4. 또는 간단한 HTTP 서버 실행:
```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 🎯 개선 사항 및 향후 계획

- [ ] 이미지 및 갤러리 추가
- [ ] 동아리 공지사항 섹션
- [ ] 팀 멤버 프로필 페이지
- [ ] 프로젝트 포트폴리오
- [ ] 연락 폼 (백엔드 연동)
- [ ] 다국어 지원
- [ ] 다크 모드

---

## 📄 라이센스

© 2024 Living-AiT. 모든 권리 보유.

---

## 🤝 기여

이 프로젝트에 기여하고 싶으신가요? 
- 기능 요청 또는 버그 리포트는 Issues를 이용해 주세요.
- Pull Request도 환영합니다!

---

## 📞 연락처

- **이메일**: livingait@songchon.hs.kr
- **위치**: 송촌고등학교
- **모임**: 매주 금요일 방과후

---

**Living-AiT**와 함께 AI의 미래를 만들어가세요! 🚀
