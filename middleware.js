// FAVE Proposal Gate — reusable access-code page for client proposal demos
// Edit only the CONFIG block below for each new proposal.
// Fonts are public (SIL OFL) and cached forever, so skip the gate for them.
export const config = { matcher: '/((?!fonts/).*)' };

const CONFIG = {
  clientName: 'LOTTE HOTEL',                     // used in title / alt text
  clientLogo: '/_gate/client.png',               // white-on-transparent PNG (2x)
  clientLogoHeight: 24,                          // display height in px (desktop)
  title: 'PRIVATE DEMO ACCESS',
  desc: '롯데호텔 객실 3D 룸투어 제안을 위한 비공개 데모입니다.',
  cornerTR: 'Proposal · 2026',
  cornerBL: 'Executive Suite 3D Tour',
  days: 14,                                      // how long one entry is remembered
};

// The access code lives in the Vercel env var GATE_CODE (digits only), never in the repo.
// If it is missing, nobody can get in (fail closed).
const CODE = String(process.env.GATE_CODE || '').replace(/\D/g, '');
const LEN = CODE.length || 6;
const COOKIE = 'fave_gate';
// Token changes whenever the code changes, so a new code logs everyone out.
const TOKEN_SALT = 'fave-gate-v1';
const MAX_AGE = 60 * 60 * 24 * CONFIG.days;
const PUBLIC = new Set(['/robots.txt', '/_gate/fave.png', CONFIG.clientLogo]);

let TOKEN_P;
function token() { return (TOKEN_P ||= makeToken()); }
async function makeToken() {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(TOKEN_SALT + ':' + CODE));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 40);
}

function hasAccess(request, tok) {
  if (!CODE) return false;
  const c = request.headers.get('cookie') || '';
  return c.split(/;\s*/).some((p) => p === `${COOKIE}=${tok}`);
}
function safeNext(v) {
  return typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? v : '/';
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
const cookieHdr = (tok) => `${COOKIE}=${tok}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`;
const BASE_HDR = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };

function gatePage(next, error) {
  const boxes = Array.from({ length: LEN }, (_, i) =>
    `<input class="d" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="${i === 0 ? 'one-time-code' : 'off'}" aria-label="코드 ${i + 1}번째 자리"${i === 0 ? ' autofocus' : ''}>`
  ).join('');
  const html = `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#0a0a0a">
<title>FAVE × ${esc(CONFIG.clientName)} — Private Preview</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{background:#0a0a0a;color:#eaeaea;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Apple SD Gothic Neo","Pretendard",sans-serif;-webkit-font-smoothing:antialiased;color-scheme:dark;overflow:hidden}
/* ambient background */
.bg{position:fixed;inset:0;pointer-events:none;overflow:hidden}
.bg:before{content:"";position:absolute;left:50%;top:42%;width:120vmax;height:120vmax;transform:translate(-50%,-50%);background:conic-gradient(from 0deg,rgba(255,255,255,.0),rgba(255,255,255,.055),rgba(255,255,255,0) 30%,rgba(255,255,255,.035) 55%,rgba(255,255,255,0) 75%);filter:blur(60px);animation:spin 38s linear infinite}
.bg:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,rgba(10,10,10,0) 0%,rgba(10,10,10,.65) 60%,#0a0a0a 100%)}
.grain{position:fixed;inset:-50%;pointer-events:none;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");animation:grain 1.2s steps(6) infinite}
@keyframes spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes grain{0%{transform:translate(0,0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,-1%)}100%{transform:translate(0,0)}}
/* frame */
.frame{position:fixed;inset:20px;border:1px solid rgba(255,255,255,.1);pointer-events:none}
.corner{position:fixed;font-size:10px;font-weight:500;letter-spacing:.22em;color:#8c8c8c;text-transform:uppercase}
.tl{top:34px;left:36px}.tr{top:34px;right:36px}.bl{bottom:34px;left:36px}.br{bottom:34px;right:36px}
.dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#e9e9e9;margin-right:8px;vertical-align:1px;animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{50%{opacity:.25}}
/* main */
main{position:relative;z-index:1;height:100%;display:flex;align-items:center;justify-content:center;padding:24px}
.wrap{width:min(400px,100%);text-align:center}
.rise{opacity:0;transform:translateY(14px);animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes rise{to{opacity:1;transform:none}}
.lockup{display:flex;align-items:center;justify-content:center;gap:24px}
.lockup img{display:block;width:auto}
.lockup .fave{height:26px}.lockup .gm{height:${CONFIG.clientLogoHeight}px}
.lockup .x{font-size:15px;font-weight:400;color:#a0a0a0}
.rule{width:28px;height:1px;background:#5a5a5a;margin:34px auto 22px}
.title{font-size:12px;letter-spacing:.3em;color:#f5f5f5;font-weight:600}
.desc{margin-top:14px;font-size:14px;line-height:1.75;color:#c4c4c4;font-weight:400;letter-spacing:-.01em;word-break:keep-all}
form{margin-top:44px}
.digits{display:flex;justify-content:center;gap:12px}
.d{width:58px;height:68px;border:1px solid #4a4a4a;background:rgba(255,255,255,.04);border-radius:2px;color:#fff;font-size:26px;font-weight:600;text-align:center;outline:none;caret-color:transparent;transition:border-color .2s,background .2s,transform .2s;-webkit-appearance:none;appearance:none}
.d:focus{border-color:#e9e9e9;background:rgba(255,255,255,.06)}
.d.f{border-color:#9a9a9a}
.ok .d{border-color:#e9e9e9;background:rgba(255,255,255,.1)}
.bad .d{border-color:#ff6b5e}
button{position:relative;margin-top:30px;width:100%;height:52px;border:1px solid #f2f2f2;background:#f2f2f2;color:#0a0a0a;font-size:12px;font-weight:700;letter-spacing:.32em;cursor:pointer;transition:opacity .25s,background .25s;overflow:hidden}
button:disabled{background:transparent;border-color:#3e3e3e;color:#8a8a8a;cursor:default}
button:not(:disabled):hover{background:#fff}
button.loading:disabled{background:#f2f2f2;border-color:#f2f2f2;color:#0a0a0a}
button .bar{position:absolute;left:0;bottom:0;height:2px;width:0;background:#0a0a0a}
button.loading .bar{animation:load 1s ease-in-out infinite}
@keyframes load{0%{left:0;width:0}50%{left:0;width:100%}100%{left:100%;width:0}}
.msg{margin-top:16px;font-size:13px;font-weight:500;min-height:1.3em;color:#ff6b5e;transition:opacity .2s}
.msg.ok{color:#f0f0f0}
.shake{animation:sh .42s}
@keyframes sh{15%,55%{transform:translateX(-7px)}35%,75%{transform:translateX(7px)}}
.out{transition:opacity .6s ease,transform .6s ease;opacity:0;transform:scale(.985)}
@media (max-width:520px){.frame{inset:12px}.tl,.tr{top:24px}.bl,.br{bottom:24px}.tl,.bl{left:26px}.tr,.br{right:26px}.corner.tr,.corner.br{display:none}.digits{gap:8px}.d{width:calc((100% - ${(LEN-1)*8}px) / ${LEN});max-width:54px;height:62px}.lockup{gap:14px}.lockup .fave{height:20px}.lockup .gm{height:${Math.round(CONFIG.clientLogoHeight*.68)}px}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rise{opacity:1;transform:none}}
</style></head>
<body>
<div class="bg"></div><div class="grain"></div><div class="frame"></div>
<div class="corner tl"><span class="dot"></span>Private Preview</div>
<div class="corner tr">${esc(CONFIG.cornerTR)}</div>
<div class="corner bl">${esc(CONFIG.cornerBL)}</div>
<div class="corner br">fave.kr</div>
<main><div class="wrap" id="wrap">
<h1 class="lockup rise" aria-label="FAVE × ${esc(CONFIG.clientName)}">
<img class="fave" alt="FAVE" src="/_gate/fave.png"><span class="x" aria-hidden="true">×</span><img class="gm" alt="${esc(CONFIG.clientName)}" src="${CONFIG.clientLogo}">
</h1>
<div class="rise" style="animation-delay:.12s">
<div class="rule"></div>
<p class="title">${esc(CONFIG.title)}</p>
<p class="desc">${esc(CONFIG.desc)}<br>전달받은 ${LEN}자리 코드를 입력해 주세요.</p>
</div>
<form method="POST" action="/__gate" autocomplete="off" class="rise" style="animation-delay:.24s" id="f" novalidate>
<div class="digits${error ? ' bad' : ''}" id="digits">${boxes}</div>
<input type="hidden" name="code" id="code">
<input type="hidden" name="next" value="${esc(next)}">
<input type="hidden" name="hash" id="hash" value="">
<button type="submit" id="btn" disabled>ENTER<span class="bar"></span></button>
<p class="msg" id="msg" role="status" aria-live="polite">${error ? '코드가 올바르지 않습니다.' : ''}</p>
</form>
</div></main>
<script>
(function(){
var N=${LEN},next=${JSON.stringify(next).replace(/</g,'\\u003c')};
var ds=[].slice.call(document.querySelectorAll('.d')),f=document.getElementById('f'),btn=document.getElementById('btn'),msg=document.getElementById('msg'),box=document.getElementById('digits'),wrap=document.getElementById('wrap');
document.getElementById('hash').value=location.hash||'';
var busy=false,fails=0;
function val(){return ds.map(function(d){return d.value}).join('')}
function sync(){ds.forEach(function(d){d.classList.toggle('f',!!d.value)});btn.disabled=val().length!==N||busy;if(msg.textContent&&!busy){box.classList.remove('bad')}}
function fill(str,start){str=(str||'').replace(/\\D/g,'');var i=start||0;for(var k=0;k<str.length&&i<N;k++,i++)ds[i].value=str[k];(ds[Math.min(i,N-1)]).focus();sync();if(val().length===N)submit()}
ds.forEach(function(d,i){
 d.addEventListener('input',function(){var v=d.value.replace(/\\D/g,'');if(v.length>1){d.value='';fill(v,i);return}d.value=v;if(v&&i<N-1)ds[i+1].focus();sync();if(val().length===N)submit()});
 d.addEventListener('keydown',function(e){if(e.key==='Backspace'&&!d.value&&i>0){ds[i-1].value='';ds[i-1].focus();sync();e.preventDefault()}else if(e.key==='ArrowLeft'&&i>0){ds[i-1].focus();e.preventDefault()}else if(e.key==='ArrowRight'&&i<N-1){ds[i+1].focus();e.preventDefault()}else if(e.key==='Enter'){e.preventDefault();submit()}});
 d.addEventListener('paste',function(e){e.preventDefault();fill((e.clipboardData||window.clipboardData).getData('text'),i)});
 d.addEventListener('focus',function(){d.select&&d.select()});
});
function reset(text){busy=false;btn.classList.remove('loading');btn.textContent='';btn.append('ENTER');var b=document.createElement('span');b.className='bar';btn.append(b);msg.className='msg';msg.textContent=text;box.classList.add('bad');wrap.classList.remove('shake');void wrap.offsetWidth;wrap.classList.add('shake');ds.forEach(function(d){d.value=''});ds[0].focus();sync()}
function submit(){
 if(busy||val().length!==N)return;
 busy=true;btn.disabled=true;btn.classList.add('loading');msg.className='msg';msg.textContent='';
 var body=new URLSearchParams({code:val(),next:next,hash:location.hash||''});
 fetch('/__gate',{method:'POST',body:body,headers:{'x-gate':'1'},credentials:'same-origin'}).then(function(r){return r.json().catch(function(){return{ok:false}})}).then(function(j){
  if(j&&j.ok){box.classList.add('ok');msg.className='msg ok';msg.textContent='확인되었습니다. 데모로 이동합니다.';setTimeout(function(){wrap.classList.add('out')},250);setTimeout(function(){location.replace(j.location||'/')},800)}
  else{fails++;setTimeout(function(){reset(fails>=3?'코드가 올바르지 않습니다. 전달받은 메일의 코드를 다시 확인해 주세요.':'코드가 올바르지 않습니다.')},350)}
 }).catch(function(){busy=false;document.getElementById('code').value=val();f.submit()});
}
f.addEventListener('submit',function(e){e.preventDefault();submit()});
sync();
})();
</script>
</body></html>`;
  return new Response(html, {
    status: error ? 401 : 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', ...BASE_HDR },
  });
}

export default async function middleware(request) {
  const url = new URL(request.url);
  if (PUBLIC.has(url.pathname)) return;

  if (url.pathname === '/__gate' && request.method === 'POST') {
    let code = '', next = '/', hash = '';
    try {
      const form = await request.formData();
      code = String(form.get('code') || '').trim();
      next = safeNext(String(form.get('next') || '/'));
      hash = String(form.get('hash') || '');
    } catch (e) {}
    const ok = CODE.length > 0 && code === CODE;
    const h = hash.startsWith('#') ? hash.slice(0, 2000) : '';
    if (request.headers.get('x-gate') === '1') {
      // small delay on failure slows down guessing
      if (!ok) await new Promise((r) => setTimeout(r, 600));
      return new Response(JSON.stringify(ok ? { ok: true, location: next + h } : { ok: false }), {
        status: ok ? 200 : 401,
        headers: { 'Content-Type': 'application/json', ...BASE_HDR, ...(ok ? { 'Set-Cookie': cookieHdr(await token()) } : {}) },
      });
    }
    if (!ok) return gatePage(next, true);
    return new Response(null, { status: 303, headers: { Location: next + h, 'Set-Cookie': cookieHdr(await token()), ...BASE_HDR } });
  }

  if (hasAccess(request, await token())) return;
  return gatePage(url.pathname + url.search, false);
}
