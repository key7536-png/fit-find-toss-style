# 픽앤핏 — 앱인토스 출시 가이드 (Vibe Coding 빌드판)

> Lovable로 만든 React + Vite 웹앱을 **앱인토스(Apps in Toss) WebView 미니앱**으로 출시하기 위한 작업서.
> 가이드 출처: https://developers-apps-in-toss.toss.im/intro/overview.md

---

## 1. 출시 방식 결정

| 항목 | 값 |
|---|---|
| 통합 방식 | **WebView** (앱인토스 공식 지원, React 웹앱에 최적) |
| 네이티브 SDK 필요 여부 | ❌ 없음 (단순 외부링크 큐레이션 앱이라 토스 결제/로그인 미사용) |
| 호스팅 | Lovable Publish → `*.lovable.app` 또는 커스텀 도메인 |

> 앱인토스 가이드 발췌:
> > "WebView와 React Native 기반의 SDK를 제공… 파트너사는 SDK만 연동해 빌드 결과물을 업로드하면, 내부 검수 절차 후 바로 출시할 수 있어요."

---

## 2. 빌드 절차

```bash
# 1) 의존성
bun install

# 2) 프로덕션 빌드
bun run build

# 3) 결과물
# → dist/ 폴더 (정적 호스팅 가능한 HTML/JS/CSS)
```

Lovable에서는 우측 상단 **Publish** 버튼만 누르면 위 과정이 자동 실행되고 공개 URL이 발급됩니다.

---

## 3. 호스팅 URL 확보

| 옵션 | 설명 | 추천 |
|---|---|---|
| A. Lovable 기본 | `picknfit.lovable.app` 같은 무료 서브도메인 | 시범 출시 |
| B. 커스텀 도메인 | `picknfit.app` 등 자체 도메인 연결 | 정식 출시 |

→ **이 URL을 앱인토스 파트너 콘솔의 "서비스 URL" 칸에 입력**합니다.

---

## 4. 앱인토스 파트너 콘솔 등록 정보 (그대로 복붙)

### 기본 정보
- **앱 이름**: 픽앤핏
- **앱 부제**: 오늘의 패션, 한 번에
- **카테고리**: 쇼핑 > 패션
- **서비스 URL**: `https://picknfit.lovable.app` ← 발급 후 교체
- **앱 아이콘**: `src/assets/logo.png` (1024×1024 PNG)
- **가로 썸네일**: `src/assets/thumbnail-wide.jpg` (1920×1080 JPG)

### 상세 설명
```
픽앤핏은 국내·해외 인기 패션몰을 한 화면에서 비교하고 바로 이동할 수 있는
큐레이션 미니앱입니다.

쉬인·파페치·W컨셉·StockX·찰스앤키스 등 14개 이상 제휴몰을 카테고리별
(글로벌·명품·국내·스니커즈·SPA)로 정리했어요.

매일 업데이트되는 '오늘의 픽'으로 트렌드를 빠르게 만나고, 원클릭으로
원하는 쇼핑몰로 이동하세요. 복잡한 가입 없이 토스에서 바로 시작합니다.
```

### 검색 키워드
```
패션, 쇼핑, 해외직구, 명품, 스니커즈, 쉬인, 파페치, W컨셉, StockX, 옷쇼핑
```

### 제휴 마케팅 고지 (필수 — 메인 화면 하단에 이미 노출)
- 상호: 픽앤핏 (Pick&Fit)
- 대표자: ○○○ ← 실제 정보로 교체
- 사업자등록번호: 000-00-00000 ← 교체
- 통신판매업신고: 제0000-서울○○-0000호 ← 교체
- 고객센터: help@picknfit.app ← 교체

---

## 5. 토스 WebView 호환 적용 사항 (이미 코드 반영됨)

| 항목 | 처리 |
|---|---|
| 외부 링크 이동 | `window.location.href` 사용 → 토스 상단 **뒤로가기** 버튼으로 복귀 가능 (`window.open` 새 창은 WebView에서 차단될 수 있어 회피) |
| iOS 노치 대응 | `viewport-fit=cover` + `env(safe-area-inset-*)` 적용 |
| 테마 컬러 | `<meta name="theme-color" content="#3182F6">` (Toss Blue) |
| 폰트 | Pretendard (한글 가독성) |
| 반응형 | 모바일 우선 (max-w-screen-md) |
| PWA manifest | `public/manifest.json` |
| 라우팅 | React Router `BrowserRouter` (Lovable SPA fallback 자동 지원) |

---

## 6. 검수 전 셀프 체크리스트

- [ ] 사업자 정보 플레이스홀더 → 실제 값으로 교체
- [ ] 14개 제휴 딥링크 모두 정상 작동 확인 (모바일 토스 인앱 브라우저에서 테스트)
- [ ] 앱 아이콘/썸네일 규격 재확인 (앱인토스 콘솔 안내 기준)
- [ ] 제휴 마케팅 고지 노출 확인
- [ ] 개인정보 수집 없음 → 별도 동의 화면 불필요
- [ ] 미성년자 대상 광고/상품 없음 확인
- [ ] HTTPS 호스팅 확인 (Lovable 기본 제공)

---

## 7. 출시 흐름 요약

```
[ Lovable에서 Publish 클릭 ]
        ↓
[ https://picknfit.lovable.app 발급 ]
        ↓
[ 앱인토스 파트너 콘솔에 URL + 등록정보 입력 ]
        ↓
[ 내부 검수 ]
        ↓
[ 토스 앱 > 전체 탭에 노출 / 검색 노출 ]
```

---

## 8. 출시 후 성장 도구 (앱인토스 제공)

가이드에 따르면 출시 후 다음을 활용 가능:
- 토스 전체 탭 홈 노출
- 키워드 기반 검색 노출
- 토스 푸시·알림 발송
- 프로모션 / 광고 / 정산 자동화

---

## 9. 참고 링크
- 앱인토스 개발자 문서: https://developers-apps-in-toss.toss.im
- TDS (Toss Design System): https://tds.toss.im
