import shein from "@/assets/brands/shein.jpg";
import outnet from "@/assets/brands/outnet.jpg";
import charleskeith from "@/assets/brands/charleskeith.jpg";
import misope from "@/assets/brands/misope.jpg";
import farfetch from "@/assets/brands/farfetch.jpg";
import joseph from "@/assets/brands/joseph.jpg";
import stories from "@/assets/brands/stories.jpg";
import finishline from "@/assets/brands/finishline.jpg";
import benetton from "@/assets/brands/benetton.jpg";
import operandi from "@/assets/brands/operandi.jpg";
import paulsmith from "@/assets/brands/paulsmith.jpg";
import posty from "@/assets/brands/posty.jpg";
import wconcept from "@/assets/brands/wconcept.jpg";
import stockx from "@/assets/brands/stockx.jpg";

export type Partner = {
  id: string;
  name: string;
  url: string;
  deeplink: string;
  category: "글로벌" | "명품" | "국내" | "스니커즈" | "SPA";
  tagline: string;
  signature: string; // 브랜드 시그니처 한 줄
  image: string;
  badge?: string;
};

export const partners: Partner[] = [
  {
    id: "shein",
    name: "쉬인 SHEIN",
    url: "https://kr.shein.com/",
    deeplink:
      "https://lase.kr/click.php?m=shein&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fkr.shein.com%2F",
    category: "글로벌",
    tagline: "Z세대 컬러풀 트렌드",
    signature: "매주 신상, 가장 빠른 트렌드 픽업",
    image: shein,
    badge: "HOT",
  },
  {
    id: "outnet",
    name: "THE OUTNET",
    url: "https://www.theoutnet.com/en-au",
    deeplink:
      "https://bestmore.net/click.php?m=outnet&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.theoutnet.com%2Fen-au",
    category: "명품",
    tagline: "디자이너 아울렛",
    signature: "프리미엄 디자이너 최대 70% OFF",
    image: outnet,
  },
  {
    id: "charleskeith",
    name: "찰스앤키스",
    url: "https://www.charleskeith.com/kr",
    deeplink:
      "https://lase.kr/click.php?m=charlesnk&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.charleskeith.com%2Fkr",
    category: "글로벌",
    tagline: "데일리 백 & 슈즈",
    signature: "모던 시티걸 잇백 컬렉션",
    image: charleskeith,
  },
  {
    id: "misope",
    name: "미소페",
    url: "https://www.misope.co.kr/",
    deeplink:
      "https://linkmoa.kr/click.php?m=misope&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.misope.co.kr%2F",
    category: "국내",
    tagline: "정장 슈즈 전문",
    signature: "이태리 가죽 핸드메이드 정장화",
    image: misope,
  },
  {
    id: "farfetch",
    name: "파페치 FARFETCH",
    url: "http://www.farfetch.com/",
    deeplink:
      "https://linkmoa.kr/click.php?m=farfetch&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.farfetch.com%2F",
    category: "명품",
    tagline: "글로벌 럭셔리 편집샵",
    signature: "전 세계 1,400+ 부티크 명품 한 번에",
    image: farfetch,
    badge: "BEST",
  },
  {
    id: "joseph",
    name: "조셉 JOSEPH",
    url: "http://www.joseph-fashion.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=joseph&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.joseph-fashion.com%2F",
    category: "명품",
    tagline: "런던 컨템포러리",
    signature: "캐시미어 니트와 테일러링의 정석",
    image: joseph,
  },
  {
    id: "stories",
    name: "& Other Stories",
    url: "https://www.stories.com/kr_krw/",
    deeplink:
      "https://lpweb.kr/click.php?m=stories&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.stories.com%2Fkr_krw%2F",
    category: "SPA",
    tagline: "스칸디 페미닌 SPA",
    signature: "스톡홀름 발 무드한 봄 원피스",
    image: stories,
  },
  {
    id: "finishline",
    name: "Finish Line",
    url: "http://www.finishline.com",
    deeplink:
      "https://lpweb.kr/click.php?m=finishline&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.finishline.com",
    category: "스니커즈",
    tagline: "스트릿 스니커",
    signature: "조던·나이키 스트릿 픽 모음",
    image: finishline,
  },
  {
    id: "benetton",
    name: "베네통몰",
    url: "http://www.benettonmall.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=benetton1&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.benettonmall.com%2F",
    category: "SPA",
    tagline: "컬러 블록 SPA",
    signature: "비비드 컬러 니트의 시그니처",
    image: benetton,
  },
  {
    id: "operandi",
    name: "모다 오페란디",
    url: "http://modaoperandi.com/",
    deeplink:
      "https://newtip.net/click.php?m=operandi&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fmodaoperandi.com%2F",
    category: "명품",
    tagline: "런웨이 프리오더",
    signature: "런웨이 룩을 가장 먼저 프리오더",
    image: operandi,
  },
  {
    id: "paulsmith",
    name: "폴 스미스",
    url: "http://www.paulsmith.co.uk/",
    deeplink:
      "https://lpweb.kr/click.php?m=paulsmith&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.paulsmith.co.uk%2F",
    category: "명품",
    tagline: "브리티시 시그니처",
    signature: "멀티 스트라이프, 영국 감성의 정석",
    image: paulsmith,
  },
  {
    id: "posty",
    name: "포스티 POSTY",
    url: "https://posty.kr/",
    deeplink:
      "https://lase.kr/click.php?m=posty&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fposty.kr%2F",
    category: "국내",
    tagline: "데일리 가성비",
    signature: "1만원대 데일리룩, 매일 신상",
    image: posty,
  },
  {
    id: "wconcept",
    name: "W컨셉",
    url: "http://www.wconcept.co.kr",
    deeplink:
      "https://lpweb.kr/click.php?m=wconcept&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.wconcept.co.kr",
    category: "국내",
    tagline: "K-디자이너 편집샵",
    signature: "국내 컨템포러리 디자이너 큐레이션",
    image: wconcept,
    badge: "PICK",
  },
  {
    id: "stockx",
    name: "StockX",
    url: "https://stockx.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=stockx&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fstockx.com%2F",
    category: "스니커즈",
    tagline: "스니커 리셀 마켓 1위",
    signature: "한정판 드롭, 실시간 시세 확인",
    image: stockx,
  },
];

export const categories = ["전체", "글로벌", "명품", "국내", "스니커즈", "SPA"] as const;
export type Category = (typeof categories)[number];

// 시즌 컨텍스트 (메인 헤더 등에 표시)
export const SEASON_LABEL = "SPRING 2026";
export const SEASON_HEADLINE = "봄, 새 옷 입을 시간";
