import { useMemo, useState } from "react";
import { ChevronRight, Search, Sparkles, ShieldCheck, Flame } from "lucide-react";
import logo from "@/assets/logo.png";
import thumbnail from "@/assets/thumbnail-wide.jpg";
import {
  partners,
  categories,
  SEASON_LABEL,
  SEASON_HEADLINE,
  type Category,
} from "@/data/partners";

const Index = () => {
  const [active, setActive] = useState<Category>("전체");

  const filtered = useMemo(
    () => (active === "전체" ? partners : partners.filter((p) => p.category === active)),
    [active]
  );

  const todaysPick = partners.filter((p) => p.badge);
  const featured = partners.find((p) => p.id === "farfetch")!;
  const sneakerDrop = partners.find((p) => p.id === "stockx")!;

  const handleGo = (deeplink: string, name: string) => {
    // 토스 WebView 권장: 같은 창 이동 → 토스 상단 뒤로가기로 복귀 가능
    if (typeof window !== "undefined") {
      console.info("[picknfit] click", { name, deeplink });
    }
    window.location.href = deeplink;
  };

  return (
    <div className="min-h-screen bg-background pb-[env(safe-area-inset-bottom)] text-foreground">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 pt-[env(safe-area-inset-top)] backdrop-blur">
        <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2" aria-label="픽앤핏 홈">
            <img src={logo} alt="픽앤핏 로고" width={28} height={28} className="h-7 w-7 rounded-[8px]" />
            <span className="text-[17px] font-bold tracking-tight">
              픽앤핏<span className="text-primary">.</span>
            </span>
          </a>
          <button
            type="button"
            aria-label="검색"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <Search className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-screen-md pb-24">
        {/* Hero */}
        <section className="px-5 pt-6">
          <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold tracking-wider text-accent-foreground">
            {SEASON_LABEL}
          </span>
          <h1 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight">
            {SEASON_HEADLINE},
            <br />
            한 번에 픽앤핏.
          </h1>
          <p className="mt-2 text-[15px] text-muted-foreground">
            국내·해외 패션몰을 한 화면에서 비교하고 바로 이동하세요.
          </p>

          <div className="mt-5 overflow-hidden rounded-[20px] bg-surface">
            <img
              src={thumbnail}
              alt="픽앤핏 — 오늘의 패션 한 번에"
              width={1376}
              height={768}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Today's Pick — 가로 스크롤 빅카드 */}
        <section className="mt-9 px-5">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="flex items-center gap-1.5 text-[19px] font-bold tracking-tight">
              <Sparkles className="h-[18px] w-[18px] text-primary" strokeWidth={2.4} />
              오늘의 픽
            </h2>
            <span className="text-[13px] font-medium text-muted-foreground">에디터 추천</span>
          </div>
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {todaysPick.map((p) => (
              <button
                key={p.id}
                onClick={() => handleGo(p.deeplink, p.name)}
                className="group relative aspect-[3/4] w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl bg-surface text-left transition-transform active:scale-[0.98]"
              >
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.signature}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute left-3 top-3">
                  <span className="inline-flex h-6 items-center gap-1 rounded-full bg-primary px-2 text-[11px] font-bold text-primary-foreground">
                    <Flame className="h-3 w-3" strokeWidth={2.6} />
                    {p.badge}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[11px] font-medium opacity-80">{p.category}</p>
                  <p className="mt-0.5 line-clamp-1 text-[16px] font-bold">{p.name}</p>
                  <p className="line-clamp-2 text-[12.5px] opacity-90">{p.signature}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Banner — Farfetch */}
        <section className="mt-8 px-5">
          <button
            onClick={() => handleGo(featured.deeplink, featured.name)}
            className="group relative block w-full overflow-hidden rounded-2xl text-left"
          >
            <img
              src={featured.image}
              alt={featured.signature}
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-5 text-white">
              <span className="text-[11px] font-semibold opacity-80">FEATURED · {featured.category}</span>
              <h3 className="mt-1 text-[20px] font-extrabold leading-tight">
                {featured.name}
              </h3>
              <p className="mt-1 max-w-[60%] text-[12.5px] opacity-90">{featured.signature}</p>
              <span className="mt-3 inline-flex w-max items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-foreground">
                바로 보기 <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.6} />
              </span>
            </div>
          </button>
        </section>

        {/* Category Tabs */}
        <section className="mt-8">
          <div className="flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`h-9 shrink-0 rounded-full px-4 text-[14px] font-semibold transition-colors ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </section>

        {/* Brand Grid — 각 브랜드 시그니처 무드 */}
        <section className="mt-5 px-5">
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => handleGo(p.deeplink, p.name)}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.98]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.signature}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute left-2 top-2 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute right-2 top-2 rounded-md bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 p-3">
                  <span className="line-clamp-1 text-[14px] font-bold">{p.name}</span>
                  <span className="line-clamp-2 text-[12px] leading-snug text-muted-foreground">
                    {p.signature}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Sneaker Drop Banner — StockX */}
        <section className="mt-8 px-5">
          <button
            onClick={() => handleGo(sneakerDrop.deeplink, sneakerDrop.name)}
            className="group relative block w-full overflow-hidden rounded-2xl text-left"
          >
            <img
              src={sneakerDrop.image}
              alt={sneakerDrop.signature}
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center p-5 text-right text-white">
              <span className="text-[11px] font-semibold opacity-80">SNEAKER DROP</span>
              <h3 className="mt-1 text-[20px] font-extrabold leading-tight">{sneakerDrop.name}</h3>
              <p className="mt-1 max-w-[60%] text-[12.5px] opacity-90">{sneakerDrop.signature}</p>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-foreground">
                바로 가기 <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.6} />
              </span>
            </div>
          </button>
        </section>

        {/* 제휴 마케팅 고지 */}
        <section className="mt-10 px-5">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <div className="flex items-center gap-1.5 text-[13px] font-bold text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={2.4} />
              제휴 마케팅 활동 안내
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
              본 서비스는 제휴 마케팅 활동의 일환으로, 사용자가 링크를 통해 상품을 구매할 경우
              운영자가 일정액의 수수료를 제공받습니다. 모든 상품의 거래·결제·배송·교환·환불은
              해당 제휴몰의 정책을 따르며, 픽앤핏은 거래의 당사자가 아닙니다. 상품 정보 및 가격은
              제휴몰의 사정에 따라 변동될 수 있습니다.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1 border-t border-border pt-3 text-[11.5px] leading-relaxed text-muted-foreground">
              <span>· 상호: 픽앤핏 (Pick&Fit)</span>
              <span>· 대표자: ○○○ / 사업자등록번호: 000-00-00000</span>
              <span>· 통신판매업신고: 제0000-서울○○-0000호</span>
              <span>· 고객센터: help@picknfit.app</span>
            </div>
          </div>
          <p className="mt-3 px-1 text-center text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} 픽앤핏 · Powered by Toss Mini App
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
