import { useMemo, useState } from "react";
import { ChevronRight, Search, Sparkles, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import thumbnail from "@/assets/thumbnail-wide.jpg";
import { partners, categories, type Category } from "@/data/partners";

const Index = () => {
  const [active, setActive] = useState<Category>("전체");

  const filtered = useMemo(
    () => (active === "전체" ? partners : partners.filter((p) => p.category === active)),
    [active]
  );

  const todaysPick = partners.filter((p) => p.badge).slice(0, 3);

  const handleGo = (deeplink: string, name: string) => {
    // 외부 제휴 딥링크 — 토스 미니앱 in-app 브라우저로 자연스럽게 연결
    window.open(deeplink, "_blank", "noopener,noreferrer");
    // 간단한 클릭 로깅 (확장 시 GA/Toss Analytics 연동 지점)
    if (typeof window !== "undefined") {
      console.info("[picknfit] click", { name, deeplink });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navigation (TDS: 56px height, sticky, 좌측 로고) */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2" aria-label="픽앤핏 홈">
            <img
              src={logo}
              alt="픽앤핏 로고"
              width={28}
              height={28}
              className="h-7 w-7 rounded-[8px]"
            />
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
          <h1 className="text-[28px] font-extrabold leading-tight tracking-tight">
            오늘의 패션,
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

        {/* Today's Pick */}
        <section className="mt-8 px-5">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="flex items-center gap-1.5 text-[19px] font-bold tracking-tight">
              <Sparkles className="h-[18px] w-[18px] text-primary" strokeWidth={2.4} />
              오늘의 픽
            </h2>
            <span className="text-[13px] font-medium text-muted-foreground">에디터 추천</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {todaysPick.map((p) => (
              <button
                key={p.id}
                onClick={() => handleGo(p.deeplink, p.name)}
                className="group flex flex-col items-start gap-2 rounded-2xl bg-surface p-3 text-left transition-transform active:scale-[0.97]"
              >
                <span className="inline-flex h-6 items-center rounded-full bg-primary/10 px-2 text-[11px] font-bold text-primary">
                  {p.badge}
                </span>
                <span className="line-clamp-1 text-[14px] font-semibold">{p.name}</span>
                <span className="line-clamp-2 text-[12px] text-muted-foreground">{p.tagline}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Category Tabs */}
        <section className="mt-8">
          <div className="scrollbar-none flex gap-2 overflow-x-auto px-5">
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

        {/* Partner List */}
        <section className="mt-5 px-5">
          <ul className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
            {filtered.map((p, i) => (
              <li key={p.id}>
                <button
                  onClick={() => handleGo(p.deeplink, p.name)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors active:bg-secondary"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-[13px] font-bold text-foreground">
                      {p.name.replace(/[^A-Za-z가-힣]/g, "").slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate text-[15px] font-semibold">{p.name}</span>
                        {p.badge && (
                          <span className="rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-[13px] text-muted-foreground">
                        {p.tagline} · {p.category}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={2.2} />
                </button>
                {i < filtered.length - 1 && <div className="ml-[68px] h-px bg-border/70" />}
              </li>
            ))}
          </ul>
        </section>

        {/* 제휴 마케팅 고지 (앱인토스 가이드) */}
        <section className="mt-8 px-5">
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
