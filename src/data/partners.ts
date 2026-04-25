export type Partner = {
  id: string;
  name: string;
  url: string;
  deeplink: string;
  category: "글로벌" | "명품" | "국내" | "스니커즈" | "SPA";
  tagline: string;
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
    tagline: "트렌드 패션을 가장 빠르게",
    badge: "HOT",
  },
  {
    id: "outnet",
    name: "THE OUTNET",
    url: "https://www.theoutnet.com/en-au",
    deeplink:
      "https://bestmore.net/click.php?m=outnet&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.theoutnet.com%2Fen-au",
    category: "명품",
    tagline: "디자이너 브랜드 아울렛",
  },
  {
    id: "charleskeith",
    name: "찰스앤키스",
    url: "https://www.charleskeith.com/kr",
    deeplink:
      "https://lase.kr/click.php?m=charlesnk&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.charleskeith.com%2Fkr",
    category: "글로벌",
    tagline: "데일리 백 & 슈즈",
  },
  {
    id: "misope",
    name: "미소페",
    url: "https://www.misope.co.kr/",
    deeplink:
      "https://linkmoa.kr/click.php?m=misope&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.misope.co.kr%2F",
    category: "국내",
    tagline: "정장 슈즈 전문",
  },
  {
    id: "farfetch",
    name: "파페치 FARFETCH",
    url: "http://www.farfetch.com/",
    deeplink:
      "https://linkmoa.kr/click.php?m=farfetch&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.farfetch.com%2F",
    category: "명품",
    tagline: "글로벌 럭셔리 편집샵",
    badge: "BEST",
  },
  {
    id: "joseph",
    name: "조셉 JOSEPH",
    url: "http://www.joseph-fashion.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=joseph&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.joseph-fashion.com%2F",
    category: "명품",
    tagline: "런던 컨템포러리 브랜드",
  },
  {
    id: "stories",
    name: "& Other Stories",
    url: "https://www.stories.com/kr_krw/",
    deeplink:
      "https://lpweb.kr/click.php?m=stories&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.stories.com%2Fkr_krw%2F",
    category: "SPA",
    tagline: "스톡홀름 발 감각적 SPA",
  },
  {
    id: "finishline",
    name: "Finish Line 피니쉬라인",
    url: "http://www.finishline.com",
    deeplink:
      "https://lpweb.kr/click.php?m=finishline&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.finishline.com",
    category: "스니커즈",
    tagline: "스니커 헤드 픽",
  },
  {
    id: "benetton",
    name: "베네통몰",
    url: "http://www.benettonmall.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=benetton1&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.benettonmall.com%2F",
    category: "SPA",
    tagline: "컬러풀 캐주얼",
  },
  {
    id: "operandi",
    name: "모다 오페란디",
    url: "http://modaoperandi.com/",
    deeplink:
      "https://newtip.net/click.php?m=operandi&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fmodaoperandi.com%2F",
    category: "명품",
    tagline: "런웨이 시즌 프리오더",
  },
  {
    id: "paulsmith",
    name: "폴 스미스",
    url: "http://www.paulsmith.co.uk/",
    deeplink:
      "https://lpweb.kr/click.php?m=paulsmith&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.paulsmith.co.uk%2F",
    category: "명품",
    tagline: "브리티시 시그니처 스트라이프",
  },
  {
    id: "posty",
    name: "포스티 POSTY",
    url: "https://posty.kr/",
    deeplink:
      "https://lase.kr/click.php?m=posty&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fposty.kr%2F",
    category: "국내",
    tagline: "가성비 데일리룩",
  },
  {
    id: "wconcept",
    name: "W컨셉",
    url: "http://www.wconcept.co.kr",
    deeplink:
      "https://lpweb.kr/click.php?m=wconcept&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=http%3A%2F%2Fwww.wconcept.co.kr",
    category: "국내",
    tagline: "국내 디자이너 편집샵",
    badge: "PICK",
  },
  {
    id: "stockx",
    name: "StockX",
    url: "https://stockx.com/",
    deeplink:
      "https://lpweb.kr/click.php?m=stockx&a=A100704224&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fstockx.com%2F",
    category: "스니커즈",
    tagline: "리셀 마켓 1등",
  },
];

export const categories = ["전체", "글로벌", "명품", "국내", "스니커즈", "SPA"] as const;
export type Category = (typeof categories)[number];
