// 게임/인증/API/진도를 캐시하지 않는다. 새 코드는 다음 온라인 실행에 받는다.
const base = new URL('./', self.location.href).pathname;
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.mode !== 'navigate' || url.origin !== self.location.origin || ![base, `${base}index.html`].includes(url.pathname)) return;
  event.respondWith(fetch(event.request, { cache: 'no-store' }).catch(() => new Response(`<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>토비 용사단 — 연결 확인</title><style>body{background:#fff3d6;color:#241c2b;font:18px/1.7 sans-serif;max-width:36em;margin:10vh auto;padding:24px}a{display:inline-block;padding:12px;color:#241c2b;border:2px solid}</style><h1>인터넷 연결을 확인해 주세요</h1><p>마을 진도는 이 기기에 그대로 있어요. 연결한 뒤 다시 열어 주세요.</p><p>현재 설치판은 인터넷 연결이 필요해요.</p><a href="">다시 연결</a></html>`, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } })));
});
