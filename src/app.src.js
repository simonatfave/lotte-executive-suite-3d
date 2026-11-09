
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

RectAreaLightUniformsLib.init();
const INIT_HASH = location.hash;
/* ================= CONFIG (client data — replace with real values) ================= */
const CONFIG = {
  hotel:  { ko:'호텔명', en:'Hotel Name', ja:'ホテル名', zh:'酒店名称' },
  city:   { ko:'서울', en:'Seoul', ja:'ソウル', zh:'首尔' },
  room:   { ko:'이그제큐티브 스위트', en:'Executive Suite', ja:'エグゼクティブスイート', zh:'行政套房' },
  area: 150, floor:'28F', bed:'King', guests:'2 + 1',
  guest: 'Mr. & Mrs. Kim',
  bookingUrl: '',   // e.g. 'https://hotel.example/booking?room=exec-suite'
};

/* ================= i18n ================= */
const I18N = {
 ko:{ 'sp.foyer':'현관 · 드레스룸','sp.living':'거실','sp.dining':'다이닝','sp.bedroom':'침실','sp.bath':'욕실','sp.overview':'전체 평면',
   'nav.foyer':'현관','nav.living':'거실','nav.dining':'다이닝','nav.bedroom':'침실','nav.bath':'욕실','nav.overview':'전체 평면',
   'scene.welcome':'웰컴','scene.day':'데이','scene.evening':'이브닝','scene.turndown':'턴다운','scene.sleep':'슬립',
   'ui.scenes':'조명 시나리오','ui.tour':'자동 투어','ui.sound':'사운드','ui.gyro':'자이로','ui.hq':'고화질','ui.sq':'표준 화질','ui.info':'객실 정보',
   'ui.area':'면적','ui.bed':'침대','ui.guests':'투숙 인원','ui.view':'전망','ui.floor':'층','ui.viewv':'남산 · 도심 파노라마','ui.book':'이 객실 예약하기','ui.closer':'가까이 보기','ui.close':'닫기',
   'ui.hint':'드래그 — 둘러보기 · 휠 — 줌 · WASD — 이동<br>바닥 더블클릭 — 그 위치로 이동 · ＋ — 어메니티 정보',
   'ui.bookToast':'예약 페이지로 연결됩니다 (제안용 데모)','ui.gyroNo':'이 화면에서는 기기 방향 센서를 쓸 수 없습니다. 호텔 사이트에 올리면 동작합니다.','ui.welcome':'환영합니다',
   'ui.am':['킹 베드','레인 샤워','프리스탠딩 욕조','워크인 클로짓','미니바 · 커피','업무 데스크','8인 다이닝','남산 뷰'] },
 en:{ 'sp.foyer':'Foyer · Dressing','sp.living':'Living Room','sp.dining':'Dining Room','sp.bedroom':'Bedroom','sp.bath':'Bathroom','sp.overview':'Floor Plan',
   'nav.foyer':'Foyer','nav.living':'Living','nav.dining':'Dining','nav.bedroom':'Bedroom','nav.bath':'Bath','nav.overview':'Floor Plan',
   'scene.welcome':'Welcome','scene.day':'Day','scene.evening':'Evening','scene.turndown':'Turndown','scene.sleep':'Sleep',
   'ui.scenes':'Lighting scenes','ui.tour':'Auto tour','ui.sound':'Sound','ui.gyro':'Gyro','ui.hq':'High quality','ui.sq':'Standard','ui.info':'Room details',
   'ui.area':'Size','ui.bed':'Bed','ui.guests':'Guests','ui.view':'View','ui.floor':'Floor','ui.viewv':'Namsan & city panorama','ui.book':'Book this room','ui.closer':'Take a closer look','ui.close':'Close',
   'ui.hint':'Drag — look around · Scroll — zoom · WASD — walk<br>Double-click floor — move there · ＋ — amenity details',
   'ui.bookToast':'Links to the booking page (proposal demo)','ui.gyroNo':'Motion sensors are blocked in this preview. They will work on the hotel site.','ui.welcome':'Welcome',
   'ui.am':['King bed','Rain shower','Freestanding tub','Walk-in closet','Minibar · coffee','Work desk','Dining for 8','Namsan view'] },
 ja:{ 'sp.foyer':'エントランス · ドレッシング','sp.living':'リビング','sp.dining':'ダイニング','sp.bedroom':'ベッドルーム','sp.bath':'バスルーム','sp.overview':'フロアプラン',
   'nav.foyer':'玄関','nav.living':'リビング','nav.dining':'ダイニング','nav.bedroom':'寝室','nav.bath':'バス','nav.overview':'全体図',
   'scene.welcome':'ウェルカム','scene.day':'デイ','scene.evening':'イブニング','scene.turndown':'ターンダウン','scene.sleep':'スリープ',
   'ui.scenes':'照明シーン','ui.tour':'自動ツアー','ui.sound':'サウンド','ui.gyro':'ジャイロ','ui.hq':'高画質','ui.sq':'標準画質','ui.info':'客室情報',
   'ui.area':'広さ','ui.bed':'ベッド','ui.guests':'定員','ui.view':'眺望','ui.floor':'階','ui.viewv':'南山・市街パノラマ','ui.book':'この客室を予約','ui.closer':'近くで見る','ui.close':'閉じる',
   'ui.hint':'ドラッグ — 見回す · ホイール — ズーム · WASD — 移動<br>床をダブルクリック — その位置へ · ＋ — アメニティ情報',
   'ui.bookToast':'予約ページへ移動します（提案用デモ）','ui.gyroNo':'このプレビューではモーションセンサーを使用できません。ホテルサイトでは動作します。','ui.welcome':'ようこそ',
   'ui.am':['キングベッド','レインシャワー','独立型バスタブ','ウォークインクローゼット','ミニバー · コーヒー','ワークデスク','8名ダイニング','南山ビュー'] },
 zh:{ 'sp.foyer':'玄关 · 衣帽间','sp.living':'客厅','sp.dining':'餐厅','sp.bedroom':'卧室','sp.bath':'浴室','sp.overview':'平面图',
   'nav.foyer':'玄关','nav.living':'客厅','nav.dining':'餐厅','nav.bedroom':'卧室','nav.bath':'浴室','nav.overview':'平面图',
   'scene.welcome':'迎宾','scene.day':'日间','scene.evening':'傍晚','scene.turndown':'开夜床','scene.sleep':'睡眠',
   'ui.scenes':'灯光场景','ui.tour':'自动导览','ui.sound':'声音','ui.gyro':'陀螺仪','ui.hq':'高画质','ui.sq':'标准画质','ui.info':'客房信息',
   'ui.area':'面积','ui.bed':'床型','ui.guests':'入住人数','ui.view':'景观','ui.floor':'楼层','ui.viewv':'南山与城市全景','ui.book':'预订此客房','ui.closer':'近距离查看','ui.close':'关闭',
   'ui.hint':'拖动 — 环视 · 滚轮 — 缩放 · WASD — 移动<br>双击地面 — 移动到该处 · ＋ — 设施信息',
   'ui.bookToast':'将跳转至预订页面（提案演示）','ui.gyroNo':'此预览中无法使用运动传感器，发布到酒店网站后即可使用。','ui.welcome':'欢迎',
   'ui.am':['特大床','雨淋花洒','独立式浴缸','步入式衣帽间','迷你吧 · 咖啡','办公桌','8人餐厅','南山景观'] },
};
// hotspot copy — generic placeholders, swap in the hotel's real specs
const HS_TEXT = {
 entry:  { ko:['스마트 도어 & 프라이버시 패널','키카드 하나로 객실 전원과 조명이 켜지고, 방해 금지·청소 요청을 버튼 하나로 알립니다.'], en:['Smart door & privacy panel','A single key card powers the room, and do-not-disturb or make-up-room is one touch away.'], ja:['スマートドア & プライバシーパネル','キーカード1枚で電源と照明が入り、「起こさないで」「清掃依頼」もワンタッチ。'], zh:['智能门锁与隐私面板','一张房卡即可启动客房电源与灯光，一键设置请勿打扰或请即打扫。'] },
 closet: { ko:['워크인 클로짓','가운과 슬리퍼, 개인 금고, 러기지 벤치, 전신 거울을 갖춘 드레스룸입니다.'], en:['Walk-in closet','A dressing area with robes, slippers, an in-room safe, a luggage bench and a full-length mirror.'], ja:['ウォークインクローゼット','バスローブ、スリッパ、セーフティボックス、ラゲッジベンチ、全身鏡を備えたドレッシングエリア。'], zh:['步入式衣帽间','配备浴袍、拖鞋、保险箱、行李凳与全身镜的更衣区。'] },
 view:   { ko:['남산 파노라마 뷰','바닥부터 천장 가까이 이어지는 창으로 N서울타워와 도심 스카이라인이 펼쳐집니다.'], en:['Namsan panorama','Tall windows frame N Seoul Tower and the city skyline.'], ja:['南山パノラマビュー','大きな窓からNソウルタワーと街のスカイラインを一望。'], zh:['南山全景','高大的窗户将N首尔塔与城市天际线尽收眼底。'] },
 lounge: { ko:['라운지 & 크리스털 샹들리에','최대 6인이 머물 수 있는 응접 공간. 마블 커피 테이블과 블랙 쉐이드 샹들리에.'], en:['Lounge','Seating for up to six beneath a black-shade chandelier, around a marble coffee table.'], ja:['ラウンジ','最大6名がくつろげる応接スペース。大理石のコーヒーテーブルとブラックシェードのシャンデリア。'], zh:['会客区','可容纳六人的会客空间，配大理石咖啡桌与黑色灯罩吊灯。'] },
 dining: { ko:['8인 프라이빗 다이닝','인룸 다이닝과 셰프 서비스를 이용할 수 있는 8인 테이블입니다.'], en:['Private dining for eight','An eight-seat table for in-room dining and private chef service.'], ja:['8名用プライベートダイニング','インルームダイニングやシェフサービスに対応する8名用テーブル。'], zh:['八人私享餐厅','可享用客房送餐与私厨服务的八人餐桌。'] },
 lattice:{ ko:['전통 창살 모티프 월','한옥 창살에서 영감을 받은 입체 패널에 간접조명이 비칩니다.'], en:['Lattice feature wall','A sculpted panel inspired by traditional Korean window lattice, washed with soft light.'], ja:['伝統格子モチーフの壁','韓屋の窓格子に着想を得た立体パネルを間接照明が照らします。'], zh:['传统窗棂主题墙','灵感源自韩屋窗棂的立体墙板，辅以柔和洗墙灯。'] },
 minibar:{ ko:['미니바 & 커피 스테이션','캡슐 커피 머신, 프리미엄 티 셀렉션, 와인 냉장고와 글라스웨어.'], en:['Minibar & coffee station','Capsule coffee machine, premium tea selection, wine fridge and glassware.'], ja:['ミニバー & コーヒーステーション','カプセル式コーヒーマシン、厳選ティー、ワインセラー、グラス類。'], zh:['迷你吧与咖啡台','胶囊咖啡机、精选茶品、酒柜与玻璃器皿。'] },
 bed:    { ko:['킹 베드 & 필로우 메뉴','구스다운 침구와 원하는 경도를 고를 수 있는 필로우 메뉴를 제공합니다.'], en:['King bed & pillow menu','Goose-down bedding with a pillow menu to choose your preferred firmness.'], ja:['キングベッド & ピローメニュー','グースダウンの寝具と、好みの硬さを選べるピローメニュー。'], zh:['特大床与枕头菜单','鹅绒床品，并可按喜好选择枕头软硬度。'] },
 panel:  { ko:['객실 조명 패널','웰컴부터 슬립까지, 하나의 패널로 객실 조명과 커튼을 시나리오별로 바꿉니다.'], en:['In-room lighting panel','From welcome to sleep, one panel changes the lights and curtains by scene.'], ja:['客室照明パネル','ウェルカムからスリープまで、照明とカーテンをシーンごとに切り替え。'], zh:['客房灯光面板','从迎宾到睡眠，一个面板即可按场景切换灯光与窗帘。'] },
 desk:   { ko:['업무 데스크','무선 충전, 데스크 전원, 고속 Wi-Fi와 인체공학 체어를 갖췄습니다.'], en:['Work desk','Wireless charging, desk power, high-speed Wi-Fi and an ergonomic chair.'], ja:['ワークデスク','ワイヤレス充電、デスク電源、高速Wi-Fi、人間工学チェア。'], zh:['办公桌','配备无线充电、桌面电源、高速Wi-Fi与人体工学座椅。'] },
 nook:   { ko:['리딩 코너','큐레이션된 북 셀렉션과 독서등, 암체어가 있는 조용한 코너입니다.'], en:['Reading nook','A quiet corner with a curated library, reading lamp and armchair.'], ja:['リーディングコーナー','厳選された本と読書灯、アームチェアのある静かなコーナー。'], zh:['阅读角','配有精选藏书、阅读灯与扶手椅的静谧角落。'] },
 tub:    { ko:['남산 뷰 욕조','창가 프리스탠딩 욕조에서 도시 야경을 바라보며 반신욕을 즐길 수 있습니다.'], en:['Bath with a view','A freestanding tub by the window, facing the city lights.'], ja:['ビューバス','窓辺の独立型バスタブから街の夜景を眺めて。'], zh:['观景浴缸','窗边的独立式浴缸，可边泡澡边欣赏城市夜景。'] },
 shower: { ko:['레인 샤워','천장형 레인 샤워와 핸드 샤워, 대리석 벤치가 있는 유리 부스입니다.'], en:['Rain shower','A glass enclosure with ceiling rain head, hand shower and marble bench.'], ja:['レインシャワー','天井埋め込みのレインシャワー、ハンドシャワー、大理石ベンチ付き。'], zh:['雨淋花洒','配有顶喷花洒、手持花洒与大理石长凳的玻璃淋浴间。'] },
 vanity: { ko:['더블 베니티 & 어메니티','두 개의 세면대와 백라이트 거울, 시그니처 어메니티를 준비했습니다.'], en:['Double vanity & amenities','Twin basins, backlit mirrors and signature bath amenities.'], ja:['ダブルシンク & アメニティ','2つの洗面ボウル、バックライトミラー、シグネチャーアメニティ。'], zh:['双洗手台与洗浴用品','双台盆、背光镜与品牌洗浴用品。'] },
};


Object.assign(I18N.ko,{ 'ui.plan':'평면도','ui.tourStart':'가이드 투어','ui.explore':'직접 둘러보기','ui.quality':'화질','ui.fs':'전체화면','ui.perf':'성능 정보','ui.exit':'투어 종료','ui.bookShort':'예약',
  'ui.hintShort':'드래그로 둘러보고, 바닥을 더블클릭하면 이동합니다. ＋를 누르면 어메니티 정보가 열립니다.','ui.hqv':'고화질','ui.sqv':'표준',
  'load.tex':'재질을 준비하고 있습니다','load.arch':'공간을 구성하고 있습니다','load.furn':'가구를 배치하고 있습니다','load.light':'조명을 맞추고 있습니다','load.shader':'렌더링을 준비하고 있습니다',
  'tour.foyer':'문을 열면 펜던트 조명과 워크인 클로짓이 먼저 맞이합니다.','tour.living':'남산을 향한 두 개의 창과 6인 라운지가 있는 거실입니다.','tour.dining':'8인 테이블과 한옥 창살 모티프 월, 미니바를 갖춘 다이닝입니다.',
  'tour.bedroom':'해가 지면 객실은 따뜻한 간접조명의 이브닝 모드로 바뀝니다.','tour.bath':'대리석 욕실에는 창가 욕조와 레인 샤워, 더블 베니티가 있습니다.','tour.turndown':'턴다운 서비스 — 커튼이 닫히고 침구가 정돈되며 슬리퍼가 준비됩니다.','tour.end':'약 {area}㎡의 스위트 전체를 한눈에 봅니다.' });
Object.assign(I18N.en,{ 'ui.plan':'Floor plan','ui.tourStart':'Guided tour','ui.explore':'Explore freely','ui.quality':'Quality','ui.fs':'Full screen','ui.perf':'Performance','ui.exit':'End tour','ui.bookShort':'Book',
  'ui.hintShort':'Drag to look around and double-click the floor to move. Tap ＋ for amenity details.','ui.hqv':'High','ui.sqv':'Standard',
  'load.tex':'Preparing materials','load.arch':'Building the rooms','load.furn':'Placing the furniture','load.light':'Setting the lights','load.shader':'Preparing the renderer',
  'tour.foyer':'Step inside to a pendant-lit foyer and a walk-in closet.','tour.living':'The living room: two windows facing Namsan and a lounge for six.','tour.dining':'Dining for eight, a lattice feature wall and the minibar.',
  'tour.bedroom':'As the sun sets, the room shifts to warm evening lighting.','tour.bath':'The marble bathroom has a window-side tub, rain shower and twin vanity.','tour.turndown':'Turndown — curtains close, the bed is turned down, slippers set out.','tour.end':'The whole {area} m² suite at a glance.' });
Object.assign(I18N.ja,{ 'ui.plan':'フロアプラン','ui.tourStart':'ガイドツアー','ui.explore':'自由に見る','ui.quality':'画質','ui.fs':'全画面','ui.perf':'パフォーマンス','ui.exit':'ツアー終了','ui.bookShort':'予約',
  'ui.hintShort':'ドラッグで見回し、床をダブルクリックで移動。＋でアメニティ情報を表示します。','ui.hqv':'高','ui.sqv':'標準',
  'load.tex':'素材を準備しています','load.arch':'空間を構成しています','load.furn':'家具を配置しています','load.light':'照明を調整しています','load.shader':'レンダリングを準備しています',
  'tour.foyer':'扉を開けると、ペンダント照明とウォークインクローゼットがお迎えします。','tour.living':'南山に面した2つの窓と6名のラウンジがあるリビング。','tour.dining':'8名用テーブル、格子モチーフの壁、ミニバーを備えたダイニング。',
  'tour.bedroom':'日が暮れると、客室は温かな間接照明のイブニングモードに。','tour.bath':'大理石のバスルームには窓辺のバスタブ、レインシャワー、ダブルシンク。','tour.turndown':'ターンダウン — カーテンが閉まり、寝具が整い、スリッパが用意されます。','tour.end':'約{area}㎡のスイート全体を一望。' });
Object.assign(I18N.zh,{ 'ui.plan':'平面图','ui.tourStart':'导览','ui.explore':'自由浏览','ui.quality':'画质','ui.fs':'全屏','ui.perf':'性能信息','ui.exit':'结束导览','ui.bookShort':'预订',
  'ui.hintShort':'拖动环视，双击地面移动，点击＋查看设施信息。','ui.hqv':'高','ui.sqv':'标准',
  'load.tex':'正在准备材质','load.arch':'正在构建空间','load.furn':'正在布置家具','load.light':'正在调整灯光','load.shader':'正在准备渲染',
  'tour.foyer':'推门而入，吊灯与步入式衣帽间率先迎接您。','tour.living':'客厅拥有两扇面向南山的窗户和六人会客区。','tour.dining':'配有八人餐桌、窗棂主题墙与迷你吧的餐厅。',
  'tour.bedroom':'日落之后，客房切换为温暖的傍晚灯光模式。','tour.bath':'大理石浴室配有窗边浴缸、雨淋花洒与双洗手台。','tour.turndown':'开夜床服务 — 窗帘闭合、床品整理、拖鞋备好。','tour.end':'一览约{area}㎡的整套套房。' });
let LANG = 'ko';
const t = k => (I18N[LANG][k] ?? I18N.en[k] ?? k);
const cfg = o => (typeof o==='object' ? (o[LANG]??o.en) : o);
// loading progress (top-level await lets the intro paint between build stages)
window.__stages=[]; const __t0=performance.now(); const tick = (pct,key) => { window.__stages.push([pct, Math.round(performance.now()-__t0)]); const b=document.getElementById('introBar'), l=document.getElementById('introLbl'); if(b) b.style.width=pct+'%'; if(l && key) l.textContent=t(key); return new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0))); };
document.getElementById('introHotel').textContent = cfg(CONFIG.hotel)+' · '+cfg(CONFIG.city);
document.getElementById('introRoom').textContent = cfg(CONFIG.room);
document.getElementById('introMeta').textContent = CONFIG.area+' ㎡ · '+CONFIG.bed+' · '+CONFIG.floor;
await tick(4,'load.tex');


/* ================= renderer / scene ================= */
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias:false, powerPreference:'high-performance', preserveDrawingBuffer:true });
const TIER = { low: !window.__forceHigh && (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.hardwareConcurrency||8)<=4 || Math.min(screen.width,screen.height)<500) };
let PR = TIER.low ? 1 : Math.min(devicePixelRatio, 1.75);
renderer.setPixelRatio(PR);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151311);
const pmrem = new THREE.PMREMGenerator(renderer);
const roomEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environment = roomEnv;
scene.environmentIntensity = 0.35;

const camera = new THREE.PerspectiveCamera(54, innerWidth/innerHeight, 0.05, 900);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.07;
controls.minDistance = 0.3; controls.maxDistance = 34;
controls.maxPolarAngle = Math.PI * 0.94;
controls.rotateSpeed = 0.5;

const H = 2.95, TRAY = 2.72, T = 0.16;
const X0=-9, X1=10, Z0=-3, Z1=3;

/* ================= procedural textures ================= */
const TEX = {};
function cvs(w,h){ const c=document.createElement('canvas'); c.width=w; c.height=h; return [c,c.getContext('2d')]; }
function toTex(c, rep=[1,1], srgb=true){ const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(rep[0],rep[1]); if(srgb) t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=renderer.capabilities.getMaxAnisotropy(); return t; }
let seed = 11; const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
// height canvas -> tangent-space normal map
function normalFrom(src, strength=2){
  const w=src.width, h=src.height, sg=src.getContext('2d').getImageData(0,0,w,h).data;
  const [c,g]=cvs(w,h); const out=g.createImageData(w,h);
  const L=(x,y)=> sg[(((y+h)%h)*w+((x+w)%w))*4]/255;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){
    const dx=(L(x+1,y)-L(x-1,y))*strength, dy=(L(x,y+1)-L(x,y-1))*strength;
    let nx=-dx, ny=dy, nz=1; const l=Math.hypot(nx,ny,nz); nx/=l; ny/=l; nz/=l;
    const i=(y*w+x)*4; out.data[i]=(nx*.5+.5)*255; out.data[i+1]=(ny*.5+.5)*255; out.data[i+2]=(nz*.5+.5)*255; out.data[i+3]=255; }
  g.putImageData(out,0,0); return toTex(c,[1,1],false);
}

// --- true herringbone oak (periodic) ---
(function(){
  const S=1024, W=S/16/Math.SQRT2; // plank width in px; L = 4W
  const [c,g]=cvs(S,S), [hc,hg]=cvs(S,S), [rc,rg]=cvs(S,S);
  g.fillStyle='#2a1a10'; g.fillRect(0,0,S,S); hg.fillStyle='#000'; hg.fillRect(0,0,S,S); rg.fillStyle='#777'; rg.fillRect(0,0,S,S);
  for(const ctx of [g,hg,rg]){ ctx.save(); ctx.translate(0,0); ctx.rotate(-Math.PI/4); }
  const planks=[];
  for(let k=-10;k<=10;k++) for(let n=-48;n<=48;n++){
    const ox=n+4*k, oy=n-4*k;
    planks.push([ox*W, oy*W, 4*W, W, true]);
    planks.push([ox*W, (oy+1)*W, W, 4*W, false]);
  }
  // colour per plank must also be periodic: hash on lattice-reduced index
  for(const [x,y,w,h,hor] of planks){
    const cx=x+w/2, cy=y+h/2;
    const rx = cx*Math.SQRT1_2 + cy*Math.SQRT1_2, ry = -cx*Math.SQRT1_2 + cy*Math.SQRT1_2; // back to canvas space (rot +45)
    const px = ((rx % S)+S)%S, py=((ry % S)+S)%S;
    const hsh = Math.sin(Math.floor(px/7)*12.9898 + Math.floor(py/7)*78.233 + (hor?3:0))*43758.5453; const v = hsh-Math.floor(hsh);
    const r=86+v*40|0, gg=54+v*26|0, b=33+v*16|0;
    g.fillStyle=`rgb(${r},${gg},${b})`; g.fillRect(x+1,y+1,w-2,h-2);
    // grain
    g.globalAlpha=.16; g.strokeStyle=`rgb(${r*.55|0},${gg*.5|0},${b*.45|0})`; g.lineWidth=1;
    for(let i=0;i<9;i++){ g.beginPath();
      if(hor){ const yy=y+2+((i*7.3+v*13)%(h-4)); g.moveTo(x,yy); g.bezierCurveTo(x+w*.3,yy+Math.sin(i+v*9)*2,x+w*.7,yy-Math.sin(i*2+v)*2,x+w,yy+Math.cos(i)*1.5); }
      else { const xx=x+2+((i*7.3+v*13)%(w-4)); g.moveTo(xx,y); g.bezierCurveTo(xx+Math.sin(i+v*9)*2,y+h*.3,xx-Math.sin(i*2+v)*2,y+h*.7,xx+Math.cos(i)*1.5,y+h); }
      g.stroke(); }
    g.globalAlpha=1;
    // edge highlights (micro bevel)
    g.fillStyle='rgba(255,230,200,.06)'; g.fillRect(x+1,y+1,w-2,1.5);
    hg.fillStyle='#fff'; hg.fillRect(x+1.5,y+1.5,w-3,h-3);
    rg.fillStyle=`rgb(${100+v*50|0},${100+v*50|0},${100+v*50|0})`; rg.fillRect(x+1,y+1,w-2,h-2);
  }
  for(const ctx of [g,hg,rg]) ctx.restore();
  TEX.floor = toTex(c); TEX.floorN = normalFrom(hc,1.4); TEX.floorR = toTex(rc,[1,1],false);
})();

// --- fabric weave (colour multiplier + normal) ---
function weave(S=256, tight=4, slub=.2){
  const [c,g]=cvs(S,S), img=g.createImageData(S,S);
  for(let y=0;y<S;y++) for(let x=0;x<S;x++){
    const wx = Math.sin(x/tight*Math.PI)*.5+.5, wy=Math.sin(y/tight*Math.PI)*.5+.5;
    const over = ((Math.floor(x/tight)+Math.floor(y/tight))%2) ? wx : wy;
    const v = 200 + over*40 + (rnd()-.5)*30*slub*3;
    const i=(y*S+x)*4; img.data[i]=img.data[i+1]=img.data[i+2]=Math.max(0,Math.min(255,v)); img.data[i+3]=255; }
  g.putImageData(img,0,0); return c;
}
const wv = weave(); TEX.fabric = toTex(wv,[4,4]); TEX.fabricN = normalFrom(wv,1.2); TEX.fabricN.repeat.set(4,4);
// --- leather grain normal ---
(function(){ const S=256,[c,g]=cvs(S,S); g.fillStyle='#808080'; g.fillRect(0,0,S,S);
  for(let i=0;i<2600;i++){ g.fillStyle=`rgba(${rnd()<.5?0:255},${rnd()<.5?0:255},${rnd()<.5?0:255},.06)`; g.beginPath(); g.arc(rnd()*S,rnd()*S,1+rnd()*3,0,7); g.fill(); }
  TEX.leatherN = normalFrom(c,1.5); TEX.leatherN.repeat.set(3,3); })();
// --- grasscloth wallpaper ---
(function(){ const S=512,[c,g]=cvs(S,S); g.fillStyle='#e9e3d9'; g.fillRect(0,0,S,S);
  for(let y=0;y<S;y+=1){ const v=(rnd()-.5)*26; g.fillStyle=`rgba(${v>0?255:60},${v>0?250:50},${v>0?240:40},${Math.abs(v)/260})`; g.fillRect(0,y,S,1+(rnd()<.2?1:0)); }
  for(let i=0;i<400;i++){ g.fillStyle=`rgba(120,105,85,${rnd()*.08})`; g.fillRect(rnd()*S,rnd()*S,20+rnd()*120,1); }
  g.fillStyle='rgba(0,0,0,.06)'; g.fillRect(0,0,1.5,S);
  TEX.grass = toTex(c); TEX.grassN = normalFrom(c,2.2);
})();
// --- marble ---
function marble(base='#efeae2', vein='rgba(90,85,80,', S=1024){
  const [c,g]=cvs(S,S); g.fillStyle=base; g.fillRect(0,0,S,S);
  for(let i=0;i<70;i++){ g.fillStyle=`rgba(200,192,182,${rnd()*.12})`; g.beginPath(); g.arc(rnd()*S,rnd()*S,40+rnd()*200,0,7); g.fill(); }
  g.filter='blur(1px)';
  for(let i=0;i<22;i++){ g.strokeStyle=vein+(0.12+rnd()*.38)+')'; g.lineWidth=.5+rnd()*2.4; g.beginPath(); let x=rnd()*S, y=0; g.moveTo(x,y);
    for(let s=0;s<16;s++){ x+= (rnd()-.42)*100; y+= S/16; g.lineTo(x,y);} g.stroke(); }
  g.filter='none'; return toTex(c);
}
function grouted(base,vein,grid,grout='rgba(160,150,140,.55)'){ const t=marble(base,vein); const c=t.image, g=c.getContext('2d'); g.strokeStyle=grout; g.lineWidth=3; const S=c.width; for(let i=0;i<=grid;i++){ const v=i*S/grid; g.beginPath(); g.moveTo(v,0); g.lineTo(v,S); g.stroke(); g.beginPath(); g.moveTo(0,v); g.lineTo(S,v); g.stroke(); } t.needsUpdate=true; return t; }
TEX.slab = grouted('#ece6dd','rgba(140,128,115,',1,'rgba(150,140,128,.5)');
TEX.tile = grouted('#e3ddd3','rgba(120,110,100,',2);
TEX.tileDark = grouted('#6d6a66','rgba(220,215,208,',4,'rgba(40,38,36,.6)');
TEX.marble = marble(); TEX.marbleGreen = marble('#5a6a65','rgba(225,232,228,'); TEX.marbleWarm=marble('#e8dccb','rgba(150,120,90,');
// --- rugs ---
function rugCloud(base,[r,gg,b],S=1024){
  const [c,g]=cvs(S,S); g.fillStyle=base; g.fillRect(0,0,S,S);
  g.filter='blur(6px)';
  for(let i=0;i<700;i++){ g.fillStyle=`rgba(${r},${gg},${b},${rnd()*.07})`; g.beginPath(); g.ellipse(rnd()*S,rnd()*S,30+rnd()*140,8+rnd()*40,rnd()*3,0,7); g.fill(); }
  g.filter='none';
  for(let i=0;i<9000;i++){ g.fillStyle=`rgba(255,255,255,${rnd()*.06})`; g.fillRect(rnd()*S,rnd()*S,2,1); }
  g.strokeStyle='rgba(0,0,0,.14)'; g.lineWidth=10; g.strokeRect(5,5,S-10,S-10);
  return c;
}
{ const a=rugCloud('#a7a29c',[60,58,62]); TEX.rugLiving=toTex(a); TEX.rugLivingN=normalFrom(weave(512,2,.6),.8); TEX.rugLivingN.repeat.set(8,8);
  TEX.rugDining=toTex(rugCloud('#8d8a8a',[40,40,52])); }
(function(){ // interlocking geometric rug (bedroom)
  const S=1024, [c,g]=cvs(S,S); g.fillStyle='#ddd7d5'; g.fillRect(0,0,S,S);
  g.strokeStyle='#5d4a5a'; g.lineWidth=11; g.lineJoin='miter'; const T2=128;
  for(let y=-1;y<10;y++) for(let x=-1;x<9;x++){
    const ox=x*T2+(y%2?T2/2:0), oy=y*T2*0.8;
    g.beginPath(); g.moveTo(ox,oy); g.lineTo(ox+T2*.35,oy); g.lineTo(ox+T2*.5,oy+T2*.25); g.lineTo(ox+T2*.85,oy+T2*.25); g.lineTo(ox+T2,oy);
    g.moveTo(ox+T2*.5,oy+T2*.25); g.lineTo(ox+T2*.5,oy+T2*.55); g.lineTo(ox+T2*.2,oy+T2*.55); g.stroke(); }
  for(let i=0;i<9000;i++){ g.fillStyle=`rgba(255,255,255,${rnd()*.07})`; g.fillRect(rnd()*S,rnd()*S,2,1); }
  TEX.rugBed = toTex(c,[1.4,1.4]);
})();
// --- patterned pillow fabric ---
function patternTex(cols){ const S=256,[c,g]=cvs(S,S); g.fillStyle=cols[0]; g.fillRect(0,0,S,S);
  for(let i=0;i<260;i++){ g.fillStyle=cols[1+(i%(cols.length-1))]; g.globalAlpha=.5+rnd()*.5; g.beginPath(); g.ellipse(rnd()*S,rnd()*S,4+rnd()*18,2+rnd()*8,rnd()*3,0,7); g.fill(); }
  g.globalAlpha=1; return toTex(c,[1,1]); }
TEX.patPillow = patternTex(['#d8d2c8','#5a6b8a','#8a6c4a','#c9b48a','#3e4a62']);
TEX.paisley = patternTex(['#e4ddd0','#b9a37a','#8d8a96']);
// --- art ---
function art(kind){
  const [c,g]=cvs(512,384);
  if(kind==='garden'){ const gr=g.createLinearGradient(0,0,0,384); gr.addColorStop(0,'#2f4a3a'); gr.addColorStop(1,'#5d6d4e'); g.fillStyle=gr; g.fillRect(0,0,512,384);
    for(let i=0;i<700;i++){ g.fillStyle=`hsla(${70+rnd()*70},30%,${22+rnd()*45}%,.5)`; g.beginPath(); g.arc(rnd()*512,rnd()*270,3+rnd()*16,0,7); g.fill(); }
    g.fillStyle='#e8e4dc'; g.beginPath(); g.ellipse(260,300,150,40,0,0,7); g.fill(); g.fillStyle='#3a3a3a'; for(let i=0;i<4;i++) g.fillRect(200+i*35,250,6,40); }
  else if(kind==='ink'){ g.fillStyle='#f3f0ea'; g.fillRect(0,0,512,384);
    for(let i=0;i<260;i++){ g.fillStyle=`rgba(25,45,95,${.5+rnd()*.5})`; g.save(); g.translate(30+rnd()*452,30+rnd()*324); g.rotate(rnd()*.6-.3); g.fillRect(0,0,14+rnd()*26,5+rnd()*4); g.restore(); } }
  else { g.fillStyle='#cdb78a'; g.fillRect(0,0,512,384); for(let i=0;i<4000;i++){ g.fillStyle=`rgba(255,240,200,${rnd()*.18})`; g.fillRect(rnd()*512,rnd()*384,1+rnd()*3,1+rnd()*3);} }
  return toTex(c);
}
// --- contact shadow blob ---
(function(){ const [c,g]=cvs(128,128); const gr=g.createRadialGradient(64,64,4,64,64,64); gr.addColorStop(0,'rgba(0,0,0,.5)'); gr.addColorStop(.6,'rgba(0,0,0,.2)'); gr.addColorStop(1,'rgba(0,0,0,0)'); g.fillStyle=gr; g.fillRect(0,0,128,128); TEX.blob=new THREE.CanvasTexture(c); })();

await tick(14,'load.tex');
/* ================= layered parallax city view ================= */
const EYE=1.6, VX=0.5;
// a layer is a plane at distance D (z=-D). Draw in angle space so layers line up.
const NIGHT_JOBS=[];
// night skyline is painted lazily (after the intro, or the first time an evening scene is chosen)
function paintNight(all){ while(NIGHT_JOBS.length){ const m=NIGHT_JOBS.shift(); m.userData.paint(); if(!all) return NIGHT_JOBS.length>0; } return false; }
function viewLayer(D, azMax, elMin, elMax, pxW, draw, night){
  const x0=VX-D*Math.tan(azMax), x1=VX+D*Math.tan(azMax);
  const y0=EYE+D*Math.tan(elMin), y1=EYE+D*Math.tan(elMax);
  const pxH = Math.round(pxW*(y1-y0)/(x1-x0));
  const mat=new THREE.MeshBasicMaterial({transparent:true, toneMapped:false, depthWrite:false, fog:false});
  const paint=()=>{ const [c,g]=cvs(pxW,pxH);
  const X = az => ((VX+D*Math.tan(az))-x0)/(x1-x0)*pxW;             // azimuth (rad) -> px
  const Y = el => (y1-(EYE+D*Math.tan(el)))/(y1-y0)*pxH;             // elevation (rad) -> px
  const XW = wx => (wx-x0)/(x1-x0)*pxW, YW = wy => (y1-wy)/(y1-y0)*pxH, PPM = pxW/(x1-x0);
  draw(g,{X,Y,XW,YW,PPM,W:pxW,H:pxH,D,night});
  const t=toTex(c); t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping; t.anisotropy=4; t.generateMipmaps=true; mat.map=t; mat.needsUpdate=true; };
  const m=new THREE.Mesh(new THREE.PlaneGeometry(x1-x0,y1-y0), mat);
  m.position.set((x0+x1)/2,(y0+y1)/2,-D); m.userData.noShadow=true; m.userData.view=true;
  if(night){ m.userData.paint=paint; NIGHT_JOBS.push(m); } else paint();
  return m;
}
const rad = d => d*Math.PI/180;
const TOWER_AZ = rad(9.5);
function drawFar(g,{X,Y,W,H,night}){
  const sky=g.createLinearGradient(0,0,0,Y(0));
  if(night){ sky.addColorStop(0,'#04060d'); sky.addColorStop(.55,'#0c1430'); sky.addColorStop(1,'#2d2946'); }
  else { sky.addColorStop(0,'#6f9cc9'); sky.addColorStop(.6,'#aac5de'); sky.addColorStop(1,'#e2e6e5'); }
  g.fillStyle=sky; g.fillRect(0,0,W,H);
  if(!night){ for(let i=0;i<60;i++){ const cx=rnd()*W, cy=Y(rad(8+rnd()*26)), rx=60+rnd()*220, ry=14+rnd()*36, a=.18+rnd()*.3;
      g.save(); g.translate(cx,cy); g.scale(1,ry/rx); const gr=g.createRadialGradient(0,0,0,0,0,rx); gr.addColorStop(0,`rgba(255,255,255,${a})`); gr.addColorStop(.55,`rgba(255,255,255,${a*.6})`); gr.addColorStop(1,'rgba(255,255,255,0)'); g.fillStyle=gr; g.beginPath(); g.arc(0,0,rx,0,7); g.fill(); g.restore(); } }
  else { for(let i=0;i<500;i++){ g.fillStyle=`rgba(255,255,255,${rnd()*.7})`; g.fillRect(rnd()*W, rnd()*Y(rad(6)), 1.5,1.5); } }
  // Bukhansan-style ridges (two depths)
  for(const [col,amp,ph] of (night? [['#121729',1.0,0],['#0d1120',.7,2]] : [['#9eabb8',1.0,0],['#8695a3',.75,2]])){
    g.fillStyle=col; g.beginPath(); g.moveTo(0,H);
    for(let a=-70;a<=70;a+=.25){ const r=rad(a); const e = amp*(1.6 + Math.abs(Math.sin(r*3.1+ph))*2.2 + Math.sin(r*11+ph)*.45 + Math.sin(r*29)*.18 + (a<-12? 1.4*Math.exp(-Math.pow((a+32)/10,2))*2 : 0)); g.lineTo(X(r),Y(rad(e))); }
    g.lineTo(W,H); g.fill();
    if(!night){ g.fillStyle='rgba(235,238,240,.18)'; g.fillRect(0,Y(rad(1.5)),W,H); }
  }
  // distant city band
  g.fillStyle = night? '#1a1d2e' : '#b9c2ca'; g.fillRect(0,Y(rad(.4)),W,H);
  if(night){ for(let i=0;i<5000;i++){ g.fillStyle=`rgba(255,${190+rnd()*50|0},${120+rnd()*80|0},${rnd()*.8})`; g.fillRect(rnd()*W, Y(rad(.4))+rnd()*(H-Y(rad(.4))), 1.5,1.5); }
    const gl=g.createLinearGradient(0,Y(rad(4)),0,Y(rad(0))); gl.addColorStop(0,'rgba(255,170,110,0)'); gl.addColorStop(1,'rgba(255,170,110,.18)'); g.fillStyle=gl; g.fillRect(0,Y(rad(4)),W,Y(0)-Y(rad(4))); }
}
function buildings(g,{XW,YW,PPM,W,H,night},opt){
  const {topMin,topMax,col,minW=8,maxW=30,skipX=null,lit=.35,seedOff=0} = opt;
  let x = -10;
  while(x < W/PPM*1.0 + 10){
    const wx0 = (x), bw = minW + rnd()*(maxW-minW);
    const wxWorld = XW(0); // unused
    const px0 = x*PPM, px1=(x+bw)*PPM;
    let top = topMin + rnd()*(topMax-topMin);
    if(skipX && px1>skipX[0] && px0<skipX[1]) top = Math.min(top, skipX[2]);
    const py0 = YW(top);
    const shade = (rnd()-.5)*.18;
    g.fillStyle = col; g.fillRect(px0,py0,px1-px0,H-py0);
    g.fillStyle = shade>0 ? `rgba(255,255,255,${shade})` : `rgba(0,0,0,${-shade})`; g.fillRect(px0,py0,px1-px0,H-py0);
    // side face (depth)
    g.fillStyle='rgba(0,0,0,.18)'; g.fillRect(px1-(px1-px0)*.18,py0,(px1-px0)*.18,H-py0);
    // roof details
    if(rnd()<.5){ g.fillStyle=col; g.fillRect(px0+(px1-px0)*.2, py0-PPM*1.6, (px1-px0)*.3, PPM*1.6); }
    // windows
    const fh=3.3*PPM, ww=Math.max(1.5,.9*PPM), gap=Math.max(2,1.1*PPM);
    const glass = rnd()<.3;
    for(let wy=py0+fh*.6; wy<H; wy+=fh){
      if(glass && !night){ g.fillStyle=`rgba(${140+rnd()*30|0},${175+rnd()*20|0},${200+rnd()*20|0},.35)`; g.fillRect(px0+2,wy,(px1-px0)*.82-2,fh*.7); continue; }
      for(let wx=px0+gap*.6; wx<px1-(px1-px0)*.18-ww; wx+=ww+gap){
        if(night){ if(rnd()<lit){ const w=rnd(); g.fillStyle = w<.72? `rgba(255,${196+rnd()*44|0},${120+rnd()*70|0},${.55+rnd()*.45})` : `rgba(205,225,255,${.45+rnd()*.4})`; g.fillRect(wx,wy,ww,fh*.55);} }
        else { const v=rnd()<.6?55:225; g.fillStyle=`rgba(${v},${v+8},${v+16},${.12+rnd()*.14})`; g.fillRect(wx,wy,ww,fh*.55); }
      }
    }
    if(!night){ const gr=g.createLinearGradient(0,py0,0,H); gr.addColorStop(0,'rgba(255,255,255,0)'); gr.addColorStop(1,'rgba(225,230,235,.12)'); g.fillStyle=gr; g.fillRect(px0,py0,px1-px0,H-py0); }
    x += bw + rnd()*3;
  }
}
function drawMid(g,ctx){
  const {X,Y,XW,YW,PPM,W,H,night,D}=ctx;
  const hx=X(TOWER_AZ);
  // Namsan
  g.fillStyle = night ? '#0a110f' : '#4c6a48';
  g.beginPath(); g.moveTo(hx-W*.25,H);
  for(let a=-14;a<=14;a+=.2){ const e = 2.2*Math.exp(-Math.pow(a/6.5,2)) - .6 + Math.sin(a*2.3)*.06; g.lineTo(X(TOWER_AZ+rad(a)),Y(rad(e))); }
  g.lineTo(hx+W*.25,H); g.fill();
  if(!night){ for(let i=0;i<900;i++){ const a=(rnd()-.5)*24; const e=2.2*Math.exp(-Math.pow(a/6.5,2))-.6 - rnd()*2.5; g.fillStyle=`rgba(${35+rnd()*45|0},${62+rnd()*45|0},${35+rnd()*25|0},.55)`; g.beginPath(); g.arc(X(TOWER_AZ+rad(a)),Y(rad(e)),2+rnd()*5,0,7); g.fill(); } }
  // N Seoul Tower (tapered)
  const tb = Y(rad(1.55)), m = PPM*D*Math.tan(rad(0.105));
  const lvl = h => tb - h*m;
  g.fillStyle = night ? '#d8d0c2' : '#eeede8';
  g.beginPath(); g.moveTo(hx-3.2*m,tb); g.lineTo(hx-1.9*m,lvl(18)); g.lineTo(hx+1.9*m,lvl(18)); g.lineTo(hx+3.2*m,tb); g.fill();
  g.fillRect(hx-6*m,lvl(23),12*m,5*m); g.fillRect(hx-4.5*m,lvl(26),9*m,3*m); g.fillRect(hx-3*m,lvl(28),6*m,2*m);
  g.fillStyle = night ? '#b8ada0' : '#d9d7d0'; g.fillRect(hx-.9*m,lvl(40),1.8*m,12*m); g.fillRect(hx-.4*m,lvl(46),.8*m,6*m);
  g.fillStyle = night ? '#555' : '#cfcfcf'; g.fillRect(hx+9*m,lvl(14),1.1*m,15*m);
  if(night){ g.fillStyle='rgba(255,214,150,.95)'; g.fillRect(hx-6*m,lvl(21.5),12*m,1.3*m); g.fillStyle='rgba(255,140,120,.95)'; g.fillRect(hx-.5*m,lvl(46),1*m,1*m);
    const gl=g.createRadialGradient(hx,lvl(22),0,hx,lvl(22),26*m); gl.addColorStop(0,'rgba(255,205,160,.38)'); gl.addColorStop(1,'rgba(255,205,160,0)'); g.fillStyle=gl; g.fillRect(hx-26*m,lvl(22)-26*m,52*m,52*m);
    for(let i=0;i<60;i++){ g.fillStyle=`rgba(255,220,170,${rnd()*.8})`; g.fillRect(hx-W*.12+rnd()*W*.24, Y(rad(1.5-rnd()*2)), 1.5,1.5); } }
  buildings(g,ctx,{topMin:EYE-D*Math.tan(rad(2.6)), topMax:EYE+D*Math.tan(rad(.7)), col: night?'#171c2c':'#8f9aa6', minW:14,maxW:40, skipX:[hx-W*.14,hx+W*.14,EYE-D*Math.tan(rad(2.2))], lit:.32});
}
function drawNear(g,ctx){
  const {YW,PPM,W,H,night,D}=ctx;
  buildings(g,ctx,{topMin:EYE-D*Math.tan(rad(13)), topMax:EYE-D*Math.tan(rad(4)), col: night?'#1d2335':'#6f7a86', minW:7,maxW:18, lit:.4});
  // street with traffic
  if(night){ for(let s=0;s<3;s++){ const y=YW(EYE-D*Math.tan(rad(16+s*7))); for(let i=0;i<W;i+=6){ g.fillStyle=(i/6+s)%2? 'rgba(255,90,60,.8)':'rgba(255,240,200,.85)'; if(rnd()<.45) g.fillRect(i,y,4,2); } } }
}
const VIEW = { day:[], night:[] };
for(const night of [false,true]){
  const L = [
    viewLayer(420, rad(62), rad(-6), rad(42), 2048, drawFar, night),
    viewLayer(160, rad(62), rad(-14), rad(10), 3072, drawMid, night),
    viewLayer(70,  rad(62), rad(-40), rad(-2), 3072, drawNear, night),
  ];
  L.forEach((m,i)=>{ m.renderOrder=-10+i; if(night){ m.material.opacity=0; m.position.z+=.1; } if(i===0 && !night) m.material.transparent=false; scene.add(m); VIEW[night?'night':'day'].push(m);
    const m2=new THREE.Mesh(m.geometry,m.material); m2.position.set(2*VX-m.position.x+3, m.position.y, -m.position.z); m2.rotation.y=Math.PI; m2.renderOrder=m.renderOrder; m2.userData=m.userData; scene.add(m2); VIEW[night?'night':'day'].push(m2); });
}

await tick(22,'load.tex');
/* ================= materials ================= */
const fab = (color, rough=.88, tint=TEX.fabric) => new THREE.MeshStandardMaterial({ color, roughness:rough, map:tint, normalMap:TEX.fabricN, normalScale:new THREE.Vector2(.5,.5) });
const M = {
  wall:   new THREE.MeshStandardMaterial({ color:0xf1ece4, roughness:.9, map:TEX.grass, normalMap:TEX.grassN, normalScale:new THREE.Vector2(.25,.25) }),
  wallWarm:new THREE.MeshStandardMaterial({ color:0xe6dccd, roughness:.9, map:TEX.grass, normalMap:TEX.grassN, normalScale:new THREE.Vector2(.35,.35) }),
  trim:   new THREE.MeshStandardMaterial({ color:0xf4f0ea, roughness:.45 }),
  ceil:   new THREE.MeshStandardMaterial({ color:0xf5f2ed, roughness:.95 }),
  floor:  new THREE.MeshStandardMaterial({ map:TEX.floor, normalMap:TEX.floorN, normalScale:new THREE.Vector2(.6,.6), roughnessMap:TEX.floorR, roughness:.55, envMapIntensity:1.2 }),
  brass:  new THREE.MeshStandardMaterial({ color:0xd0a862, metalness:1, roughness:.24 }),
  brassD: new THREE.MeshStandardMaterial({ color:0x8f7448, metalness:1, roughness:.36 }),
  chrome: new THREE.MeshStandardMaterial({ color:0xdddddd, metalness:1, roughness:.12 }),
  walnut: new THREE.MeshStandardMaterial({ color:0x4c2e1c, roughness:.42 }),
  ebony:  new THREE.MeshStandardMaterial({ color:0x2a211c, roughness:.35 }),
  black:  new THREE.MeshStandardMaterial({ color:0x141414, roughness:.28, metalness:.25 }),
  cream:  fab(0xeee5d6), ivory: fab(0xf6f3ee,.85), greyV: fab(0x6c6f7e,.62), mustard: fab(0xc8901e,.7),
  taupe:  fab(0x8a7660), navy: fab(0x2a2738,.8), linen: fab(0xfbfaf8,.95), sand: fab(0xe6d8b8), lilac: fab(0x7d7a8a),
  pat:    new THREE.MeshStandardMaterial({ map:TEX.patPillow, roughness:.85, normalMap:TEX.fabricN, normalScale:new THREE.Vector2(.5,.5) }),
  paisley:new THREE.MeshStandardMaterial({ map:TEX.paisley, roughness:.8, normalMap:TEX.fabricN }),
  leatherC:new THREE.MeshStandardMaterial({ color:0xebdec6, roughness:.48, normalMap:TEX.leatherN, normalScale:new THREE.Vector2(.4,.4) }),
  leatherB:new THREE.MeshStandardMaterial({ color:0x70452d, roughness:.4, normalMap:TEX.leatherN, normalScale:new THREE.Vector2(.6,.6) }),
  tan:    fab(0xa07a58,.85),
  marble: new THREE.MeshStandardMaterial({ map:TEX.marble, roughness:.14 }),
  marbleG:new THREE.MeshStandardMaterial({ map:TEX.marbleGreen, roughness:.16 }),
  marbleW:new THREE.MeshStandardMaterial({ map:TEX.marbleWarm, roughness:.16 }),
  mirror: new THREE.MeshStandardMaterial({ color:0xd2d6da, metalness:1, roughness:.04 }),
  curtain:new THREE.MeshStandardMaterial({ color:0xc8c0c0, roughness:.95, side:THREE.DoubleSide }),
  sheer:  new THREE.MeshStandardMaterial({ color:0xffffff, roughness:1, transparent:true, opacity:.36, side:THREE.DoubleSide, depthWrite:false }),
  frameW: new THREE.MeshStandardMaterial({ color:0x2b2a2a, roughness:.45, metalness:.5 }),
  glass:  new THREE.MeshStandardMaterial({ color:0xffffff, roughness:.02, metalness:.0, transparent:true, opacity:.08, depthWrite:false }),
  crystal:new THREE.MeshStandardMaterial({ color:0xffffff, roughness:.02, metalness:.1, transparent:true, opacity:.45, emissive:0xfff3e0, emissiveIntensity:.1 }),
  amber:  new THREE.MeshStandardMaterial({ color:0xc5651b, roughness:.1, transparent:true, opacity:.88, emissive:0x7a2c06, emissiveIntensity:.0 }),
  vase:   new THREE.MeshStandardMaterial({ color:0x4a4a46, roughness:.5 }),
  ceramic:new THREE.MeshStandardMaterial({ color:0xf3f0ea, roughness:.25 }),
  leaf:   new THREE.MeshStandardMaterial({ color:0x47663a, roughness:.6, side:THREE.DoubleSide }),
  petal:  new THREE.MeshStandardMaterial({ color:0xfbf8f3, roughness:.55, side:THREE.DoubleSide }),
  petalP: new THREE.MeshStandardMaterial({ color:0x7c5aa0, roughness:.6, side:THREE.DoubleSide }),
  petalR: new THREE.MeshStandardMaterial({ color:0xd2482e, roughness:.6, side:THREE.DoubleSide }),
  cove:   new THREE.MeshBasicMaterial({ color:0xfff1dc }),
  led:    new THREE.MeshBasicMaterial({ color:0xffe2b8 }),
  screen: new THREE.MeshStandardMaterial({ color:0x050608, roughness:.06, metalness:.6 }),
};
M.mirror.userData.room='bed';
Object.assign(M,{
  bath:   new THREE.MeshStandardMaterial({ map:TEX.slab, roughness:.2 }),
  tileFloor:new THREE.MeshStandardMaterial({ map:TEX.tile, roughness:.22 }),
  showerFloor:new THREE.MeshStandardMaterial({ map:TEX.tileDark, roughness:.35 }),
  mirrorBath:new THREE.MeshStandardMaterial({ color:0xd2d6da, metalness:1, roughness:.04 }),
  showerGlass:new THREE.MeshStandardMaterial({ color:0xeaf3f2, roughness:.02, transparent:true, opacity:.16, depthWrite:false, side:THREE.DoubleSide }),
  frost:  new THREE.MeshStandardMaterial({ color:0xf4f4f2, roughness:.6, transparent:true, opacity:.72, side:THREE.DoubleSide }),
  water:  new THREE.MeshStandardMaterial({ color:0xa9c8cc, roughness:.02, metalness:.15, transparent:true, opacity:.55 }),
  nightLed:new THREE.MeshBasicMaterial({ color:0x000000 }),
  towel:  fab(0xfbfaf6,1), robe: fab(0xf7f5f0,1),
  panelGlass:new THREE.MeshStandardMaterial({ color:0x0b0b0c, roughness:.08, metalness:.4 }),
});
M.bath.userData.tile=2.4; M.tileFloor.userData.tile=1.2; M.showerFloor.userData.tile=.6;
const glowMats = [];   // emissive materials scaled by night
const shadeMat = (col, emi, day=.06, nightV=1.6) => { const m=new THREE.MeshStandardMaterial({ color:col, roughness:.9, emissive:emi, emissiveIntensity:day, side:THREE.DoubleSide }); m.userData.d=day; m.userData.n=nightV; glowMats.push(m); return m; };
glowMats.push(Object.assign(M.amber,{userData:{d:0,n:.9}}), Object.assign(M.crystal,{userData:{d:.1,n:1.2}}));

/* ================= geometry helpers ================= */
const root = new THREE.Group(); scene.add(root);
// box with world-scaled UVs (for wallpaper & panelling)
function boxW(w,h,d,mat,x=0,y=0,z=0,parent=root, tile=1){
  const geo=new THREE.BoxGeometry(w,h,d); const uv=geo.attributes.uv;
  const dims=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];
  for(let f=0;f<6;f++) for(let v=0;v<4;v++){ const i=f*4+v; uv.setXY(i, uv.getX(i)*dims[f][0]/tile, uv.getY(i)*dims[f][1]/tile); }
  const m=new THREE.Mesh(geo,mat); m.position.set(x,y,z); parent.add(m); return m;
}
function box(w,h,d,mat,x=0,y=0,z=0,parent=root){ const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat); m.position.set(x,y,z); parent.add(m); return m; }
function rbox(w,h,d,r,mat,x=0,y=0,z=0,parent=root,seg){ if(seg===undefined) seg = r<.015? 1 : r<.05? 2 : 3; r=Math.min(r,w/2-.001,h/2-.001,d/2-.001); const m=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,seg,r),mat); m.position.set(x,y,z); parent.add(m); return m; }
// cushion: rounded box with a soft domed top and slightly bellied sides
function puffy(w,h,d,r,mat,x,y,z,parent=root,bulge=.035){
  r=Math.min(r,w/2-.001,h/2-.001,d/2-.001);
  const geo=new RoundedBoxGeometry(w,h,d,Math.max(w,h,d)>.6?4:3,r); const p=geo.attributes.position;
  for(let i=0;i<p.count;i++){ const X=p.getX(i)/(w/2), Y=p.getY(i)/(h/2), Z=p.getZ(i)/(d/2);
    const k=(1-X*X)*(1-Z*Z); if(Y>0) p.setY(i,p.getY(i)+bulge*k*Y);
    const s=1+.04*(1-Y*Y); p.setX(i,p.getX(i)*(1+.02*(1-Y*Y))); p.setZ(i,p.getZ(i)*s); }
  geo.computeVertexNormals(); const m=new THREE.Mesh(geo,mat); m.position.set(x,y,z); parent.add(m); return m;
}
// pillow: pinched edges, full belly, corner ears
const pillowGeoCache={};
function pillowGeo(w,h,d){ const k=w+'_'+h+'_'+d; if(pillowGeoCache[k]) return pillowGeoCache[k];
  const geo=new THREE.BoxGeometry(w,h,d,12,12,3); const p=geo.attributes.position;
  for(let i=0;i<p.count;i++){ const X=p.getX(i)/(w/2), Y=p.getY(i)/(h/2), Z=p.getZ(i)/(d/2);
    const belly = Math.pow(Math.max(0,(1-X*X)*(1-Y*Y)),.6);
    p.setZ(i, Math.sign(Z||1)*(d/2)*(.12+.88*belly)*Math.abs(Z));
    const pinch = 1 - .06*(1-Math.abs(X))*Math.abs(Y)*Math.abs(Y);
    p.setX(i, p.getX(i)*(1-.05*(1-Y*Y)*Math.abs(X))); p.setY(i, p.getY(i)*pinch); }
  geo.computeVertexNormals(); return (pillowGeoCache[k]=geo); }
function pillow(w,h,mat,parent,x,y,z,rx=-.25,ry=0,rz=0,d=.17){ const m=new THREE.Mesh(pillowGeo(w,h,d),mat); m.position.set(x,y,z); m.rotation.set(rx,ry,rz); parent.add(m); return m; }
function cyl(rt,rb,h,mat,x=0,y=0,z=0,parent=root,seg=28){ const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,seg),mat); m.position.set(x,y,z); parent.add(m); return m; }
function sph(r,mat,x,y,z,parent=root,ws=20,hs=14){ const m=new THREE.Mesh(new THREE.SphereGeometry(r,ws,hs),mat); m.position.set(x,y,z); parent.add(m); return m; }
function grp(x=0,y=0,z=0,ry=0,parent=root){ const g=new THREE.Group(); g.position.set(x,y,z); g.rotation.y=ry; parent.add(g); return g; }
const blobMats={}; function blobMat(o){ const k=Math.round(o*.8*20)/20; return blobMats[k]||(blobMats[k]=new THREE.MeshBasicMaterial({map:TEX.blob,transparent:true,opacity:k,depthWrite:false})); }
function blob(x,z,w,d,o=1,parent=root){ const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d), blobMat(o)); m.userData.blob=true; m.rotation.x=-Math.PI/2; m.position.set(x,0.013,z); m.userData.noShadow=true; m.renderOrder=1; parent.add(m); return m; }
function lathe(pts,mat,x,y,z,parent=root,seg=28){ const m=new THREE.Mesh(new THREE.LatheGeometry(pts.map(([a,b])=>new THREE.Vector2(a,b)),seg),mat); m.position.set(x,y,z); parent.add(m); return m; }
// nailhead row along a polyline
const nailGeo=new THREE.SphereGeometry(.007,6,4);
function nails(points,parent){ const im=new THREE.InstancedMesh(nailGeo,M.brass,points.length); const o=new THREE.Object3D(); points.forEach((p,i)=>{ o.position.copy(p); o.updateMatrix(); im.setMatrixAt(i,o.matrix); }); im.userData.noShadow=true; parent.add(im); return im; }

await tick(32,'load.arch');
/* ================= architecture ================= */
const walls = new THREE.Group(); root.add(walls);
const ceilings = new THREE.Group(); root.add(ceilings);
const southWalls = [], OCC = [];
function wall(axis, c, from, to, openings=[], mat=M.wall, tag){
  const segs=[]; let cur=from; openings=[...openings].sort((p,q)=>p[0]-q[0]);
  for(const [a,b,y0,y1] of openings){ if(a>cur) segs.push([cur,a,0,H]); if(y0>0) segs.push([a,b,0,y0]); if(y1<H) segs.push([a,b,y1,H]); cur=b; }
  if(cur<to) segs.push([cur,to,0,H]);
  for(const [a,b,y0,y1] of segs){
    const len=b-a, mid=(a+b)/2, hh=y1-y0, my=(y0+y1)/2;
    OCC.push(new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(axis==='x'?mid:c, my, axis==='x'?c:mid), new THREE.Vector3(axis==='x'?len:T, hh, axis==='x'?T:len)));
    const tl=mat.userData.tile||1; const m = axis==='x' ? boxW(len,hh,T,mat,mid,my,c,walls,tl) : boxW(T,hh,len,mat,c,my,mid,walls,tl);
    if(tag==='south') southWalls.push(m);
    if(y0===0 && hh>1){
      for(const s of [-1,1]){
        const add=(mm)=>{ if(tag==='south') southWalls.push(mm); };
        if(axis==='x'){ add(box(len,.14,.018,M.trim,mid,.07,c+s*(T/2+.009),walls)); add(box(len,.02,.028,M.trim,mid,.145,c+s*(T/2+.014),walls)); }
        else { add(box(.018,.14,len,M.trim,c+s*(T/2+.009),.07,mid,walls)); add(box(.028,.02,len,M.trim,c+s*(T/2+.014),.145,mid,walls)); }
      }
    }
  }
}
function curtain(x,z,w,h,mat,sheer=false){
  const folds = Math.round(w/.11);
  const geo=new THREE.PlaneGeometry(w,h,folds*6,8); const p=geo.attributes.position;
  for(let i=0;i<p.count;i++){ const u=p.getX(i), v=(p.getY(i)+h/2)/h; const amp = (sheer?.03:.05)*(1+ (1-v)*.25);
    p.setZ(i, Math.sin(u/w*Math.PI*2*folds)*amp + Math.sin(u*3+v*2)*.01);
    p.setX(i, u*(1+(1-v)*.05)); }
  geo.computeVertexNormals(); const g=new THREE.Group(); g.position.set(x,0,z); walls.add(g);
  const m=new THREE.Mesh(geo,mat); m.position.set(0,h/2+.02,0); if(sheer) m.userData.noShadow=true; g.add(m);
  if(!sheer) box(w*1.04,.03,.09,mat,0,.06,0,g);
  return g;
}
const drapes=[], shades=[];
function windowAt(x0,x1,z, y0=.55, y1=2.5, dir=1, curtains=true){
  const w=x1-x0, cx=(x0+x1)/2, cy=(y0+y1)/2;
  boxW(w,.02,T,M.trim,cx,y1+.01,z,walls); boxW(.02,y1-y0,T,M.trim,x0-.01,cy,z,walls); boxW(.02,y1-y0,T,M.trim,x1+.01,cy,z,walls);
  if(y0>.6) boxW(w,.02,T,M.trim,cx,y0-.01,z,walls);
  for(const [ww,hh,xx,yy] of [[w,.06,cx,y1-.03],[w,.07,cx,y0+.035],[.06,y1-y0,x0+.03,cy],[.06,y1-y0,x1-.03,cy]]) box(ww,hh,.07,M.frameW,xx,yy,z-dir*.03,walls);
  if(w>2.2) box(.05,y1-y0,.06,M.frameW,cx,cy,z-dir*.03,walls);
  box(w+.3,.04,.3,M.marbleW,cx,y0-.02,z+dir*.1,walls); if(y0<.7) box(w+.2,.08,.02,M.trim,cx,y0-.08,z+dir*.22,walls);
  const g=box(w,y1-y0,.008,M.glass,cx,cy,z-dir*.04,walls); g.userData.noShadow=true;
  if(curtains){
    box(w+1.2,.035,.07,M.brassD,cx,TRAY-.02,z+dir*.26,walls);
    for(const s of [-1,1]){ const a=cx+s*(w/2+.18); const d=curtain(a, z+dir*.26, .5, TRAY-.06, M.curtain); drapes.push({g:d,a,b:cx+s*(w/4+.06),sc:(w/2+.22)/.5}); }
    for(const s of [-1,1]) curtain(cx+s*(w/2-.16), z+dir*.16, .38, TRAY-.06, M.sheer, true);
  } else { // motorised roman shade
    box(w+.12,.08,.1,M.trim,cx,y1+.1,z+dir*.12,walls);
    const sh=new THREE.Group(); sh.position.set(cx,y1+.06,z+dir*.12); walls.add(sh);
    const pl=box(w+.06,1,.025,M.linen,0,-.5,0,sh); shades.push({g:sh,full:(y1-y0)+.06});
    sh.scale.y=.08;
  }
}
// tray ceiling with cove, downlights, linear diffuser
const ceilGlow=[];
function ceiling(x0,x1,z0,z1,band=.55, warm=0xffe2b8, downs=[]){
  const w=x1-x0, d=z1-z0, cx=(x0+x1)/2, cz=(z0+z1)/2, th=H-TRAY;
  // cove wash baked into an emissive gradient on the inner ceiling (replaces an area light)
  const gw=128, gh=Math.max(32,Math.round(128*d/w)); const [gc,gg]=cvs(gw,gh); const img=gg.createImageData(gw,gh);
  for(let j=0;j<gh;j++) for(let i=0;i<gw;i++){ const ux=(i+.5)/gw*w, uz=(j+.5)/gh*d; const de=Math.min(ux-band, w-band-ux, uz-band, d-band-uz); const v= de<0? 0 : Math.round(255*(.18+.82*Math.exp(-de/.45))); const k=(j*gw+i)*4; img.data[k]=img.data[k+1]=img.data[k+2]=v; img.data[k+3]=255; }
  gg.putImageData(img,0,0); const gt=new THREE.CanvasTexture(gc); gt.colorSpace=THREE.SRGBColorSpace;
  const cm=new THREE.MeshStandardMaterial({ color:0xf5f2ed, roughness:.95, emissive:warm, emissiveMap:gt, emissiveIntensity:0 }); ceilGlow.push(cm);
  const top=new THREE.Mesh(new THREE.PlaneGeometry(w,d),cm); top.rotation.x=Math.PI/2; top.position.set(cx,H,cz); ceilings.add(top);
  box(w,th,band,M.ceil,cx,TRAY+th/2,z0+band/2,ceilings); box(w,th,band,M.ceil,cx,TRAY+th/2,z1-band/2,ceilings);
  box(band,th,d-2*band,M.ceil,x0+band/2,TRAY+th/2,cz,ceilings); box(band,th,d-2*band,M.ceil,x1-band/2,TRAY+th/2,cz,ceilings);
  // stepped crown moulding
  for(const [o,s] of [[.03,.06],[.07,.025]]){
    box(w,s,o*2,M.trim,cx,TRAY-s/2,z0+o,ceilings); box(w,s,o*2,M.trim,cx,TRAY-s/2,z1-o,ceilings);
    box(o*2,s,d,M.trim,x0+o,TRAY-s/2,cz,ceilings); box(o*2,s,d,M.trim,x1-o,TRAY-s/2,cz,ceilings); }
  // inner tray lip moulding
  const iw=w-2*band, id=d-2*band;
  for(const [ww,dd,xx,zz] of [[iw,.035,cx,z0+band],[iw,.035,cx,z1-band],[.035,id,x0+band,cz],[.035,id,x1-band,cz]]) box(ww,.05,dd,M.trim,xx,TRAY+.025,zz,ceilings);
  for(const [ww,dd,xx,zz] of [[iw,.012,cx,z0+band+.02],[iw,.012,cx,z1-band-.02],[.012,id,x0+band+.02,cz],[.012,id,x1-band-.02,cz]]){ const s=box(ww,.025,dd,M.cove,xx,TRAY+.065,zz,ceilings); s.userData.noShadow=true; }
  // downlights in the soffit band
  for(const [dx,dz] of downs){ const c=cyl(.045,.045,.01,M.chrome,dx,TRAY-.003,dz,ceilings,20); const l=cyl(.032,.032,.012,M.led,dx,TRAY-.006,dz,ceilings,20); l.userData.noShadow=true; }
  // linear air slot near window side
  box(iw*.7,.004,.03,M.black,cx,TRAY-.001,z0+band*.5,ceilings);
  return { x:cx, z:cz, w:iw, d:id };
}
function panel(axis,c,cu,cy,w,h,dir=1,mat=M.trim){
  const s=.022, off=c+dir*(T/2+.011);
  if(axis==='x'){ box(w,s,s,mat,cu,cy+h/2,off,walls); box(w,s,s,mat,cu,cy-h/2,off,walls); box(s,h,s,mat,cu-w/2,cy,off,walls); box(s,h,s,mat,cu+w/2,cy,off,walls); }
  else { box(s,s,w,mat,off,cy+h/2,cu,walls); box(s,s,w,mat,off,cy-h/2,cu,walls); box(s,h,s,mat,off,cy,cu-w/2,walls); box(s,h,s,mat,off,cy,cu+w/2,walls); }
}
function switchPlate(axis,c,u,dir){ const off=c+dir*(T/2+.006); const p = axis==='x'? box(.08,.12,.01,M.trim,u,1.15,off,walls) : box(.01,.12,.08,M.trim,off,1.15,u,walls); }

const floors=[];
const floor = new THREE.Mesh(new THREE.PlaneGeometry(X1-X0, Z1-Z0), M.floor);
floor.rotation.x=-Math.PI/2; floor.position.set((X0+X1)/2,0,0); floor.receiveShadow=true; floor.userData.noCast=true; root.add(floor); floors.push(floor);
function floorPlane(x0,x1,z0,z1,mat,y=0){ const geo=new THREE.PlaneGeometry(x1-x0,z1-z0); const uv=geo.attributes.uv, tl=mat.userData.tile||1;
  for(let i=0;i<uv.count;i++) uv.setXY(i,uv.getX(i)*(x1-x0)/tl,uv.getY(i)*(z1-z0)/tl);
  const m=new THREE.Mesh(geo,mat); m.rotation.x=-Math.PI/2; m.position.set((x0+x1)/2,y,(z0+z1)/2); m.receiveShadow=true; m.userData.noCast=true; root.add(m); floors.push(m); return m; }
const FX0=-4.4, FX1=-0.6, FZ1=6.0, BX0=4, BZ1=7.2;
floorPlane(FX0,FX1,Z1,FZ1,M.tileFloor); floorPlane(BX0,X1,Z1,BZ1,M.tileFloor);
floorPlane(-3.7,-2.5,Z1-T/2,Z1+T/2,M.tileFloor,.002); floorPlane(6.6,7.7,Z1-T/2,Z1+T/2,M.tileFloor,.002);
{ const tile=2.0; for(const t of [TEX.floor,TEX.floorN,TEX.floorR]) t.repeat.set((X1-X0)/tile,(Z1-Z0)/tile); }

const WIN = { dining:[-7.4,-5.4], liv1:[-3.3,-1.3], liv2:[0.3,2.7], bed:[5.4,8.0] };
wall('x', Z0-T/2, X0-T, X1+T, Object.values(WIN).map(([a,b])=>[a,b,.55,2.5]));
wall('x', Z1+T/2, X0-T, X1+T, [[-3.7,-2.5,0,2.4],[6.6,7.7,0,2.3]], M.wall, 'south');
wall('z', FX0-T/2, Z1+T, FZ1, [], M.wall, 'south');
wall('z', FX1+T/2, Z1+T, FZ1, [], M.wall, 'south');
wall('x', FZ1+T/2, FX0-T, FX1+T, [[-2.6,-1.6,0,2.3]], M.wall, 'south');
wall('z', BX0, Z1+T/2, BZ1, [], M.bath, 'south');
wall('z', X1+T/2, Z1+T/2, BZ1, [], M.bath, 'south');
wall('x', BZ1+T/2, BX0-T/2, X1+T, [[6.0,8.2,.9,2.5]], M.bath, 'south');
// marble cladding on the bath side of the bedroom wall
for(const [a,b,y0,y1] of [[BX0+T/2,6.6,0,H],[7.7,X1,0,H],[6.6,7.7,2.3,H]]){ const m=boxW(b-a,y1-y0,.02,M.bath,(a+b)/2,(y0+y1)/2,Z1+T/2+.01,walls,2.4); southWalls.push(m); }
wall('z', X0-T/2, Z0, Z1);
wall('z', X1+T/2, Z0, Z1, [], M.wallWarm);
wall('z', -4, Z0, Z1, [[-2.3,2.3,0,2.5]]);
wall('z',  4, Z0, Z1, [[-2.7,-1.5,0,2.3]]);
// door casings (profiled) + leaf with panels
function casing(axis,c,a,b,top){ const w=.09;
  for(const s of [-1,1]){ for(const u of [a-w/2,b+w/2]) { if(axis==='z') box(.02,top+w,w,M.trim,c+s*(T/2+.01),(top+w)/2,u,walls); }
    if(axis==='z') box(.02,w,b-a+2*w,M.trim,c+s*(T/2+.01),top+w/2,(a+b)/2,walls); }
  if(axis==='z'){ box(T,.01,b-a,M.trim,c,top,(a+b)/2,walls); for(const u of [a,b]) box(T,top,.01,M.trim,c,top/2,u,walls); }
}
casing('z',4,-2.7,-1.5,2.3); casing('z',-4,-2.3,2.3,2.5);
function casingX(c,a,b,top){ const w=.09, out=[];
  for(const s of [-1,1]){ for(const u of [a-w/2,b+w/2]) out.push(box(w,top+w,.02,M.trim,u,(top+w)/2,c+s*(T/2+.01),walls)); out.push(box(b-a+2*w,w,.02,M.trim,(a+b)/2,top+w/2,c+s*(T/2+.01),walls)); }
  out.push(box(b-a,.01,T,M.trim,(a+b)/2,top,c,walls)); for(const u of [a,b]) out.push(box(.01,top,T,M.trim,u,top/2,c,walls));
  southWalls.push(...out); }
casingX(Z1+T/2,-3.7,-2.5,2.4); casingX(Z1+T/2,6.6,7.7,2.3); casingX(FZ1+T/2,-2.6,-1.6,2.3);
// entry door (closed) with panels, lever, viewer, closer
const entry=grp(-2.1,0,FZ1+T/2,0,walls); { box(.99,2.29,.05,M.walnut,0,1.145,0,entry);
  for(const [yy,hh] of [[.6,.85],[1.62,.95]]) for(const s of [-1,1]){ const p=grp(0,yy,s*.027,0,entry); box(.7,.018,.01,M.brassD,0,hh/2,0,p); box(.7,.018,.01,M.brassD,0,-hh/2,0,p); box(.018,hh,.01,M.brassD,-.35,0,0,p); box(.018,hh,.01,M.brassD,.35,0,0,p); }
  const lv=box(.14,.018,.02,M.brass,.32,1.02,-.06,entry); cyl(.028,.028,.02,M.brass,.39,1.02,-.035,entry).rotation.x=Math.PI/2;
  cyl(.009,.009,.02,M.brass,0,1.52,-.035,entry).rotation.x=Math.PI/2; box(.36,.04,.04,M.chrome,.22,2.2,-.05,entry);
  southWalls.push(...entry.children); }
// sliding frosted door to bath (parked open)
{ const sd=grp(6.05,0,Z1+T/2+.05,0,walls); box(1.12,2.26,.03,M.frost,0,1.14,0,sd); for(const yy of [.02,2.26]) box(1.14,.03,.035,M.brassD,0,yy,0,sd); for(const xx of [-.56,.56]) box(.03,2.26,.035,M.brassD,xx,1.14,0,sd); box(.02,.4,.03,M.brass,.48,1.05,-.03,sd); southWalls.push(...sd.children); }
const leaf=grp(4.06,0,-1.52,1.25,walls); box(1.17,2.27,.045,M.trim,.585,1.135,0,leaf);
for(const [yy,hh] of [[.62,.9],[1.67,.95]]){ for(const s of [-1,1]){ const p=new THREE.Group(); p.position.set(.585,yy,s*.026); leaf.add(p);
  box(.86,.016,.012,M.trim,0,hh/2,0,p); box(.86,.016,.012,M.trim,0,-hh/2,0,p); box(.016,hh,.012,M.trim,-.43,0,0,p); box(.016,hh,.012,M.trim,.43,0,0,p); } }
{ const h=cyl(.012,.012,.13,M.brass,1.06,1.0,.05,leaf); h.rotation.z=Math.PI/2; sph(.025,M.brass,1.0,1.0,.05,leaf); }
Object.values(WIN).forEach(([a,b])=>windowAt(a,b,Z0));
switchPlate('z',4,-2.95,-1); switchPlate('z',4,-1.25,1); switchPlate('z',-4,2.6,1); switchPlate('x',Z1+T/2,-3.95,1); switchPlate('x',Z1+T/2,7.95,1);

// wall panelling
[[-2.3,-1.3],[-1.3,-.2],[-.2,1.0],[1.0,2.2],[2.2,3.4]].forEach(([a,b])=>{ panel('x',Z1,(a+b)/2,1.66,b-a-.2,1.5,-1); panel('x',Z1,(a+b)/2,.6,b-a-.2,.46,-1); });
[[-8.6,-7.6],[-5.0,-4.4]].forEach(([a,b])=>panel('x',Z0,(a+b)/2,1.5,b-a-.1,1.7,1));
[[-8.6,-7.2],[-7.2,-5.8],[-5.8,-4.4]].forEach(([a,b])=>panel('x',Z1,(a+b)/2,1.5,b-a-.2,1.9,-1));
[[-2.8,-2.4],[2.4,2.8]].forEach(([a,b])=>panel('z',-4,(a+b)/2,1.4,.25,2,1));
panel('z',4,2.25,1.5,1.2,1.9,1); panel('z',4,2.25,1.5,1.2,1.9,-1);
[[4.4,5.3],[8.2,9.6]].forEach(([a,b])=>panel('x',Z0,(a+b)/2,1.5,b-a-.15,1.8,1));

const coveRooms = [
  ceiling(-4,4,Z0,Z1,.55,0xffe2b8,[[-3.72,-1.5],[-3.72,1.5],[3.72,-1.5],[3.72,1.5],[-2,2.72],[2,2.72],[0,2.72]]),
  ceiling(X0,-4,Z0,Z1,.5,0xffe2b8,[[-8.75,-1.6],[-8.75,0],[-8.75,1.6],[-6.5,2.75],[-5,2.75]]),
  ceiling(4,X1,Z0,Z1,.5,0xfff0dc,[[9.75,-1.95],[9.75,1.95],[5.2,2.75],[7,2.75]]),
  ceiling(FX0,FX1,Z1,FZ1,.42,0xffe2b8,[[-4.19,3.6],[-4.19,5.4],[-.81,3.6],[-.81,5.4]]),
  ceiling(BX0,X1,Z1,BZ1,.45,0xfff4e6,[[4.3,4.4],[4.3,5.75],[9.78,3.75],[9.78,6.4],[7.1,6.98]]),
];

/* ================= furniture builders ================= */
const lampLights = [];
function sofa(w,d,mat,x,z,ry,pillowMats=[],opts={}){
  const g=grp(x,0,z,ry);
  for(const sx of [-1,1]) for(const sz of [-1,1]) cyl(.022,.015,.1,M.ebony,sx*(w/2-.08),.05,sz*(d/2-.08),g);
  rbox(w,.22,d,.035,mat,0,.21,0,g);
  // piping along base top
  const pip=cyl(.008,.008,w-.05,mat,0,.32,-d/2+.005,g,8); pip.rotation.z=Math.PI/2;
  const n=w>2.2?3:2, cw=(w-.36)/n;
  for(let i=0;i<n;i++){ const cx=-w/2+.18+cw*(i+.5);
    puffy(cw-.012,.17,d-.27,.05,mat,cx,.405,-.085,g,.03);
    const bc=puffy(cw-.012,.44,.2,.06,mat,cx,.64,d/2-.24,g,.02); bc.rotation.x=-.14; }
  const back=rbox(w-.02,.5,.14,.05,mat,0,.58,d/2-.07,g); back.rotation.x=-.04;
  for(const s of [-1,1]){ puffy(.19,.34,d,.07,mat,s*(w/2-.095),.5,0,g,.02); }
  pillowMats.forEach((pm,i)=>{ const t=(i+.5)/pillowMats.length; const big = i===0||i===pillowMats.length-1;
    pillow(big?.48:.42,big?.48:.4,pm,g,-w/2+.3+t*(w-.6),.7+(big?.02:0),d/2-.36+(big?0:.06),-.3,(t-.5)*.35,(t-.5)*.1); });
  blob(x,z,w+.4,d+.4,.9);
  return g;
}
function armchair(mat,x,z,ry,frame=M.ebony,pm,nail=false){
  const g=grp(x,0,z,ry);
  for(const sx of [-1,1]) for(const sz of [-1,1]) { const l=cyl(.02,.012,.17,frame,sx*.3,.085,sz*.3,g); l.rotation.z=sx*.1; l.rotation.x=-sz*.08; }
  rbox(.74,.2,.72,.04,mat,0,.27,0,g);
  puffy(.58,.13,.54,.05,mat,0,.43,-.05,g,.03);
  const b=puffy(.74,.58,.15,.06,mat,0,.65,.3,g,.01); b.rotation.x=-.14;
  for(const s of [-1,1]){ puffy(.11,.32,.7,.045,mat,s*.33,.5,0,g,.015); box(.012,.33,.72,frame,s*.391,.5,0,g); }
  const cap=box(.76,.012,.17,frame,0,.94,.34,g); cap.rotation.x=-.14;
  if(pm) pillow(.4,.3,pm,g,0,.64,.16,-.22);
  if(nail){ const pts=[]; for(let i=0;i<=30;i++){ const t=i/30; pts.push(new THREE.Vector3(-.395,.36+t*.3,-.34+t*.0), new THREE.Vector3(.395,.36+t*.3,-.34)); } nails(pts,g); }
  blob(x,z,1.1,1.1,.8);
  return g;
}
function lampShade(r0,r1,h,col){ const sm=shadeMat(col,0xffd09a,.08,1.8); const outer=new THREE.Mesh(new THREE.CylinderGeometry(r0,r1,h,40,1,true),sm);
  const rim1=new THREE.Mesh(new THREE.TorusGeometry(r0,.004,6,40),M.brass); rim1.rotation.x=Math.PI/2; rim1.position.y=h/2; outer.add(rim1);
  const rim2=new THREE.Mesh(new THREE.TorusGeometry(r1,.004,6,40),M.brass); rim2.rotation.x=Math.PI/2; rim2.position.y=-h/2; outer.add(rim2);
  return outer; }
function floorLamp(x,z,h=1.6,shadeCol=0xf5efe6){
  const g=grp(x,0,z);
  lathe([[0,0],[.16,0],[.16,.012],[.14,.028],[.02,.035],[0,.035]],M.brass,0,0,0,g);
  cyl(.011,.011,h,M.brass,0,h/2,0,g);
  for(const k of [.35,.7]) cyl(.016,.016,.03,M.brass,0,h*k,0,g);
  const sh=lampShade(.17,.25,.32,shadeCol); sh.position.y=h+.06; g.add(sh);
  sph(.03,M.led,0,h+.02,0,g).userData.noShadow=true;
  const L=new THREE.PointLight(0xffc98a,0,5,2); L.position.set(x,h-.02,z); root.add(L); lampLights.push(L);
  blob(x,z,.5,.5,.7);
  return g;
}
function pharmacyLamp(x,z,ry){ const g=grp(x,0,z,ry);
  lathe([[0,0],[.13,0],[.13,.015],[.02,.03],[0,.03]],M.brass,0,0,0,g); cyl(.009,.009,1.25,M.brass,0,.63,0,g);
  const arm=cyl(.008,.008,.32,M.brass,.14,1.26,0,g); arm.rotation.z=Math.PI/2;
  const sh=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,.22,24,1,false,0,Math.PI),M.brass); sh.rotation.set(0,0,Math.PI/2); sh.position.set(.3,1.22,0); g.add(sh);
  const L=new THREE.PointLight(0xffc98a,0,3,2); const wp=new THREE.Vector3(.3,1.12,0).applyAxisAngle(new THREE.Vector3(0,1,0),ry).add(new THREE.Vector3(x,0,z)); L.position.copy(wp); L.userData={d:.2,n:1.6}; root.add(L); lampLights.push(L);
  sph(.025,M.led,.3,1.17,0,g).userData.noShadow=true;
  blob(x,z,.4,.4,.6); }
function tableLamp(x,y,z,kind='brass',shadeCol=0xf7f2ea, s=1){
  const g=grp(x,y,z);
  if(kind==='amber'){ sph(.13*s,M.amber,0,.15*s,0,g,32,24).scale.y=1.05; cyl(.05*s,.06*s,.03*s,M.brass,0,.015*s,0,g); cyl(.012*s,.012*s,.12*s,M.brass,0,.31*s,0,g); }
  else { lathe([[0,0],[.08,0],[.08,.02],[.03,.04],[.045,.12],[.025,.3],[.012,.36],[0,.36]].map(([a,b])=>[a*s,b*s]),M.brass,0,0,0,g); }
  const sh=lampShade(.13*s,.18*s,.22*s,shadeCol); sh.position.y=.48*s; g.add(sh);
  const L=new THREE.PointLight(0xffc98a,0,4,2); L.position.set(x,y+.44*s,z); root.add(L); lampLights.push(L); g.userData.light=L; g.userData.shade=sh.material;
  return g;
}
// orchids / bouquet
const petalGeo=(()=>{ const s=new THREE.Shape(); s.moveTo(0,0); s.bezierCurveTo(.03,.01,.035,.05,0,.06); s.bezierCurveTo(-.035,.05,-.03,.01,0,0); return new THREE.ShapeGeometry(s,6); })();
const leafGeo=(()=>{ const s=new THREE.Shape(); s.moveTo(0,0); s.bezierCurveTo(.05,.05,.04,.22,0,.28); s.bezierCurveTo(-.04,.22,-.05,.05,0,0); return new THREE.ShapeGeometry(s,8); })();
function flowers(x,y,z,petal=M.petal,s=1,vase='brass'){
  const g=grp(x,y,z); g.scale.setScalar(s);
  if(vase==='brass') lathe([[0,0],[.055,0],[.06,.02],[.06,.15],[.055,.16],[0,.16]],M.brass,0,0,0,g);
  else lathe([[0,0],[.05,0],[.08,.06],[.07,.13],[.045,.17],[.05,.19],[0,.19]],M.ceramic,0,0,0,g);
  for(let i=0;i<5;i++){ const l=new THREE.Mesh(leafGeo,M.leaf); l.position.y=.15; l.rotation.set(-.6-rnd()*.5, i*1.3, 0); g.add(l); }
  for(let i=0;i<14;i++){ const a=i*2.4, r=.08*Math.sqrt(i/14); const f=new THREE.Group(); f.position.set(Math.cos(a)*r,.21+rnd()*.07,Math.sin(a)*r); f.rotation.set(rnd()*.6-.3,rnd()*6,rnd()*.6-.3); g.add(f);
    for(let k=0;k<5;k++){ const p=new THREE.Mesh(petalGeo,petal); p.rotation.set(-Math.PI/2+.5,0,k/5*Math.PI*2); f.add(p); } sph(.008,M.brass,0,.005,0,f,6,4); }
  g.traverse(o=>{ if(o.isMesh) o.userData.noShadowCast=true; });
  return g;
}
function orchid(x,y,z,s=1){ const g=grp(x,y,z); g.scale.setScalar(s);
  lathe([[0,0],[.06,0],[.07,.1],[.065,.12],[0,.12]],M.ceramic,0,0,0,g);
  for(let i=0;i<4;i++){ const l=new THREE.Mesh(leafGeo,M.leaf); l.scale.set(1.3,.8,1); l.position.y=.11; l.rotation.set(-1.1,i*1.6,0); g.add(l); }
  for(const [ax,bend] of [[.02,.3],[-.03,-.25]]){ const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.11,0),new THREE.Vector3(ax,.35,0),new THREE.Vector3(ax+bend*.3,.52,0),new THREE.Vector3(ax+bend*.6,.56,0)]);
    const st=new THREE.Mesh(new THREE.TubeGeometry(curve,20,.003,5),M.leaf); g.add(st);
    for(let k=0;k<6;k++){ const p=curve.getPoint(.45+k*.1); const f=new THREE.Group(); f.position.copy(p); f.rotation.set(0,rnd()*6,0); g.add(f);
      for(let q=0;q<5;q++){ const pt=new THREE.Mesh(petalGeo,M.petal); pt.scale.setScalar(.8); pt.rotation.set(0,0,q/5*Math.PI*2); f.add(pt); } } }
  return g; }
function rug(x,z,w,d,tex,nTex){ const mat=new THREE.MeshStandardMaterial({map:tex,roughness:1,normalMap:nTex||TEX.fabricN,normalScale:new THREE.Vector2(.4,.4)});
  const m=new THREE.Mesh(new RoundedBoxGeometry(w,.014,d,2,.006),mat); m.position.set(x,.007,z); m.receiveShadow=true; m.userData.noCast=true; root.add(m); return m; }
function frameArt(axis,c,u,y,w,h,kind,dir){
  const g = grp(u,y,c+dir*(T/2+.03)); if(dir<0) g.rotation.y=Math.PI;
  box(w+.1,h+.1,.04,M.brassD,0,0,0,g); box(w+.02,h+.02,.042,M.ceramic,0,0,.002,g);
  const p=new THREE.Mesh(new THREE.PlaneGeometry(w-.08,h-.08),new THREE.MeshStandardMaterial({map:art(kind),roughness:.8})); p.position.z=.022; g.add(p);
  return g;
}
function books(x,y,z,len,ry,parent=root,hMin=.18,hMax=.27,lean=0){
  const g=grp(x,y,z,ry,parent); let u=0; const pal=[0x1f3d5c,0x2d5e7e,0x2f4a3b,0x6a1e1e,0x1b1b1b,0xc9a227,0xd9cfb8,0x3f3a50,0x245a73,0x9a8f7a];
  const geo=new THREE.BoxGeometry(1,1,1); const items=[];
  while(u<len-.03){ const t=.02+rnd()*.035, h=hMin+rnd()*(hMax-hMin), d=.15+rnd()*.06; items.push([u+t/2,h,d,t,pal[(rnd()*pal.length)|0]]); u+=t+.002; if(rnd()<.06) u+=.06; }
  const im=new THREE.InstancedMesh(geo,new THREE.MeshStandardMaterial({roughness:.75}),items.length); const o=new THREE.Object3D(); const col=new THREE.Color();
  items.forEach(([uu,h,d,t,c],i)=>{ o.position.set(uu-len/2,h/2,0); o.scale.set(t,h,d); o.rotation.set(0,0,0); o.updateMatrix(); im.setMatrixAt(i,o.matrix); im.setColorAt(i,col.setHex(c)); });
  g.add(im); return g;
}
function bookStack(x,y,z,n,ry=0,parent=root){ const g=grp(x,y,z,ry,parent); let yy=0; const pal=[0xe9e2d4,0x2b2b2b,0x6e5a40,0xc9b48a,0x3c4a5c];
  for(let i=0;i<n;i++){ const h=.03+rnd()*.025, w=.26-i*.02+rnd()*.03, d=.2-i*.012; const b=box(w,h,d,new THREE.MeshStandardMaterial({color:pal[i%pal.length],roughness:.7}),0,yy+h/2,0,g); b.rotation.y=(rnd()-.5)*.18; yy+=h; } return g; }

await tick(46,'load.furn');
/* ================= LIVING ROOM ================= */
rug(0.2,0.1,4.8,3.8,TEX.rugLiving,TEX.rugLivingN);
sofa(2.7,.98,M.cream,0.2,1.95,0,[M.mustard,M.pat,M.lilac,M.pat,M.mustard]);
armchair(M.greyV,-0.55,-1.55,Math.PI,M.black,M.paisley);
armchair(M.greyV, 0.95,-1.55,Math.PI,M.black,M.paisley);
armchair(M.greyV,-1.75, 0.35,-Math.PI/2,M.black,M.paisley);
(function(){ const g=grp(0.2,0,0.35);
  rbox(1.4,.05,.85,.006,M.marble,0,.425,0,g); box(1.42,.022,.87,M.brass,0,.392,0,g);
  for(const sx of [-1,1]){ for(const sz of [-1,1]) box(.022,.38,.022,M.brass,sx*.68,.2,sz*.41,g); box(.02,.02,.82,M.brass,sx*.68,.025,0,g); box(1.34,.02,.02,M.brass,0,.025,sx*.41,g); }
  bookStack(-.28,.45,.05,3,.15,g);
  lathe([[0,0],[.04,0],[.1,.05],[.11,.1],[.08,.17],[.05,.2],[0,.2]],M.vase,.15,.45,-.1,g);
  lathe([[0,0],[.05,0],[.09,.06],[.085,.12],[.04,.16],[0,.16]],new THREE.MeshStandardMaterial({color:0x3b3a36,roughness:.35}),.38,.45,.08,g);
  const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(.035,.009,80,8,2,3),M.brass); knot.position.set(-.3,.62,.02); g.add(knot);
  blob(0.2,0.35,1.7,1.1,.6);
})();
(function(){ const g=grp(-1.7,0,-.75); cyl(.24,.24,.025,M.walnut,0,.56,0,g); lathe([[.16,0],[.16,.015],[.05,.04],[.04,.3],[.06,.52],[.12,.55],[0,.55]],M.ebony,0,0,0,g); flowers(-1.7,.575,-.75,M.petalP,.9); blob(-1.7,-.75,.6,.6,.6); })();
(function(){ const g=grp(2.05,0,2.25); cyl(.22,.22,.02,M.marbleG,0,.6,0,g); cyl(.035,.035,.58,M.brass,0,.3,0,g); cyl(.15,.15,.015,M.brass,0,.008,0,g); tableLamp(2.05,.61,2.25,'amber',0xf4ede0,1.1); })();
floorLamp(-1.25,-2.4,1.5);
// chevron console + brass/white leaf sculpture above
(function(){ const g=grp(-.5,0,-2.72);
  box(1.3,.62,.38,M.ebony,0,.5,0,g); box(1.32,.02,.4,M.marble,0,.82,0,g);
  const [c,k]=cvs(512,256); k.fillStyle='#1f1a17'; k.fillRect(0,0,512,256); k.strokeStyle='#d8cdb8'; k.lineWidth=5;
  for(let y=-32;y<280;y+=28){ for(let x=0;x<512;x+=64){ k.beginPath(); k.moveTo(x,y); k.lineTo(x+32,y+20); k.lineTo(x+64,y); k.stroke(); } }
  const f=new THREE.Mesh(new THREE.PlaneGeometry(1.26,.58),new THREE.MeshStandardMaterial({map:toTex(c),roughness:.4,metalness:.3})); f.position.set(0,.5,.192); g.add(f);
  box(.004,.58,.005,M.brass,0,.5,.195,g);
  for(const sx of [-.6,.6]) for(const sz of [-.15,.15]) { cyl(.015,.01,.2,M.ebony,sx,.1,sz,g); }
  orchid(-.5+.35,.83,-2.72,1.1);
  bookStack(-.5-.3,.83,-2.72,2,.2);
  // wall sculpture
  const sg=grp(-.5,1.75,-3+T/2+.04);
  const leafS=(w,h)=>{ const s=new THREE.Shape(); s.moveTo(-w/2,0); s.bezierCurveTo(-w/4,h*.7,w/4,h*.65,w/2,0); s.bezierCurveTo(w/4,-h*.35,-w/4,-h*.3,-w/2,0); return new THREE.ExtrudeGeometry(s,{depth:.012,bevelEnabled:true,bevelSize:.004,bevelThickness:.003,bevelSegments:2}); };
  [[-.42,.02,.3,.42,.5,M.brass],[-.2,-.04,.28,.36,-.4,M.ceramic],[0,.06,.34,.5,.2,M.brass],[.22,-.05,.26,.32,-.7,M.ceramic],[.44,.04,.3,.46,1.0,M.brass]].forEach(([xx,yy,w,h,r,m],i)=>{ const p=new THREE.Mesh(leafS(w,h),m); p.position.set(xx,yy,i*.01); p.rotation.z=r; sg.add(p); });
  const sp=new THREE.SpotLight(0xffe4c0,0,3,Math.PI/5,.7,2); sp.position.set(-.5,2.6,-2.4); sp.target.position.set(-.5,1.7,-3); sp.userData={d:.5,n:2.5}; root.add(sp,sp.target); lampLights.push(sp);
  blob(-.5,-2.72,1.5,.6,.6);
})();
// TV wall: walnut built-in with niche LED
(function(){ const g=grp(3.92,0,.7);
  boxW(.06,2.3,2.7,M.walnut,0,1.3,0,g);
  for(const zz of [-1.35,1.35]) box(.07,2.3,.02,M.brassD,-.005,1.3,zz,g);
  box(.36,.42,2.6,M.walnut,-.18,.23,0,g); box(.362,.006,2.602,M.brassD,-.18,.445,0,g);
  for(const zz of [-.65,.65]) box(.002,.36,.004,M.ebony,-.361,.23,zz,g);
  box(.04,1.08,1.9,M.black,-.06,1.47,0,g);
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(1.86,1.04),M.screen); scr.position.set(-.081,1.47,0); scr.rotation.y=-Math.PI/2; g.add(scr);
  const led=box(.01,.01,2.55,M.led,-.04,2.42,0,g); led.userData.noShadow=true;
  bookStack(-.18,.45,-.9,3,.3,g); lathe([[0,0],[.06,0],[.07,.15],[.03,.25],[0,.25]],M.ceramic,-.18,.45,.95,g);
  blob(3.75,.7,.6,2.8,.6);
})();
// black-shade chandelier with crystal drops
(function(){ const g=grp(0.2,0,0.35);
  cyl(.007,.007,.5,M.brass,0,H-.25,0,g); cyl(.06,.06,.02,M.brass,0,H-.01,0,g);
  lathe([[0,0],[.05,.02],[.07,.08],[.04,.16],[.025,.3],[.015,.34],[0,.34]],M.brass,0,2.18,0,g);
  sph(.06,M.crystal,0,2.15,0,g,16,12);
  const sm=shadeMat(0x1f1c17,0xffc477,0,2.4);
  for(let i=0;i<8;i++){ const a=i/8*Math.PI*2, r=i%2?.44:.34, yy=i%2?2.3:2.42;
    const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,2.24,0),new THREE.Vector3(Math.cos(a)*r*.5,2.12,Math.sin(a)*r*.5),new THREE.Vector3(Math.cos(a)*r,yy-.08,Math.sin(a)*r),new THREE.Vector3(Math.cos(a)*r,yy,Math.sin(a)*r)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,20,.008,6),M.brass));
    cyl(.022,.018,.035,M.brass,Math.cos(a)*r,yy+.01,Math.sin(a)*r,g,16);
    const sh=new THREE.Mesh(new THREE.CylinderGeometry(.055,.085,.13,28,1,true),sm); sh.position.set(Math.cos(a)*r,yy+.1,Math.sin(a)*r); g.add(sh);
    const b=sph(.018,M.led,Math.cos(a)*r,yy+.06,Math.sin(a)*r,g,8,6); b.userData.noShadow=true;
    const drop=new THREE.Mesh(new THREE.OctahedronGeometry(.016),M.crystal); drop.scale.y=1.8; drop.position.set(Math.cos(a)*r*.5,2.08,Math.sin(a)*r*.5); g.add(drop); }
  const L=new THREE.PointLight(0xffc98a,0,7,2); L.position.set(0.2,2.25,0.35); root.add(L); lampLights.push(L);
})();

await tick(54,'load.furn');
/* ================= DINING ================= */
rug(-6.5,0.2,4.2,3.0,TEX.rugDining,TEX.rugLivingN);
(function(){ // lattice feature wall
  const x=X0+.02, z0=-2.3, z1=2.3, y0=.25, y1=2.55;
  box(.03,y1-y0,z1-z0,new THREE.MeshStandardMaterial({color:0xdcd6cb,roughness:.85}),x+.01,(y0+y1)/2,0,walls);
  const strip = new RoundedBoxGeometry(1,1,1,1,.12);
  const parts=[]; const t=.034, tileW=1.15, tileH=1.15;
  function rect(za,ya,zb,yb){ parts.push([za,ya,zb,ya+t],[za,yb-t,zb,yb],[za,ya+t,za+t,yb-t],[zb-t,ya+t,zb,yb-t]); }
  for(let ty=y0+.04; ty<y1-.1; ty+=tileH){ for(let tz=z0+.02; tz<z1-.1; tz+=tileW){
    const s=.06, m=tileW/2;
    rect(tz+s,ty+s,tz+m+.06,ty+m+.06); rect(tz+m-.06,ty+m-.06,tz+tileW-s,ty+tileH-s);
    rect(tz+m-.2,ty+s+.08,tz+m-.06,ty+s+.22); rect(tz+m+.06,ty+tileH-s-.22,tz+m+.2,ty+tileH-s-.08);
    rect(tz+s+.08,ty+m+.2,tz+s+.22,ty+m+.34); rect(tz+tileW-s-.22,ty+m-.34,tz+tileW-s-.08,ty+m-.2); } }
  const im=new THREE.InstancedMesh(strip,M.trim,parts.length); const o=new THREE.Object3D();
  parts.forEach(([za,ya,zb,yb],i)=>{ zb=Math.min(zb,z1); yb=Math.min(yb,y1); o.position.set(x+.055,(ya+yb)/2,(za+zb)/2); o.scale.set(.06,Math.max(.001,yb-ya),Math.max(.001,zb-za)); o.updateMatrix(); im.setMatrixAt(i,o.matrix); });
  walls.add(im);
  for(const z of [z0-.03,z1+.03]) box(.05,y1-y0+.06,.02,M.brass,x+.03,(y0+y1)/2,z,walls);
  box(.05,.02,z1-z0+.08,M.brass,x+.03,y1+.03,0,walls); box(.05,.02,z1-z0+.08,M.brass,x+.03,y0-.03,0,walls);
  for(const zz of [-1.5,0,1.5]){ const sp=new THREE.SpotLight(0xfff1dc,0,5,Math.PI/7,.5,2); sp.position.set(-8.75,TRAY-.01,zz); sp.target.position.set(X0+.1,.6,zz); root.add(sp,sp.target); lampLights.push(sp); }
})();
(function(){ const g=grp(-6.5,0,0.2);
  const s=new THREE.Shape(); const L=1.45, Wd=.65, c=.32;
  s.moveTo(-L+c,-Wd); s.lineTo(L-c,-Wd); s.lineTo(L,-Wd+c*.9); s.lineTo(L,Wd-c*.9); s.lineTo(L-c,Wd); s.lineTo(-L+c,Wd); s.lineTo(-L,Wd-c*.9); s.lineTo(-L,-Wd+c*.9); s.closePath();
  const wood=new THREE.MeshStandardMaterial({color:0x4a3a30,roughness:.28, map:TEX.fabric});
  const top=new THREE.Mesh(new THREE.ExtrudeGeometry(s,{depth:.045,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:3}),wood); top.rotation.x=-Math.PI/2; top.position.y=.715; g.add(top);
  for(const sx of [-.75,.75]){ rbox(.5,.66,.6,.02,M.ebony,sx,.36,0,g); box(.52,.015,.62,M.brassD,sx,.02,0,g); }
  // place settings
  const plateMat=M.ceramic, glassMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.02,transparent:true,opacity:.28});
  const seats=[[-1,-.55,0],[0,-.55,0],[1,-.55,0],[-1,.55,Math.PI],[0,.55,Math.PI],[1,.55,Math.PI],[-1.25,0,Math.PI/2],[1.25,0,-Math.PI/2]];
  for(const [sx,sz,r] of seats){ const p=grp(sx,.775,sz,r,g);
    lathe([[0,0],[.13,0],[.14,.012],[.135,.014],[.1,.006],[0,.006]],plateMat,0,0,.03,p);
    lathe([[0,0],[.09,0],[.1,.01],[.09,.012],[0,.006]],plateMat,0,.012,.03,p);
    box(.012,.004,.2,M.chrome,-.17,.002,.03,p); box(.012,.004,.2,M.chrome,.17,.002,.03,p); box(.012,.004,.16,M.chrome,.2,.002,.03,p);
    lathe([[0,0],[.035,0],[.036,.004],[.004,.01],[.004,.09],[.03,.11],[.04,.17],[.038,.2],[.036,.2],[.038,.17],[.028,.115],[0,.1]],glassMat,.12,0,-.13,p);
    const nap=box(.12,.012,.12,M.linen,0,.03,.03,p); nap.rotation.y=.785; }
  // centrepiece
  lathe([[0,0],[.08,0],[.12,.03],[.2,.07],[.22,.09],[0,.07]],M.vase,0,.775,0,g);
  for(let i=0;i<5;i++) sph(.03,i%2?M.mustard:M.petalR,(-0.08+i*.04),.86,(i%2-.5)*.06,g,10,8);
  blob(-6.5,.2,3.4,1.9,.9);
})();
function diningChair(x,z,ry){
  const g=grp(x,0,z,ry);
  for(const [lx,lz,rx] of [[-.19,-.19,.06],[.19,-.19,.06],[-.17,.19,-.1],[.17,.19,-.1]]){ const l=cyl(.02,.012,.45,M.ebony,lx,.225,lz,g); l.rotation.x=rx; cyl(.013,.011,.05,M.brass,lx,.025,lz+(rx>0?-.015:.02),g); }
  puffy(.5,.09,.48,.04,M.leatherC,0,.49,-.01,g,.02);
  const back=new THREE.Mesh(new THREE.TorusGeometry(.2,.055,14,40,Math.PI),M.leatherC); back.position.set(0,.52,.17); back.scale.set(1,1.75,.7); back.rotation.x=-.12; g.add(back);
  const outer=new THREE.Mesh(new THREE.TorusGeometry(.2,.06,14,40,Math.PI),M.tan); outer.position.set(0,.52,.2); outer.scale.set(1.02,1.78,.55); outer.rotation.x=-.12; g.add(outer);
  const pts=[]; for(let i=0;i<=26;i++){ const a=i/26*Math.PI; pts.push(new THREE.Vector3(Math.cos(a)*.262, .52+Math.sin(a)*.262*1.78-.0, .235-Math.sin(a)*.065)); } nails(pts,g);
  blob(x,z,.7,.7,.5);
}
[-1.0,0,1.0].forEach(dx=>{ diningChair(-6.5+dx,0.2-.88,0); diningChair(-6.5+dx,0.2+.88,Math.PI); });
diningChair(-6.5-1.78,.2,Math.PI/2); diningChair(-6.5+1.78,.2,-Math.PI/2);
(function(){ const g=grp(-6.5,0,0.2);
  for(const sx of [-.6,.6]){ cyl(.005,.005,.68,M.brass,sx,H-.34,0,g); cyl(.035,.035,.015,M.brass,sx,H-.008,0,g); }
  box(1.92,.035,.38,M.brass,0,2.3,0,g);
  const rodGeo=new THREE.CylinderGeometry(.007,.007,1,8);
  const rodMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.08,emissive:0xfff2dd,emissiveIntensity:.25,transparent:true,opacity:.85}); rodMat.userData={d:.25,n:1.4}; glowMats.push(rodMat);
  const pos=[]; for(let i=0;i<90;i++){ const u=-.93+i*(1.86/89); pos.push([u,-.17],[u,.17]); } for(let j=1;j<14;j++){ const v=-.17+j*.34/14; pos.push([-.93,v],[.93,v]); }
  const im=new THREE.InstancedMesh(rodGeo,rodMat,pos.length); const o=new THREE.Object3D();
  pos.forEach(([u,v],i)=>{ const len=.3+Math.sin(i*.7)*.02; o.position.set(u,2.285-len/2,v); o.scale.set(1,len,1); o.updateMatrix(); im.setMatrixAt(i,o.matrix); }); im.userData.noShadow=true; g.add(im);
  const glow=box(1.8,.02,.3,M.led,0,2.27,0,g); glow.userData.noShadow=true;
  for(const sx of [-.6,0,.6]){ const L=new THREE.PointLight(0xfff0da,0,5,2); L.position.set(-6.5+sx,2.0,.2); root.add(L); lampLights.push(L); }
})();
// ---------- minibar & coffee station (built-in, dining south wall) ----------
(function(){ const g=grp(-5.2,0,2.67,Math.PI); // front faces -z (into dining)
  const W=1.9, D=.5;
  box(W,.84,D,M.walnut,0,.46,0,g); box(W-.02,.04,D-.04,M.ebony,0,.02,0,g);
  // glass-door fridge (left) with lit bottles
  const fz=D/2+.004;
  box(.62,.62,.01,new THREE.MeshStandardMaterial({color:0x1a1d20,roughness:.05,metalness:.3,transparent:true,opacity:.55}),-.55,.47,fz,g);
  for(const yy of [.16,.78]) box(.64,.02,.02,M.chrome,-.55,yy,fz+.005,g);
  box(.02,.4,.025,M.chrome,-.27,.47,fz+.02,g);
  const fl=box(.58,.008,.4,M.led,-.55,.75,0,g); fl.userData.noShadow=true;
  const bc=[0x2b5d34,0xc9a227,0x8b1d1d,0xe8e4d8,0x3a6ea5,0x2b5d34];
  for(let r=0;r<2;r++) for(let i=0;i<6;i++){ const b=lathe([[0,0],[.028,0],[.028,.14],[.012,.19],[.01,.22],[0,.22]],new THREE.MeshStandardMaterial({color:bc[(i+r)%6],roughness:.15,transparent:true,opacity:.85}),-.78+i*.09,.2+r*.28,-.05+r*.03,g,16); }
  // drawers (right)
  for(const k of [0,1]){ box(.9,.36,.01,M.walnut,.42,.27+k*.38,fz,g); box(.24,.014,.02,M.brass,.42,.38+k*.38,fz+.012,g); }
  rbox(W+.04,.035,D+.04,.004,M.marble,0,.895,0,g);
  // mirrored backsplash + glass shelves with LED
  box(W,.62,.012,M.mirror,0,1.22,-D/2+.01,g);
  for(const yy of [1.3,1.62]){ box(W-.1,.012,.26,M.showerGlass,0,yy,-D/2+.15,g); const l=box(W-.12,.006,.01,M.led,0,yy-.012,-D/2+.27,g); l.userData.noShadow=true; }
  // upper cabinet
  box(W,.66,.36,M.walnut,0,2.18,-D/2+.18,g); for(const xx of [-.475,.475]){ box(.93,.62,.01,M.walnut,xx,2.18,-D/2+.365,g); box(.012,.22,.02,M.brass,xx+(xx<0?.42:-.42),2.0,-D/2+.38,g); }
  box(W+.04,.03,.4,M.walnut,0,2.525,-D/2+.18,g);
  // capsule coffee machine
  const cm=grp(.45,.913,-.02,0,g); rbox(.2,.3,.34,.03,M.black,0,.15,0,cm); box(.16,.02,.14,M.chrome,0,.03,.12,cm); box(.1,.06,.06,M.chrome,0,.22,.15,cm);
  sph(.008,M.led,.06,.27,.171,cm,6,4).userData.noShadow=true;
  for(let i=0;i<4;i++){ const cp=grp(.72+(i%2)*.12,.913,-.1+(i>>1)*.15,0,g); lathe([[0,0],[.06,0],[.065,.008],[0,.008]],M.ceramic,0,0,0,cp,20); lathe([[0,.008],[.032,.008],[.04,.07],[.037,.072],[.028,.015],[0,.015]],M.ceramic,0,0,0,cp,20); }
  // kettle, tea box, capsules tray, ice bucket
  lathe([[0,0],[.07,0],[.08,.06],[.075,.17],[.04,.21],[0,.21]],M.chrome,-.05,.913,-.08,g); box(.02,.1,.02,M.black,.03,1.03,-.08,g);
  box(.26,.07,.16,M.walnut,-.42,.95,-.1,g); box(.25,.005,.15,M.brass,-.42,.987,-.1,g);
  box(.22,.03,.12,M.ebony,.2,.93,.12,g); for(let i=0;i<8;i++) sph(.012,new THREE.MeshStandardMaterial({color:[0xb08d57,0x2c2c2c,0x6b1e2e,0x2f5a7a][i%4],metalness:.8,roughness:.3}),.12+(i%4)*.05,.95,.1+(i>>2)*.04,g,8,6);
  lathe([[0,0],[.07,0],[.09,.18],[.095,.19],[0,.19]],M.brass,-.75,.913,.05,g);
  // glassware on shelves
  const glassM=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.02,transparent:true,opacity:.3});
  for(let i=0;i<8;i++){ lathe([[0,0],[.03,0],[.032,.004],[.004,.008],[.004,.08],[.026,.1],[.034,.16],[.032,.18],[0,.1]],glassM,-.8+i*.2,1.31,-D/2+.15,g,16); }
  for(let i=0;i<10;i++){ lathe([[0,0],[.035,0],[.037,.1],[.033,.1],[.031,.006],[0,.006]],glassM,-.82+i*.18,1.63,-D/2+.15,g,16); }
  blob(-5.2,2.67,2.2,.8,.6);
})();

frameArt('x',Z1,-7.6,1.65,.9,.7,'garden',-1);

await tick(61,'load.furn');
/* ================= BEDROOM ================= */
rug(7.2,0.1,4.4,3.8,TEX.rugBed);
(function(){ // taupe panelled headboard wall
  const x=X1-.02, zz=[-1.65,1.65], cols=4, rows=2;
  const pm=fab(0x8d7a64,.72); pm.map=TEX.grass; pm.normalMap=TEX.grassN;
  const pw=(zz[1]-zz[0])/cols, ph=2.72/rows;
  for(let i=0;i<cols;i++) for(let j=0;j<rows;j++){
    const cz=zz[0]+pw*(i+.5), cy=ph*(j+.5);
    const p=rbox(.05,ph-.012,pw-.012,.008,pm,x-.05,cy,cz,walls);
    panel('z',x-.05-T/2+.016,cz,cy,pw-.22,ph-.22,-1,new THREE.MeshStandardMaterial({color:0x7a6854,roughness:.65}));
  }
  // bevelled mirror tiles
  for(const s of [-1,1]){ for(let k=0;k<14;k++){ const t=rbox(.03,.19,.46,.006,M.mirror,x-.045,.1+k*.195,s*1.95,walls); }
    for(const o of [-.245,.245]) box(.05,2.72,.012,M.brass,x-.05,1.36,s*1.95+o,walls); }
  const sp=new THREE.SpotLight(0xffe2bb,0,5,Math.PI/3.2,.8,2); sp.position.set(9.0,TRAY,0); sp.target.position.set(X1,1.2,0); root.add(sp,sp.target); lampLights.push(sp);
})();
// bed with draped duvet
(function(){ const g=grp(8.55,0,0,Math.PI/2);
  rbox(2.0,.28,2.15,.05,M.leatherC,0,.2,0,g);
  for(const sx of [-.9,.9]) for(const sz of [-.95,.95]) cyl(.02,.02,.06,M.brass,sx,.03,sz,g);
  puffy(1.92,.26,2.02,.08,M.linen,0,.47,-.02,g,.01);
  // duvet: plane bent over sides and foot
  const BW=1.96, BL=1.72, top=.62, R=.07, drop=.36;
  const extW=BW/2 + R*Math.PI/2 + drop, extL=BL + R*Math.PI/2 + drop;
  const geo=new THREE.PlaneGeometry(extW*2, extL, 60, 50); const p=geo.attributes.position;
  const fold=(t,half)=>{ const a=Math.abs(t); if(a<=half-R) return [t,0]; const s=a-(half-R); if(s<R*Math.PI/2){ const an=s/R; return [Math.sign(t)*(half-R+R*Math.sin(an)), -(R-R*Math.cos(an))]; } return [Math.sign(t)*half, -R-(s-R*Math.PI/2)]; };
  for(let i=0;i<p.count;i++){ const u=p.getX(i), v=p.getY(i)+extL/2; // v: 0 at head, extL at foot end
    const [x,dy1]=fold(u,BW/2); let z, dy2=0;
    const f=v-(BL-R); if(f<=0) z=v; else { const s=f; if(s<R*Math.PI/2){ const an=s/R; z=BL-R+R*Math.sin(an); dy2=-(R-R*Math.cos(an)); } else { z=BL; dy2=-R-(s-R*Math.PI/2); } }
    const y=top+Math.min(dy1,dy2)+ (dy1<0&&dy2<0? Math.max(dy1,dy2)*.15:0);
    const wr = .008*Math.sin(u*9+v*3)+.006*Math.sin(v*14) + (y<top-.05 ? .012*Math.sin(u*30+v*20):0);
    p.setXYZ(i, x*(1+ (y<top-.1? .015:0)), y+wr, -(z-BL/2) - .43 ); }
  geo.computeVertexNormals();
  const duvet=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0xfbfaf7,roughness:.95,map:TEX.fabric,normalMap:TEX.fabricN,normalScale:new THREE.Vector2(.3,.3),side:THREE.DoubleSide})); g.add(duvet);
  // folded top sheet band
  puffy(1.98,.05,.32,.02,M.linen,0,.64,.32,g,.01);
  // headboard: wing shape, upholstered
  const hs=new THREE.Shape(); const hw=1.12, hh=1.3;
  hs.moveTo(-hw,0); hs.lineTo(-hw,hh-.25); hs.quadraticCurveTo(-hw-.06,hh,-hw+.25,hh); hs.lineTo(hw-.25,hh); hs.quadraticCurveTo(hw+.06,hh,hw,hh-.25); hs.lineTo(hw,0); hs.closePath();
  const hg=new THREE.ExtrudeGeometry(hs,{depth:.12,bevelEnabled:true,bevelSize:.05,bevelThickness:.05,bevelSegments:6,curveSegments:24});
  const hb=new THREE.Mesh(hg,M.leatherC); hb.position.set(0,.2,1.15); hb.rotation.x=.06; g.add(hb);
  for(const s of [-1,1]){ const wg=puffy(.2,1.1,.42,.08,M.leatherC,s*1.08,.72,.98,g,.01); wg.rotation.y=s*.25; }
  for(const s of [-.5,.5]){ pillow(.78,.52,M.linen,g,s,.9,.98,-.32,0,0,.2); pillow(.7,.48,M.linen,g,s*.95,.86,.8,-.28,0,0,.19); }
  pillow(.52,.42,M.navy,g,-.46,.84,.6,-.22,.1); pillow(.52,.42,M.navy,g,.34,.82,.58,-.2,-.12);
  pillow(.45,.32,fab(0x9c9aa0,.7),g,-.06,.8,.5,-.28,.05,0,.15);
  // throw
  const th=puffy(1.98,.03,.45,.012,M.navy,0,.655,-.55,g,.004);
  blob(8.55,0,2.6,2.6,.9);
})();
for(const s of [-1,1]){
  const g=grp(9.55,0,s*1.45);
  box(.5,.56,.5,M.ebony,0,.3,0,g); rbox(.5,.025,.5,.004,M.ivory,0,.59,0,g);
  for(const k of [0,1]){ rbox(.01,.22,.44,.003,M.ivory,-.252,.16+k*.25,0,g); box(.012,.012,.14,M.brass,-.262,.16+k*.25,0,g); }
  { const tl=tableLamp(9.55,.6,s*1.45,'brass',0xf7f2ea,1.0); tl.userData.light.userData.bed=true; tl.userData.shade.userData.bed=true; }
  if(s>0) bookStack(9.45,.6,s*1.45+.12,2,.4); else lathe([[0,0],[.04,0],[.045,.08],[.02,.12],[0,.12]],M.amber,9.42,.6,s*1.45+.12);
}
(function(){ const g=grp(7.15,0,0,Math.PI/2);
  for(const s of [-.42,.42]){ puffy(.8,.2,.48,.06,M.leatherB,s,.43,0,g,.015);
    const pts=[]; for(let i=0;i<4;i++) for(let j=0;j<2;j++) pts.push(new THREE.Vector3(s-.3+i*.2,.545,-.12+j*.24)); const im=nails(pts,g); im.material=M.leatherB; }
  for(const sx of [-.8,.8]) for(const sz of [-.2,.2]){ cyl(.015,.012,.32,M.ebony,sx,.16,sz,g); cyl(.012,.011,.03,M.brass,sx,.015,sz,g); }
  blob(7.15,0,.8,1.9,.6);
})();
sofa(1.7,.8,M.ivory,6.65,-2.35,Math.PI,[M.ivory,M.sand,M.ivory]);
(function(){ const g=grp(6.65,0,-1.45); cyl(.42,.42,.015,M.glass,0,.45,0,g); const ring=new THREE.Mesh(new THREE.TorusGeometry(.42,.008,8,60),M.ebony); ring.rotation.x=Math.PI/2; ring.position.y=.44; g.add(ring);
  for(const a of [0,2.1,4.2]){ const l=cyl(.01,.01,.43,M.ebony,Math.cos(a)*.3,.22,Math.sin(a)*.3,g); }
  lathe([[0,0],[.25,0],[.2,.06],[0,.06]],M.marble,0,0,0,g);
  flowers(6.65,.46,-1.45,M.petal,.9,'ceramic'); bookStack(6.85,.46,-1.35,2,-.3); })();
armchair(M.mustard,8.45,-2.1,Math.PI+.55,M.brass,M.ivory);
floorLamp(5.25,-2.55,1.55,0xfbf7f0);
floorLamp(8.95,-2.6,1.35,0xfbf7f0);
// ---------- work desk (bedroom west wall) ----------
(function(){ const g=grp(4.36,0,-.25,Math.PI/2);  // local +z faces room (+x)
  rbox(1.7,.04,.62,.006,M.walnut,0,.75,0,g);
  box(1.2,.004,.42,M.leatherB,.15,.772,.02,g);
  // pedestal with drawers (left) + brass legs (right)
  box(.42,.7,.56,M.walnut,-.6,.38,0,g); for(const k of [0,1,2]){ box(.38,.2,.01,M.walnut,-.6,.17+k*.22,.282,g); box(.12,.012,.02,M.brass,-.6,.24+k*.22,.29,g); }
  for(const sz of [-.25,.25]) box(.025,.73,.025,M.brass,.82,.37,sz,g); box(.025,.025,.52,M.brass,.82,.03,0,g); box(.025,.025,.52,M.brass,.82,.72,0,g);
  // TV above
  box(1.5,.86,.04,M.black,0,1.65,-.18,g); const sc=new THREE.Mesh(new THREE.PlaneGeometry(1.46,.82),M.screen); sc.position.set(0,1.65,-.159); g.add(sc);
  // brass power / charging panel set into desk
  box(.22,.004,.07,M.brass,-.2,.773,-.24,g); for(const xx of [-.27,-.2,-.13]) box(.03,.002,.02,M.black,xx,.776,-.24,g);
  cyl(.045,.045,.006,M.black,.55,.775,-.1,g);  // wireless charging pad
  // swing-arm desk lamp
  const dl=grp(.62,.77,-.2,0,g); cyl(.07,.08,.02,M.brass,0,.01,0,dl); const a1=cyl(.008,.008,.42,M.brass,0,.22,0,dl); const a2=cyl(.008,.008,.32,M.brass,-.12,.43,.0,dl); a2.rotation.z=1.0;
  const hd=new THREE.Mesh(new THREE.ConeGeometry(.07,.12,24,1,true),shadeMat(0xd0a862,0xffd09a,.0,1.2)); hd.material.metalness=.9; hd.material.roughness=.3; hd.position.set(-.26,.5,0); hd.rotation.z=.6; dl.add(hd);
  { const L=new THREE.PointLight(0xffc98a,0,2.5,2); L.position.set(4.36,.95,-.25+.26); L.userData={n:1.6}; root.add(L); lampLights.push(L); }
  // phone
  const ph=grp(-.25,.77,.05,.25,g); rbox(.2,.05,.16,.02,M.black,0,.025,0,ph); rbox(.2,.035,.05,.015,M.black,0,.065,-.03,ph); box(.08,.002,.06,M.panelGlass,0,.051,.05,ph);
  // notepad, pen, leather compendium
  box(.15,.008,.21,M.ceramic,.15,.776,.1,g); const pen=cyl(.004,.004,.14,M.brass,.25,.782,.1,g); pen.rotation.x=Math.PI/2;
  rbox(.24,.02,.32,.004,M.leatherB,-.05,.78,-.08,g).rotation.y=-.12;
  blob(4.6,-.25,.8,1.9,.6);
})();
orchid(4.26,.77,-.73,.8);
// desk chair (facing the wall)
(function(){ const g=grp(4.95,0,-.2,Math.PI/2);
  for(let i=0;i<5;i++){ const a=i/5*Math.PI*2; const leg=box(.3,.025,.04,M.chrome,Math.cos(a)*.15,.06,Math.sin(a)*.15,g); leg.rotation.y=-a; sph(.025,M.black,Math.cos(a)*.3,.025,Math.sin(a)*.3,g,10,8); }
  cyl(.03,.03,.32,M.chrome,0,.24,0,g); cyl(.02,.02,.1,M.black,0,.42,0,g);
  puffy(.5,.09,.48,.04,M.leatherC,0,.48,0,g,.02);
  const bk=puffy(.48,.5,.07,.035,M.leatherC,0,.82,.24,g,.01); bk.rotation.x=-.12;
  for(const s of [-1,1]){ const ar=cyl(.012,.012,.36,M.chrome,s*.26,.62,.02,g); ar.rotation.x=Math.PI/2; cyl(.01,.01,.12,M.chrome,s*.26,.56,-.12,g); cyl(.01,.01,.14,M.chrome,s*.26,.56,.18,g); }
  blob(4.95,-.2,.75,.75,.5);
})();
frameArt('x',Z1,8.95,1.6,1.0,.72,'ink',-1);
// reading nook (built-in shelving, pharmacy lamp, nailhead armchair)
(function(){ const x0=4.15, x1=5.95, zw=Z1-.02, d=.34;
  const g=grp(0,0,0);
  box(x1-x0,2.5,.02,M.trim,(x0+x1)/2,1.25,zw-.01,g);
  for(const xx of [x0,x1,(x0+x1)/2+.4]) box(.04,2.5,d,M.trim,xx,1.25,zw-d/2,g);
  box(x1-x0+.04,.06,d+.02,M.trim,(x0+x1)/2,2.53,zw-d/2,g);
  box(x1-x0,.44,d,M.trim,(x0+x1)/2,.22,zw-d/2,g);
  const xm=(x0+x1)/2+.4;
  for(const y of [.9,1.42,1.94]){ box(xm-x0-.04,.03,d,M.trim,(x0+xm)/2,y,zw-d/2,g); box(x1-xm-.04,.03,d,M.trim,(xm+x1)/2,y,zw-d/2,g);
    const led=box(x1-x0-.1,.006,.01,M.led,(x0+x1)/2,y-.02,zw-d+.03,g); led.userData.noShadow=true; }
  books((x0+xm)/2-.15,.44,zw-.16,.7,0,g); books((xm+x1)/2,.44,zw-.16,.4,0,g,.16,.24);
  books((x0+xm)/2,.915,zw-.16,.6,0,g,.2,.29);
  orchid((xm+x1)/2,.915,zw-.17,.7);
  books((x0+xm)/2+.2,1.435,zw-.16,.35,0,g); lathe([[0,0],[.07,0],[.08,.12],[.03,.2],[0,.2]],M.ceramic,(x0+xm)/2-.3,1.435,zw-.17,g);
  sph(.05,M.brass,(xm+x1)/2-.08,1.48,zw-.17,g); bookStack((xm+x1)/2+.05,1.435,zw-.17,3,.1,g);
  books((x0+xm)/2,1.955,zw-.16,.55,0,g,.18,.26); { const fr=grp((xm+x1)/2,1.955,zw-.2,0,g); box(.16,.2,.02,M.brass,0,.1,0,fr).rotation.x=-.12; }
  const s1=new THREE.SpotLight(0xffe1b5,0,2.5,Math.PI/4,.7,2); s1.position.set((x0+x1)/2,2.45,zw-.15); s1.target.position.set((x0+x1)/2,.5,zw-.15); s1.userData={d:.3,n:2.2}; root.add(s1,s1.target); lampLights.push(s1);
  armchair(M.ivory,5.35,2.0,Math.PI+.4,M.ebony,M.ivory,true);
  pharmacyLamp(4.55,2.45,-.9);
  const st=grp(4.55,0,1.7); cyl(.2,.2,.02,M.walnut,0,.55,0,st); lathe([[.12,0],[.12,.015],[.03,.03],[.025,.53],[.08,.545],[0,.545]],M.walnut,0,0,0,st); flowers(4.55,.56,1.7,M.petalR,.7,'ceramic');
  blob(4.55,1.7,.5,.5,.6);
})();

await tick(68,'load.furn');
/* ================= FOYER & WALK-IN CLOSET ================= */
(function(){
  const x0=FX0+T/2-.08+.08, d=.6, z0=3.3, z1=5.55, h=2.55, cx=x0+d/2, zm=(z0+z1)/2;
  const g=grp(0,0,0);
  box(.02,h,z1-z0,M.walnut,x0+.01,h/2,zm,g);
  box(d,.04,z1-z0+.03,M.trim,cx,h,zm,g); box(d,.1,z1-z0,M.trim,cx,.05,zm,g);
  for(const z of [z0,zm,z1]) box(d,h,.03,M.trim,cx,h/2,z,g);
  // open bay: shelf, rod, robes, hangers, safe, slippers, LED
  const za=z0, zb=zm;
  box(d-.03,.025,zb-za-.03,M.trim,cx,2.0,(za+zb)/2,g);
  box(d-.03,.025,zb-za-.03,M.trim,cx,.62,(za+zb)/2,g);
  const rod=cyl(.012,.012,zb-za-.05,M.brass,cx+.02,1.88,(za+zb)/2,g); rod.rotation.x=Math.PI/2;
  const led=box(.01,.006,zb-za-.06,M.led,x0+d-.06,1.985,(za+zb)/2,g); led.userData.noShadow=true;
  const hangerG=new THREE.TorusGeometry(.2,.008,6,24,Math.PI);
  for(let i=0;i<5;i++){ const zz=za+.12+i*.2; const hg=grp(cx+.02,1.86,zz,0,g); const hb=new THREE.Mesh(hangerG,M.walnut); hb.rotation.z=Math.PI; hb.scale.y=.35; hg.add(hb); const hk=new THREE.Mesh(new THREE.TorusGeometry(.02,.003,4,12,Math.PI*1.4),M.chrome); hk.position.y=.03; hg.add(hk);
    if(i===1||i===2){ const rb=puffy(.5,.95,.09,.04,M.robe,0,-.5,0,hg,.01); const belt=box(.52,.04,.1,M.robe,0,-.55,.0,hg); } }
  // safe
  const sf=grp(cx,.645,(za+zb)/2+.18,Math.PI/2,g); rbox(.42,.3,.36,.01,new THREE.MeshStandardMaterial({color:0x3a3b3d,roughness:.4,metalness:.5}),0,.15,0,sf);
  box(.14,.08,.005,new THREE.MeshBasicMaterial({color:0x7fd1b0}),.08,.2,.181,sf); for(let i=0;i<9;i++) box(.022,.016,.006,M.chrome,-.11+(i%3)*.03,.18-(i/3|0)*.025,.182,sf);
  // slippers & laundry bag on the floor
  for(const s of [-1,1]) puffy(.1,.04,.27,.04,M.towel,cx+.1,.12,(za+zb)/2-.25+s*.06,g,.01);
  // closed bay doors with mouldings + pulls
  for(const zz of [zm+(z1-zm)*.25, zm+(z1-zm)*.75]){ box(.02,h-.14,(z1-zm)/2-.02,M.trim,x0+d+.01,h/2+.02,zz,g); panel('z',x0+d+.01-T/2-.011+.012,zz,1.45,(z1-zm)/2-.16,1.9,1,M.trim); }
  box(.02,.4,.02,M.brass,x0+d+.04,1.1,zm+.04,g); box(.02,.4,.02,M.brass,x0+d+.04,1.1,z1-.04-(z1-zm)/2+.08,g);
  // open door with full-length dressing mirror inside
  const od=grp(x0+d+.01,0,z0+.0,0,g); od.rotation.y=-1.75; box(.02,h-.14,(zb-za)-.02,M.trim,0,h/2+.02,(zb-za)/2,od); box(.006,1.6,.4,M.mirror,.013,1.2,(zb-za)/2,od);
  // luggage bench
  const lb=grp(-3.4,0,5.68,0,g); for(const sx of [-.33,.33]) for(const sz of [-.18,.18]) box(.03,.45,.03,M.walnut,sx,.225,sz,lb);
  box(.72,.03,.42,M.walnut,0,.45,0,lb); for(let i=0;i<4;i++) box(.72,.006,.05,M.leatherB,0,.468,-.15+i*.1,lb); for(const sz of [-.18,.18]) box(.66,.02,.025,M.walnut,0,.08,sz,lb);
  blob(-3.4,5.68,.9,.6,.5);
  const cl=new THREE.PointLight(0xfff0dc,0,2.2,2); cl.position.set(cx+.1,1.9,(za+zb)/2); cl.userData={n:1.2,always:.4}; root.add(cl); lampLights.push(cl);
})();
// console + mirror + sconces on foyer east wall
(function(){ const wx=FX1-.02;
  const g=grp(wx-.21,0,4.5,-Math.PI/2);
  rbox(1.3,.035,.38,.004,M.marbleG,0,.84,0,g);
  for(const sx of [-.6,.6]) for(const sz of [-.16,.16]) box(.02,.82,.02,M.brass,sx,.41,sz,g);
  box(1.22,.02,.02,M.brass,0,.12,.16,g); box(1.22,.02,.02,M.brass,0,.12,-.16,g); box(1.2,.012,.32,M.walnut,0,.13,0,g);
  flowers(wx-.24,.86,4.15,M.petal,1.1,'ceramic');
  lathe([[0,0],[.06,0],[.13,.03],[.14,.04],[0,.02]],M.brass,wx-.22,.86,4.75,root);
  lathe([[0,0],[.03,0],[.035,.09],[.012,.11],[.012,.13],[0,.13]],new THREE.MeshStandardMaterial({color:0x2b2a28,roughness:.1}),wx-.25,.86,4.95,root);
  for(let i=0;i<6;i++){ const r=cyl(.002,.002,.28,M.walnut,wx-.25+(Math.random()-.5)*.03,1.1,4.95+(Math.random()-.5)*.03); r.rotation.z=(Math.random()-.5)*.4; }
  bookStack(wx-.25,.86,4.55,2,.3);
  // mirror
  const mg=grp(wx-.01,1.68,4.5,-Math.PI/2); rbox(1.0,1.15,.04,.02,M.brass,0,0,0,mg); box(.92,1.07,.01,M.mirror,0,0,.02,mg);
  for(const z of [3.7,5.3]){ const sc=grp(wx-.06,1.7,z,-Math.PI/2); box(.08,.14,.02,M.brass,0,0,0,sc); const gl=cyl(.04,.04,.22,shadeMat(0xfaf6ee,0xffd8a8,.05,1.6),0,.02,.06,sc); const L=new THREE.PointLight(0xffd2a0,0,2.5,2); L.position.set(wx-.15,1.72,z); root.add(L); lampLights.push(L); }
  blob(wx-.22,4.5,.6,1.5,.5);
})();
// lantern pendant
(function(){ const g=grp(-2.5,0,4.5);
  cyl(.006,.006,.55,M.brass,0,H-.275,0,g);
  const fr=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,.42,6,1,true),M.showerGlass); fr.position.y=2.2; g.add(fr);
  for(let i=0;i<6;i++){ const a=i/6*Math.PI*2+Math.PI/6; cyl(.006,.006,.42,M.brass,Math.cos(a)*.16,2.2,Math.sin(a)*.16,g,6); }
  cyl(.17,.17,.02,M.brass,0,2.42,0,g,6); cyl(.17,.12,.03,M.brass,0,1.985,0,g,6);
  sph(.04,M.led,0,2.2,0,g,10,8).userData.noShadow=true;
  const L=new THREE.PointLight(0xffd9a6,0,5,2); L.position.set(-2.5,2.15,4.5); root.add(L); lampLights.push(L);
})();
rug(-2.15,5.3,1.5,.9,TEX.rugDining,TEX.rugLivingN);
frameArt('x',Z1,-1.55,1.62,.75,.95,'gold',1);
// key-card holder + privacy (DND / MUR) panel by the door
(function(){ const z=FZ1-.002;
  const kc=grp(-1.3,1.15,z,Math.PI); box(.09,.12,.015,M.trim,0,0,0,kc); box(.06,.008,.01,M.black,0,.03,-.01,kc); box(.054,.085,.003,M.brass,0,.055,-.008,kc);
  const dn=grp(-1.3,1.38,z,Math.PI); box(.09,.09,.012,M.trim,0,0,0,dn); sph(.01,new THREE.MeshBasicMaterial({color:0xff5a4a}),-.02,0,-.01,dn,8,6); sph(.01,new THREE.MeshBasicMaterial({color:0x6fd39b}),.02,0,-.01,dn,8,6);
  const th=grp(FX1-T/2-.01+.0,1.4,3.5,-Math.PI/2); box(.09,.09,.012,M.panelGlass,0,0,0,th); box(.04,.015,.002,new THREE.MeshBasicMaterial({color:0x9bd3ff}),0,.01,.007,th);
})();

await tick(73,'load.furn');
/* ================= BATHROOM ================= */
// vanity (west wall)
(function(){ const wx=BX0+T/2;
  box(.55,.42,2.7,M.walnut,wx+.275,.62,5.1); const ul=box(.01,.006,2.6,M.led,wx+.54,.405,5.1); ul.userData.noShadow=true;
  for(const z of [4.42,5.78]) box(.01,.012,.5,M.brass,wx+.552,.78,z);
  rbox(.6,.04,2.76,.006,M.marble,wx+.3,.86,5.1);
  box(.5,.02,2.6,M.walnut,wx+.27,.18,5.1); for(let i=0;i<6;i++){ const tw=puffy(.3,.1,.16,.04,M.towel,wx+.28,.25,4.0+i*.2,root,.01); tw.rotation.y=Math.PI/2; }
  for(const z of [4.42,5.78]){
    lathe([[0,0],[.12,0],[.19,.06],[.2,.13],[.19,.135],[.18,.07],[.1,.025],[0,.025]],M.ceramic,wx+.3,.88,z,root,40);
    const sp=grp(wx+.01,1.06,z,0); cyl(.025,.025,.03,M.brass,0,0,0,sp).rotation.z=Math.PI/2; const sp2=cyl(.012,.012,.2,M.brass,.1,0,0,sp); sp2.rotation.z=Math.PI/2; cyl(.012,.012,.03,M.brass,.2,-.015,0,sp);
    for(const s of [-1,1]){ const hd=grp(wx+.02,1.06,z+s*.14,0); cyl(.02,.02,.04,M.brass,0,0,0,hd).rotation.z=Math.PI/2; cyl(.008,.008,.06,M.brass,.04,.03,0,hd); }
    // backlit mirror
    const mg=grp(wx+.03,1.62,z,Math.PI/2); rbox(.7,.95,.02,.16,M.mirrorBath,0,0,.01,mg,6); const halo=rbox(.74,.99,.006,.17,M.led,0,0,-.006,mg,6); halo.userData.noShadow=true;
  }
  // sconces between mirrors
  { const sc=grp(wx+.05,1.65,5.1,Math.PI/2); box(.06,.3,.02,M.brass,0,0,0,sc); cyl(.035,.035,.26,shadeMat(0xfdfaf3,0xffe2b8,.15,1.5),0,0,.06,sc);
    const L=new THREE.PointLight(0xffe2c0,0,3,2); L.position.set(wx+.25,1.65,5.1); L.userData={n:2.2,bath:1}; root.add(L); lampLights.push(L); }
  // amenity tray
  box(.28,.012,.2,M.brass,wx+.38,.886,5.1);
  const am=new THREE.MeshStandardMaterial({color:0x2c2724,roughness:.15});
  for(let i=0;i<3;i++) lathe([[0,0],[.025,0],[.025,.12],[.012,.135],[.006,.16],[0,.16]],am,wx+.33+i*.06,.892,5.04+i*.04,root,16);
  lathe([[0,0],[.03,0],[.03,.09],[0,.09]],M.ceramic,wx+.42,.892,5.17,root,16);
  for(let i=0;i<2;i++){ const tb=cyl(.004,.004,.16,M.ceramic,wx+.42+(i-.5)*.01,.98,5.17); tb.rotation.z=(i-.5)*.3; }
  for(const z of [3.9,6.3]){ const st=grp(wx+.36,.88,z); for(let k=0;k<3;k++) puffy(.22,.035,.16,.015,M.towel,0,.02+k*.036,0,st,.004); }
  orchid(wx+.38,.88,6.5,.7);
  blob(wx+.3,5.1,.9,3.0,.5);
})();
// freestanding tub at the window
(function(){ const g=grp(7.1,0,6.4); const s=2.05;
  const tub=lathe([[0,0],[.33,0],[.36,.04],[.41,.42],[.43,.56],[.42,.585],[.395,.585],[.39,.55],[.37,.2],[.33,.13],[0,.13]],new THREE.MeshStandardMaterial({color:0xf6f4f0,roughness:.08}),0,0,0,g,64); tub.scale.x=s;
  const wtr=new THREE.Mesh(new THREE.CircleGeometry(.385,64),M.water); wtr.rotation.x=-Math.PI/2; wtr.position.y=.45; wtr.scale.x=s*.985; g.add(wtr); wtr.userData.noShadow=true; wtr.name='water';
  // bath caddy with candle, book, glass
  const cd=grp(0,.59,0,0,g); box(.08,.02,.86,M.walnut,0,0,0,cd); for(let i=0;i<5;i++) box(.18,.02,.03,M.walnut,0,.0,-.32+i*.16,cd);
  cyl(.035,.035,.08,M.ceramic,0,.05,-.15,cd); const fl=new THREE.Mesh(new THREE.ConeGeometry(.008,.03,8),(()=>{ const m=new THREE.MeshStandardMaterial({color:0xffc070,emissive:0xff9a30,emissiveIntensity:.0}); m.userData={d:0,n:3,bed:false}; glowMats.push(m); return m; })()); fl.position.set(0,.105,-.15); cd.add(fl);
  bookStack(0,.01,.12,1,.4,cd);
  lathe([[0,0],[.03,0],[.004,.008],[.004,.07],[.03,.09],[.035,.14],[0,.09]],new THREE.MeshStandardMaterial({color:0xffffff,roughness:.02,transparent:true,opacity:.3}),.0,.01,.3,cd,16);
  // floor-standing filler
  const f=grp(1.0,0,0,0,g); cyl(.05,.05,.02,M.brass,0,.01,0,f); cyl(.022,.022,.95,M.brass,0,.48,0,f);
  const c=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.95,0),new THREE.Vector3(0,1.05,0),new THREE.Vector3(-.12,1.08,0),new THREE.Vector3(-.2,1.0,0)]); f.add(new THREE.Mesh(new THREE.TubeGeometry(c,16,.018,10),M.brass));
  for(const s2 of [-1,1]){ const hl=cyl(.01,.01,.08,M.brass,0,.8,s2*.04,f); hl.rotation.x=Math.PI/2; }
  cyl(.018,.018,.18,M.brass,.03,.6,0,f);
  blob(7.1,6.4,2.1,1.1,.9);
  rug(7.1,5.6,.95,.55,TEX.fabric);
})();
// towel stool + bath salts, plant
(function(){ const g=grp(5.6,0,6.6); lathe([[.15,0],[.16,.02],[.11,.06],[.1,.4],[.17,.43],[.17,.45],[0,.45]],M.walnut,0,0,0,g); for(let k=0;k<3;k++) puffy(.26,.04,.2,.016,M.towel,0,.47+k*.042,0,g,.005);
  lathe([[0,0],[.045,0],[.045,.1],[.03,.11],[.03,.13],[0,.13]],new THREE.MeshStandardMaterial({color:0xe9dfd9,roughness:.15,transparent:true,opacity:.8}),.0,.6,0,g,16);
  const p=grp(4.55,0,6.85); lathe([[0,0],[.16,0],[.2,.4],[.19,.42],[0,.42]],M.vase,0,0,0,p);
  for(let i=0;i<9;i++){ const lf=new THREE.Mesh(leafGeo,M.leaf); lf.scale.set(2.2,3.6,1); lf.position.y=.4; lf.rotation.set(-.25-Math.random()*.45,i*.7,(Math.random()-.5)*.4); p.add(lf); }
  blob(4.55,6.85,.6,.6,.5); })();
windowAt(6.0,8.2,BZ1,.9,2.5,-1,false);
// rain shower (NE corner)
(function(){ const xs=8.6, zs=4.5, x1=X1-.01, zw=Z1+T/2+.02;
  floorPlane(xs,x1,zw,zs,M.showerFloor,.004);
  box(1.0,.012,.04,M.chrome,(xs+x1)/2,.012,zs-.12);
  const gp=(w,h,x,z,ry)=>{ const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),M.showerGlass); m.position.set(x,h/2+.02,z); m.rotation.y=ry; m.userData.noShadow=true; root.add(m); box(ry? .02:w, .02, ry? w:.02, M.brassD, x, h+.02, z); return m; };
  gp(zs-zw,2.1,xs,(zw+zs)/2,Math.PI/2); box(.02,2.1,.02,M.brassD,xs,1.07,zs);
  gp(.55,2.1,xs+.275,zs,0);
  const dg=grp(xs+.55,0,zs,-.65); const dp=new THREE.Mesh(new THREE.PlaneGeometry(.8,2.1),M.showerGlass); dp.position.set(.4,1.07,0); dp.userData.noShadow=true; dg.add(dp); box(.02,.3,.02,M.brass,.72,1.05,.03,dg);
  // rain head & controls
  cyl(.012,.012,.25,M.chrome,(xs+x1)/2,H-.125,3.8); box(.32,.012,.32,M.chrome,(xs+x1)/2,H-.26,3.8);
  const cg=grp(x1,0,3.65,-Math.PI/2); cyl(.04,.04,.015,M.brass,0,1.1,.008,cg).rotation.x=Math.PI/2; box(.04,.012,.08,M.brass,0,1.1,.04,cg); box(.02,.7,.015,M.brass,.25,1.35,.01,cg); const hh=cyl(.018,.03,.22,M.brass,.25,1.45,.05,cg);
  // lit niche with bottles
  box(.01,.32,.6,M.showerFloor,x1-.08,1.3,4.0); const nl=box(.008,.006,.56,M.led,x1-.06,1.455,4.0); nl.userData.noShadow=true;
  for(let i=0;i<3;i++) lathe([[0,0],[.025,0],[.025,.14],[.012,.16],[0,.16]],new THREE.MeshStandardMaterial({color:[0x2c2724,0xe9e3da,0x2c2724][i],roughness:.2}),x1-.05,1.15,3.86+i*.12,root,16);
  // marble bench
  rbox(1.1,.06,.42,.01,M.bath,(xs+x1)/2,.46,zw+.21); box(1.1,.44,.4,M.bath,(xs+x1)/2,.22,zw+.2);
})();
// towel warmer + robe
(function(){ const x1=X1-.04, z=5.05; for(const s of [-1,1]) cyl(.012,.012,1.1,M.brass,x1-.04,.85,z+s*.25);
  for(let i=0;i<6;i++){ const r=cyl(.008,.008,.5,M.brass,x1-.04,.38+i*.18,z); r.rotation.x=Math.PI/2; }
  const tw=puffy(.06,.7,.42,.02,M.towel,x1-.08,1.0,z,root,.005);
  const rh=grp(BX0+T/2+.03,1.78,6.95,Math.PI/2); box(.06,.02,.05,M.brass,0,0,.02,rh); puffy(.55,1.0,.09,.04,M.robe,0,-.52,.07,rh,.01);
})();
// separate WC enclosure
(function(){ const xs=8.6, zs=5.6, x1=X1, z1=BZ1;
  boxW(.08,H,z1-zs,M.bath,xs,H/2,(zs+z1)/2,root,2.4);
  boxW(.15,H,.08,M.bath,xs+.075,H/2,zs,root,2.4); boxW(x1-9.55,H,.08,M.bath,(9.55+x1)/2,H/2,zs,root,2.4); boxW(.8,H-2.2,.08,M.bath,(8.75+9.55)/2,2.2+(H-2.2)/2,zs,root,2.4);
  const d=grp(8.75,0,zs,.9); box(.78,2.18,.03,M.frost,.39,1.1,0,d); box(.02,.3,.02,M.brass,.7,1.05,-.03,d);
  const wc=grp(x1-.02,0,6.45,-Math.PI/2);
  box(.42,.62,.02,M.ebony,0,.75,.01,wc);
  const bowl=lathe([[0,0],[.17,0],[.19,.06],[.19,.16],[.15,.17],[0,.17]],M.ceramic,0,.24,.3,wc,32); bowl.scale.z=1.35;
  const seat=new THREE.Mesh(new THREE.TorusGeometry(.15,.025,10,32),M.ceramic); seat.rotation.x=Math.PI/2; seat.scale.y=1.3; seat.position.set(0,.43,.31); wc.add(seat);
  rbox(.36,.02,.48,.1,M.ceramic,0,.455,.29,wc);
  box(.18,.12,.008,M.brass,0,1.05,.02,wc);
  const tp=grp(.32,.6,.04,0,wc); const ro=cyl(.06,.06,.11,M.towel,0,0,.05,tp); ro.rotation.z=Math.PI/2; box(.14,.012,.1,M.brass,0,.07,.04,tp);
})();
// bath ambient + window fill
{ const L=new THREE.PointLight(0xfff0e0,0,7,2); L.position.set(7,2.55,5.1); L.userData={n:3.2,bath:1}; root.add(L); lampLights.push(L); }

/* ================= TURNDOWN & WELCOME SETS ================= */
const turndown=new THREE.Group(); root.add(turndown);
const welcome=new THREE.Group(); root.add(welcome);
(function(){
  // folded corner of the duvet (window side, near pillows)
  const tri=(pts,mat,y)=>{ const s=new THREE.Shape(); s.moveTo(pts[0][0],pts[0][1]); s.lineTo(pts[1][0],pts[1][1]); s.lineTo(pts[2][0],pts[2][1]); s.closePath();
    const m=new THREE.Mesh(new THREE.ExtrudeGeometry(s,{depth:.02,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),mat); m.rotation.x=Math.PI/2; m.position.y=y; turndown.add(m); return m; };
  tri([[8.35,-1.0],[9.05,-1.0],[9.05,-.32]], new THREE.MeshStandardMaterial({color:0xeeece6,roughness:.95}), .655);
  const flap=tri([[8.35,-1.0],[9.05,-.32],[8.35,-.32]], new THREE.MeshStandardMaterial({color:0xfbfaf7,roughness:.95,map:TEX.fabric}), .70);
  // bedside mat + slippers
  const mat=new THREE.Mesh(new RoundedBoxGeometry(.8,.012,.45,2,.005),M.towel); mat.position.set(8.55,.007,-1.35); turndown.add(mat);
  for(const s of [-1,1]){ const sl=puffy(.1,.045,.27,.04,M.towel,8.55+s*.07,.035,-1.33,turndown,.01); sl.rotation.y=s*.06; }
  // chocolate on the pillow
  const ch=grp(9.05,.68,.0,.3,turndown); box(.1,.03,.1,new THREE.MeshStandardMaterial({color:0x3b2416,roughness:.4}),0,.015,0,ch); box(.102,.005,.025,M.brass,0,.031,0,ch); box(.025,.005,.102,M.brass,0,.031,0,ch);
  // water + glass + breakfast card on nightstand
  lathe([[0,0],[.035,0],[.035,.2],[.015,.23],[.015,.25],[0,.25]],new THREE.MeshStandardMaterial({color:0xcfe3ea,roughness:.02,transparent:true,opacity:.55}),9.7,.6,-1.3,turndown,16);
  lathe([[0,0],[.035,0],[.038,.1],[.034,.1],[.031,.006],[0,.006]],new THREE.MeshStandardMaterial({color:0xffffff,roughness:.02,transparent:true,opacity:.3}),9.62,.6,-1.22,turndown,16);
  const cd=grp(9.42,.6,-1.25,.3,turndown); const c1=box(.1,.07,.003,M.ceramic,0,.03,-.012,cd); c1.rotation.x=.3; const c2=box(.1,.07,.003,M.ceramic,0,.03,.012,cd); c2.rotation.x=-.3;
  // tub: rose petals on the water
  for(let i=0;i<26;i++){ const p=new THREE.Mesh(petalGeo,M.petalR); p.rotation.x=-Math.PI/2; p.rotation.z=Math.random()*6; p.position.set(7.1+(Math.random()-.5)*1.2,.452,6.4+(Math.random()-.5)*.5); turndown.add(p); }
})();
// welcome card text (from CONFIG)
function cardTex(lines){ const [c,g]=cvs(512,320); g.fillStyle='#f7f3ea'; g.fillRect(0,0,512,320); g.strokeStyle='#b8995c'; g.lineWidth=4; g.strokeRect(14,14,484,292);
  g.fillStyle='#3a3226'; g.textAlign='center'; g.font='44px times-new-roman, "Times New Roman", "Pretendard Variable", serif'; g.fillText(lines[0],256,140); g.font='26px "Pretendard Variable", "Apple SD Gothic Neo", sans-serif'; g.fillStyle='#7a6a50'; g.fillText(lines[1],256,200); g.font='22px anth, "Cormorant Garamond", "Pretendard Variable", serif'; g.fillText(lines[2]||'',256,245); return toTex(c); }
const welcomeCardMat = new THREE.MeshStandardMaterial({roughness:.6});
(function(){
  // fruit platter + card on the coffee table
  const p=grp(.55,.45,.48,0,welcome); lathe([[0,0],[.18,0],[.2,.025],[.19,.03],[0,.012]],M.ceramic,0,0,0,p,40);
  const fc=[0xd2482e,0xe8b23a,0x7aa33f,0xd2482e,0x8b2a5b,0xe8b23a,0xcf7a2a]; for(let i=0;i<9;i++){ const a=i*2.3, r=.09*Math.sqrt(i/9)+.02; sph(.034+Math.random()*.012,new THREE.MeshStandardMaterial({color:fc[i%7],roughness:.35}),Math.cos(a)*r,.05+(i%3)*.012,Math.sin(a)*r,p,14,10); }
  const cdg=grp(.25,.45,.62,-.3,welcome); const f1=new THREE.Mesh(new THREE.PlaneGeometry(.16,.1),welcomeCardMat); f1.position.set(0,.048,0); f1.rotation.x=-.25; cdg.add(f1); const bk=box(.16,.1,.002,M.ceramic,0,.048,-.025,cdg); bk.rotation.x=.25;
  // champagne bucket + flutes at the dining table
  const b=grp(-5.55,.775,.2,0,welcome); lathe([[0,0],[.08,0],[.11,.22],[.115,.23],[0,.22]],M.chrome,0,0,0,b,32);
  lathe([[0,0],[.038,0],[.038,.2],[.015,.27],[.015,.33],[0,.33]],new THREE.MeshStandardMaterial({color:0x1d3a26,roughness:.1}),0,.08,0,b,16); cyl(.017,.017,.04,M.brass,0,.42,0,b,10);
  for(const s of [-1,1]) lathe([[0,0],[.03,0],[.004,.008],[.004,.1],[.022,.12],[.026,.21],[0,.12]],new THREE.MeshStandardMaterial({color:0xfff6dc,roughness:.02,transparent:true,opacity:.4}),.0,0,s*.17,b,16);
})();
// night light under the bed
const nightStrip=box(1.9,.01,1.8,M.nightLed,8.55,.03,0); nightStrip.userData.noShadow=true;
const nightL=new THREE.PointLight(0xffb070,0,3,2); nightL.position.set(8.55,.08,-1.2); root.add(nightL);
// bedside touch panel (lighting scenes)
const touchPanel=(function(){ const g=grp(9.68,.6,1.22,-Math.PI/2); const b=rbox(.16,.1,.03,.008,M.panelGlass,0,.05,0,g); b.rotation.x=-.45;
  const [c,k]=cvs(256,160); k.fillStyle='#0b0b0c'; k.fillRect(0,0,256,160); k.strokeStyle='#e8c98e'; k.lineWidth=5; for(let i=0;i<5;i++){ k.beginPath(); k.arc(30+i*49,80,16,0,7); k.stroke(); } k.fillStyle='#e8c98e'; k.beginPath(); k.arc(30,80,7,0,7); k.fill();
  const sc=new THREE.Mesh(new THREE.PlaneGeometry(.14,.088),new THREE.MeshBasicMaterial({map:toTex(c)})); sc.position.set(0,.055,.017); sc.rotation.x=-.45; g.add(sc); return g; })();

/* ================= lights ================= */
await tick(78,'load.light');
const hemi = new THREE.HemisphereLight(0xf1f4ff, 0x6b5240, 1.0); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff3e2, 3.0);
sun.position.set(-3, 9, -14); sun.target.position.set(0.5,0,1.5);
sun.castShadow=true; sun.shadow.mapSize.set(TIER.low?2048:4096, TIER.low?2048:4096);
Object.assign(sun.shadow.camera,{left:-12,right:12,top:11,bottom:-11,near:1,far:50}); sun.shadow.bias=-.0003; sun.shadow.normalBias=.02; sun.shadow.radius=5;
scene.add(sun, sun.target);
renderer.shadowMap.autoUpdate=false; renderer.shadowMap.needsUpdate=true;
const winFill=[]; Object.values(WIN).forEach(([a,b])=>{ const r=new THREE.RectAreaLight(0xdfe8f5,0,b-a,1.9); r.position.set((a+b)/2,1.52,Z0+.06); r.lookAt((a+b)/2,1.2,5); root.add(r); winFill.push(r); });
const bathFill=new THREE.RectAreaLight(0xe6eef8,0,2.2,1.6); bathFill.position.set(7.1,1.7,BZ1-.08); bathFill.lookAt(7.1,1.3,0); root.add(bathFill);
const warmAmb = new THREE.AmbientLight(0xffd9a8, 0); scene.add(warmAmb);   // bounce from the coves (was 5 area lights)

function zoneOf(p){ if(p.y>3.2) return 'overview'; if(p.z>Z1+.02) return p.x<1.5? 'foyer':'bath'; if(p.x<-4) return 'dining'; if(p.x<4) return 'living'; return 'bedroom'; }

/* ---- light pooling: a fixed number of real lights is re-targeted to the lamps that matter
       for the current room, so every shader loops over 10 point / 4 spot / 8 area lights instead of 40 ---- */
const RECS={point:[],spot:[],rect:[]};
const ALL_ZONES=['foyer','living','dining','bedroom','bath'];
const ACTIVE={ foyer:['foyer','living'], living:['living','dining','foyer'], dining:['dining','living'], bedroom:['bedroom','bath'], bath:['bath','bedroom'], overview:ALL_ZONES };
function registerLight(l){ l.updateMatrixWorld(true); const p=l.getWorldPosition(new THREE.Vector3());
  const r={ l, type: l.isRectAreaLight?'rect' : l.isSpotLight?'spot':'point', pos:p, zone:zoneOf(new THREE.Vector3(p.x,1,p.z)), score:0 };
  if(r.type==='spot'){ r.tgt=l.target.getWorldPosition(new THREE.Vector3()); l.target.parent?.remove(l.target); }
  if(r.type==='rect'){ r.quat=l.getWorldQuaternion(new THREE.Quaternion()); }
  l.parent?.remove(l); RECS[r.type].push(r); }
[...lampLights, nightL, ...winFill, bathFill].forEach(registerLight);
const POOL={ point:[], spot:[], rect:[] }, NPOOL={ point:8, spot:3, rect:2 };
for(let i=0;i<NPOOL.point;i++){ const l=new THREE.PointLight(0xffffff,0,5,2); scene.add(l); POOL.point.push(l); }
for(let i=0;i<NPOOL.spot;i++){ const l=new THREE.SpotLight(0xffffff,0,5,.5,.5,2); scene.add(l,l.target); POOL.spot.push(l); }
for(let i=0;i<NPOOL.rect;i++){ const l=new THREE.RectAreaLight(0xffffff,0,1,1); scene.add(l); POOL.rect.push(l); }
let poolKey='';
function syncPool(force){
  const z=zoneOf(camera.position), act=ACTIVE[z]||ALL_ZONES;
  const key=z+'|'+Math.round(camera.position.x)+','+Math.round(camera.position.z);
  if(!force && key===poolKey) return; poolKey=key;
  for(const type of ['point','spot','rect']){
    const list=RECS[type];
    for(const r of list){ const I=r.l.intensity; if(I<=1e-4){ r.score=-1; continue; }
      const d2=r.pos.distanceToSquared(camera.position); r.score=(act.includes(r.zone)?1e6:0) + I*(type==='rect'? r.l.width*r.l.height : 1)/(1+.05*d2); }
    const best=list.filter(r=>r.score>0).sort((a,b)=>b.score-a.score);
    POOL[type].forEach((pl,i)=>{ const r=best[i]; if(!r){ pl.intensity=0; return; } const s=r.l;
      pl.color.copy(s.color); pl.intensity=s.intensity; pl.position.copy(r.pos);
      if(type!=='rect'){ pl.distance=s.distance; pl.decay=s.decay; }
      if(type==='spot'){ pl.angle=s.angle; pl.penumbra=s.penumbra; pl.target.position.copy(r.tgt); pl.target.updateMatrixWorld(); }
      if(type==='rect'){ pl.width=s.width; pl.height=s.height; pl.quaternion.copy(r.quat); } });
  }
}

/* ---- shadows / normals ---- */
root.traverse(o=>{ const n=o.isMesh && o.geometry.attributes.normal; if(!n) return; const a=n.array; for(let i=0;i<a.length;i+=3){ const l=a[i]*a[i]+a[i+1]*a[i+1]+a[i+2]*a[i+2]; if(!(l>1e-8)){ a[i]=0; a[i+1]=1; a[i+2]=0; } } n.needsUpdate=true; });
root.traverse(o=>{ if(o.isMesh){ o.castShadow = !o.userData.noShadow && !o.userData.noCast && !o.userData.noShadowCast && !(o.material && o.material.transparent); o.receiveShadow = !o.userData.noShadow; } });
ceilings.traverse(o=>{ if(o.isMesh) o.castShadow=true; });

/* ---- merge static meshes per material (thousands of boxes -> a few hundred draw calls) ---- */
await tick(86,'load.shader');
function mergeInto(container, meshes){
  const buckets=new Map(); const out=[];
  for(const o of meshes){
    const key=o.material.uuid+'|'+(o.castShadow?1:0)+(o.receiveShadow?1:0);
    let g=o.geometry.index? o.geometry.toNonIndexed() : o.geometry.clone();
    for(const k of Object.keys(g.attributes)) if(!['position','normal','uv'].includes(k)) g.deleteAttribute(k);
    if(!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count*2),2));
    if(!g.attributes.normal) g.computeVertexNormals();
    g.clearGroups(); g.applyMatrix4(o.matrixWorld);
    if(!buckets.has(key)) buckets.set(key,{m:o.material,c:o.castShadow,r:o.receiveShadow,g:[],o:[]});
    const b=buckets.get(key); b.g.push(g); b.o.push(o);
  }
  for(const b of buckets.values()){
    if(b.o.length<2){ b.g.forEach(g=>g.dispose()); out.push(...b.o); continue; }
    const geo=mergeGeometries(b.g,false); b.g.forEach(g=>g.dispose());
    if(!geo){ out.push(...b.o); continue; }
    geo.computeBoundingSphere();
    const m=new THREE.Mesh(geo,b.m); m.castShadow=b.c; m.receiveShadow=b.r; if(b.m.transparent) m.renderOrder=1; container.add(m); out.push(m);
    b.o.forEach(o=>o.parent && o.parent.remove(o));
  }
  return out;
}
function collect(container, exclude, allowTransparent){
  const list=[]; container.updateMatrixWorld(true);
  container.traverse(o=>{ if(!o.isMesh||o.isInstancedMesh||Array.isArray(o.material)) return;
    if(o.material.transparent && !(allowTransparent && o.userData.blob)) return;
    for(let p=o; p && p!==container.parent; p=p.parent){ if(exclude.has(p)) return; }
    list.push(o); });
  return list;
}
if(!window.__noMerge){
  const ex=new Set([...southWalls, ...drapes.map(d=>d.g), ...shades.map(s=>s.g), turndown, welcome, ...floors]);
  scene.updateMatrixWorld(true);
  const south=mergeInto(root, southWalls.filter(m=>m.isMesh && !m.material.transparent));
  southWalls.length=0; southWalls.push(...south);
  mergeInto(ceilings, collect(ceilings, ex));
  ex.add(ceilings); south.forEach(m=>ex.add(m));
  mergeInto(root, collect(root, ex, true));
}

/* ================= reflections: capture the real rooms ================= */
const capPos = { living:new THREE.Vector3(0.2,1.4,0.3), bed:new THREE.Vector3(7.2,1.3,0), bath:new THREE.Vector3(6.6,1.4,5.0) };
const capRT = new THREE.WebGLCubeRenderTarget(TIER.low?64:128,{type:THREE.HalfFloatType});
const cubeCam = new THREE.CubeCamera(.05,100,capRT);
let envs={};
let capQ=null;
function captureStep(){ // one cube per frame: living, bedroom, bath
  if(!capQ) capQ={ keys:['living','bed','bath'], next:{} };
  const k=capQ.keys.shift(), p=capPos[k];
  const vis=ceilings.visible; ceilings.visible=true; const sw=southWalls.map(m=>m.visible); southWalls.forEach(m=>m.visible=true);
  const prevE=scene.environment, prevI=scene.environmentIntensity; scene.environment=roomEnv; scene.environmentIntensity=.25;
  const camPos=camera.position.clone(); camera.position.set(p.x,1.5,p.z); syncPool(true);
  cubeCam.position.copy(p); cubeCam.update(renderer,scene); capQ.next[k]=pmrem.fromCubemap(capRT.texture).texture;
  camera.position.copy(camPos); syncPool(true);
  scene.environment=prevE; scene.environmentIntensity=prevI; ceilings.visible=vis; southWalls.forEach((m,i)=>m.visible=sw[i]);
  if(capQ.keys.length) return true;
  Object.values(envs).forEach(t=>t.dispose()); envs=capQ.next; capQ=null;
  scene.environment=envs.living; M.mirror.envMap=envs.bed; M.mirror.needsUpdate=true;
  M.mirrorBath.envMap=envs.bath; M.mirrorBath.needsUpdate=true; M.water.envMap=envs.bath; M.water.needsUpdate=true;
  return false;
}

/* ================= post-processing ================= */
let HQ = !TIER.low;
const composer = new EffectComposer(renderer);
composer.setPixelRatio(PR); composer.setSize(innerWidth,innerHeight);
composer.addPass(new RenderPass(scene,camera));
const gtao = new GTAOPass(scene,camera,innerWidth,innerHeight);
gtao.updateGtaoMaterial({ radius:.32, distanceExponent:1.6, thickness:1.2, scale:1.1, samples:12, distanceFallOff:1, screenSpaceRadius:false });
gtao.updatePdMaterial({ lumaPhi:10, depthPhi:2, normalPhi:3, radius:6, rings:2, samples:16 });
gtao.blendIntensity = .85;
{ const ss=gtao.setSize.bind(gtao); gtao.setSize=(w,h)=>ss(Math.max(1,w>>1),Math.max(1,h>>1)); }  // AO at half resolution
composer.addPass(gtao);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight), .2, .38, 1.35);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const smaa = new SMAAPass(innerWidth*PR, innerHeight*PR); composer.addPass(smaa);

/* ================= lighting scenes ================= */
const SCENES = {
  welcome: { tod:0,   lamp:.75, cove:.7,  curtain:0, bed:.75, nl:0, td:0, wel:1 },
  day:     { tod:0,   lamp:.1,  cove:.2,  curtain:0, bed:.1,  nl:0, td:0, wel:0 },
  evening: { tod:.9,  lamp:1,   cove:1,   curtain:0, bed:1,   nl:0, td:0, wel:0 },
  turndown:{ tod:1,   lamp:.28, cove:.3,  curtain:1, bed:1,   nl:0, td:1, wel:0 },
  sleep:   { tod:1,   lamp:0,   cove:0,   curtain:1, bed:0,   nl:1, td:1, wel:0 },
};
let sceneKey='welcome';
const S={...SCENES.welcome}, ST={...SCENES.welcome};
let envDirty=true, sceneMoving=true, needsRender=8;
const L = THREE.MathUtils.lerp;
function applyScene(s){
  const e = s.tod*s.tod*(3-2*s.tod), shut=s.curtain;
  hemi.intensity = L(.75,.05,e)*(1-.55*shut); hemi.color.setHex(0xf1f4ff).lerp(new THREE.Color(0x40486a),e);
  sun.intensity = L(3.0,0,e)*(1-.92*shut);
  winFill.forEach(r=>r.intensity=L(5,.15,e)*(1-.85*shut)); bathFill.intensity=L(4,.1,e)*(1-.8*shut);
  ceilGlow.forEach(m=>m.emissiveIntensity=.08+1.15*s.cove);
  warmAmb.intensity=.32*s.cove*Math.max(e,.35)+.05*s.lamp;
  const bathLvl=Math.max(s.lamp,.55*(1-s.nl)*(1-e*.4));
  lampLights.forEach(l=>{ const u=l.userData, lvl = u.bed? s.bed : u.bath? bathLvl : Math.max(s.lamp, (u.always||0)*(1-s.nl)); l.intensity=(u.n ?? (l.isSpotLight?9:4.2))*lvl; });
  glowMats.forEach(m=>{ const u=m.userData, lvl=u.bed? s.bed : s.lamp; m.emissiveIntensity = L(u.d??.05, u.n??1.6, lvl); });
  M.cove.color.setHex(0xfff1dc).multiplyScalar(.5+1.7*s.cove);
  M.led.color.setHex(0xffe2b8).multiplyScalar(.7+1.9*Math.max(s.cove,s.lamp*.8));
  M.nightLed.color.setHex(0xffb070).multiplyScalar(2.2*s.nl); nightL.intensity=1.4*s.nl;
  VIEW.night.forEach(m=>m.material.opacity=e);
  M.sheer.opacity = L(.32,.22,e);
  drapes.forEach(d=>{ d.g.position.x=L(d.a,d.b,shut); d.g.scale.x=L(1,d.sc,shut); });
  shades.forEach(d=>{ d.g.scale.y=L(.08,d.full,shut); });
  renderer.toneMappingExposure = L(1.0,.95,e)*(s.nl>.5? 1.25:1);
  scene.environmentIntensity = L(.55,.3,e)*(.5+.5*Math.max(s.lamp,s.cove,1-e));
  bloom.strength = L(.14,.22,e); bloom.threshold = L(1.35,1.7,e); bloom.enabled = e>.25;
  turndown.visible = s.td>.5; welcome.visible = s.wel>.5;
  renderer.shadowMap.needsUpdate=true; syncPool(true); needsRender=Math.max(needsRender,2);
}
applyScene(S);
function setScene(k){ if(!SCENES[k]) return; if(SCENES[k].tod>0) paintNight(true); sceneKey=k; Object.assign(ST,SCENES[k]); sceneMoving=true; document.querySelectorAll('#scenes button,#cardScenes button').forEach(b=>b.classList.toggle('on',b.dataset.s===k)); $('tod').textContent=t('scene.'+k); }

/* ================= hotspots & tour data ================= */
const HOTSPOTS = [
  { id:'entry',  z:'foyer',  p:[-1.3,1.3,5.9],  v:{p:[-2.0,1.55,4.2],t:[-1.3,1.25,6]} },
  { id:'closet', z:'foyer',  p:[-3.9,1.5,4.0],  v:{p:[-2.3,1.55,4.0],t:[-4.3,1.25,4.3]} },
  { id:'view',   z:'living', p:[1.5,1.7,-2.9],  v:{p:[1.2,1.5,-.4],t:[2.4,1.75,-6]} },
  { id:'lounge', z:'living', p:[0.2,.9,.4],     v:{p:[2.2,1.6,2.4],t:[0,.7,-.4]} },
  { id:'dining', z:'dining', p:[-6.5,1.05,.2],  v:{p:[-4.5,1.7,1.9],t:[-6.8,.8,0]} },
  { id:'lattice',z:'dining', p:[-8.85,1.6,.8],  v:{p:[-5.6,1.55,.4],t:[-9,1.4,.2]} },
  { id:'minibar',z:'dining', p:[-5.0,1.2,2.6],  v:{p:[-5.2,1.5,.9],t:[-5.2,1.2,2.9]} },
  { id:'bed',    z:'bedroom',p:[8.4,.95,.3],    v:{p:[5.4,1.6,1.6],t:[8.6,.8,0]} },
  { id:'panel',  z:'bedroom',p:[9.68,.78,1.22], v:{p:[8.3,1.3,2.2],t:[9.7,.7,1.2]}, act:'scenes' },
  { id:'desk',   z:'bedroom',p:[4.4,1.0,-.35],  v:{p:[6.6,1.55,.6],t:[4.3,1.0,-.3]} },
  { id:'nook',   z:'bedroom',p:[5.0,1.5,2.75],  v:{p:[6.9,1.5,.2],t:[4.9,1.0,2.4]} },
  { id:'tub',    z:'bath',   p:[7.1,.8,6.4],    v:{p:[5.3,1.5,4.6],t:[7.4,.6,6.6]}, act:'water' },
  { id:'shower', z:'bath',   p:[9.3,1.6,3.8],   v:{p:[7.0,1.6,5.0],t:[9.4,1.3,3.6]} },
  { id:'vanity', z:'bath',   p:[4.4,1.3,5.1],   v:{p:[6.6,1.6,5.1],t:[4.2,1.2,5.1]} },
];
const VIEWS = {
  foyer:   { p:[-1.15,1.6,5.6],  t:[-3.3,1.1,2.2] },
  living:  { p:[1.75,1.5,2.65],  t:[-0.9,1.05,-1.2] },
  dining:  { p:[-4.3,1.55,2.35], t:[-7.6,1.15,-0.3] },
  bedroom: { p:[4.75,1.6,2.2],   t:[8.6,0.95,-0.6] },
  bath:    { p:[5.25,1.62,3.55], t:[8.1,.9,6.3] },
  window:  { p:[1.2,1.5,-.4],    t:[2.4,1.75,-6] },
  overview:{ p:[0.6,19.5,15.5],  t:[0.6,0,2.0] },
};
const TOUR = [
  { v:'foyer',   sc:'welcome', cap:['sp.foyer','tour.foyer'] },
  { hs:'closet' },
  { v:'living',  cap:['sp.living','tour.living'] },
  { hs:'view',   sc:'day' },
  { v:'dining',  cap:['sp.dining','tour.dining'] },
  { hs:'minibar' },
  { v:'bedroom', sc:'evening', cap:['sp.bedroom','tour.bedroom'] },
  { hs:'desk' },
  { v:'bath',    cap:['sp.bath','tour.bath'] },
  { hs:'tub' },
  { v:'bedroom', sc:'turndown', cap:['scene.turndown','tour.turndown'] },
  { v:'overview',sc:'welcome', cap:['sp.overview','tour.end'] },
];
// walkable areas: rooms (inset from walls) + the doorways between them
const WALK=[ [-9,-4,-3,3], [-4,4,-3,3], [4,10,-3,3], [FX0,FX1,3,FZ1], [BX0,X1,3,BZ1] ].map(([a,b,c,d])=>[a+.3,b-.3,c+.3,d-.3]);
const DOORS=[ [-4.5,-3.5,-2.0,2.0], [3.5,4.5,-2.45,-1.75], [-3.45,-2.75,2.5,3.5], [6.85,7.45,2.5,3.5] ];
const walkable=(x,z)=> WALK.some(([a,b,c,d])=>x>=a&&x<=b&&z>=c&&z<=d) || DOORS.some(([a,b,c,d])=>x>=a&&x<=b&&z>=c&&z<=d);
const RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= camera ================= */
let tween=null;
function flyTo(p,tg,dur=2){ tween={ p0:camera.position.clone(), t0:controls.target.clone(), p1:new THREE.Vector3(...p), t1:new THREE.Vector3(...tg), s:performance.now(), d:(RM?.05:dur)*1000 }; needsRender=Math.max(needsRender,2); }
let ignoreHash=false;
function go(key, dur=2.0){ const v=VIEWS[key]; if(!v) return; flyTo(v.p,v.t,dur); if(ALL_ZONES.includes(key)||key==='overview'){ if(location.hash.slice(1)!==key){ ignoreHash=true; try{ location.hash=key; }catch(e){} } } }
addEventListener('hashchange',()=>{ if(ignoreHash){ ignoreHash=false; return; } const k=location.hash.slice(1); if(VIEWS[k]){ stopTour(); closeCard(); go(k); } });

/* ================= UI ================= */
const $=id=>document.getElementById(id);
const PLAN_ROOMS=[ {k:'dining',x0:-9,x1:-4,z0:-3,z1:3}, {k:'living',x0:-4,x1:4,z0:-3,z1:3}, {k:'bedroom',x0:4,x1:10,z0:-3,z1:3}, {k:'foyer',x0:FX0,x1:FX1,z0:3,z1:FZ1}, {k:'bath',x0:BX0,x1:X1,z0:3,z1:BZ1} ];
function buildPlan(){
  const svg=$('planSvg'); svg.setAttribute('viewBox','-9.5 -3.5 20 11.1');
  let h='';
  for(const r of PLAN_ROOMS) h+=`<rect class="rm" data-k="${r.k}" x="${r.x0}" y="${r.z0}" width="${r.x1-r.x0}" height="${r.z1-r.z0}" rx=".15" tabindex="0" role="button" aria-label="${t('sp.'+r.k)}"><title>${t('sp.'+r.k)}</title></rect>`;
  for(const [a,b] of Object.values(WIN)) h+=`<line class="win" x1="${a}" y1="-3" x2="${b}" y2="-3"/>`;
  h+=`<line class="win" x1="6" y1="${BZ1}" x2="8.2" y2="${BZ1}"/>`;
  for(const r of PLAN_ROOMS) h+=`<text class="lb" x="${(r.x0+r.x1)/2}" y="${(r.z0+r.z1)/2+.22}">${t('nav.'+r.k)}</text>`;
  for(const hs of HOTSPOTS) h+=`<circle class="dot" data-h="${hs.id}" cx="${hs.p[0]}" cy="${hs.p[2]}" r=".22"><title>${HS_TEXT[hs.id][LANG][0]}</title></circle>`;
  h+=`<g id="me"><path class="cone" d="M0 0 L2.4 -1.1 A2.6 2.6 0 0 1 2.4 1.1 Z"/><circle class="me" r=".32"/></g>`;
  svg.innerHTML=h;
  svg.querySelectorAll('.rm').forEach(el=>{ const f=()=>{ stopTour(); closeCard(); go(el.dataset.k); }; el.addEventListener('click',f); el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); f(); } }); });
  svg.querySelectorAll('.dot').forEach(el=>el.addEventListener('click',e=>{ e.stopPropagation(); stopTour(); const h=hsEls.find(x=>x.id===el.dataset.h); showCard(h.id); flyTo(h.v.p,h.v.t,1.8); }));
}
function renderText(){
  document.documentElement.lang=LANG;
  { const FC={ja:'fonts/pretendard-jp.css',zh:'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500&display=swap'}[LANG];
    if(FC && !document.querySelector('link[data-lf="'+LANG+'"]')){ const l=document.createElement('link'); l.rel='stylesheet'; l.href=FC; l.dataset.lf=LANG; document.head.appendChild(l); } }
  document.querySelectorAll('[data-i]').forEach(el=>{ el.innerHTML=t(el.dataset.i); });
  $('hotel').textContent = cfg(CONFIG.hotel)+' · '+cfg(CONFIG.city); $('roomName').textContent = cfg(CONFIG.room);
  if($('introHotel')){ $('introHotel').textContent=$('hotel').textContent; $('introRoom').textContent=cfg(CONFIG.room); }
  $('iArea').textContent = CONFIG.area+' ㎡'; $('iBed').textContent=CONFIG.bed; $('iGuests').textContent=CONFIG.guests; $('iFloor').textContent=CONFIG.floor; $('iView').textContent=t('ui.viewv');
  $('infoToggle').innerHTML = `<span class="rnm">${cfg(CONFIG.room)} · </span><b>${CONFIG.area}㎡</b>`;
  $('chips').innerHTML = t('ui.am').map(a=>`<span>${a}</span>`).join('');
  $('mHQ').querySelector('.v').textContent = HQ? t('ui.hqv'):t('ui.sqv');
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));
  $('tod').textContent=t('scene.'+sceneKey);
  welcomeCardMat.map?.dispose(); welcomeCardMat.map=cardTex([t('ui.welcome'), CONFIG.guest, cfg(CONFIG.hotel)]); welcomeCardMat.needsUpdate=true;
  hsEls.forEach(h=>{ h.el.dataset.label=HS_TEXT[h.id][LANG][0]; h.el.setAttribute('aria-label',HS_TEXT[h.id][LANG][0]); });
  buildPlan(); if(openHS) showCard(openHS); if(touring) showStep(tourI,false);
  lastZone=null; needsRender=Math.max(needsRender,2);
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{ LANG=b.dataset.l; renderText(); }));
document.querySelectorAll('#scenes button').forEach(b=>b.addEventListener('click',()=>{ pauseTour(); setScene(b.dataset.s); }));
$('infoToggle').addEventListener('click',()=>{ $('info').classList.toggle('open'); closeCard(); });
function toast(msg,ms=3200){ const el=$('toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),ms); }
$('book').addEventListener('click',e=>{ if(!CONFIG.bookingUrl){ e.preventDefault(); toast(t('ui.bookToast')); } });
if(CONFIG.bookingUrl) $('book').href=CONFIG.bookingUrl;

// hotspots (DOM markers, hidden when a wall is in the way)
const hsEls = HOTSPOTS.map(h=>{ const el=document.createElement('button'); el.className='hsp'; el.innerHTML='<i></i>'; el.addEventListener('click',ev=>{ ev.stopPropagation(); pauseTour(); showCard(h.id); }); $('hs').appendChild(el); return {...h, el, v3:new THREE.Vector3(...h.p)}; });
let openHS=null;
function showCard(id){ const i=hsEls.findIndex(x=>x.id===id), h=hsEls[i]; openHS=id; document.body.classList.add('card-open'); const [ti,de]=HS_TEXT[id][LANG];
  $('cardNo').textContent=`${i+1} / ${hsEls.length}`; $('cardT').textContent=ti; $('cardD').textContent=de; $('cardScenes').style.display = h.act==='scenes'?'flex':'none';
  $('card').classList.add('show'); $('info').classList.remove('open');
  $('cardGo').onclick=()=>{ stopTour(); flyTo(h.v.p,h.v.t,1.8); if(h.act==='water') playWater(); };
  if(h.act==='water') playWater(); }
function stepCard(d){ const i=hsEls.findIndex(x=>x.id===openHS); const h=hsEls[(i+d+hsEls.length)%hsEls.length]; stopTour(); showCard(h.id); flyTo(h.v.p,h.v.t,1.8); }
function closeCard(){ openHS=null; $('card').classList.remove('show'); document.body.classList.remove('card-open'); }
$('cardX').addEventListener('click',closeCard); $('cardPrev').addEventListener('click',()=>stepCard(-1)); $('cardNext').addEventListener('click',()=>stepCard(1));
document.querySelectorAll('#cardScenes button').forEach(b=>b.addEventListener('click',()=>setScene(b.dataset.s)));
const occRay=new THREE.Ray(), occHit=new THREE.Vector3();
function occluded(p){ occRay.origin.copy(camera.position); occRay.direction.subVectors(p,camera.position); const d=occRay.direction.length(); occRay.direction.multiplyScalar(1/d);
  for(const b of OCC){ if(occRay.intersectBox(b,occHit) && occHit.distanceTo(camera.position)<d-.15) return true; } return false; }

// guided tour
let touring=false, tourI=0, tourT0=0, tourPaused=false, tourElapsed=0; const STEP_MS=8000;
function stepInfo(s){ if(s.hs){ const h=hsEls.find(x=>x.id===s.hs); return { title:HS_TEXT[s.hs][LANG][0], desc:HS_TEXT[s.hs][LANG][1], p:h.v.p, t:h.v.t, zone:h.z }; }
  const v=VIEWS[s.v]; return { title:t(s.cap[0]), desc:t(s.cap[1]).replace('{area}',CONFIG.area), p:v.p, t:v.t }; }
function showStep(i,fly=true){ tourI=(i+TOUR.length)%TOUR.length; const s=TOUR[tourI], inf=stepInfo(s);
  $('capStep').textContent=`${tourI+1} / ${TOUR.length}`; $('cap').classList.remove('min'); clearTimeout(showStep.t); showStep.t=setTimeout(()=>$('cap').classList.add('min'),4500); $('capT').textContent=inf.title; $('capD').textContent=inf.desc;
  $('tProg').innerHTML=TOUR.map((_,k)=>`<i class="${k<tourI?'done':''}">${k===tourI?'<b></b>':''}</i>`).join('');
  if(fly){ if(s.sc) setScene(s.sc); flyTo(inf.p,inf.t,2.6); if(s.hs==='tub') playWater(); tourElapsed=0; } }
function startTour(){ closeCard(); $('info').classList.remove('open'); touring=true; tourPaused=false; document.body.classList.add('touring'); $('tPlay').textContent='❚❚'; showStep(0); }
function stopTour(){ if(!touring) return; touring=false; document.body.classList.remove('touring'); }
function pauseTour(){ if(touring && !tourPaused){ tourPaused=true; $('tPlay').textContent='▶'; } }
function resumeTour(){ if(touring && tourPaused){ tourPaused=false; $('tPlay').textContent='❚❚'; } }
$('tourBtn').addEventListener('click',startTour);
$('cap').addEventListener('click',e=>{ if(e.target.closest('button')) return; $('cap').classList.toggle('min'); }); $('tX').addEventListener('click',stopTour);
$('tPrev').addEventListener('click',()=>{ if(tourI>0) showStep(tourI-1); if(tourPaused) resumeTour(); });
$('tNext').addEventListener('click',()=>{ if(tourI>=TOUR.length-1){ stopTour(); $('info').classList.add('open'); return; } showStep(tourI+1); if(tourPaused) resumeTour(); });
$('tPlay').addEventListener('click',()=> tourPaused? resumeTour() : pauseTour());
controls.addEventListener('start',()=>{ tween=null; pauseTour(); });
let lastMove=0; controls.addEventListener('change',()=>{ lastMove=performance.now(); needsRender=Math.max(needsRender,2); });
let motionLOD=false;
function setMotionLOD(on){ if(on===motionLOD) return; motionLOD=on; gtao.enabled = HQ && !on; const pr = on ? Math.min(PR,1) : PR; if(renderer.getPixelRatio()!==pr){ renderer.setPixelRatio(pr); composer.setPixelRatio(pr); composer.setSize(innerWidth,innerHeight); } if(!on) needsRender=Math.max(needsRender,1); }

// more menu
$('moreBtn').addEventListener('click',e=>{ e.stopPropagation(); $('menu').classList.toggle('open'); });
addEventListener('click',e=>{ if(!$('more').contains(e.target)) $('menu').classList.remove('open'); });
function setHQ(v){ HQ=v; motionLOD=false; $('mHQ').classList.toggle('on',HQ); $('mHQ').querySelector('.v').textContent = HQ? t('ui.hqv'):t('ui.sqv'); gtao.enabled=HQ; smaa.enabled=HQ || !TIER.low; PR = HQ? Math.min(devicePixelRatio,1.75) : 1; renderer.setPixelRatio(PR); composer.setPixelRatio(PR); onResize(); }
$('mHQ').addEventListener('click',()=>setHQ(!HQ));
$('mFS').addEventListener('click',async()=>{ try{ if(document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }catch(e){ toast('Full screen unavailable here'); } });
let perfOn=false; $('mPerf').addEventListener('click',()=>{ perfOn=!perfOn; $('perf').classList.toggle('on',perfOn); $('mPerf').classList.toggle('on',perfOn); $('mPerf').querySelector('.v').textContent=perfOn?'ON':'OFF'; needsRender=Math.max(needsRender,2); });

// procedural ambience
let AC=null, soundOn=false, waterUntil=0; const SND={};
function noiseBuf(brown){ const len=AC.sampleRate*4, b=AC.createBuffer(1,len,AC.sampleRate), d=b.getChannelData(0); let last=0; for(let i=0;i<len;i++){ const w=Math.random()*2-1; if(brown){ last=(last+.02*w)/1.02; d[i]=last*3.5; } else d[i]=w; } return b; }
function chain(buf,type,f,q){ const s=AC.createBufferSource(); s.buffer=buf; s.loop=true; const fl=AC.createBiquadFilter(); fl.type=type; fl.frequency.value=f; if(q) fl.Q.value=q; const g=AC.createGain(); g.gain.value=0; s.connect(fl).connect(g).connect(AC.destination); s.start(); return g; }
$('mSound').addEventListener('click',()=>{ try{ if(!AC){ AC=new (window.AudioContext||window.webkitAudioContext)(); SND.city=chain(noiseBuf(true),'lowpass',380); SND.air=chain(noiseBuf(false),'lowpass',900); SND.water=chain(noiseBuf(false),'bandpass',1700,.7); }
  soundOn=!soundOn; if(soundOn) AC.resume(); $('mSound').classList.toggle('on',soundOn); $('mSound').querySelector('.v').textContent=soundOn?'ON':'OFF'; }catch(e){ toast('Audio unavailable'); } });
function playWater(){ waterUntil=performance.now()+7000; }

// gyro (hotel site only — preview frames block motion sensors)
let gyro=null, gyroBase=null;
if('ontouchstart' in window) $('mGyro').style.display='';
$('mGyro').addEventListener('click',async()=>{
  if(gyro){ gyro=null; gyroBase=null; $('mGyro').classList.remove('on'); $('mGyro').querySelector('.v').textContent='OFF'; return; }
  try{ if(typeof DeviceOrientationEvent!=='undefined' && DeviceOrientationEvent.requestPermission){ const r=await DeviceOrientationEvent.requestPermission(); if(r!=='granted') throw 0; } }catch(e){ toast(t('ui.gyroNo')); return; }
  let got=false; gyro={a:0,b:0}; $('mGyro').classList.add('on'); $('mGyro').querySelector('.v').textContent='ON';
  if(!window.__gyroL){ window.__gyroL=true; addEventListener('deviceorientation',ev=>{ if(!gyro||ev.alpha==null) return; gyro.got=true; gyro.a=ev.alpha; gyro.b=ev.beta; needsRender=2; }); }
  setTimeout(()=>{ if(!gyro || !gyro.got){ gyro=null; $('mGyro').classList.remove('on'); $('mGyro').querySelector('.v').textContent='OFF'; toast(t('ui.gyroNo')); } },1500);
});

// walking
const ray=new THREE.Raycaster(), ndc=new THREE.Vector2();
canvas.addEventListener('dblclick',e=>{
  ndc.set(e.clientX/innerWidth*2-1, -(e.clientY/innerHeight)*2+1); ray.setFromCamera(ndc,camera);
  const hit=ray.intersectObjects(floors)[0]; if(!hit) return; pauseTour();
  const p=hit.point; const dir=new THREE.Vector3().subVectors(controls.target,camera.position); dir.y=0; if(dir.lengthSq()<1e-4) dir.set(0,0,-1); dir.normalize();
  const t1=new THREE.Vector3(p.x,1.55,p.z).addScaledVector(dir,2.5); t1.y=1.2; flyTo([p.x,1.55,p.z],[t1.x,t1.y,t1.z],1.4);
});
const keys={}; addEventListener('keydown',e=>{ if(e.target.closest && e.target.closest('button,a')) return; keys[e.key.toLowerCase()]=true; if(e.key==='Escape'){ closeCard(); stopTour(); } }); addEventListener('keyup',e=>{ keys[e.key.toLowerCase()]=false; });
function onResize(){ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); composer.setSize(innerWidth,innerHeight); needsRender=Math.max(needsRender,2); }
addEventListener('resize',onResize);

/* ================= loop (renders only when something changed) ================= */
const clock=new THREE.Clock(); const tmp=new THREE.Vector3(), pv=new THREE.Vector3(), lookDir=new THREE.Vector3();
let benching=false;
let lastZone=null, frames=0, rendered=0, lastRenderT=0, fpsS=[], perfT=0, adaptiveDone=false;
function frame(){
  if(benching){ requestAnimationFrame(frame); return; }
  const dt=Math.min(clock.getDelta(),.1), now=performance.now();
  if(tween){ const k=Math.min(1,(now-tween.s)/tween.d); const e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
    camera.position.lerpVectors(tween.p0,tween.p1,e); controls.target.lerpVectors(tween.t0,tween.t1,e); if(k>=1) tween=null; needsRender=Math.max(needsRender,2); }
  const fw=(keys['w']||keys['arrowup']?1:0)-(keys['s']||keys['arrowdown']?1:0), st=(keys['d']||keys['arrowright']?1:0)-(keys['a']||keys['arrowleft']?1:0);
  if(fw||st){ tween=null; pauseTour(); const f=tmp.subVectors(controls.target,camera.position); f.y=0; f.normalize(); const r=new THREE.Vector3(-f.z,0,f.x); const mv=f.multiplyScalar(fw*2.2*dt).addScaledVector(r,st*2.2*dt); const cp=camera.position;
    if(cp.y<3 && walkable(cp.x,cp.z) && !walkable(cp.x+mv.x,cp.z+mv.z)){ if(walkable(cp.x+mv.x,cp.z)) mv.z=0; else if(walkable(cp.x,cp.z+mv.z)) mv.x=0; else mv.set(0,0,0); }
    camera.position.add(mv); controls.target.add(mv); needsRender=2; }
  if(gyro && gyroBase===null && gyro.a){ gyroBase={a:gyro.a,b:gyro.b,t:controls.target.clone()}; }
  if(gyro && gyroBase){ const yaw=THREE.MathUtils.degToRad(((gyro.a-gyroBase.a+540)%360)-180), pit=THREE.MathUtils.degToRad(gyro.b-gyroBase.b)*.6; const v=gyroBase.t.clone().sub(camera.position); v.applyAxisAngle(new THREE.Vector3(0,1,0),yaw); v.y+=Math.tan(-pit)*v.length()*.5; controls.target.copy(camera.position).add(v); }
  if(sceneMoving){ let moving=false; for(const k in ST){ const d=ST[k]-S[k]; if(Math.abs(d)>.002){ S[k]+=d*Math.min(1,dt*1.8); moving=true; } else S[k]=ST[k]; } applyScene(S); if(!moving){ sceneMoving=false; envDirty=true; } }
  if(envDirty && !sceneMoving){ envDirty = captureStep(); needsRender=Math.max(needsRender,2); }
  controls.update();
  // tour timing
  if(touring && !tourPaused){ tourElapsed+=dt*1000; const el=tourElapsed, bar=document.querySelector('#tProg b'); if(bar) bar.style.width=Math.min(100,el/STEP_MS*100)+'%'; if(el>STEP_MS){ if(tourI===TOUR.length-1){ stopTour(); $('info').classList.add('open'); } else showStep(tourI+1); } }
  const moving = !!tween || fw || st || (now-lastMove<140) || sceneMoving;
  setMotionLOD(moving);
  if(needsRender>0){
    needsRender--;
    syncPool(false);
    const zone=zoneOf(camera.position);
    if(zone!==lastZone){ lastZone=zone; if(openHS && !touring){ const oz=hsEls.find(h=>h.id===openHS).z; const ok2 = zone==='overview' || oz===zone || (['living','dining'].includes(oz)&&['living','dining'].includes(zone)); if(!ok2 && !tween) closeCard(); } document.querySelectorAll('#planSvg .rm').forEach(r=>r.classList.toggle('on',r.dataset.k===zone)); $('planZone').textContent=t('sp.'+zone); const rn=$('rn'); rn.style.opacity=0; setTimeout(()=>{ rn.textContent=t('sp.'+zone); rn.style.opacity=1; },200); }
    ceilings.visible = camera.position.y <= TRAY-.05;
    southWalls.forEach(m=>m.visible = !(camera.position.y>3.2));
    VIEW.day.concat(VIEW.night).forEach(m=>m.visible = camera.position.y<3.2);
    const open = zone==='living'||zone==='dining' ? ['living','dining'] : [zone];
    for(const h of hsEls){ let show = open.includes(h.z) && zone!=='overview';
      if(show){ pv.copy(h.v3).project(camera); show = pv.z<1 && Math.abs(pv.x)<1.05 && Math.abs(pv.y)<1.05 && camera.position.distanceTo(h.v3)<7.5 && !occluded(h.v3);
        if(show) h.el.style.transform=`translate(${(pv.x*.5+.5)*innerWidth}px,${(-pv.y*.5+.5)*innerHeight}px)`; }
      h.el.classList.toggle('vis',show); }
    const me=document.getElementById('me'); if(me){ lookDir.subVectors(controls.target,camera.position); const ang=Math.atan2(lookDir.z,lookDir.x)*180/Math.PI; me.setAttribute('transform',`translate(${camera.position.x.toFixed(2)} ${camera.position.z.toFixed(2)}) rotate(${ang.toFixed(1)})`); }
    renderer.info.autoReset=false; renderer.info.reset();
    composer.render(dt);
    const calls=renderer.info.render.calls, tris=renderer.info.render.triangles; renderer.info.autoReset=true;
    if(renderer.shadowMap.needsUpdate && !sceneMoving) renderer.shadowMap.needsUpdate=false;
    rendered++; if(lastRenderT && now-lastRenderT<250) fpsS.push(now-lastRenderT); if(fpsS.length>60) fpsS.shift(); lastRenderT=now;
    // adaptive quality: if rendering is slow during the first camera moves, drop to standard
    if(!adaptiveDone && fpsS.length>=45){ adaptiveDone=true; const avg=fpsS.reduce((a,b)=>a+b,0)/fpsS.length; if(avg>42 && HQ && !window.__noAuto){ setHQ(false); toast(t('ui.quality')+': '+t('ui.sqv'),2200); } }
    if(perfOn && now-perfT>300){ perfT=now; const avg=fpsS.length? fpsS.reduce((a,b)=>a+b,0)/fpsS.length:0;
      $('perf').textContent=`${avg? (1000/avg).toFixed(0):'–'} fps (rendering)   draw calls ${calls}   tris ${(tris/1000).toFixed(0)}k\nlights in shader: ${NPOOL.point} point · ${NPOOL.spot} spot · ${NPOOL.rect} area (of ${RECS.point.length}/${RECS.spot.length}/${RECS.rect.length})\npixel ratio ${PR.toFixed(2)} · AO ${HQ?'on':'off'} · tier ${TIER.low?'low':'high'} · idle frames skip`; }
  }
  if(AC){ const n=AC.currentTime, on=soundOn?1:0;
    SND.city.gain.setTargetAtTime(on*.06*(1-.75*S.curtain),n,.4); SND.air.gain.setTargetAtTime(on*.006,n,.4);
    SND.water.gain.setTargetAtTime(on*((now<waterUntil)? .05 : zoneOf(camera.position)==='bath'? .006:0),n,.5); }
  requestAnimationFrame(frame);
}

/* ================= start ================= */
window.__suite = { scene3:scene, camera, go, scene:(k)=>{ setScene(k); Object.assign(S,SCENES[k]); applyScene(S); sceneMoving=false; envDirty=true; }, hs:(id)=>{ showCard(id); }, renderer, setHQ, tour:()=>enter(true), enter:()=>enter(false), info:()=>({calls:renderer.info.render.calls}) };
if(TIER.low) setHQ(false);
renderText();
setScene('welcome');
const startKey = VIEWS[location.hash.slice(1)] ? location.hash.slice(1) : 'foyer';
go(startKey,0.01);
try{ await renderer.compileAsync(scene,camera); }catch(e){}
await tick(100,'load.shader');
frame();
$('intro').classList.add('ready');
function enter(withTour){
  if(!$('intro') || $('intro').classList.contains('gone')){ if(withTour) startTour(); return; }
  document.body.classList.remove('intro'); $('intro').classList.add('gone'); setTimeout(()=>$('intro').remove(),1000);
  needsRender=4;
  const idle=window.requestIdleCallback||((f)=>setTimeout(f,400)); const job=()=>{ if(paintNight(false)) idle(job); }; setTimeout(()=>idle(job),1500);
  if(withTour) startTour(); else { let seen=false; try{ seen=localStorage.getItem('suiteHint')==='1'; localStorage.setItem('suiteHint','1'); }catch(e){} if(!seen) toast(t('ui.hintShort'),6000); }
}

/* ================= built-in GPU benchmark (open with #bench) ================= */
async function runBench(){ if(benching) return; benching=true;
  const gl=renderer.getContext(); const out=[]; const P=$('perf'); P.classList.add('on');
  stopTour(); closeCard(); tween=null;
  window.__suite.scene('evening'); paintNight(true); benching=false; for(let i=0;i<20;i++) await new Promise(r=>requestAnimationFrame(r)); benching=true;
  const v=VIEWS.living; camera.position.set(...v.p); controls.target.set(...v.t); controls.update(); syncPool(true);
  const wait=()=>new Promise(r=>requestAnimationFrame(()=>r()));
  async function time(label, fn, n=40){ try{ await renderer.compileAsync(scene,camera); }catch(e){} for(let i=0;i<12;i++){ fn(); gl.finish(); await wait(); }
    const t0=performance.now(); for(let i=0;i<n;i++){ fn(); gl.finish(); } const ms=(performance.now()-t0)/n; out.push(`${label.padEnd(34)} ${ms.toFixed(1).padStart(6)} ms  ${(1000/ms).toFixed(0).padStart(4)} fps`); P.textContent=out.join('\n'); await wait(); }
  const full=()=>composer.render(.016), plain=()=>renderer.render(scene,camera);
  const setPR=(pr)=>{ renderer.setPixelRatio(pr); composer.setPixelRatio(pr); composer.setSize(innerWidth,innerHeight); };
  const prHi=Math.min(devicePixelRatio,1.75);
  gtao.enabled=true; smaa.enabled=true; bloom.enabled=true; setPR(prHi);
  await time(`FULL  pr${prHi} AO+bloom+SMAA`, full);
  gtao.enabled=false; await time(`pr${prHi} no AO`, full);
  smaa.enabled=false; await time(`pr${prHi} no AO, no SMAA`, full);
  bloom.enabled=false; await time(`pr${prHi} composer, no post`, full);
  await time(`pr${prHi} plain render`, plain);
  setPR(1); await time('pr1 plain render', plain);
  POOL.rect.forEach(l=>l.visible=false); await time('pr1 plain, no area lights', plain);
  POOL.rect.forEach(l=>l.visible=true); POOL.point.forEach(l=>l.visible=false); await time('pr1 plain, no point lights', plain); POOL.point.forEach(l=>l.visible=true); POOL.rect.forEach(l=>l.visible=false);
  POOL.spot.forEach(l=>l.visible=false); await time('pr1 plain, no area/spot', plain);
  POOL.point.forEach(l=>l.visible=false); await time('pr1 plain, no area/spot/point', plain);
  const vis=[...VIEW.day,...VIEW.night]; vis.forEach(m=>m.visible=false); await time('pr1 + no window views', plain);
  scene.environment=null; await time('pr1 + no env map', plain);
  const sh=renderer.shadowMap.enabled; renderer.shadowMap.enabled=false; scene.traverse(o=>{ if(o.material) o.material.needsUpdate=true; }); await time('pr1 + no shadows', plain);
  out.push('', `GPU: ${(()=>{ const e=gl.getExtension('WEBGL_debug_renderer_info'); return e? gl.getParameter(e.UNMASKED_RENDERER_WEBGL):'?'; })()}  dpr ${devicePixelRatio}  ${innerWidth}x${innerHeight}`);
  P.textContent=out.join('\n'); console.log('[BENCH]\n'+out.join('\n'));
  // restore
  renderer.shadowMap.enabled=sh; scene.traverse(o=>{ if(o.material) o.material.needsUpdate=true; }); scene.environment=envs.living||roomEnv;
  vis.forEach(m=>m.visible=true); POOL.rect.concat(POOL.spot,POOL.point).forEach(l=>l.visible=true); gtao.enabled=HQ; smaa.enabled=true; setPR(PR); renderer.shadowMap.needsUpdate=true; needsRender=4; benching=false;
}
window.__suite.bench = runBench;   // dev only: run from the console
try{ document.fonts && Promise.all(['26px "Pretendard Variable"','22px "Cormorant Garamond"'].map(f=>document.fonts.load(f, t('ui.welcome')+CONFIG.guest+cfg(CONFIG.hotel)).catch(()=>{}))).then(()=>document.fonts.ready).then(()=>{ welcomeCardMat.map?.dispose(); welcomeCardMat.map=cardTex([t('ui.welcome'), CONFIG.guest, cfg(CONFIG.hotel)]); welcomeCardMat.needsUpdate=true; needsRender=2; }); }catch(e){}
canvas.addEventListener('webglcontextlost',e=>{ e.preventDefault(); toast(LANG==='ko'?'그래픽 메모리가 부족해 화면을 다시 불러와야 합니다. 새로고침해 주세요.':'Graphics were reset by the browser. Please reload the page.',10000); });
$('introTour').addEventListener('click',()=>enter(true));
$('introFree').addEventListener('click',()=>enter(false));
