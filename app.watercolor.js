
const $ = (id) => document.getElementById(id);
const introScreen=$('introScreen'), prologueScreen=$('prologueScreen'), routesScreen=$('routesScreen'), yandexScreen=$('yandexScreen');
const routeTitle=$('routeTitle'), routeText=$('routeText'), mapPointTitle=$('mapPointTitle'), mapPointAddress=$('mapPointAddress'), pointCounter=$('pointCounter'), mapPointText=$('mapPointText');
const pointSheet=$('pointSheet'), sheetPeek=$('sheetPeek'), peekRouteText=$('peekRouteText'), peekPointPin=$('peekPointPin'), peekPointNum=$('peekPointNum'), geoAction=$('geoAction');
const audio=$('routeAudio'), audioPlay=$('audioPlay'), audioSeek=$('audioSeek'), audioCurrent=$('audioCurrent'), audioDuration=$('audioDuration');
const drawer=$('routeDrawer'), drawerList=$('drawerRouteList'), drawerRouteChip=$('drawerRouteChip'), drawerProgressLine=$('drawerProgressLine'), drawerProgressLabel=$('drawerProgressLabel');
const drawerTabs=[...document.querySelectorAll('.drawer-tab')];
const drawerPanels={points:$('drawerPanelPoints'),route:$('drawerPanelRoute'),project:$('drawerPanelProject')};
const prologueMenuDrawer=$('prologueMenuDrawer');
const prologueMenuTabs=[...document.querySelectorAll('.prologue-menu-tab')];
const prologueMenuPanels={project:$('prologueMenuProject'),poster:$('prologueMenuPoster'),contact:$('prologueMenuContact')};
const contactModeButtons=[...document.querySelectorAll('.contact-mode')];
const contactForms={technical:$('technicalContactForm'),feedback:$('feedbackContactForm')};
const posterFilterButtons=[...document.querySelectorAll('.poster-filter-chip')];
const museumEvents=[...document.querySelectorAll('.museum-event')];
const prologueMenuBottomHint=$('prologueMenuBottomHint');
const pointLorem='История этой точки готовится. Посмотрите адрес и продолжайте прогулку; полный рассказ появится здесь после подготовки материалов.';
const routeLorem='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
const DIRECTION_PHOTOS=[{"src":"./assets/direction-building-drawing.jpg","alt":"Здание Дирекции. Рисунок для «Ежегодника Императорских театров»","text":"Здание Дирекции. Рисунок для «Ежегодника Императорских театров»"},{"src":"./assets/direction-main-wardrobe.jpg","alt":"Главный гардероб петербургских императорских театров","text":"Главный гардероб петербургских императорских театров"},{"src":"./assets/direction-scenery-hall-1885.jpg","alt":"Декорационный зал Дирекции в день открытия, 14 апреля 1885 года","text":"Декорационный зал Дирекции в день открытия, 14 апреля 1885 года"},{"src":"./assets/direction-central-library.jpg","alt":"Центральная библиотека Дирекции Императорских театров","text":"Центральная библиотека Дирекции Императорских театров"},{"src":"./assets/direction-telyakovsky-office.jpg","alt":"Кабинет В. А. Теляковского в Дирекции","text":"Кабинет В. А. Теляковского в Дирекции"},{"src":"./assets/direction-telyakovsky-apartment.jpg","alt":"Служебная квартира В. А. Теляковского","text":"Служебная квартира В. А. Теляковского"},{"src":"./assets/direction-telyakovsky-at-desk.jpg","alt":"В. А. Теляковский в рабочем кабинете","text":"В. А. Теляковский в рабочем кабинете"},{"src":"./assets/direction-telyakovsky-portrait.jpg","alt":"В. А. Теляковский","text":"В. А. Теляковский"},{"src":"./assets/direction-telyakovsky-card.jpg","alt":"Визитная карточка В. А. Теляковского","text":"Визитная карточка В. А. Теляковского"},{"src":"./assets/direction-volkonsky-portrait.jpg","alt":"Князь С. М. Волконский","text":"Князь С. М. Волконский"},{"src":"./assets/direction-volkonsky-card.jpg","alt":"Визитная карточка С. М. Волконского с запиской","text":"Визитная карточка С. М. Волконского с запиской"},{"src":"./assets/direction-kshesinskaya.jpg","alt":"М. Ф. Кшесинская","text":"М. Ф. Кшесинская"},{"src":"./assets/direction-letter-to-chaliapin.jpg","alt":"Письмо В. А. Теляковского к Ф. И. Шаляпину","text":"Письмо В. А. Теляковского к Ф. И. Шаляпину"},{"src":"./assets/direction-theatre-rules.jpg","alt":"Объявление Дирекции о правилах поведения во время представления","text":"Объявление Дирекции о правилах поведения во время представления"}];
const routes=[
 {id:1,colorClass:'c1',color:'#ffd33f',colorName:'Жёлтый маршрут',name:'Римский-Корсаков — Шаляпин',title:'1. Римский-Корсаков — Шаляпин',shortTitle:'Римский-Корсаков — Шаляпин',blurb:'Маршрут о творческом взаимопонимании, раннем узнавании таланта и прогулке, в которой разговор продолжается на ходу.',longText:routeLorem,points:[
   {id:1,name:'Музей-квартира Н. А. Римского-Корсакова',address:'Загородный проспект, 28',coord:[59.924734,30.340715]},
   {id:2,name:'Театральный музей',address:'площадь Островского, 6',coord:[59.931168,30.336552]}
 ]},
 {id:2,colorClass:'c2',color:'#59c2ff',colorName:'Синий маршрут',name:'Дягилев',title:'2. Дягилев',shortTitle:'Дягилев',blurb:'Маршрут о конфликте старого и нового театра, реформе сцены и моменте, когда художественный риск становится поступком.',longText:routeLorem,points:[
   {id:1,name:'Дирекция Императорских театров',currentName:'Театральный музей',images:DIRECTION_PHOTOS,address:'площадь Островского, 6 / улица Зодчего Росси, 2',summary:'Тут вершилась история русского театра, а сегодня представлены уникальные театральные артефакты — в 1921 году в стенах бывшей Дирекции Императорских театров открылся Театральный музей.',coord:[59.930628,30.336037]},
   {id:2,name:'Публичная библиотека',address:'площадь Островского, 1/3',coord:[59.933492,30.335604]},
   {id:3,name:'Гостиница «Европа» / Большой зал Филармонии',address:'Михайловская улица, 2',coord:[59.936061,30.331481]},
   {id:4,name:'Михайловский дворец',address:'Инженерная улица, 2–4',coord:[59.939002,30.331502]},
   {id:5,name:'Пассаж',address:'Итальянская улица, 19',coord:[59.935920,30.334720]},
   {id:6,name:'Доходный дом П. А. Фокина',address:'набережная реки Фонтанки, 5 / Караванная улица, 2',coord:[59.937600,30.342400]},
   {id:7,name:'Шереметевский дворец',currentName:'Музей музыки',address:'набережная реки Фонтанки, 34',coord:[59.936471,30.345486]}
 ]},
 {id:3,colorClass:'c3',color:'#ce68ff',colorName:'Фиолетовый маршрут',name:'Фонтанный дом',title:'3. Фонтанный дом',shortTitle:'Фонтанный дом',blurb:'Маршрут о Фонтанном доме, памяти музыкального салона и дружеской встрече, из которой рождается разговор о прошлом.',longText:routeLorem,points:[
   {id:1,name:'Шереметевский дворец',currentName:'Музей музыки',address:'набережная реки Фонтанки, 34',coord:[59.936471,30.345486]},
   {id:2,name:'Музей-квартира семьи актёров Самойловых',address:'Стремянная улица, 8',coord:[59.931265,30.350453]}
 ]},
 {id:4,colorClass:'c4',color:'#7ee36a',colorName:'Зелёный маршрут',name:'Репин — Серов',title:'4. Репин — Серов',shortTitle:'Репин — Серов',blurb:'Маршрут о преемственности, художественном взгляде двух поколений и движении между памятью и ожиданием нового.',longText:routeLorem,points:[
   {id:1,name:'Музей-квартира семьи актёров Самойловых',address:'Стремянная улица, 8',coord:[59.931265,30.350453]},
   {id:2,name:'Музей-квартира Н. А. Римского-Корсакова',address:'Загородный проспект, 28',coord:[59.924734,30.340715]}
 ]}
];
const landmarks=[
 {title:'Думская башня',coord:[59.934684,30.329620],img:'./assets/dumskaya.svg'},
 {title:'Собор Владимирской иконы Божией Матери',coord:[59.928181,30.348258],img:'./assets/vladimir.svg'},
 {title:'Аничков мост',coord:[59.933203,30.343375],img:'./assets/anichkov.svg'}
];
const PROGRESS_STORAGE_KEY='gm_progress_v2';
function readProgressState(){
  try{
    const saved=JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY)||'null');
    if(saved && saved.version===2) return saved;
  }catch(error){}
  const legacyVisited=JSON.parse(sessionStorage.getItem('gm_visited_routes')||'[]');
  const legacyPassed=JSON.parse(sessionStorage.getItem('gm_passed_routes')||'[]');
  const legacyViewed=JSON.parse(sessionStorage.getItem('gm_viewed_routes')||'[]');
  return {
    version:2,
    selectedRoute:Number(sessionStorage.getItem('gm_current_route')||1),
    selectedPoints:{1:1,2:1,3:1,4:1},
    passed:[],
    viewed:[],
    updatedAt:Date.now()
  };
}
const persistedProgress=readProgressState();
let selectedRoute=Number(persistedProgress.selectedRoute||1);
let selectedPoints={1:1,2:1,3:1,4:1,...(persistedProgress.selectedPoints||{})};
let passed=new Set(persistedProgress.passed||[]);
// TODO before final PWA release: remove these two demonstration completed stops.
passed.add('2:1');
passed.add('2:2');
let viewed=new Set(persistedProgress.viewed||[]);
const HOME_RETURN_KEY='gm_home_return_v1';
let homeReturnState=null;
let routeChoiceExpanded=false,routeDetailOrigin='routes';
let ymap=null, yandexReadyPromise=null, routeObjects=[], routeLine=null, userMark=null, mapSource='intro', routeListOrigin='intro', geoWatchId=null;
const drawerBottomHint=document.querySelector('.drawer-bottom-hint');
const pointGalleryOverlay=$('pointGalleryOverlay'), pointStoryOverlay=$('pointStoryOverlay');
const pointGalleryBoard=$('pointGalleryBoard'), pointStoryScroll=$('pointStoryScroll');
const storyHeaderKicker=$('storyHeaderKicker'), pointStoryScrollHint=$('pointStoryScrollHint');
const galleryTitle=$('galleryTitle'), galleryHeaderKicker=$('galleryHeaderKicker');
const galleryThumbs=$('galleryThumbs'), galleryMainImage=$('galleryMainImage');
const galleryActiveNumber=$('galleryActiveNumber'), galleryActiveTitle=$('galleryActiveTitle'), galleryActiveText=$('galleryActiveText');
const galleryCounter=$('galleryCounter');
const galleryScrollHint=document.querySelector('.camera-gallery-scroll-hint');
const galleryViewfinder=$('galleryViewfinder'), galleryFullscreen=$('galleryFullscreen'), galleryFullscreenToggle=$('galleryFullscreenToggle'), galleryFullscreenImage=$('galleryFullscreenImage'), galleryFullscreenTitle=$('galleryFullscreenTitle'), galleryFullscreenText=$('galleryFullscreenText');
const galleryState={items:[],activeIndex:0,isSwitching:false,isExpanded:false};
function route(){return routes.find(r=>r.id===selectedRoute)||routes[0]}
function point(){const r=route();return r.points.find(p=>p.id===Number(selectedPoints[r.id]))||r.points[0]}
function pointKey(routeId,pointId){return `${Number(routeId)}:${Number(pointId)}`}
viewed.add(pointKey(selectedRoute,point().id));
function saveState(){
  const state={version:2,selectedRoute,selectedPoints,passed:[...passed],viewed:[...viewed],updatedAt:Date.now()};
  try{localStorage.setItem(PROGRESS_STORAGE_KEY,JSON.stringify(state));}catch(error){}
  sessionStorage.setItem('gm_current_route',String(selectedRoute));
  sessionStorage.setItem('gm_passed_routes',JSON.stringify([...passed]));
  sessionStorage.setItem('gm_viewed_routes',JSON.stringify([...viewed]));
}
function markViewed(routeId,pointId){viewed.add(pointKey(routeId,pointId));saveState();}
function markPassed(routeId,pointId){passed.add(pointKey(routeId,pointId));saveState();}
function statusForPoint(routeId,pointId){const key=pointKey(routeId,pointId);if(passed.has(key))return'passed';if(viewed.has(key))return'viewed';return'unvisited';}
function labelForPoint(routeId,pointId){const st=statusForPoint(routeId,pointId);return st==='passed'?'пройдена':st==='viewed'?'просмотрена':'впереди'}
function exploredCount(){const r=route();return r.points.filter(p=>viewed.has(pointKey(r.id,p.id))||passed.has(pointKey(r.id,p.id))).length}
function show(name,source='intro'){
 document.body.classList.toggle('walk-wide',name==='yandex');
 if(name==='intro')requestAnimationFrame(fitCurtainLogo);
 if(name==='routes'){routeListOrigin=source;routeChoiceExpanded=false;}
 if(name!=='prologue') closePrologueMenu();
 introScreen.hidden=name!=='intro'; if(prologueScreen)prologueScreen.hidden=name!=='prologue'; routesScreen.hidden=name!=='routes'; yandexScreen.hidden=name!=='yandex';
 if(name==='prologue' || name==='routes'){
   updateRouteUI();
   requestAnimationFrame(()=>{
     if(name==='prologue') fitPrologueLayout();
     if(name==='routes') fitRouteSelectLayout();
   });
 }
 if(name==='yandex'){
   startGeoWatch();
   mapSource=source;
   closeDrawer();
   closePointOverlay(pointGalleryOverlay);
   closePointOverlay(pointStoryOverlay);
   updateRouteUI();
   closeSheet();
   initMapWhenVisible();
   setTimeout(resizeMapSoon, 120);
   setTimeout(fitSelectedRouteBounds, 240);
 } else {
   stopGeoWatch();
   closePointOverlay(pointGalleryOverlay);
   closePointOverlay(pointStoryOverlay);
 }
}
function updateRouteUI(){
 const r=route();
 const p=point();
 routesScreen?.style.setProperty('--active-route-color',r.color);
 routeDetailModal?.style.setProperty('--active-route-color',r.color);pointSheet?.style.setProperty('--active-route-color',r.color);
 routeTitle.textContent=r.title; routeText.textContent=r.blurb;
 pointCounter.textContent=`Точка ${p.id} из ${r.points.length}`; mapPointTitle.textContent=p.name; if(p.name==='Гостиница «Европа» / Большой зал Филармонии')mapPointTitle.innerHTML='Гостиница «Европа»<br>Большой зал Филармонии'; const now=$('mapPointNow');if(now){now.textContent=p.currentName?`Сегодня: ${p.currentName}`:'';now.hidden=!p.currentName;} const contextRoute=$('contextRoute'),contextAddress=$('contextAddress');if(contextRoute){$('mapContext')?.style.setProperty('--active-route-color',r.color);contextRoute.textContent=String(r.id).padStart(2,'0');contextRoute.style.color=r.color;}if(contextAddress)contextAddress.textContent=p.address; mapPointTitle.removeAttribute('data-title-size'); if(mapPointAddress)mapPointAddress.textContent=p.address; mapPointText.textContent=p.summary||pointLorem;
 if(peekRouteText)peekRouteText.textContent=`#${r.id}`; peekPointNum.textContent=p.id; peekPointPin.className=`peek-pin route-${r.colorClass}`;
 const audioActLabel=$('audioActLabel');if(audioActLabel)audioActLabel.textContent=`Акт ${p.id}`;
 if(audio){const nextSrc=p.audio||'./assets/1.mp3';if(audio.getAttribute('src')!==nextSrc){audio.src=nextSrc;resetAudio();}}
 document.querySelectorAll('.pin,.tab').forEach(el=>el.classList.toggle('active',Number(el.dataset.route)===r.id));document.querySelectorAll('.route-choice').forEach(el=>{const expanded=routeChoiceExpanded&&Number(el.dataset.route)===r.id;el.classList.toggle('active',expanded);el.setAttribute('aria-expanded',String(expanded));});const activeChoice=document.querySelector(`.route-choice[data-route="${r.id}"]`),choiceList=$('routeChoiceList'),detail=document.querySelector('.route-select-detail');if(activeChoice&&choiceList&&detail&&detail.previousElementSibling!==activeChoice)activeChoice.after(detail);if(detail)detail.hidden=!routeChoiceExpanded;const routeDock=document.querySelector('.route-action-dock');if(routeDock)routeDock.hidden=!routeChoiceExpanded;
 renderDrawerList(); updateMapMarkers();
 if(pointStoryOverlay && !pointStoryOverlay.hidden) renderPointStory();
 if(routeDetailModal && !routeDetailModal.hidden)renderRouteDetail();
 updatePointNavState();
}

function setSelectedRoute(id){
 selectedRoute=Number(id);
 if(!route().points.some(p=>p.id===Number(selectedPoints[selectedRoute])))selectedPoints[selectedRoute]=1;
 markViewed(selectedRoute,point().id);
 updateRouteUI();
 resetAudio();
 rebuildRouteObjects();
}
function selectPoint(id,{fromMap=false}={}){
 selectedPoints[selectedRoute]=Number(id);
 markViewed(selectedRoute,point().id);
 updateRouteUI();
 resetAudio();
 openSheet();
}

function changePoint(step){const r=route();const next=Math.max(1,Math.min(r.points.length,point().id+step));if(next!==point().id)selectPoint(next)}
function updatePointNavState(){const p=point(),r=route();const back=$('mapBack'),next=$('nextRoute');if(back)back.disabled=p.id===1;if(next)next.disabled=p.id===r.points.length;}
function openSheet(){pointSheet.classList.remove('closed');yandexScreen.classList.add('sheet-open');yandexScreen.classList.remove('sheet-closed');resizeMapSoon(); focusActiveRouteForOpenSheet(); }
function closeSheet(){pointSheet.classList.add('closed');yandexScreen.classList.add('sheet-closed');yandexScreen.classList.remove('sheet-open');resizeMapSoon(); focusActiveRouteForClosedSheet(); }
function toggleSheet(){pointSheet.classList.contains('closed')?openSheet():closeSheet()}
function focusActiveRouteForOpenSheet(){
 if(!ymap) return;
 const p=point();
 const target=[p.coord[0]-0.0082,p.coord[1]];
 setTimeout(()=>ymap.setCenter(target, ymap.getZoom(), {duration:260}), 40);
 setTimeout(()=>ymap.setCenter(target, ymap.getZoom(), {duration:180}), 320);
}
function focusActiveRouteForClosedSheet(){
 if(!ymap) return;
 const p=point();
 const target=[p.coord[0]-0.0011,p.coord[1]];
 setTimeout(()=>ymap.setCenter(target, ymap.getZoom(), {duration:260}), 60);
}
function renderDrawerList(){
 if(!drawerList)return;
 const r=route();
 const completed=exploredCount();
 drawer?.style.setProperty('--active-route-color',r.color);
 drawerRouteChip.style.setProperty('--active-route-color',r.color);drawerRouteChip.innerHTML=`<span>МАРШРУТ <b>${String(selectedRoute).padStart(2,'0')}</b></span><strong>${r.name}</strong>`;
 drawerProgressLabel.textContent=`${Math.min(completed,r.points.length)} / ${r.points.length}`;
 drawerProgressLine.style.width=`${Math.min(completed,r.points.length)/r.points.length*100}%`;drawerProgressLine.style.background=r.color;
 const progressMetaLabel=drawerProgressLabel?.parentElement?.querySelector('span:last-child');if(progressMetaLabel)progressMetaLabel.textContent='точек';
 drawerList.innerHTML=r.points.map(p=>`<button class="route-list-item ${r.colorClass} ${statusForPoint(r.id,p.id)} ${point().id===p.id?'active current-origin':''}" style="--active-route-color:${r.color}" data-point="${p.id}" type="button"><span class="badge">${p.id}</span><span class="title"><strong>${p.name}</strong><small>${p.address}</small></span><span class="status">${labelForPoint(r.id,p.id)}</span></button>`).join('');
 drawerList.querySelectorAll('[data-point]').forEach(btn=>btn.addEventListener('click',()=>{selectPoint(btn.dataset.point);closeDrawer();}));
 updateStepEstimate();
 updateDrawerHint();
}
function updateStepEstimate(){
 const r=route();
 let distance=0;
 for(let i=1;i<r.points.length;i++){
   if(passed.has(pointKey(r.id,r.points[i-1].id))&&passed.has(pointKey(r.id,r.points[i].id)))distance+=haversine(r.points[i-1].coord,r.points[i].coord)*1.25;
 }
 const steps=Math.round(distance/.75),formatter=new Intl.NumberFormat('ru-RU');
 if($('estimatedSteps'))$('estimatedSteps').textContent=`${formatter.format(steps)} шагов`;
}
function setDrawerTab(tab){
 drawerTabs.forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
 Object.entries(drawerPanels).forEach(([k,p])=>{p.hidden=k!==tab;p.classList.toggle('active',k===tab)});
 if(tab==='points') renderDrawerList();if(tab==='route'){$('drawerRouteTitle').textContent=route().name;$('drawerRouteText').textContent=route().blurb;}
 updateDrawerHint();
}
function openDrawer(tab='points'){
 $('openDrawer')?.classList.add('is-open');$('openDrawer')?.setAttribute('aria-expanded','true');
 drawer.hidden=false;drawer.removeAttribute('hidden');
 requestAnimationFrame(()=>drawer.classList.add('open'));
 setDrawerTab(tab);
 setTimeout(updateDrawerHint,60);
}
function closeDrawer(){$('openDrawer')?.classList.remove('is-open');$('openDrawer')?.setAttribute('aria-expanded','false');drawer.classList.remove('open');setTimeout(()=>{if(!drawer.classList.contains('open'))drawer.hidden=true},440)}
function updateDrawerHint(){
 const area=$('drawerScrollArea');
 if(!area||!drawerBottomHint||drawer.hidden) return;
 const activePanel=[...area.children].find(node=>!node.hidden);
 const canScroll=!!activePanel && area.scrollHeight>area.clientHeight+8;
 drawerBottomHint.hidden=!canScroll;
 if(canScroll){
   const atTop=area.scrollTop<=2;
   const atBottom=area.scrollTop+area.clientHeight>=area.scrollHeight-2;
   drawerBottomHint.textContent=atTop?'↕ листайте':(atBottom?'↑ наверх':'↕ листайте');
 }
}

function updatePrologueMenuHint(){
 const scroll=$('prologueMenuScroll');
 if(!scroll||!prologueMenuBottomHint||prologueMenuDrawer.hidden) return;

 // Measure only the currently visible section and ignore the extra bottom space
 // reserved for the hint itself. This keeps the hint hidden on compact forms
 // that already fit completely on screen.
 // Keep the reserved hint space stable during scrolling.
 const activePanel=[...scroll.children].find(node=>!node.hidden);
 const contentHeight=activePanel?activePanel.scrollHeight:0;
 const canScroll=contentHeight>scroll.clientHeight+12;

 prologueMenuBottomHint.hidden=!canScroll;
 scroll.classList.add('has-scroll-hint');
 if(!canScroll){
   return;
 }

 const atTop=scroll.scrollTop<=2;
 const contentBottom=activePanel?activePanel.getBoundingClientRect().bottom-scroll.getBoundingClientRect().top+scroll.scrollTop:scroll.scrollHeight;
 const atBottom=scroll.scrollTop+scroll.clientHeight>=contentBottom-12;
 prologueMenuBottomHint.querySelector('span').textContent=atTop?'↓ листайте':(atBottom?'↑ наверх':'↕ листайте');
}
function setPrologueMenuTab(tab){
 prologueMenuTabs.forEach(btn=>btn.classList.toggle('active',btn.dataset.prologueTab===tab));
 Object.entries(prologueMenuPanels).forEach(([key,panel])=>{
   if(!panel) return;
   panel.hidden=key!==tab;
   panel.classList.toggle('active',key===tab);
 });
 const scroll=$('prologueMenuScroll');
 if(scroll) scroll.scrollTop=0;
 setTimeout(updatePrologueMenuHint,30);
}
function setPosterFilter(filter){
 posterFilterButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.posterFilter===String(filter)));
 museumEvents.forEach(event=>{
   const visible=filter==='all'||event.dataset.venue===String(filter);
   event.hidden=!visible;
 });
 const scroll=$('prologueMenuScroll');
 if(scroll) scroll.scrollTop=0;
 setTimeout(updatePrologueMenuHint,30);
}
function openPrologueMenu(tab='project'){
 if(!prologueMenuDrawer) return;
 prologueMenuDrawer.hidden=false;
 prologueMenuDrawer.removeAttribute('hidden');
 setPrologueMenuTab(tab);
 requestAnimationFrame(()=>prologueMenuDrawer.classList.add('open'));
 setTimeout(updatePrologueMenuHint,80);
}
function closePrologueMenu(){
 if(!prologueMenuDrawer) return;
 prologueMenuDrawer.classList.remove('open');
 setTimeout(()=>{if(!prologueMenuDrawer.classList.contains('open'))prologueMenuDrawer.hidden=true},260);
}
function setContactMode(mode){
 contactModeButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.contactMode===mode));
 Object.entries(contactForms).forEach(([key,form])=>{
   if(!form) return;
   form.hidden=key!==mode;
   form.classList.toggle('active',key===mode);
 });
 const active=contactForms[mode];
 if(active){
   const status=active.querySelector('.contact-form-status');
   if(status) status.textContent='';
 }
 setTimeout(updatePrologueMenuHint,30);
}

function galleryItemsForRoute(r){
 const shots=[
   {src:'./assets/gallery-photo-canal.png', alt:'Набережная канала в Петербурге', title:'Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.', position:'center center'},
   {src:'./assets/gallery-photo-arcade.png', alt:'Аркада здания в Петербурге', title:'Dolor sit amet', text:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', position:'center center'}
 ];
 const titles=[
   ['Lorem ipsum dolor','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Pellentesque habitant morbi tristique senectus et netus.'],
   ['Dolor sit amet','Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Vestibulum congue enim vitae est porttitor, ac vulputate leo facilisis.'],
   ['Consectetur elit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo vel augue. Aenean dictum lectus nec ante ultrices, a dapibus odio luctus.'],
   ['Adipiscing elit','Curabitur blandit, velit risus maximus tellus, vitae posuere sapien justo non pretium. Mauris interdum massa nec dui mollis, ac tempus magna iaculis.'],
   ['Sed do eiusmod','Praesent commodo neque at fermentum ultrices. Etiam gravida cursus est at sodales. Duis sit amet erat non tortor tempor sagittis in nec lacus.'],
   ['Tempor incididunt','Aenean feugiat risus eu semper pulvinar. Donec ut pretium nibh, non aliquet nisi. Aliquam at arcu ut neque molestie volutpat non sed lorem.'],
   ['Ut labore','Integer suscipit tortor nec turpis faucibus, vitae auctor purus feugiat. Suspendisse potenti. Fusce sed turpis volutpat, aliquet ante non, facilisis velit.'],
   ['Dolore magna','Morbi feugiat nisi at neque dictum, nec placerat lorem fermentum. Quisque consequat mi sed lectus blandit, sed eleifend orci imperdiet.']
 ];
 return titles.map((entry,index)=>({
   ...shots[index % 2],
   title:entry[0],
   text:entry[1]
 }));
}
function renderGalleryThumbs(){
 if(!galleryThumbs) return;
 galleryThumbs.innerHTML=galleryState.items.map((item,index)=>`<button class="camera-gallery-thumb ${index===galleryState.activeIndex?'active':''}" type="button" data-gallery-index="${index}" aria-label="Открыть фотографию ${index+1}: ${item.title}"><span class="camera-gallery-thumb-image"><img src="${item.src}" alt=""></span><span class="camera-gallery-thumb-copy"><strong>${String(index+1).padStart(2,'0')}. ${item.title}</strong></span></button>`).join('');
}
function getGalleryHiddenThumbCount(){
 if(typeof syncGalleryThumbVisibility==='function') return syncGalleryThumbVisibility().hidden;
 if(!galleryThumbs) return 0;
 const wrapRect=galleryThumbs.getBoundingClientRect();
 const thumbs=[...galleryThumbs.querySelectorAll('.camera-gallery-thumb')];
 let hiddenCount=0;
 thumbs.forEach((thumb)=>{
   const rect=thumb.getBoundingClientRect();
   const hiddenTop=rect.top < wrapRect.top + 1;
   const hiddenBottom=rect.bottom > wrapRect.bottom - 1;
   if(hiddenTop || hiddenBottom) hiddenCount++;
 });
 return hiddenCount;
}
function updateGalleryScrollHint(){
 if(!galleryThumbs || !galleryScrollHint) return;
 const canScroll=galleryThumbs.scrollHeight>galleryThumbs.clientHeight+8;
 if(!canScroll){
   galleryScrollHint.hidden=true;
   galleryThumbs.classList.remove('is-scrollable','needs-hint','single-hidden');
   galleryThumbs.scrollTop=0;
   return;
 }
 const hiddenCount=getGalleryHiddenThumbCount();
 galleryThumbs.classList.add('is-scrollable');
 galleryThumbs.classList.toggle('needs-hint',hiddenCount>=2);
 galleryThumbs.classList.toggle('single-hidden',hiddenCount===1);
 galleryScrollHint.hidden=hiddenCount<2;
 if(hiddenCount<2) return;
 const atTop=galleryThumbs.scrollTop<=2;
 const atBottom=galleryThumbs.scrollTop+galleryThumbs.clientHeight>=galleryThumbs.scrollHeight-2;
 galleryScrollHint.textContent=atBottom?'↑ наверх':(atTop?'↓ листайте':'↕ листайте');
}
function alignGalleryThumbsToActive(){
 if(!galleryThumbs) return;
 const activeThumb=galleryThumbs.querySelector('.camera-gallery-thumb.active');
 const canScroll=galleryThumbs.scrollHeight>galleryThumbs.clientHeight+8;
 if(!activeThumb || !canScroll) return;
 const viewTop=galleryThumbs.scrollTop;
 const maxScroll=Math.max(0,galleryThumbs.scrollHeight-galleryThumbs.clientHeight);
 let target=viewTop;
 if(galleryState.activeIndex<=0){
   target=0;
 }else if(galleryState.activeIndex>=galleryState.items.length-1){
   target=maxScroll;
 }else{
   const itemTop=activeThumb.offsetTop;
   const itemBottom=itemTop+activeThumb.offsetHeight;
   const viewBottom=viewTop+galleryThumbs.clientHeight;
   const thumbGap=parseFloat(galleryThumbs.style.gap || getComputedStyle(galleryThumbs).gap || '4') || 4;
   const thumbHeight=activeThumb.offsetHeight || 0;
   const topInset=Math.max(4, Math.round(Math.max(thumbGap * 0.8, thumbHeight * 0.10)));
   const bottomInset=Math.max(4, Math.round(Math.max(thumbGap * 0.75, thumbHeight * 0.10)));
   if(itemTop < viewTop + topInset){
     target=itemTop-topInset;
   }else if(itemBottom > viewBottom - bottomInset){
     target=itemBottom-galleryThumbs.clientHeight+bottomInset;
   }
   target=Math.max(0,Math.min(maxScroll,target));
 }
 if(Math.abs(target-viewTop) > 1) galleryThumbs.scrollTo({top:target,behavior:'auto'});
}
function updateGalleryView(){
 const item=galleryState.items[galleryState.activeIndex];
 if(!item) return;
 if(galleryMainImage){
   galleryMainImage.alt=item.alt;
   galleryMainImage.decoding='sync';
   galleryMainImage.loading='eager';
   galleryMainImage.style.objectPosition=item.position||'center center';
   galleryMainImage.style.opacity='1';
   galleryMainImage.style.visibility='visible';
   galleryMainImage.style.display='block';
   if(galleryMainImage.getAttribute('src')!==item.src){
     galleryMainImage.setAttribute('src',item.src);
   }else{
     galleryMainImage.src=item.src;
   }
 }
 if(galleryViewfinder){
   galleryViewfinder.style.backgroundImage='none';
   galleryViewfinder.style.backgroundPosition=item.position||'center center';
   galleryViewfinder.style.backgroundSize='cover';
   galleryViewfinder.style.backgroundRepeat='no-repeat';
 }
 if(galleryActiveNumber) galleryActiveNumber.textContent=String(galleryState.activeIndex+1).padStart(2,'0');
 if(galleryActiveTitle) galleryActiveTitle.textContent=item.title;
 if(galleryActiveText) galleryActiveText.textContent=item.text;
 if(galleryCounter) galleryCounter.textContent=`${String(galleryState.activeIndex+1).padStart(2,'0')} / ${String(galleryState.items.length).padStart(2,'0')}`;
 if(galleryFullscreenImage){ galleryFullscreenImage.src=item.src; galleryFullscreenImage.alt=item.alt; }
 if(galleryFullscreenTitle) galleryFullscreenTitle.textContent=item.title;
 if(galleryFullscreenText) galleryFullscreenText.textContent=item.text;
 if(galleryThumbs){
   galleryThumbs.querySelectorAll('[data-gallery-index]').forEach((button,index)=>{
     const active=index===galleryState.activeIndex;
     button.classList.toggle('active',active);
     button.setAttribute('aria-current',active?'true':'false');
   });
   alignGalleryThumbsToActive();
   [0,80,200].forEach(delay=>window.setTimeout(()=>{syncGalleryThumbVisibility(); updateGalleryScrollHint();},delay));
 }
}
function openGalleryFullscreen(){
 if(!galleryFullscreen || !galleryFullscreenImage || !galleryState.items.length) return;
 galleryState.isExpanded=true;
 galleryFullscreen.hidden=false;
 galleryFullscreen.setAttribute('aria-hidden','false');
 requestAnimationFrame(()=>galleryFullscreen.classList.add('open'));
}
function closeGalleryFullscreen(){
 if(!galleryFullscreen) return;
 galleryState.isExpanded=false;
 galleryFullscreen.classList.remove('open');
 galleryFullscreen.setAttribute('aria-hidden','true');
 setTimeout(()=>{ if(!galleryFullscreen.classList.contains('open')) galleryFullscreen.hidden=true; },220);
}
function toggleGalleryFullscreen(){
 if(galleryState.isExpanded) closeGalleryFullscreen();
 else openGalleryFullscreen();
}

function selectGalleryItem(index){
 if(!pointGalleryBoard||galleryState.isSwitching||!galleryState.items.length) return;
 const total=galleryState.items.length;
 const nextIndex=(index+total)%total;
 if(nextIndex===galleryState.activeIndex) return;
 galleryState.isSwitching=true;
 pointGalleryBoard.classList.remove('is-blinking');
 void pointGalleryBoard.offsetWidth;
 pointGalleryBoard.classList.add('is-blinking');
 window.setTimeout(()=>{
   galleryState.activeIndex=nextIndex;
   updateGalleryView();
 },130);
 window.setTimeout(()=>{
   pointGalleryBoard.classList.remove('is-blinking');
   galleryState.isSwitching=false;
 },360);
}
function renderPointGallery(){
 if(!pointGalleryBoard || !galleryTitle || !galleryHeaderKicker) return;
 const r=route();
 galleryHeaderKicker.textContent=`Точка маршрута #${r.id}`;
 galleryTitle.textContent=r.shortTitle;
 galleryState.items=galleryItemsForRoute(r);
 galleryState.activeIndex=0;
 galleryState.isSwitching=false;
 renderGalleryThumbs();
 updateGalleryView();
 window.setTimeout(()=>{fitGalleryLayout();updateGalleryScrollHint();}, 90);
}

function updatePointStoryHint(){
 if(!pointStoryScroll || !pointStoryScrollHint) return;
 const canScroll=pointStoryScroll.scrollHeight>pointStoryScroll.clientHeight+8;
 pointStoryScrollHint.hidden=!canScroll;
 if(!canScroll){const back=$('pointStoryBottomBack');if(back)back.hidden=false;return;}
 const atTop=pointStoryScroll.scrollTop<=3;
 const atBottom=pointStoryScroll.scrollTop+pointStoryScroll.clientHeight>=pointStoryScroll.scrollHeight-4;
 pointStoryScrollHint.querySelector('span').textContent=atBottom?'↑ наверх':(atTop?'↓ листайте':'↕ листайте');const back=$('pointStoryBottomBack');if(back)back.hidden=!atBottom;
}
function renderPointStory(){
 if(!pointStoryScroll) return;
 const r=route();
 const locationTitle=(r.shortTitle.split('→')[0]||r.shortTitle).trim();
 if(storyHeaderKicker) storyHeaderKicker.textContent=`Точка маршрута #${r.id}`;
 pointStoryScroll.innerHTML=`
   <article class="story-article">
     <div class="story-opening-meta story-opening-meta-compact">
       <span>Маршрут ${String(r.id).padStart(2,'0')}</span>
       <i></i>
       <b>${locationTitle} <span class="story-address-note">(адрес точки)</span></b>
     </div>

     <div class="story-rule story-rule-first"><span>История места</span><i></i></div>

     <section class="story-section">
       <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
       <div class="story-columns">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi nec massa tincidunt hendrerit. Integer ac dui at orci accumsan gravida. Maecenas feugiat nisl sed lectus dignissim, non faucibus odio tempor.</p>
         <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec sodales ligula id sapien sagittis, in posuere enim pellentesque. Aenean feugiat risus eu semper pulvinar.</p>
       </div>
     </section>

     <blockquote class="story-quote">
       <span class="story-quote-mark">“</span>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
       <cite>— Lorem ipsum, dolor sit amet</cite>
     </blockquote>

     <figure class="story-image-band">
       <img src="./assets/gallery-photo-arcade.png" alt="Lorem ipsum dolor sit amet">
       <figcaption><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></figcaption>
     </figure>

     <div class="story-rule story-rule-second"><span>Контекст</span><i></i></div>

     <section class="story-section story-section-accent story-context-section">
       <h6>Praesent commodo neque at fermentum ultrices</h6>
       <div class="story-context-copy">
         <p>Phasellus efficitur neque vel nibh mollis, vitae porta lectus suscipit. Aliquam erat volutpat. Etiam gravida cursus est, at sodales augue tristique sit amet. Nunc commodo, justo ac luctus consequat, augue erat fermentum ipsum, non gravida est erat a magna.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at orci vitae arcu posuere luctus. Morbi feugiat nisi at neque dictum, nec placerat lorem fermentum. Praesent sit amet luctus lectus.</p>
       </div>
       <div class="story-end-mark" aria-hidden="true"><span></span><i></i><span></span></div>
     </section>
   </article>`;
 pointStoryScroll.scrollTop=0;
 requestAnimationFrame(()=>{updatePointStoryHint();observeStorySections(pointStoryScroll);normalizeArrowButtons(pointStoryScroll);});
}
function closePointOverlay(overlay){
 if(!overlay) return;
 if(overlay===pointGalleryOverlay) closeGalleryFullscreen();
 if(overlay===pointStoryOverlay) closeInfoGalleryFullscreen();
 overlay.classList.remove('open');
 setTimeout(()=>{if(!overlay.classList.contains('open')) overlay.hidden=true},260);
}
function openPointOverlay(overlay){
 if(!overlay) return;
 [pointGalleryOverlay,pointStoryOverlay].forEach(item=>{if(item&&item!==overlay) closePointOverlay(item)});
 if(overlay===pointGalleryOverlay) renderPointGallery();
 if(overlay===pointStoryOverlay) renderPointStory();
 overlay.hidden=false;
 overlay.removeAttribute('hidden');
 requestAnimationFrame(()=>{overlay.classList.add('open'); if(overlay===pointGalleryOverlay) fitGalleryLayout(); if(overlay===pointStoryOverlay||overlay===pointGalleryOverlay) fitPrologueLayout();});
}

const walkGuideModal=$('walkGuideModal'),routeDetailModal=$('routeDetailModal');
function openContentModal(modal){if(!modal)return;modal.hidden=false;modal.removeAttribute('hidden');modal.setAttribute('aria-hidden','false');if(modal.id==='walkGuideModal')modal.querySelector('.walk-guide-scroll').scrollTop=0;requestAnimationFrame(()=>modal.classList.add('open'));}
function closeContentModal(modal){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');setTimeout(()=>{if(!modal.classList.contains('open'))modal.hidden=true},460);}
function renderRouteDetail(){const r=route();routeDetailModal?.style.setProperty('--active-route-color',r.color);$('routeDetailKicker').textContent=`${r.colorName} · маршрут ${String(r.id).padStart(2,'0')}`;$('routeDetailTitle').innerHTML=r.id===1?'Римский-Корсаков<br>— Шаляпин':r.name;$('routeDetailSubtitle').textContent=r.blurb.split(',')[0].replace(/\.$/,'')+'.';$('routeStart').textContent=r.points[0].name;$('routeEnd').textContent=r.points.at(-1).name;$('routeDetailLong').innerHTML='';$('routeContextCopy').innerHTML='<p>'+r.blurb+'</p>';renderRouteGallery();requestAnimationFrame(()=>observeStorySections(routeDetailModal));}
const routeGalleryItems=[
 {src:'./assets/direction-volkonsky-portrait.jpg',alt:'Князь С. М. Волконский',caption:'Князь С. М. Волконский'},
 {src:'./assets/direction-kshesinskaya.jpg',alt:'М. Ф. Кшесинская',caption:'М. Ф. Кшесинская'}
];
let routeGalleryIndex=0,routeGalleryStartX=null;
function renderRouteGallery(){const item=routeGalleryItems[routeGalleryIndex];if(!$('routeGalleryImage'))return;const routePhoto=$('routeGalleryImage');const changed=routePhoto.getAttribute('src')!==item.src;routePhoto.src=item.src;if(changed)takePhotoEffect(routePhoto.closest('.route-gallery-stage'));$('routeGalleryImage').alt=item.alt;$('routeGalleryCaption').textContent=item.caption;$('routeGalleryCount').textContent=`${String(routeGalleryIndex+1).padStart(2,'0')} / ${String(routeGalleryItems.length).padStart(2,'0')}`;routeDetailModal?.querySelectorAll('[data-route-gallery-index]').forEach((button,index)=>{button.classList.toggle('active',index===routeGalleryIndex);button.setAttribute('aria-pressed',String(index===routeGalleryIndex))});}

const infoGalleryState={items:[],activeIndex:0,touchStartX:null};
function storyGalleryItems(p){
 const source=p.images||[{src:'./assets/gallery-photo-arcade.png',alt:'Иллюстрация прототипа',text:'Материалы для этой точки готовятся.'}];
 return source.map((item,index)=>({src:item.src,alt:item.alt||p.name,title:p.name,text:item.text||item.alt||p.name}));
}
function renderInfoGallery(){
 const item=infoGalleryState.items[infoGalleryState.activeIndex];if(!item||!pointStoryScroll)return;
 const main=pointStoryScroll.querySelector('#infoGalleryMainImage'),full=pointStoryScroll.querySelector('#infoGalleryFullscreenImage');
 if(main){main.src=item.src;main.alt=item.alt;const orient=()=>main.closest('.info-gallery-frame')?.classList.toggle('portrait',main.naturalHeight>main.naturalWidth);main.onload=orient;if(main.complete)orient();}if(full){full.src=item.src;full.alt=item.alt;}
 const counter=pointStoryScroll.querySelector('#infoGalleryCounter');if(counter)counter.textContent=`${String(infoGalleryState.activeIndex+1).padStart(2,'0')} / ${String(infoGalleryState.items.length).padStart(2,'0')}`;
 const caption=pointStoryScroll.querySelector('#infoGalleryCaption');if(caption)caption.textContent=item.text;
 pointStoryScroll.querySelectorAll('[data-info-gallery-index]').forEach((button,index)=>{button.classList.toggle('active',index===infoGalleryState.activeIndex);button.setAttribute('aria-current',index===infoGalleryState.activeIndex?'true':'false');if(index===infoGalleryState.activeIndex)button.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});});
}
function selectInfoGalleryItem(index){const total=infoGalleryState.items.length;if(!total)return;infoGalleryState.activeIndex=(Number(index)+total)%total;const frame=pointStoryScroll?.querySelector('.info-gallery-frame');if(frame){frame.classList.remove('switching');void frame.offsetWidth;frame.classList.add('switching');setTimeout(()=>frame.classList.remove('switching'),300);}renderInfoGallery();takePhotoEffect(frame);}
function closeInfoGalleryFullscreen(){
 const full=pointStoryScroll?.querySelector('#infoGalleryFullscreen');
 pointStoryOverlay?.classList.remove('photo-open');
 if(full){full.classList.remove('open');setTimeout(()=>{if(!full.classList.contains('open'))full.hidden=true;},220);}
}
function renderPointStory(){
 if(!pointStoryScroll)return;const r=route(),p=point();if(storyHeaderKicker)storyHeaderKicker.textContent=`Маршрут ${String(r.id).padStart(2,'0')} · точка ${p.id}`;if($('storyHeaderAddress'))$('storyHeaderAddress').textContent=p.address;
 infoGalleryState.items=storyGalleryItems(p);infoGalleryState.activeIndex=0;
 const isDirection=r.id===2&&p.id===1;
 const intro=isDirection?[
 'История учреждения, управляющего всеми императорскими театрами России, началась в 1766 году, когда Екатерина II своим приказом утвердила в столице Дирекцию придворных театров. В 1842 году под управление петербургской дирекции перешли московские императорские театры, что создало единую централизованную систему.',
 'В задачи дирекции входили руководство драматическими, оперными и балетными труппами, решение организационных, хозяйственных, финансовых и творческих вопросов. Именно здесь принимались ключевые решения, определявшие развитие русского театра, и вершились судьбы артистов, режиссёров, драматургов.',
 'В 1917 году Российская империя прекратила существование, а вместе с ней и Дирекция Императорских театров. 16 мая 1921 года в её стенах открыл свои двери Театральный музей.'
 ]:['Материалы об этой точке готовятся. Здесь появится полный рассказ об истории места.'];
 const context=isDirection?[
 'Здание на площади Островского — эталон русского классицизма, созданный в 1828–1834 годах как часть ансамбля Новой Театральной улицы, позже получившей название в честь своего создателя — Карла Росси.',
 'Изначально здание было построено как доходный дом Департамента уделов Министерства императорского двора. Помимо гостиницы и съёмных меблированных комнат, на первом этаже располагались лавки купцов и фабрик.',
 'В 1836 году здание было выкуплено Дирекцией. Архитектор Альберт Кавос начал изменение фасада и частичную перепланировку. После завершения работ часть помещений заняло театральное училище (ныне Академия Русского балета имени А. Я. Вагановой).'
 ]:['Дополнительный исторический контекст будет добавлен вместе с материалами этой точки.'];
 pointStoryScroll.innerHTML=`<article class="story-article info-story-article">
   <div class="story-rule story-rule-first"><span>История места</span><i></i></div>
   <section class="story-section"><div class="story-columns">${intro.map((t,index)=>`<p class="story-prose-block">${t}</p>`).join('')}</div></section>
   ${isDirection?'<blockquote class="story-quote"><span class="story-quote-mark">“</span><p>В приёмной у директора Императорских театров, князя Волконского, висела огромная картина Айвазовского — «Буря». Сам князь говорил, что она как нельзя лучше передавала обстановку в его ведомстве.</p></blockquote>':''}
   <div class="story-rule"><span>Галерея</span><i></i></div>
   <figure class="story-image-band story-image-slider" aria-label="Фотографии точки">
     <div class="info-gallery-thumbs" aria-label="Миниатюры фотографий">${infoGalleryState.items.map((item,index)=>`<button type="button" data-info-gallery-index="${index}" class="info-gallery-thumb ${index===0?'active':''}" aria-label="Фото ${index+1}: ${item.alt}"><img src="${item.src}" alt=""></button>`).join('')}</div>
     <div class="info-gallery-body"><div class="info-gallery-frame"><button class="info-gallery-main" id="infoGalleryOpen" type="button" aria-label="Открыть фотографию в полном размере"><img id="infoGalleryMainImage" src="${infoGalleryState.items[0].src}" alt="${infoGalleryState.items[0].alt}"></button><button class="story-gallery-prev" data-info-gallery-step="-1" type="button" aria-label="Предыдущая фотография">←</button><button class="story-gallery-next" data-info-gallery-step="1" type="button" aria-label="Следующая фотография">→</button></div>
     <figcaption><div class="gallery-caption-top"><span>Архивные материалы</span><span id="infoGalleryCounter">01 / ${String(infoGalleryState.items.length).padStart(2,'0')}</span></div><p id="infoGalleryCaption">${infoGalleryState.items[0].text}</p></figcaption></div>
   </figure>
   <div class="story-rule story-rule-second"><span>Контекст</span><i></i></div>
   <section class="story-section story-context-section"><div class="story-context-copy">${context.map(t=>`<p>${t}</p>`).join('')}</div></section>
   ${isDirection?'<aside class="story-fact"><span>Знаете ли вы?</span><p>Театральная улица (ныне улица Зодчего Росси) следует античным канонам: её ширина равна высоте образующих её зданий — 22 метра, а длина ровно в десять раз больше — 220 метров. Таким образом, улица Зодчего Росси является самой симметричной в мире.</p></aside>':''}
   <div class="info-gallery-fullscreen" id="infoGalleryFullscreen" hidden><img class="info-gallery-fullscreen-photo" id="infoGalleryFullscreenImage" src="${infoGalleryState.items[0].src}" alt="${infoGalleryState.items[0].alt}"><button class="info-gallery-close-zone" type="button" id="infoGalleryClose" aria-label="Закрыть фотографию"><span class="info-gallery-close-glyph" aria-hidden="true"></span></button></div>
 </article>`;
 const fullscreen=pointStoryScroll.querySelector('#infoGalleryFullscreen');
 const fullscreenClose=pointStoryScroll.querySelector('#infoGalleryClose');
 if(fullscreenClose)fullscreenClose.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();closeInfoGalleryFullscreen();});
 if(fullscreen)fullscreen.addEventListener('click',e=>{if(e.target===fullscreen||e.target.id==='infoGalleryFullscreenImage'){e.preventDefault();e.stopPropagation();closeInfoGalleryFullscreen();}});
 pointStoryScroll.scrollTop=0;const firstImage=pointStoryScroll.querySelector('#infoGalleryMainImage');if(firstImage){const orient=()=>firstImage.closest('.info-gallery-frame')?.classList.toggle('portrait',firstImage.naturalHeight>firstImage.naturalWidth);firstImage.onload=orient;if(firstImage.complete)orient();}requestAnimationFrame(()=>{updatePointStoryHint();observeStorySections(pointStoryScroll);normalizeArrowButtons(pointStoryScroll);});
}

function loadYandex(){
 if(window.ymaps) return Promise.resolve(window.ymaps);
 if(yandexReadyPromise) return yandexReadyPromise;
 yandexReadyPromise=new Promise((resolve,reject)=>{
   const existing=document.querySelector('script[data-yandex-api="true"]');
   if(existing){
     existing.addEventListener('load',()=>window.ymaps?window.ymaps.ready(()=>resolve(window.ymaps)):reject(new Error('ymaps missing')));
     existing.addEventListener('error',reject);
     return;
   }
   const s=document.createElement('script');
   const apiKey=document.querySelector('meta[name="yandex-maps-api-key"]')?.content?.trim()||window.YANDEX_MAPS_API_KEY||'';
   s.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${apiKey?`&apikey=${encodeURIComponent(apiKey)}`:''}`;
   s.async=true;
   s.dataset.yandexApi='true';
   s.onload=()=>window.ymaps?window.ymaps.ready(()=>resolve(window.ymaps)):reject(new Error('ymaps missing'));
   s.onerror=reject;
   document.head.appendChild(s);
 });
 return yandexReadyPromise;
}
function initMapWhenVisible(){
 const loader=$('mapLoader');
 if(loader){loader.textContent='Загрузка карты…';loader.classList.add('hidden');setTimeout(()=>{if(!ymap&&!yandexScreen.hidden)loader.classList.remove('hidden');},4500);}
 // the screen must be visible before Yandex reads container dimensions
 requestAnimationFrame(()=>setTimeout(initYandexMap,120));
}
function initYandexMap(){
 if(ymap){resizeMapSoon();return;}
 const el=$('ymap');
 if(!el || yandexScreen.hidden || el.offsetWidth<20 || el.offsetHeight<20){
   setTimeout(initYandexMap,180);
   return;
 }
 loadYandex().then(()=>{
   const el=$('ymap');
   if(!el || yandexScreen.hidden || el.offsetWidth<20 || el.offsetHeight<20){
     setTimeout(initYandexMap,180);
     return;
   }
   let savedMapView=null;
  try{savedMapView=JSON.parse(localStorage.getItem('gm_map_view_v1')||'null');}catch(error){}
  const initialCenter=Array.isArray(savedMapView?.center)?savedMapView.center:[59.931,30.3405];
  const initialZoom=Number(savedMapView?.zoom)||14;
  ymap=new ymaps.Map(el,{center:initialCenter,zoom:initialZoom,controls:['zoomControl']},{suppressMapOpenBlock:true,yandexMapDisablePoiInteractivity:true});
  let saveMapTimer=0;
  ymap.events.add('boundschange',()=>{
    window.clearTimeout(saveMapTimer);
    saveMapTimer=window.setTimeout(()=>{
      try{localStorage.setItem('gm_map_view_v1',JSON.stringify({center:ymap.getCenter(),zoom:ymap.getZoom(),updatedAt:Date.now()}));}catch(error){}
    },400);
  });
   ymap.controls.get('zoomControl').options.set({size:'small',position:{left:12,top:112}});
   rebuildRouteObjects();
   // Auxiliary landmarks are intentionally omitted: only the selected route stays on the map.
   if(!savedMapView) fitSelectedRouteBounds();
   const loader=$('mapLoader');
   if(loader) loader.classList.add('hidden');
   updateMapMarkers();
   resizeMapSoon();
 }).catch((err)=>{
   const loader=$('mapLoader');
   if(loader){loader.textContent='Карта недоступна. Проверьте соединение.';loader.classList.remove('hidden');}
   console.error('Yandex Maps failed:',err);
 });
}
function createRouteLayout(p,index,r){
 const st=statusForPoint(r.id,p.id);
 const color=r.color;
 const activeClass = point().id===p.id ? 'active' : '';
 return ymaps.templateLayoutFactory.createClass(`<div class="route-pin-layout ${r.colorClass} ${st} ${activeClass}" style="--route-color:${color};opacity:1;filter:none;" data-point="${p.id}"><span class="pulse-ring ring-a"></span><span class="pulse-ring ring-b"></span><div class="pin-badge" style="background:${color};color:${color};opacity:1;filter:none;"><span class="num">${index+1}</span></div></div>`);
}
function createLandmarkLayout(l){return ymaps.templateLayoutFactory.createClass(`<div class="landmark-layout"><img src="${l.img}" alt=""></div>`)}

function updateStaticMapMarkers(){}
function setRouteStatus(message=''){
 const status=$('routeStatus');if(!status)return;
 const error=Boolean(message)&&!message.startsWith('Строим');
 status.textContent=error?message:'';status.hidden=!error;status.classList.toggle('error',error);
}
function createConditionalRouteLine(r){
 return new ymaps.Polyline(r.points.map(p=>p.coord),{hintContent:`${r.name} · условная схема`},{strokeColor:r.color,strokeWidth:3,strokeOpacity:.48,strokeStyle:'shortdash'});
}
function rebuildRouteObjects(){
 if(!ymap||!window.ymaps)return;
 routeObjects.forEach(obj=>ymap.geoObjects.remove(obj));routeObjects=[];
 if(routeLine)ymap.geoObjects.remove(routeLine);
 const r=route();
 setRouteStatus('Строим пешеходный маршрут…');
 if(ymaps.multiRouter?.MultiRoute){
   const pedestrianRoute=new ymaps.multiRouter.MultiRoute({referencePoints:r.points.map(p=>p.coord),params:{routingMode:'pedestrian',results:1}}, {
     boundsAutoApply:false,wayPointVisible:false,viaPointVisible:false,pinVisible:false,
     routeStrokeColor:r.color,routeStrokeOpacity:.15,routeStrokeWidth:3,routeStrokeStyle:'shortdash',
     routeActiveStrokeColor:r.color,routeActiveStrokeOpacity:.95,routeActiveStrokeWidth:5,routeActiveStrokeStyle:'shortdash',
     routePedestrianSegmentStrokeColor:r.color,routePedestrianSegmentStrokeStyle:'shortdash',
     routeActivePedestrianSegmentStrokeColor:r.color,routeActivePedestrianSegmentStrokeWidth:5,routeActivePedestrianSegmentStrokeStyle:'shortdash',
     routeMarkerVisible:false,routeActiveMarkerVisible:false
   });
   routeLine=pedestrianRoute;
   pedestrianRoute.events.once('update',()=>{if(routeLine===pedestrianRoute)setRouteStatus('');});
   pedestrianRoute.model.events.add('requestfail',()=>{
     if(routeLine!==pedestrianRoute)return;
     ymap.geoObjects.remove(pedestrianRoute);
     routeLine=createConditionalRouteLine(r);
     ymap.geoObjects.add(routeLine);
     setRouteStatus('');
   });
 }else{
   routeLine=createConditionalRouteLine(r);
   setRouteStatus('');
 }
 if(routeLine)ymap.geoObjects.add(routeLine);
 routeObjects=r.points.map((p,index)=>{
   const pm=new ymaps.Placemark(p.coord,{hintContent:`${p.name} — ${p.address}`},{iconLayout:createRouteLayout(p,index,r),iconShape:{type:'Rectangle',coordinates:[[-24,-58],[24,0]]},zIndex:120});
   pm.pointId=p.id;
   pm.events.add('click',()=>selectPoint(p.id,{fromMap:true}));
   ymap.geoObjects.add(pm);return pm;
 });
 fitSelectedRouteBounds();
}
function fitSelectedRouteBounds(){
 if(!ymap)return;const coords=route().points.map(p=>p.coord);if(!coords.length)return;
 if(coords.length===1){ymap.setCenter(coords[0],15);return;}
 const lats=coords.map(c=>c[0]),lons=coords.map(c=>c[1]);
 const bounds=[[Math.min(...lats),Math.min(...lons)],[Math.max(...lats),Math.max(...lons)]];
 ymap.setBounds(bounds,{checkZoomRange:true,zoomMargin:[116,38,170,38]});
}
function updateMapMarkers(){if(!routeObjects.length||!window.ymaps)return;const r=route();routeObjects.forEach((obj,index)=>{const p=r.points.find(x=>x.id===obj.pointId);if(p)obj.options.set('iconLayout',createRouteLayout(p,index,r));})}
function resizeMapSoon(){if(!ymap)return; [50,250,500].forEach(t=>setTimeout(()=>ymap.container.fitToViewport(),t))}
function haversine(a,b){
 const toRad=v=>v*Math.PI/180;
 const R=6371000;
 const dLat=toRad(b[0]-a[0]);
 const dLon=toRad(b[1]-a[1]);
 const lat1=toRad(a[0]);
 const lat2=toRad(b[0]);
 const h=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
 return 2*R*Math.asin(Math.sqrt(h));
}
let geoRequested=false,geoLastPosition=null,geoPendingSuccess=null,geoPendingError=null;
let geoGatePending=false;
const GEO_PERMISSION_KEY='theatre-geolocation-choice-v1';
function rememberGeoChoice(value){try{localStorage.setItem(GEO_PERMISSION_KEY,value)}catch(e){}}
async function startGeoWatch(){
 if($('yandexScreen')?.hidden || geoWatchId!==null||geoRequested||geoGatePending||!navigator.geolocation)return;
 geoGatePending=true;
 let remembered=null;try{remembered=localStorage.getItem(GEO_PERMISSION_KEY)}catch(e){}
 let permission=null;try{permission=await navigator.permissions?.query({name:'geolocation'})}catch(e){}
 if(permission?.state==='denied'){rememberGeoChoice('denied');geoGatePending=false;return;}
 if(remembered && permission?.state!=='granted'){geoGatePending=false;return;}
 if($('yandexScreen')?.hidden){geoGatePending=false;return;}
 geoRequested=true;geoGatePending=false;rememberGeoChoice('asked');
 geoWatchId=navigator.geolocation.watchPosition(position=>{
  rememberGeoChoice('granted');geoLastPosition=position;
  if(geoPendingSuccess){geoPendingSuccess(position);geoPendingSuccess=null;geoPendingError=null;}
  if($('yandexScreen')?.hidden)return;
  const coords=[position.coords.latitude,position.coords.longitude],r=route();let changed=false;
  for(const p of r.points){if(haversine(coords,p.coord)<=220&&!passed.has(pointKey(r.id,p.id))){passed.add(pointKey(r.id,p.id));changed=true;}}
  if(changed){saveState();renderDrawerList();updateMapMarkers();}
 },error=>{if(error.code===1)rememberGeoChoice('denied');if(geoPendingError)geoPendingError(error);geoPendingSuccess=null;geoPendingError=null;}, {enableHighAccuracy:true,maximumAge:30000,timeout:12000});
}
function stopGeoWatch(){/* One shared watch per page prevents repeated permission prompts on navigation. */}
function sharedLocation(success,error){
 if(geoLastPosition){success(geoLastPosition);return;}
 if(geoPendingSuccess)return;
 if(geoRequested&&geoWatchId===null){error({code:1});return;}
 geoPendingSuccess=success;geoPendingError=error;startGeoWatch();
 setTimeout(()=>{if(geoPendingError){geoPendingError({code:3});geoPendingSuccess=null;geoPendingError=null;}},12000);
}
window.addEventListener('pagehide',()=>{if(geoWatchId!==null)navigator.geolocation?.clearWatch(geoWatchId)});
function locateUser(){
 if(!ymap||!navigator.geolocation){geoAction.classList.add('error');setTimeout(()=>geoAction.classList.remove('error'),1000);return}
 geoAction.classList.add('active');
 sharedLocation(pos=>{
   const coords=[pos.coords.latitude,pos.coords.longitude];
   if(userMark)ymap.geoObjects.remove(userMark);
   userMark=new ymaps.Placemark(coords,{hintContent:'Вы здесь'},{iconLayout:ymaps.templateLayoutFactory.createClass('<div class="route-pin-layout user-layout active" style="--route-color:#c93f7b;opacity:1;filter:none;"><div class="pin-badge" style="background:#c93f7b;color:#c93f7b;opacity:1;filter:none;"><span class="num">◎</span></div></div>'),iconShape:{type:'Rectangle',coordinates:[[-24,-58],[24,0]]},zIndex:140});
   ymap.geoObjects.add(userMark);
   const r=route();r.points.forEach(p=>{if(haversine(coords,p.coord)<=220)markPassed(r.id,p.id)});
   ymap.setCenter(coords,15,{duration:300});
   geoAction.classList.remove('active');
   updateRouteUI();
 },()=>{geoAction.classList.remove('active');geoAction.classList.add('error');setTimeout(()=>geoAction.classList.remove('error'),1200)},{enableHighAccuracy:true,timeout:8000,maximumAge:60000})
}
function formatTime(s){if(!isFinite(s))return'00:00';return`${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}`}
function resetAudio(){audio.pause();audio.currentTime=0;audioPlay.classList.remove('playing');audioSeek.value=0;audioCurrent.textContent='00:00'}
function toggleAudio(){audio.paused?audio.play():audio.pause()}
function safeOn(id,ev,fn){const el=$(id);if(el)el.addEventListener(ev,fn)}
function startSelectedRoute(){$('fullRouteAudio')?.pause();closeContentModal(routeDetailModal);show('yandex','routes');setTimeout(()=>{updateRouteUI();openSheet();},180);}
function rememberHomeOrigin(){
 homeReturnState={routeId:selectedRoute,pointId:point().id,sheetOpen:!pointSheet.classList.contains('closed')};
 try{sessionStorage.setItem(HOME_RETURN_KEY,JSON.stringify(homeReturnState));}catch(error){}
 const button=$('returnToRoute');if(button){button.hidden=false;button.querySelector('span').textContent=`Маршрут ${String(selectedRoute).padStart(2,'0')} · точка ${point().id}`;}
 show('intro');
}
function restoreHomeOrigin(){
 if(!homeReturnState){try{homeReturnState=JSON.parse(sessionStorage.getItem(HOME_RETURN_KEY)||'null');}catch(error){homeReturnState=null;}}
 if(!homeReturnState)return;
 selectedRoute=Number(homeReturnState.routeId)||selectedRoute;selectedPoints[selectedRoute]=Number(homeReturnState.pointId)||1;markViewed(selectedRoute,point().id);
 show('yandex','intro');setTimeout(()=>{updateRouteUI();homeReturnState.sheetOpen?openSheet():closeSheet();},180);
}
try{homeReturnState=JSON.parse(sessionStorage.getItem(HOME_RETURN_KEY)||'null');}catch(error){homeReturnState=null;}
if(homeReturnState){const button=$('returnToRoute');if(button){button.hidden=false;button.querySelector('span').textContent=`Маршрут ${String(homeReturnState.routeId).padStart(2,'0')} · точка ${homeReturnState.pointId}`;}}
safeOn('chooseRoute','click',()=>{const button=$('chooseRoute');if(button?.classList.contains('masks-swapped'))return;button?.classList.add('masks-swapped');setTimeout(()=>{guideStep=0;guideColombinaSeen=false;renderGuideStep();openContentModal(walkGuideModal)},820);setTimeout(()=>button?.classList.remove('masks-swapped'),1400);});
safeOn('goMapFromIntro','click',()=>show('routes'));
safeOn('returnToRoute','click',restoreHomeOrigin);
safeOn('openRouteMap','click',startSelectedRoute);
safeOn('routeStartInline','click',startSelectedRoute);
safeOn('backToIntro','click',()=>show('intro'));
safeOn('openPrologueMenu','click',()=>openPrologueMenu('project'));
safeOn('openIntroMenu','click',()=>openPrologueMenu('project'));
safeOn('closePrologueMenu','click',closePrologueMenu);
safeOn('goRouteSelect','click',()=>show('routes'));
safeOn('backToPrologue','click',()=>{if(routeListOrigin==='yandex'){show('yandex','routes');setTimeout(openSheet,180)}else show('intro');});
safeOn('mapLogoHome','click',rememberHomeOrigin);
safeOn('goHome','click',rememberHomeOrigin);
safeOn('menuGoRouteSelect','click',()=>{closePrologueMenu();show('routes');});
safeOn('drawerGoRouteSelect','click',()=>{closeDrawer();show('routes','yandex');});
safeOn('openWalkGuide','click',()=>openContentModal(walkGuideModal));
safeOn('closeWalkGuide','click',()=>closeContentModal(walkGuideModal));
safeOn('guideRouteSelect','click',()=>{closeContentModal(walkGuideModal);show('routes','intro');});
function openRouteDetailFrom(origin){routeDetailOrigin=origin;$('startRouteFromDetail').textContent=origin==='drawer'?'Продолжить прогулку':'Начать прогулку';renderRouteDetail();openContentModal(routeDetailModal)}
safeOn('openRouteDetail','click',()=>openRouteDetailFrom('routes'));
let guideStep=0,guideColombinaSeen=false;
function renderGuideStep(){
 const pointing=walkGuideModal.querySelector('.guide-footer-colombina');if(guideStep===3)guideColombinaSeen=true;if(pointing)pointing.hidden=!guideColombinaSeen;
 document.querySelectorAll('[data-walk-section]').forEach(section=>{
  const open=Number(section.dataset.walkSection)===guideStep;
  section.classList.toggle('is-open',open);
  section.querySelector('.walk-step-trigger').setAttribute('aria-expanded',String(open));
  section.querySelector('.walk-step-panel').hidden=!open;
 });
}
document.querySelectorAll('[data-walk-step]').forEach(button=>button.addEventListener('click',()=>{
 guideStep=guideStep===Number(button.dataset.walkStep)?-1:Number(button.dataset.walkStep);renderGuideStep();
 const scroll=$('walkGuideModal').querySelector('.walk-guide-scroll');
 const section=button.closest('.walk-step');
 if(section.offsetTop<scroll.scrollTop || section.offsetTop>scroll.scrollTop+scroll.clientHeight-120)scroll.scrollTo({top:section.offsetTop-scroll.offsetTop,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}));
renderGuideStep();

safeOn('closeRouteDetail','click',()=>{$('fullRouteAudio')?.pause();if(routeDetailOrigin==='drawer'){openDrawer('points');setTimeout(()=>closeContentModal(routeDetailModal),160)}else closeContentModal(routeDetailModal)});
safeOn('startRouteFromDetail','click',startSelectedRoute);
safeOn('openDrawer','click',()=>openDrawer('points'));
safeOn('drawerRouteDetail','click',()=>{closeDrawer();openRouteDetailFrom('drawer');});
safeOn('openRouteList','click',()=>openDrawer('points'));
safeOn('openPointStory','click',(e)=>{e.preventDefault();e.stopPropagation();openPointOverlay(pointStoryOverlay);});
safeOn('pointReadMore','click',(e)=>{e.preventDefault();e.stopPropagation();openPointOverlay(pointStoryOverlay);});
safeOn('closePointGallery','click',(e)=>{e.preventDefault();e.stopPropagation();closePointOverlay(pointGalleryOverlay);});
safeOn('closePointStory','click',(e)=>{e.preventDefault();e.stopPropagation();closePointOverlay(pointStoryOverlay);});safeOn('pointStoryBottomBack','click',()=>closePointOverlay(pointStoryOverlay));safeOn('pointStoryScrollHint','click',()=>{const atBottom=pointStoryScroll.scrollTop+pointStoryScroll.clientHeight>=pointStoryScroll.scrollHeight-10;pointStoryScroll.scrollTo({top:atBottom?0:pointStoryScroll.scrollHeight,behavior:'smooth'});});
safeOn('closeDrawer','click',closeDrawer);
safeOn('geoAction','click',locateUser);
safeOn('closePointSheet','click',(e)=>{e.stopPropagation();closeSheet();});
safeOn('sheetToggle','click',(e)=>{e.stopPropagation();toggleSheet();});
safeOn('sheetPeek','click',openSheet);
pointSheet.addEventListener('click',e=>{ if(pointSheet.classList.contains('closed')) openSheet(); });
safeOn('mapBack','click',()=>changePoint(-1));
safeOn('nextRoute','click',()=>changePoint(1));
drawer.addEventListener('click',e=>{if(e.target===drawer)closeDrawer()});
drawerTabs.forEach(b=>b.addEventListener('click',()=>{if(b.dataset.tab==='route'){closeDrawer();openRouteDetailFrom('drawer');return;}setDrawerTab(b.dataset.tab)}));
prologueMenuTabs.forEach(b=>b.addEventListener('click',()=>setPrologueMenuTab(b.dataset.prologueTab)));
posterFilterButtons.forEach(b=>b.addEventListener('click',()=>setPosterFilter(b.dataset.posterFilter)));
contactModeButtons.forEach(b=>b.addEventListener('click',()=>setContactMode(b.dataset.contactMode)));
if(prologueMenuDrawer) prologueMenuDrawer.addEventListener('click',e=>{if(e.target===prologueMenuDrawer)closePrologueMenu()});
if(pointGalleryOverlay) pointGalleryOverlay.addEventListener('click',e=>{if(e.target===pointGalleryOverlay)closePointOverlay(pointGalleryOverlay)});
if(pointGalleryBoard) pointGalleryBoard.addEventListener('click',e=>{
 const thumb=e.target.closest('[data-gallery-index]');
 if(!thumb||!pointGalleryBoard.contains(thumb)) return;
 e.preventDefault();
 e.stopPropagation();
 selectGalleryItem(Number(thumb.dataset.galleryIndex));
});
if(pointStoryOverlay) pointStoryOverlay.addEventListener('click',e=>{if(e.target===pointStoryOverlay)closePointOverlay(pointStoryOverlay)});
if(walkGuideModal)walkGuideModal.addEventListener('click',e=>{if(e.target===walkGuideModal)closeContentModal(walkGuideModal)});
if(walkGuideModal)walkGuideModal.addEventListener('click',e=>{
 const toggle=e.target.closest('[data-guide-toggle]');if(!toggle)return;
 const card=toggle.closest('.guide-feature');const willOpen=!card.classList.contains('active');
 const composition=card.closest('.guide-composition');
 walkGuideModal.querySelectorAll('.guide-feature').forEach(item=>{item.classList.remove('active');const button=item.querySelector('[data-guide-toggle]');if(button){button.setAttribute('aria-expanded','false');const sign=button.querySelector('b');if(sign)sign.textContent='+';}});
 if(composition)composition.classList.remove('guide-step-0','guide-step-1','guide-step-2','guide-step-3','guide-step-4');
 if(willOpen){card.classList.add('active');toggle.setAttribute('aria-expanded','true');const sign=toggle.querySelector('b');if(sign)sign.textContent='−';if(composition)composition.classList.add(`guide-step-${[...composition.querySelectorAll('.guide-feature')].indexOf(card)+1}`);}
 else if(composition)composition.classList.add('guide-step-0');
});
if(routeDetailModal){
 routeDetailModal.addEventListener('click',e=>{if(e.target===routeDetailModal){$('fullRouteAudio')?.pause();closeContentModal(routeDetailModal);return}const thumb=e.target.closest('[data-route-gallery-index]'),arrow=e.target.closest('[data-route-gallery-step]');if(thumb)routeGalleryIndex=Number(thumb.dataset.routeGalleryIndex);else if(arrow)routeGalleryIndex=(routeGalleryIndex+Number(arrow.dataset.routeGalleryStep)+routeGalleryItems.length)%routeGalleryItems.length;else return;renderRouteGallery();});
 const stage=routeDetailModal.querySelector('.route-gallery-stage');stage?.addEventListener('pointerdown',e=>{routeGalleryStartX=e.clientX});stage?.addEventListener('pointerup',e=>{if(routeGalleryStartX===null)return;const dx=e.clientX-routeGalleryStartX;routeGalleryStartX=null;if(Math.abs(dx)>42){routeGalleryIndex=(routeGalleryIndex+(dx<0?1:-1)+routeGalleryItems.length)%routeGalleryItems.length;renderRouteGallery();}});
}
const fullRouteAudio=$('fullRouteAudio'),fullRoutePlay=$('fullRoutePlay'),fullRouteSeek=$('fullRouteSeek');
if(fullRouteAudio&&fullRoutePlay&&fullRouteSeek){
 const syncFullRouteAudio=()=>{fullRoutePlay.querySelector('span').textContent=fullRouteAudio.paused?'▶':'Ⅱ';fullRoutePlay.setAttribute('aria-label',fullRouteAudio.paused?'Воспроизвести':'Пауза');$('fullRouteCurrent').textContent=formatTime(fullRouteAudio.currentTime);$('fullRouteDuration').textContent=formatTime(fullRouteAudio.duration);if(fullRouteAudio.duration){fullRouteSeek.value=String(fullRouteAudio.currentTime/fullRouteAudio.duration*100);fullRouteSeek.style.setProperty('--played',`${fullRouteSeek.value}%`)}};
 fullRoutePlay.addEventListener('click',()=>{if(fullRouteAudio.paused){audio.pause();fullRouteAudio.play().catch(()=>{});}else fullRouteAudio.pause();});
 ['loadedmetadata','timeupdate','play','pause','ended'].forEach(event=>fullRouteAudio.addEventListener(event,syncFullRouteAudio));
 fullRouteSeek.addEventListener('input',()=>{fullRouteSeek.style.setProperty('--played',`${fullRouteSeek.value}%`);if(fullRouteAudio.duration)fullRouteAudio.currentTime=Number(fullRouteSeek.value)/100*fullRouteAudio.duration});
}
if(pointStoryScroll){
 pointStoryScroll.addEventListener('click',e=>{
   const indexButton=e.target.closest('[data-info-gallery-index]');if(indexButton){selectInfoGalleryItem(indexButton.dataset.infoGalleryIndex);return;}
   const stepButton=e.target.closest('[data-info-gallery-step]');if(stepButton){selectInfoGalleryItem(infoGalleryState.activeIndex+Number(stepButton.dataset.infoGalleryStep));return;}
   if(e.target.closest('#infoGalleryOpen')){const full=pointStoryScroll.querySelector('#infoGalleryFullscreen');if(full){pointStoryOverlay.classList.add('photo-open');full.hidden=false;requestAnimationFrame(()=>full.classList.add('open'));}return;}
   if(e.target.closest('#infoGalleryClose')||e.target.id==='infoGalleryFullscreen'||e.target.id==='infoGalleryFullscreenImage'){closeInfoGalleryFullscreen();}
 });
 pointStoryScroll.addEventListener('pointerdown',e=>{if(e.target.closest('.info-gallery-frame'))infoGalleryState.touchStartX=e.clientX;});
 pointStoryScroll.addEventListener('pointerup',e=>{if(infoGalleryState.touchStartX===null)return;const delta=e.clientX-infoGalleryState.touchStartX;infoGalleryState.touchStartX=null;if(Math.abs(delta)>42)selectInfoGalleryItem(infoGalleryState.activeIndex+(delta<0?1:-1));});
}
if(galleryViewfinder) galleryViewfinder.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggleGalleryFullscreen();});
if(galleryFullscreenToggle) galleryFullscreenToggle.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggleGalleryFullscreen();});
if(galleryFullscreen) galleryFullscreen.addEventListener('click',e=>{
 const rect=galleryFullscreen.getBoundingClientRect();
 if(e.target===galleryFullscreen||e.target===galleryFullscreenImage||e.clientY<=rect.top+96) closeGalleryFullscreen();
});
safeOn('galleryPrev','click',(e)=>{e.preventDefault();e.stopPropagation();selectGalleryItem(galleryState.activeIndex-1);});
safeOn('galleryNext','click',(e)=>{e.preventDefault();e.stopPropagation();selectGalleryItem(galleryState.activeIndex+1);});
document.querySelectorAll('.demo-contact-form').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();
 const status=form.querySelector('.contact-form-status');
 if(status) status.textContent='Спасибо! Интерфейс формы готов; отправку подключим к серверу на следующем этапе.';
}));
document.querySelectorAll('.contact-field select').forEach((select,index)=>{
 const holder=document.createElement('div');holder.className='contact-picker';
 const trigger=document.createElement('button');trigger.type='button';trigger.className='contact-picker-trigger';trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
 const list=document.createElement('div');list.className='contact-picker-options';list.setAttribute('role','listbox');list.hidden=true;list.id=`contact-picker-${index}`;trigger.setAttribute('aria-controls',list.id);
 const sync=()=>{trigger.innerHTML=`<span>${select.selectedOptions[0]?.textContent||'Выберите вариант'}</span><b aria-hidden="true">⌄</b>`;trigger.classList.toggle('placeholder',!select.value)};
 [...select.options].filter(option=>!option.disabled).forEach(option=>{
   const item=document.createElement('button');item.type='button';item.className='contact-picker-option';item.textContent=option.textContent;item.setAttribute('role','option');
   item.addEventListener('click',()=>{select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));sync();list.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus();});list.append(item);
 });
 trigger.addEventListener('click',()=>{document.querySelectorAll('.contact-picker-options').forEach(other=>{if(other!==list)other.hidden=true});const open=list.hidden;list.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open)list.querySelector('button')?.focus();});
 list.addEventListener('keydown',e=>{const items=[...list.querySelectorAll('button')],at=items.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();items[(at+(e.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();}if(e.key==='Escape'){list.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus();}});
 select.classList.add('contact-native-select');select.after(holder);holder.append(select,trigger,list);sync();
 select.addEventListener('invalid',e=>{e.preventDefault();trigger.focus();trigger.setAttribute('aria-invalid','true');});
 select.addEventListener('change',()=>trigger.removeAttribute('aria-invalid'));
});
document.addEventListener('click',e=>{if(e.target.closest('.contact-picker'))return;document.querySelectorAll('.contact-picker-options').forEach(list=>list.hidden=true);document.querySelectorAll('.contact-picker-trigger').forEach(button=>button.setAttribute('aria-expanded','false'));});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){
   const infoFull=pointStoryScroll?.querySelector('#infoGalleryFullscreen.open');
   if(infoFull){closeInfoGalleryFullscreen();return;}
   closePrologueMenu();closeDrawer();closePointOverlay(pointGalleryOverlay);closePointOverlay(pointStoryOverlay);closeContentModal(walkGuideModal);closeContentModal(routeDetailModal);
 }
 if(pointGalleryOverlay && !pointGalleryOverlay.hidden && pointGalleryOverlay.classList.contains('open')){
   if(e.key==='ArrowLeft') selectGalleryItem(galleryState.activeIndex-1);
   if(e.key==='ArrowRight') selectGalleryItem(galleryState.activeIndex+1);
 }
 if(pointStoryOverlay && !pointStoryOverlay.hidden && pointStoryOverlay.classList.contains('open') && !pointStoryOverlay.classList.contains('photo-open')){
   if(e.key==='ArrowLeft')selectInfoGalleryItem(infoGalleryState.activeIndex-1);
   if(e.key==='ArrowRight')selectInfoGalleryItem(infoGalleryState.activeIndex+1);
 }
});
document.addEventListener('pointerup',e=>{
 const dismiss=e.target.closest?.('#infoGalleryClose');
 const infoFull=pointStoryScroll?.querySelector('#infoGalleryFullscreen.open');
 const topStrip=infoFull&&e.clientY<=infoFull.getBoundingClientRect().top+Math.max(92,window.innerHeight*.14);
 if(!dismiss&&!topStrip)return;
 e.preventDefault();e.stopPropagation();closeInfoGalleryFullscreen();
},{capture:true});
$('drawerScrollArea').addEventListener('scroll',updateDrawerHint);
const prologueMenuScroll=$('prologueMenuScroll');
if(prologueMenuScroll) prologueMenuScroll.addEventListener('scroll',updatePrologueMenuHint);
window.addEventListener('resize',()=>{updateDrawerHint();updatePrologueMenuHint();});
document.querySelectorAll('.route-choice').forEach(el=>el.addEventListener('click',()=>{const next=Number(el.dataset.route);routeChoiceExpanded=!(routeChoiceExpanded&&selectedRoute===next);setSelectedRoute(next);el.scrollIntoView({block:'nearest',behavior:'smooth'});}));
document.querySelectorAll('.museum-event').forEach(event=>event.addEventListener('click',e=>e.preventDefault()));
audio.addEventListener('play',()=>audioPlay.classList.add('playing'));audio.addEventListener('pause',()=>audioPlay.classList.remove('playing'));audio.addEventListener('loadedmetadata',()=>audioDuration.textContent=formatTime(audio.duration));audio.addEventListener('timeupdate',()=>{audioCurrent.textContent=formatTime(audio.currentTime);if(audio.duration)audioSeek.value=String(audio.currentTime/audio.duration*100)});audioSeek.addEventListener('input',()=>{if(audio.duration)audio.currentTime=Number(audioSeek.value)/100*audio.duration});audioPlay.addEventListener('click',toggleAudio);
markViewed(selectedRoute,point().id); updateRouteUI(); renderDrawerList(); closeSheet();

window.addEventListener('pagehide',()=>{
  if(!ymap) return;
  try{localStorage.setItem('gm_map_view_v1',JSON.stringify({center:ymap.getCenter(),zoom:ymap.getZoom(),updatedAt:Date.now()}));}catch(error){}
});

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', async () => {
    const hadController = Boolean(navigator.serviceWorker.controller);
    let reloadingForUpdate = false;

    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {
        updateViaCache: 'none'
      });

      if (hadController) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (reloadingForUpdate) return;
          reloadingForUpdate = true;
          window.location.reload();
        });
      }

      let lastUpdateCheck = 0;
      const checkForUpdate = () => {
        const now = Date.now();
        if (now - lastUpdateCheck < 15 * 60 * 1000) return;
        lastUpdateCheck = now;
        registration.update().catch(() => {});
      };

      checkForUpdate();
      window.setInterval(checkForUpdate, 30 * 60 * 1000);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') checkForUpdate();
      });
      window.addEventListener('focus', checkForUpdate);
    } catch (error) {
      // The app remains usable even when service workers are unavailable.
    }
  });
}

if(galleryThumbs) galleryThumbs.addEventListener('scroll', ()=>{ syncGalleryThumbVisibility(); updateGalleryScrollHint(); }, {passive:true});
if(pointStoryScroll) pointStoryScroll.addEventListener('scroll', updatePointStoryHint, {passive:true});
window.addEventListener('resize', ()=>window.requestAnimationFrame(()=>{fitGalleryLayout();fitPrologueLayout();fitRouteSelectLayout();updateGalleryScrollHint();}));
window.addEventListener('load', ()=>window.requestAnimationFrame(()=>{fitGalleryLayout();fitPrologueLayout();fitRouteSelectLayout();updateGalleryScrollHint();}));

function syncGalleryThumbVisibility(){
 if(!galleryThumbs) return {hidden:0,total:0};
 const wrapRect=galleryThumbs.getBoundingClientRect();
 const thumbs=[...galleryThumbs.querySelectorAll('.camera-gallery-thumb')];
 let hidden=0;
 thumbs.forEach((thumb)=>{
   const rect=thumb.getBoundingClientRect();
   const fullyVisible=rect.top>=wrapRect.top-1 && rect.bottom<=wrapRect.bottom+1;
   thumb.classList.toggle('is-outside', !fullyVisible);
   thumb.setAttribute('aria-hidden', fullyVisible ? 'false' : 'true');
   if(!fullyVisible) hidden++;
 });
 return {hidden,total:thumbs.length};
}

function fitGalleryLayout(){
 const scene=document.querySelector('.camera-gallery-scene');
 const artboard=document.querySelector('.camera-gallery-artboard');
 const desc=document.querySelector('.camera-gallery-description');
 const descNum=document.querySelector('.camera-gallery-number');
 const descTitle=document.getElementById('galleryActiveTitle');
 const descText=document.getElementById('galleryActiveText');
 const descDivider=document.querySelector('.camera-gallery-divider');
 const prevBtn=document.querySelector('.camera-gallery-prev');
 const nextBtn=document.querySelector('.camera-gallery-next');
 const viewfinder=document.querySelector('.camera-gallery-viewfinder');
 const scrollHint=document.querySelector('.camera-gallery-scroll-hint');
 const bg=artboard?.querySelector('.camera-gallery-background');
 if(!scene || !galleryThumbs || !artboard || pointGalleryOverlay?.hidden) return;
 const rect=scene.getBoundingClientRect();
 if(rect.width<40 || rect.height<40) return;
 const w=rect.width, h=rect.height;
 const shortScreen=h<700;
 const tallScreen=h>=900;
 const narrow=w<345;
 const sidePad=narrow?8:10;
 const topAir=shortScreen?7:(tallScreen?11:9);
 const bottomAir=shortScreen?3:(tallScreen?7:5);
 const rowGap=shortScreen?4:(tallScreen?6:5);
 const visibleCount=7;

 const assetW=(bg && bg.naturalWidth) || 1086;
 const assetH=(bg && bg.naturalHeight) || 947;
 const assetRatio=assetW/assetH;
 const camBottom=shortScreen?2:6;
 const camW=Math.min(w*(narrow?1.03:1.06), narrow?342:(tallScreen?404:392));
 const camH=Math.round(camW/assetRatio);
 const camLeft=(w-camW)/2;
 const cameraTop=h-camBottom-camH;
 artboard.style.setProperty('width',`${camW}px`,'important');
 artboard.style.setProperty('height',`${camH}px`,'important');
 artboard.style.setProperty('left','50%','important');
 artboard.style.setProperty('bottom',`${camBottom}px`,'important');
 artboard.style.setProperty('transform','translateX(-50%)','important');
 artboard.style.setProperty('aspect-ratio',`${assetW} / ${assetH}`,'important');
 scene.style.setProperty('--cam-w',`${camW}px`);
 scene.style.setProperty('--cam-h',`${camH}px`);
 scene.style.setProperty('--cam-bottom',`${camBottom}px`);

 const thumbs=[...galleryThumbs.querySelectorAll('.camera-gallery-thumb')];
 const listTop=Math.round(topAir);
 const listBottom=Math.max(listTop+140, Math.round(cameraTop-bottomAir));
 const listHeight=Math.max(140, listBottom-listTop);
 let rowHeight=Math.floor((listHeight-rowGap*(visibleCount-1))/visibleCount);
 rowHeight=Math.max(shortScreen?27:31, Math.min(tallScreen?58:50,rowHeight));
 const exactHeight=(rowHeight*visibleCount)+(rowGap*(visibleCount-1));
 const railTop=Math.max(listTop,listBottom-exactHeight);
 const railHeight=Math.min(listHeight,exactHeight);
 const listLeft=Math.round(w*(narrow?0.405:0.415));
 const descWidth=Math.round(w*(narrow?0.305:0.31));

 galleryThumbs.style.setProperty('position','absolute','important');
 galleryThumbs.style.setProperty('left',`${listLeft}px`,'important');
 galleryThumbs.style.setProperty('right',`${sidePad}px`,'important');
 galleryThumbs.style.setProperty('top',`${railTop}px`,'important');
 galleryThumbs.style.setProperty('height',`${railHeight}px`,'important');
 galleryThumbs.style.setProperty('bottom','auto','important');
 galleryThumbs.style.setProperty('overflow-y','auto','important');
 galleryThumbs.style.setProperty('overflow-x','hidden','important');
 galleryThumbs.style.setProperty('padding','0','important');
 galleryThumbs.style.setProperty('gap',`${rowGap}px`,'important');
 galleryThumbs.style.setProperty('-webkit-mask-image','none','important');
 galleryThumbs.style.setProperty('mask-image','none','important');
 galleryThumbs.style.setProperty('clip-path','none','important');
 galleryThumbs.style.setProperty('scroll-padding-top','0px','important');
 galleryThumbs.style.setProperty('scroll-padding-bottom','0px','important');
 galleryThumbs.style.setProperty('scroll-snap-type','y proximity','important');

 thumbs.forEach((thumb,index)=>{
   const portrait=index%2===1;
   const img=thumb.querySelector('.camera-gallery-thumb-image');
   const strong=thumb.querySelector('.camera-gallery-thumb-copy strong');
   const imageW=Math.round(rowHeight*(portrait?0.76:1.08));
   const imageH=Math.round(rowHeight*(portrait?1.08:0.78));
   thumb.style.setProperty('position','relative','important');
   thumb.style.setProperty('grid-template-columns',`${Math.max(28,imageW+5)}px minmax(0,1fr)`,'important');
   thumb.style.setProperty('gap',narrow?'5px':'6px','important');
   thumb.style.setProperty('height',`${rowHeight}px`,'important');
   thumb.style.setProperty('min-height',`${rowHeight}px`,'important');
   thumb.style.setProperty('align-items','center','important');
   thumb.style.setProperty('scroll-snap-align','start','important');
   if(img){
     img.style.setProperty('width',`${imageW}px`,'important');
     img.style.setProperty('height',`${imageH}px`,'important');
     img.style.setProperty('margin-left',portrait?'3px':'0','important');
   }
   if(strong){
     strong.style.setProperty('font-size',`${Math.max(7.2,Math.min(10,rowHeight*0.235))}px`,'important');
     strong.style.setProperty('line-height','1.08','important');
   }
 });

 const descTop=railTop + (shortScreen?12:14);
 const descHeight=Math.max(104, railHeight - (shortScreen?34:36));
 if(desc){
   desc.style.setProperty('position','absolute','important');
   desc.style.setProperty('left',`${sidePad}px`,'important');
   desc.style.setProperty('top',`${descTop}px`,'important');
   desc.style.setProperty('width',`${descWidth}px`,'important');
   desc.style.setProperty('height',`${descHeight}px`,'important');
   desc.style.setProperty('min-height','0','important');
   desc.style.setProperty('padding',narrow?'9px 8px':'12px 10px 10px','important');
   desc.style.setProperty('box-sizing','border-box','important');
   desc.style.setProperty('overflow','hidden','important');
 }
 if(descNum){descNum.style.setProperty('font-size',narrow?'9px':'10px','important');descNum.style.setProperty('margin-bottom','8px','important');}
 if(descTitle){descTitle.style.setProperty('font-size',narrow?'15px':'18px','important');descTitle.style.setProperty('line-height','1.02','important');descTitle.style.setProperty('margin','0','important');}
 if(descText){descText.style.setProperty('font-size',narrow?'8.2px':'10px','important');descText.style.setProperty('line-height','1.29','important');descText.style.setProperty('margin','0','important');}
 if(descDivider) descDivider.style.setProperty('margin',narrow?'7px 0':'9px 0','important');

 if(viewfinder){
   const vfSize=Math.round(camW*0.372);
   viewfinder.style.setProperty('width',`${vfSize}px`,'important');
   viewfinder.style.setProperty('height',`${vfSize}px`,'important');
   viewfinder.style.setProperty('left','50%','important');
   // The viewfinder lives inside the camera artboard, so its coordinates
   // must be local to the artboard rather than relative to the whole scene.
   viewfinder.style.setProperty('top',`${Math.round(camH*0.642)}px`,'important');
   viewfinder.style.setProperty('transform','translate(-50%,-50%)','important');
   viewfinder.style.setProperty('z-index','20','important');
 }

 const navWidth=narrow?58:68;
 const navHeight=narrow?25:28;
 // Navigation buttons are also children of the camera artboard.
 const navTop=Math.round(camH*0.805-navHeight/2);
 const prevLeft=Math.round(camW*0.035);
 const nextLeft=Math.round(camW-navWidth-camW*0.035);
 [prevBtn,nextBtn].forEach(btn=>{
   if(!btn) return;
   btn.style.setProperty('width',`${navWidth}px`,'important');
   btn.style.setProperty('height',`${navHeight}px`,'important');
   btn.style.setProperty('top',`${navTop}px`,'important');
   btn.style.setProperty('bottom','auto','important');
   btn.style.setProperty('right','auto','important');
   btn.style.setProperty('position','absolute','important');
 });
 if(prevBtn) prevBtn.style.setProperty('left',`${prevLeft}px`,'important');
 if(nextBtn) nextBtn.style.setProperty('left',`${nextLeft}px`,'important');
 if(scrollHint){
   scrollHint.style.setProperty('right','5px','important');
   scrollHint.style.setProperty('top',`${railTop+8}px`,'important');
 }
 updateGalleryView();
 syncGalleryThumbVisibility();
 updateGalleryScrollHint();
}

function fitPrologueLayout(){
 const screen=document.querySelector('.prologue-screen:not([hidden])');
 if(!screen) return;
 const main=screen.querySelector('.prologue-main');
 const intro=screen.querySelector('.prologue-intro-card');
 const rules=screen.querySelector('.prologue-rules-card');
 const hero=screen.querySelector('.prologue-hero');
 if(!main||!intro||!rules) return;
 const h=screen.getBoundingClientRect().height||window.innerHeight;
 const w=screen.getBoundingClientRect().width||window.innerWidth;
 const shortScreen=h<710;
 const tall=h>=810;
 const veryTall=h>=900;
 const minIntro=shortScreen?0.72:0.82;
 const minRules=shortScreen?0.72:0.82;
 const maxIntro=veryTall?1.52:(tall?1.42:1.24);
 const maxRules=veryTall?1.58:(tall?1.48:1.28);
 let introScale=shortScreen?0.90:(tall?1.14:1.02);
 let rulesScale=shortScreen?0.90:(tall?1.16:1.04);
 let gap=shortScreen?10:(tall?16:13);
 let topGap=shortScreen?4:(tall?12:8);
 const targetFree=shortScreen?12:(tall?54:28);
 main.style.display='flex';
 main.style.flexDirection='column';
 main.style.justifyContent='flex-start';
 main.style.alignItems='stretch';
 main.style.overflow='hidden';
 intro.style.flex='0 0 auto';
 rules.style.flex='0 0 auto';
 intro.style.minHeight='0';
 rules.style.minHeight='0';
 intro.style.height='auto';
 rules.style.height='auto';
 function apply(){
   main.style.setProperty('--prologue-intro-scale',String(introScale));
   main.style.setProperty('--prologue-rules-scale',String(rulesScale));
   main.style.setProperty('--prologue-gap',`${Math.round(gap)}px`);
   main.style.setProperty('--prologue-top-gap',`${Math.round(topGap)}px`);
   main.style.setProperty('--prologue-intro-width',w<350?'68%':(tall?'72%':'70%'));
   if(hero){
     hero.style.height=shortScreen?'43%':(tall?'57%':'51%');
     hero.style.right=w<350?'-54px':'-44px';
   }
 }
 function metrics(){
   const contentBottom=rules.offsetTop+rules.offsetHeight;
   return {free:main.clientHeight-contentBottom,overflow:main.scrollHeight-main.clientHeight};
 }
 apply();
 let guard=0;
 while((metrics().overflow>1 || metrics().free<10) && guard<60){
   introScale=Math.max(minIntro,introScale-0.025);
   rulesScale=Math.max(minRules,rulesScale-0.028);
   gap=Math.max(8,gap-0.5);
   topGap=Math.max(2,topGap-0.3);
   apply();
   guard++;
 }
 guard=0;
 while(metrics().free>targetFree && guard<60){
   const canGrowIntro=introScale<maxIntro;
   const canGrowRules=rulesScale<maxRules;
   if(!canGrowIntro && !canGrowRules){
     if(gap<28) gap+=1.5;
     else if(topGap<22) topGap+=1;
     else break;
   }else{
     if(canGrowIntro) introScale=Math.min(maxIntro,introScale+0.02);
     if(canGrowRules) rulesScale=Math.min(maxRules,rulesScale+0.023);
   }
   apply();
   const m=metrics();
   if(m.overflow>1 || m.free<10){
     introScale=Math.max(minIntro,introScale-0.02);
     rulesScale=Math.max(minRules,rulesScale-0.023);
     apply();
     break;
   }
   guard++;
 }
}

function fitRouteSelectLayout(){
 const screen=document.querySelector('.route-select-screen:not([hidden])');
 if(!screen) return;
 const h=screen.getBoundingClientRect().height||window.innerHeight;
 const w=screen.getBoundingClientRect().width||window.innerWidth;
 const compact=h<720||w<350;
 const tall=h>=820;
 const scale=compact?0.90:(tall?1.08:1.0);
 screen.style.setProperty('--route-scale',String(scale));
 screen.style.setProperty('--route-card-h',`${Math.round((compact?78:(tall?96:88))*scale)}px`);
 screen.style.setProperty('--route-detail-h',`${Math.round((compact?145:(tall?195:170))*scale)}px`);
}

// v29 minor story header cleanup

// Fit the actual card, including desktop review frame and mobile browser chrome.
// ResizeObserver reacts to browser bars, rotation, resizing and modal opening.
// Accordion content flows naturally; no card-height measurement is needed.
function fitGuideCard(){}

// Refresh map dimensions when a tablet rotates or its viewport changes.
window.addEventListener("resize",()=>{if(!yandexScreen.hidden)resizeMapSoon();});

// Match the logo to the curtain edge after object-fit:cover and bottom cropping.
function fitCurtainLogo(){
 const screen=document.querySelector('.intro-screen');
 const bg=screen?.querySelector('.intro-bg');
 if(!bg || !bg.naturalWidth || screen.clientWidth<443)return;
 const w=screen.clientWidth,h=screen.clientHeight;
 const scale=Math.max(w/bg.naturalWidth,h/bg.naturalHeight);
 const cropX=(bg.naturalWidth*scale-w)/2;
 const cropY=Math.max(0,bg.naturalHeight*scale-h);
 const top=screen.querySelector('.intro-topbar').offsetTop;
 // Conservative source-image curtain edge at the bottom of the logo.
 const edge=[[0,230],[100,310],[200,430],[300,565],[400,690],[500,735],[700,780],[1672,885]];
 let width=150;
 for(let n=0;n<8;n++){
  const sy=(cropY+top+width*446/2048+8)/scale;
  let x=edge[edge.length-1][1];
  for(let i=1;i<edge.length;i++)if(sy<=edge[i][0]){const a=edge[i-1],b=edge[i];x=a[1]+(b[1]-a[1])*(sy-a[0])/(b[0]-a[0]);break;}
  width=Math.min(166,Math.max(72,w-18-60-(x*scale-cropX)-10));
 }
 screen.style.setProperty('--curtain-logo-width',width.toFixed(1)+'px');
 screen.style.setProperty('--header-mark-height',(width*446/2048).toFixed(1)+'px');
}
window.addEventListener('resize',fitCurtainLogo,{passive:true});
window.addEventListener('load',fitCurtainLogo);
new ResizeObserver(fitCurtainLogo).observe(document.getElementById('app'));
fitCurtainLogo();

// Reveal once, without changing scroll height; each scroll surface has its own observer.
const storyObservers=new WeakMap();
function observeStorySections(surface){
 if(!surface || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 storyObservers.get(surface)?.disconnect();
 const readingRoot=surface.classList.contains('content-modal')?surface.querySelector('.content-modal-scroll'):surface;
 if(readingRoot && !readingRoot.dataset.readingReady){
  readingRoot.dataset.readingReady='true';readingRoot.classList.add('reading-surface');
  
  let pending=false;const update=()=>{pending=false;const length=readingRoot.scrollHeight-readingRoot.clientHeight;readingRoot.style.setProperty('--reading-progress',length>0?Math.min(1,readingRoot.scrollTop/length):1)};
  readingRoot.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});update();
 }
 surface.querySelectorAll('.story-quote p').forEach(paragraph=>{
  if(paragraph.dataset.voicesReady)return;paragraph.dataset.voicesReady='true';
  const phrases=paragraph.textContent.match(/[^.!?]+[.!?]*\s*/g)||[paragraph.textContent];paragraph.textContent='';
  phrases.forEach((phrase,index)=>{const span=document.createElement('span');span.className='quote-voice';span.style.setProperty('--voice-index',index);span.textContent=phrase;paragraph.append(span)});
 });
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('story-visible');if(entry.target.matches('.story-image-slider,.route-portrait-gallery'))takePhotoEffect(entry.target.querySelector('.info-gallery-frame,.route-gallery-stage'));observer.unobserve(entry.target);}
 }),{root:surface.classList.contains('content-modal')?surface.querySelector('.content-modal-scroll'):surface,threshold:.08});
 surface.querySelectorAll('.story-image-slider,.route-portrait-gallery,.story-rule,.story-quote,.story-fact,.story-section>p,.story-context-copy>p,.route-context-copy>p,.route-audio-note>p,.project-story>p,.drawer-project-essay>p').forEach(el=>{el.classList.add('story-reveal');observer.observe(el);});
 storyObservers.set(surface,observer);
}

// Refit after font loading changes glyph metrics inside a previously hidden card.
if(document.fonts){document.fonts.ready.then(fitGuideCard);document.fonts.addEventListener('loadingdone',()=>requestAnimationFrame(fitGuideCard));}

// SVG arrows have a geometric centre independent of font metrics.
function normalizeArrowButtons(surface=document){
 surface.querySelectorAll('button').forEach(button=>{
  const direction=button.textContent.trim();
  if(direction!=='←'&&direction!=='→')return;
  button.classList.add('arrow-only');
  if(!button.hasAttribute('aria-label'))button.setAttribute('aria-label',direction==='←'?'Назад':'Далее');
  button.innerHTML=`<svg class="arrow-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${direction==='←'?'M19 12H5m6-6-6 6 6 6':'M5 12h14m-6-6 6 6-6 6'}"/></svg>`;
 });
}
normalizeArrowButtons();

// Temporary client review control. Customer typography is the default.
const typePreviewToggle=document.getElementById('typePreviewToggle');
function applyTypePreview(original){
 document.body.classList.toggle('type-original',original);
 typePreviewToggle.setAttribute('aria-pressed',String(original));
 typePreviewToggle.textContent=original?'Шрифты заказчика ⇄':'Прежние шрифты ⇄';
 typePreviewToggle.setAttribute('aria-label',original?'Включить Santa Catarina и Montserrat, выравнивание по ширине':'Включить прежний Nimbus Sans, выравнивание слева');
 
}
let originalPreview=false;
applyTypePreview(originalPreview);
typePreviewToggle.addEventListener('click',()=>applyTypePreview(!document.body.classList.contains('type-original')));
const projectRevealObserver=new MutationObserver(()=>{
 document.querySelectorAll('.project-story,.drawer-project-essay').forEach(article=>{
  if(article.getBoundingClientRect().height && article.getClientRects().length){
   const scroll=article.closest('.drawer-scroll,.content-modal-scroll,.prologue-menu-scroll')||article.parentElement;
   if(!article.dataset.revealReady){article.dataset.revealReady='true';observeStorySections(scroll)}
  }
 });
});
projectRevealObserver.observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','class']});

// Route information is also reachable from the contextual route badge.
safeOn('contextRouteLink','click',()=>openDrawer('points'));
function takePhotoEffect(frame){
 if(!frame||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 frame.classList.remove('photo-exposure');void frame.offsetWidth;frame.classList.add('photo-exposure');
 setTimeout(()=>frame.classList.remove('photo-exposure'),650);
}

// Fit the standing hero below actual text bounds after either font has loaded.
function fitIntroComposition(){
 const screen=$('introScreen'),hero=screen?.querySelector('.hero'),copy=screen?.querySelector('.intro-copy');
 if(!hero||!copy||screen.hidden)return;
 const heading=copy.querySelector('h1'),width=copy.clientWidth;
 if(heading){
  const preferred=screen.clientHeight<650?36:screen.clientWidth<=347?38:46;
  heading.style.setProperty('font-size',preferred+'px','important');
  const largest=Math.max(...[...heading.children].map(line=>line.scrollWidth));
  if(largest>width)heading.style.setProperty('font-size',Math.max(28,Math.floor(preferred*width/largest))+'px','important');
 }
 const base=hero.parentElement.getBoundingClientRect(),text=copy.getBoundingClientRect();
 const available=Math.max(80,base.bottom+22-text.bottom-18);
 hero.style.setProperty('height',Math.min(520,screen.clientHeight*.62,available)+'px','important');
}
window.addEventListener('resize',()=>requestAnimationFrame(fitIntroComposition));
new ResizeObserver(()=>requestAnimationFrame(fitIntroComposition)).observe($('introScreen').querySelector('.intro-copy'));
new MutationObserver(()=>requestAnimationFrame(fitIntroComposition)).observe(document.body,{attributes:true,attributeFilter:['class']});
document.fonts?.ready.then(fitIntroComposition);requestAnimationFrame(fitIntroComposition);

// A lower float leaves the first lines wide and wraps the ending around the figure.
function fitProjectFigure(){
 const scene=document.querySelector('#prologueMenuProject .project-story-scene'),wrap=scene?.querySelector('.project-figure-wrap'),text=scene?.querySelector('p');
 if(!scene||!wrap||!text||scene.getBoundingClientRect().width===0)return;
 const probe=text.cloneNode(true);probe.removeAttribute('class');
 probe.style.cssText='position:absolute;visibility:hidden;pointer-events:none;width:'+(scene.clientWidth-36)+'px!important;margin:0!important;';scene.append(probe);
 const height=probe.getBoundingClientRect().height;probe.remove();wrap.style.height=Math.max(165,height+28)+'px';
 for(let i=0;i<3;i++){const gap=scene.getBoundingClientRect().bottom-wrap.getBoundingClientRect().bottom-1;if(gap<=1)break;wrap.style.height=(wrap.getBoundingClientRect().height+gap)+'px';}
}
window.addEventListener('resize',()=>requestAnimationFrame(fitProjectFigure));
new MutationObserver(()=>requestAnimationFrame(fitProjectFigure)).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','class']});
document.fonts?.ready.then(fitProjectFigure);

// Estimate the reading position from a viewport anchor; do not track the user's gaze.
function updateReadingPosition(){
 if(!pointStoryScroll||!pointStoryOverlay.classList.contains('open'))return;
 const distance=pointStoryScroll.scrollHeight-pointStoryScroll.clientHeight;
 const fraction=distance>0?Math.min(1,Math.max(0,pointStoryScroll.scrollTop/distance)):1;
 const meter=document.querySelector('.story-reading-meter');
 if(meter){meter.setAttribute('aria-valuenow',String(Math.round(fraction*100)));meter.firstElementChild.style.transform='scaleX('+fraction+')'}
 const root=pointStoryScroll.getBoundingClientRect(),anchor=root.top+root.height*.42;
 const heading=pointStoryScroll.querySelector('.story-rule-first>span');
 const paragraphs=[...pointStoryScroll.querySelectorAll('.story-columns p')];
 const target=paragraphs[2]||paragraphs[paragraphs.length-1];
 const targetRect=target?.getBoundingClientRect();
 const headingRect=heading?.getBoundingClientRect();
 const targetActive=!!targetRect&&targetRect.top<root.top+root.height*.72&&targetRect.bottom>root.top+20;
 paragraphs.forEach(paragraph=>paragraph.classList.toggle('reading-current',paragraph===target&&targetActive));
 heading?.classList.toggle('reading-heading-current',!targetActive&&!!headingRect&&headingRect.bottom>root.top&&headingRect.top<root.bottom);

}
let readingFramePending=false;
pointStoryScroll?.addEventListener('scroll',()=>{if(!readingFramePending){readingFramePending=true;requestAnimationFrame(()=>{readingFramePending=false;updateReadingPosition()})}},{passive:true});
new MutationObserver(()=>requestAnimationFrame(updateReadingPosition)).observe(pointStoryOverlay,{attributes:true,attributeFilter:['class','hidden']});
window.addEventListener('resize',()=>requestAnimationFrame(updateReadingPosition));
