/* ========================================
   ROMANTIC TIMELINE — script.js
   Sistema Definitivo de Recuerdos
   ======================================== */

// ══════════════════════════════════════════
// CONFIG — EDIT THIS SECTION TO PERSONALIZE
// ══════════════════════════════════════════
const CONFIG = {
  names: ["freddy", "Mel"],
  startDate: "2026-02-14",
  accent1: "#7b5cff",
  accent2: "#22c55e",
};

// ══════════════════════════════════════════
// PRIMER RECUERDO — Secuencia Cinematográfica
// Edita la imagen y el texto aquí
// ══════════════════════════════════════════
const FIRST_MEMORY = {
  image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770874152/IMG-20250803-WA0017_2_tu6d5l.jpg",
  text: "el primer paso de esta increible historia de amor que nosotros 2 formamos, gran paso que decidiste tomar tu valientemente, el cual ni yo tube la fonfianza de dar, pero que a diario agradezco el poder aver sido el chico que elegiste para formar parte de tu vida, agradezco esa valentia que tubiste y ese entusiasmo, aqui inicia un camino de amor, y de recuerdos y regalitos que espero sean de tu agrado, te amo mi bebe hermosa <3",
};

// ══════════════════════════════════════════
// TIMESTAMPS DE DESBLOQUEO — Fechas exactas
// Cada recuerdo se desbloquea SOLO a las 11:11
// de su fecha correspondiente (hora local)
// ══════════════════════════════════════════
const UNLOCK_TIMESTAMPS = [
  { date: "2026-02-14", ts: 0 }, // Primer recuerdo: auto-intro
  { date: "2026-02-16", ts: new Date("2026-02-16T11:11:00").getTime() },
  { date: "2026-02-18", ts: new Date("2026-02-18T11:11:00").getTime() },
  { date: "2026-02-20", ts: new Date("2026-02-20T11:11:00").getTime() },
  { date: "2026-02-22", ts: new Date("2026-02-22T11:11:00").getTime() },
  { date: "2026-02-24", ts: new Date("2026-02-24T11:11:00").getTime() },
  { date: "2026-02-26", ts: new Date("2026-02-26T11:11:00").getTime() },
  { date: "2026-02-28", ts: new Date("2026-02-28T11:11:00").getTime() },
  { date: "2026-03-01", ts: new Date("2026-03-01T11:11:00").getTime() },
];




// ══════════════════════════════════════════
// MEMORIES — ADD / EDIT YOUR CONTENT HERE
// hint: texto pista visible cuando está bloqueado
// hintMedia: URL de imagen/video para preview blur
// ══════════════════════════════════════════
const MEMORIES = [
  {
    date: "2026-02-14",
    type: "text",
    title: "El comienzo de todo",
    text: "Hoy comienza nuestra historia. Cada día que pase, un nuevo recuerdo despertará aquí, solo para nosotros. Este es nuestro rincón secreto en el universo digital.",
    media: null,
    special: false,
    hint: "Algo hermoso está por comenzar…",
    hintMedia: null,
  },
  {
    date: "2026-02-16",
    type: "game",
    title: "Vuelo de Recuerdos",
    text: "¡Juega para recolectar monedas y desbloquear fotos especiales en la tienda!",
    media: null,
    special: false,
    hint: "Un juego especial te espera...",
    hintMedia: "https://res.cloudinary.com/demo/image/upload/sample.jpg", 
  },
  {
    date: "2026-02-18",
    type: "video",
    title: "Un instante eterno",
    text: "Algunos momentos merecen ser revividos una y otra vez…",
    media: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
    special: false,
    hint: "Un momento capturado en movimiento…",
    hintMedia: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  },
  {
    date: "2026-02-20",
    type: "text",
    title: "Palabras que guardé",
    text: "Hay cosas que nunca te dije en voz alta, pero las escribí mil veces en mi mente. Aquí van algunas de ellas:\n\nGracias por ser esa persona que me hace querer ser mejor cada día. Gracias por tu risa, por tu paciencia, por todo lo que eres.",
    media: null,
    special: false,
    hint: "Palabras escritas desde el corazón…",
    hintMedia: null,
  },
  {
    date: "2026-02-22",
    type: "video",
    title: "Nuestra canción favorita",
    text: "Cada vez que suena esta canción, pienso en ti.",
    media: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
    special: false,
    hint: "Una melodía que nos conecta…",
    hintMedia: null,
  },
  {
    date: "2026-02-24",
    type: "audio",
    title: "Escucha esto",
    text: "Presiona play y cierra los ojos un momento…",
    media: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
    special: false,
    hint: "Cierra los ojos y escucha…",
    hintMedia: null,
  },
  {
    date: "2026-02-26",
    type: "text",
    title: "Una carta para ti",
    text: "Mi amor,\n\nNo sé cómo explicar lo que siento sin que las palabras se queden cortas. Pero quiero que sepas que eres lo mejor que me ha pasado. Cada momento contigo es un regalo que guardo en el corazón.\n\nTe quiero más de lo que cualquier palabra podría decir.\n\nPara siempre tuyo/a.",
    media: null,
    special: false,
    hint: "Una carta que guardé mucho tiempo…",
    hintMedia: null,
  },
  {
    date: "2026-02-28",
    type: "text",
    title: "Algo se acerca…",
    text: "Esto aún no termina. Mañana despierta el último recuerdo. El más especial de todos. ¿Estás preparado/a?",
    media: null,
    special: false,
    hint: "El final se acerca… ¿o es un comienzo?",
    hintMedia: null,
  },
  {
    date: "2026-03-01",
    type: "text",
    title: "El gran final ✨",
    text: "Llegamos al final de este viaje… pero solo es el comienzo del nuestro.\n\nCada recuerdo aquí es una prueba de que lo nuestro es real, hermoso y vale la pena. Gracias por caminar conmigo.\n\nTe amo. Hoy, mañana y siempre. 💜💚",
    media: null,
    special: true,
    hint: "El momento más especial de todos…✨",
    hintMedia: null,
  },
];

// ══════════════════════════════════════════
// TIENDA DE RECUERDOS — FOTOS DESBLOQUEABLES
// ══════════════════════════════════════════
const SHOP_PHOTOS = [
    { id: "shop1", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215657/WhatsApp_Image_2026-02-15_at_10.08.08_PM_wghi7u.jpg", title: "Mini Freddy 1" },
    { id: "shop2", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215657/WhatsApp_Image_2026-02-15_at_10.10.08_PM_p4038w.jpg", title: "Mini Freddy 2" },
    { id: "shop3", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215657/WhatsApp_Image_2026-02-15_at_10.11.40_PM_yqqasn.jpg", title: "Mini Freddy 3" },
    { id: "shop4", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215657/WhatsApp_Image_2026-02-15_at_10.10.26_PM_ov0gqk.jpg", title: "Mini Freddy 4" },
    { id: "shop5", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.12.50_PM_m9gzfq.jpg", title: "Mini Freddy 5" },
    { id: "shop6", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.11.57_PM_d7vyxy.jpg", title: "Mini Freddy 6" },
    { id: "shop7", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.09.42_PM_rll549.jpg", title: "Mini Freddy 7" },
    { id: "shop8", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.12.29_PM_nkwpun.jpg", title: "Mini Freddy 8" },
    { id: "shop9", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.13.15_PM_sdd7c8.jpg", title: "Mini Freddy 9" },
    { id: "shop10", price: 5, url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771215656/WhatsApp_Image_2026-02-15_at_10.09.53_PM_j8vwhq.jpg", title: "Mini Freddy 10" },
];

// STATE
let gameCoins = 0;
let unlockedShopItems = [];
let gameActive = false;
let gameRaf = null;

// INIT Load
function loadGameState() {
  const savedCoins = localStorage.getItem("minigame_coins");
  if (savedCoins !== null) gameCoins = parseInt(savedCoins);

  const savedItems = localStorage.getItem("minigame_unlocked_items");
  if (savedItems) unlockedShopItems = JSON.parse(savedItems);

  // Starter Gift V3 — always ensure at least 11 coins on fresh start
  if (localStorage.getItem("minigame_starterGiven_v3") !== "true") {
      gameCoins = 11;
      localStorage.setItem("minigame_starterGiven_v3", "true");
      localStorage.setItem("minigame_coins", gameCoins);
  }
}
loadGameState();

/* =========================
   GALERÍA DE RECUERDOS (Portada)
   ========================= */
const GALLERY = [
  { id: "g1", title: "Nuestra Historia", text: "una de las primeras fotitos que tubimos juntos, fue el inicio de una muy gran y linda historia de amor <3", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871186/EDIT_20250819_193612_yrjdpr.jpg" },
  { id: "g2", title: "Risas", text: "no recuerdo mucho de esta foto pero no dudo que fue uno de los tantos momentos que fuimos felizes", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20260119_152336_v8gyvs.jpg" },
  { id: "g3", title: "Juntos", text: "ahhh en galerias, gracias por recordarmelo bebe, gracias por acompañarme, lo aprecio demaciado <3", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20260208_162233_olfn9q.jpg" },
  { id: "g4", title: "Recuerdos", text: "JSAJSJ el conejo sin cabeza, ese dia mientras me maquillabas no podia parar de no verte, encerio eres increiblemente hermosa", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20251210_001810_039_w3b3p7.webp" },
  { id: "g5", title: "Aventuras", text: "JASJSJS, super lindo dia reciente que si no me equivoco vimos la empleada, que chi bebe, te encerrare para que no veas a nadie masss, eres miaaa", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG_20260104_204724_ncuvpz.jpg" },
  { id: "g6", title: "Detalles", text: "JASJASJA, eramos ranitas bebeee, gracias por jugar juegos conmigo <3", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/2204056143_74452406864721_1761194147955_dwsa3w.png" },
  { id: "g7", title: "Especial", text: "amo esta foto, desde esos entonces sabia y estaba decidido en ser todo tu futuro <3", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20251009_113213_378_zccllq.webp" },
  { id: "g8", title: "Inolvidable", text: "sinceramente no recuerdo mucho el contexto pero no dudo que estaba siendo feliz", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20260119_152328_xcczlg.jpg" },
  { id: "g9", title: "Magia", text: "ahhhhh encerio eres hermosaaaaaa, pls besameee", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20251031_142250_xowfat.jpg" },
  { id: "g10", title: "Felicidad", text: "unas de las primeras fotos donde saliamos los 2, amo cada parte de estos recuerdos y sus momentos", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG-20250810-WA0060_dsdzw5.jpg" },
  { id: "g11", title: "Nosotros", text: "oficialmente siendo esposos robloxianos, proximamente en vida real cariño", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/2204056143_117167805081799_1767865820369_d108l6.png" },
  { id: "g12", title: "Viajes", text: "iuuu foto mia, en la vida avia mirado a alguien con tanto aprecio y amor, solo por ti y para ti puedo ser asi de feliz", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20251119_140716_w0g5di.jpg" },
  { id: "g13", title: "Amor", text: "JAJAJAJAJ, foto toda watajai, pero lo que paso ese dia y el paso que tomaste tomandome de la mano, me hizo sentime mas seguro que te necesitaba en mi vida", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG-20250815-WA0035_a3jsnn.jpg" },
  { id: "g14", title: "Arte", text: "me encanta esta foto, nos vemos super twins, ese dia te tome muchas fotos como gran admirador numero1 que soy", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/museo_nsyvu9.jpg" },
  { id: "g15", title: "Mundos", text: "AJSJASJAJ, tuyyo en minecraft, hay que jugar bebeeeee", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/Screenshot_20251007-212536.Minecraft_jqizii.png" },
  { id: "g16", title: "Cómplices", text: "En el kamoon AJASJAJ, fue un gran paso salir con mi hermana, desde alli descubri lo bien que te llevavas con ella y lo mucho que le caiste bien", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/IMG-20250928-WA0036_zhhz7a.jpg" },
  { id: "g17", title: "Locuras", text: "super insanooos, HAJJSJSA, rara vez tomo fotos pero ese dia me queria animar aunque sea un poco", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871191/Snapchat-407395229_gwvakj.jpg" },
  { id: "g18", title: "Miradas", text: "otra de las primeras fotitos, amo cada una de las fotos que tomas bebeee", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG-20250821-WA0065_gcqpzp.jpg" },
  { id: "g19", title: "Contigo", text: "mis bebes juntoos, JSJAJSJSA, te amo bebee<3", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/IMG-20250927-WA0011_ixymcz.jpg" },
  { id: "g20", title: "Te quiero", text: "JASJASJJASJAJSAJ, nos veiamos superrrr", image: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871191/Snapchat-1540043468_ikubii.jpg" },
];

/* ======================================
   FONDO VIVO INTERACTIVO (Global)
   Recuerdos flotantes distribuidos en toda la página
   // COMENTAR PARA EDITAR: Agrega aquí tus propias fotos y textos
   ====================================== */
const FLOATING_MEMORIES = [
  { id: "f1", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871186/EDIT_20250819_193612_yrjdpr.jpg", text: "una de las primeras fotitos que tubimos juntos, fue el inicio de una muy gran y linda historia de amor <3", title: "Nuestra Historia" },
  { id: "f2", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20260119_152336_v8gyvs.jpg", text: "no recuerdo mucho de esta foto pero no dudo que fue uno de los tantos momentos que fuimos felizes", title: "Risas" },
  { id: "f3", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20260208_162233_olfn9q.jpg", text: "ahhh en galerias, gracias por recordarmelo bebe, gracias por acompañarme, lo aprecio demaciado <3", title: "Juntos" },
  { id: "f4", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20251210_001810_039_w3b3p7.webp", text: "JSAJSJ el conejo sin cabeza, ese dia mientras me maquillabas no podia parar de no verte, encerio eres increiblemente hermosa", title: "Recuerdos" },
  { id: "f5", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG_20260104_204724_ncuvpz.jpg", text: "JASJSJS, super lindo dia reciente que si no me equivoco vimos la empleada, que chi bebe, te encerrare para que no veas a nadie masss, eres miaaa", title: "Aventuras" },
  { id: "f6", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/2204056143_74452406864721_1761194147955_dwsa3w.png", text: "JASJASJA, eramos ranitas bebeee, gracias por jugar juegos conmigo <3", title: "Detalles" },
  { id: "f7", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20251009_113213_378_zccllq.webp", text: "amo esta foto, desde esos entonces sabia y estaba decidido en ser todo tu futuro <3", title: "Especial" },
  { id: "f8", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/IMG_20260119_152328_xcczlg.jpg", text: "sinceramente no recuerdo mucho el contexto pero no dudo que estaba siendo feliz", title: "Inolvidable" },
  { id: "f9", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20251031_142250_xowfat.jpg", text: "ahhhhh encerio eres hermosaaaaaa, pls besameee", title: "Magia" },
  { id: "f10", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG-20250810-WA0060_dsdzw5.jpg", text: "unas de las primeras fotos donde saliamos los 2, amo cada parte de estos recuerdos y sus momentos", title: "Felicidad" },
  { id: "f11", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871187/2204056143_117167805081799_1767865820369_d108l6.png", text: "oficialmente siendo esposos robloxianos, proximamente en vida real cariño", title: "Nosotros" },
  { id: "f12", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871188/IMG_20251119_140716_w0g5di.jpg", text: "iuuu foto mia, en la vida avia mirado a alguien con tanto aprecio y amor, solo por ti y para ti puedo ser asi de feliz", title: "Viajes" },
  { id: "f13", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG-20250815-WA0035_a3jsnn.jpg", text: "JAJAJAJAJ, foto toda watajai, pero lo que paso ese dia y el paso que tomaste tomandome de la mano, me hizo sentime mas seguro que te necesitaba en mi vida", title: "Amor" },
  { id: "f14", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/museo_nsyvu9.jpg", text: "me encanta esta foto, nos vemos super twins, ese dia te tome muchas fotos como gran admirador numero1 que soy", title: "Arte" },
  { id: "f15", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/Screenshot_20251007-212536.Minecraft_jqizii.png", text: "AJSJASJAJ, tuyyo en minecraft, hay que jugar bebeeeee", title: "Mundos" },
  { id: "f16", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/IMG-20250928-WA0036_zhhz7a.jpg", text: "En el kamoon AJASJAJ, fue un gran paso salir con mi hermana, desde alli descubri lo bien que te llevavas con ella y lo mucho que le caiste bien", title: "Cómplices" },
  { id: "f17", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871191/Snapchat-407395229_gwvakj.jpg", text: "super insanooos, HAJJSJSA, rara vez tomo fotos pero ese dia me queria animar aunque sea un poco", title: "Locuras" },
  { id: "f18", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871189/IMG-20250821-WA0065_gcqpzp.jpg", text: "otra de las primeras fotitos, amo cada una de las fotos que tomas bebeee", title: "Miradas" },
  { id: "f19", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871190/IMG-20250927-WA0011_ixymcz.jpg", text: "mis bebes juntoos, JSJAJSJSA, te amo bebee<3", title: "Contigo" },
  { id: "f20", url: "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1770871191/Snapchat-1540043468_ikubii.jpg", text: "JASJASJJASJAJSAJ, nos veiamos superrrr", title: "Te quiero" },
];

// ══════════════════════════════════════════
// GLOBAL FLOATING PHOTOS SYSTEM (Fondo Vivo)
// ══════════════════════════════════════════

let floatingElements = [];
let floatingRaf = null;

function initFloatingPhotos() {
  const container = document.getElementById("floating-photos-layer");
  if (!container || FLOATING_MEMORIES.length === 0) return;

  // Distribute photos over the entire Scrollable Height of the page
  // We estimate height based on body or a fixed large value to ensure coverage
  const docHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 2000); 
  const count = 12; // Fewer items but more impactful as "cards"
  
  for (let i = 0; i < count; i++) {
    const memory = FLOATING_MEMORIES[i % FLOATING_MEMORIES.length];
    createFloatingElement(container, memory, i, docHeight);
  }

  // Animation loop
  let lastTime = performance.now();
  function animate(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    for (const f of floatingElements) {
      // Rotate slowly (applied to INNER element to separate from translation)
      f.angle += f.rotSpeed * dt * 60; 
      // Gentle bobbing (applied to Y position)
      const yOffset = Math.sin(now * 0.001 * f.bobSpeed) * 15;
      
      // Apply TRANSLATION to WRAPPER (avoids conflict with hover scale)
      f.wrapper.style.transform = `translate(${f.x}px, ${f.y + yOffset}px)`;
      
      // Apply ROTATION to INNER (if not hovered - handled by CSS mostly, but we trigger it via var)
      // Actually, simplest is: JS moves Wrapper (Translate). 
      // Inner has constant rotation? No, we want it to rotate slowly.
      // If we put rotation on Inner via JS 'transform', CSS hover 'transform' will overwrite it.
      // BETTER: Use CSS Variable for rotation!
      f.el.style.setProperty('--rot', f.angle + 'deg');
    }
    floatingRaf = requestAnimationFrame(animate); 
  }
  floatingRaf = requestAnimationFrame(animate);
}

function createFloatingElement(container, memory, index, totalHeight) {
  // 1. Wrapper for Position (JS controlled only)
  const wrapper = document.createElement("div");
  wrapper.className = "bg-float-wrapper";
  wrapper.style.position = "absolute";
  wrapper.style.top = "0";
  wrapper.style.left = "0";
  wrapper.style.willChange = "transform";
  wrapper.style.zIndex = "1"; // Base z-index
  
  // 2. Inner Element for Visuals (CSS + Rotation)
  const el = document.createElement("div");
  el.className = "bg-float-photo"; 
  
  // Random placement
  const sectionHeight = totalHeight / 12;
  const baseY = index * sectionHeight + (Math.random() * sectionHeight * 0.5);
  let baseX = Math.random() * (window.innerWidth - 180); // Adjusted for width
  
  const floatObj = {
    wrapper,
    el,
    memory,
    x: baseX,
    y: baseY,
    angle: (Math.random() - 0.5) * 20,
    rotSpeed: (Math.random() - 0.5) * 0.05,
    bobSpeed: 0.5 + Math.random(),
    depth: Math.random()
  };

  // Interaction
  el.onclick = (e) => {
    e.stopPropagation(); // Prevent bubbling issues
    openGalleryLightbox({
      title: memory.title || "Recuerdo Flotante",
      text: memory.text,
      image: memory.url,
      sound: null
    });
  };

  el.innerHTML = `
    <div class="photo-inner">
      <img src="${memory.url}" alt="Recuerdo" loading="lazy" draggable="false">
    </div>
    <div class="photo-caption">${memory.text}</div>
  `;
  
  wrapper.appendChild(el);
  container.appendChild(wrapper);
  floatingElements.push(floatObj);
}

// Boost not needed for static cards, but we can keep it for opacity pulsing
function boostFloatingPhotos() {
  // Optional: Make them pulse
}

// ══════════════════════════════════════════
// GALLERY SYSTEM — (Lightbox & Audio)
// ══════════════════════════════════════════

let galleryAudio = null;
let galleryFadeInterval = null;

function buildGallery() {
  const container = document.getElementById("gallery-float");
  if (!container || GALLERY.length === 0) return;

  const layouts = [
    { left: "5%", top: "10%", w: 110, h: 80, depth: 1, driftX: "6px", driftY: "-8px", rotS: "-3deg", rotE: "2deg", dur: "7s", del: "0s" },
    { left: "55%", top: "5%", w: 90, h: 68, depth: 2, driftX: "-5px", driftY: "7px", rotS: "2deg", rotE: "-2deg", dur: "9s", del: "1.2s" },
    { left: "30%", top: "45%", w: 120, h: 90, depth: 1, driftX: "10px", driftY: "-6px", rotS: "-1deg", rotE: "3deg", dur: "8s", del: "0.5s" },
    { left: "72%", top: "40%", w: 80, h: 60, depth: 3, driftX: "-8px", driftY: "10px", rotS: "3deg", rotE: "-1deg", dur: "11s", del: "2s" },
    { left: "10%", top: "60%", w: 95, h: 72, depth: 2, driftX: "7px", driftY: "-12px", rotS: "-2deg", rotE: "1deg", dur: "10s", del: "0.8s" },
    { left: "50%", top: "65%", w: 85, h: 64, depth: 3, driftX: "-6px", driftY: "8px", rotS: "1deg", rotE: "-3deg", dur: "12s", del: "1.5s" },
    { left: "80%", top: "15%", w: 75, h: 56, depth: 2, driftX: "4px", driftY: "-5px", rotS: "-2deg", rotE: "2deg", dur: "9.5s", del: "0.3s" },
  ];

  GALLERY.forEach((item, i) => {
    const layout = layouts[i % layouts.length];
    const el = document.createElement("div");
    el.className = `gallery-float__item gallery-float__item--depth-${layout.depth}`;
    el.setAttribute("data-gallery-id", item.id);
    el.style.left = layout.left;
    el.style.top = layout.top;
    el.style.width = layout.w + "px";
    el.style.height = layout.h + "px";
    el.style.setProperty("--drift-x", layout.driftX);
    el.style.setProperty("--drift-y", layout.driftY);
    el.style.setProperty("--drift-rotate-start", layout.rotS);
    el.style.setProperty("--drift-rotate-end", layout.rotE);
    el.style.setProperty("--drift-duration", layout.dur);
    el.style.setProperty("--drift-delay", layout.del);
    el.innerHTML = `<img src="${item.image}" alt="${item.title}" loading="lazy" draggable="false">`;
    el.addEventListener("click", () => openGalleryLightbox(item));
    container.appendChild(el);
  });
}

// ── Scroll position save/restore helpers ──
let savedScrollY = 0;

function lockScroll() {
  savedScrollY = window.scrollY;
  document.body.classList.add("gallery-open");
  document.body.style.top = `-${savedScrollY}px`;
}

function unlockScroll() {
  document.body.classList.remove("gallery-open");
  document.body.style.top = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.documentElement.style.overflow = "";
  window.scrollTo(0, savedScrollY);
}

function openGalleryLightbox(item) {
  const lightbox = document.getElementById("gallery-lightbox");
  const img = document.getElementById("gallery-lightbox-img");
  const title = document.getElementById("gallery-lightbox-title");
  const text = document.getElementById("gallery-lightbox-text");
  if (!lightbox) return;

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  const paragraphs = item.text.split("\n").filter((p) => p.trim());
  text.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");

  lightbox.classList.add("is-open");
  lockScroll();

  if (item.sound) playGallerySound(item.sound);
}

function closeGalleryLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  unlockScroll();
  fadeOutGallerySound();
}

// SOUND IMPROVEMENTS: Fade in/out, strict stop
function playGallerySound(url) {
  stopGallerySound(); // Ensure strict exclusivity
  
  galleryAudio = new Audio(url);
  galleryAudio.volume = 0; // Start muted
  galleryAudio.loop = false;
  
  const playPromise = galleryAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Fade In
      let vol = 0;
      const targetVol = 0.5;
      const fadeIn = setInterval(() => {
        if (!galleryAudio) { clearInterval(fadeIn); return; }
        vol = Math.min(vol + 0.05, targetVol);
        galleryAudio.volume = vol;
        if (vol >= targetVol) clearInterval(fadeIn);
      }, 30); // ~300ms fade in
    }).catch((e) => {
      console.log("Audio autoplay blocked (interaction required)", e);
    });
  }
}

function fadeOutGallerySound() {
  if (!galleryAudio) return;
  
  const audio = galleryAudio;
  let vol = audio.volume;
  
  if (galleryFadeInterval) clearInterval(galleryFadeInterval);
  
  galleryFadeInterval = setInterval(() => {
    vol = Math.max(vol - 0.05, 0);
    try { audio.volume = vol; } catch(e){}
    
    if (vol <= 0) {
      clearInterval(galleryFadeInterval);
      galleryFadeInterval = null;
      audio.pause();
      audio.currentTime = 0;
    }
  }, 30); // ~300ms fade out
}

function stopGallerySound() {
  if (galleryFadeInterval) { clearInterval(galleryFadeInterval); galleryFadeInterval = null; }
  if (galleryAudio) { 
    galleryAudio.pause(); 
    galleryAudio.currentTime = 0; 
    galleryAudio = null; 
  }
}

function initGalleryLightbox() {
  const backdrop = document.getElementById("gallery-lightbox-backdrop");
  const closeBtn = document.getElementById("gallery-lightbox-close");
  if (backdrop) backdrop.addEventListener("click", closeGalleryLightbox);
  if (closeBtn) closeBtn.addEventListener("click", closeGalleryLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const lb = document.getElementById("gallery-lightbox");
      if (lb && lb.classList.contains("is-open")) closeGalleryLightbox();
    }
  });
}

// ══════════════════════════════════════════
// HINT LIGHTBOX & UNLOCK LOGIC
// ══════════════════════════════════════════

function openHintLightbox(memory) {
  const overlay = document.getElementById("hint-overlay");
  if (!overlay) return;

  const hintImg = document.getElementById("hint-overlay-img");
  const hintWave = document.getElementById("hint-overlay-wave");
  const hintPaper = document.getElementById("hint-overlay-paper");
  const hintText = document.getElementById("hint-overlay-text");

  hintImg.style.display = "none";
  hintWave.style.display = "none";
  hintPaper.style.display = "none";

  if (memory.hintMedia && (memory.type === "photo" || memory.type === "video" || memory.type === "game")) {
    hintImg.src = memory.hintMedia;
    hintImg.style.display = "block";
  } else if (memory.type === "audio") {
    hintWave.style.display = "flex";
  } else {
    hintPaper.style.display = "flex";
  }

  hintText.textContent = memory.hint || "Aún no despierta…";
  overlay.classList.add("is-open");
  lockScroll();
}

function closeHintLightbox() {
  const overlay = document.getElementById("hint-overlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  unlockScroll();
}

function initHintLightbox() {
  const backdrop = document.getElementById("hint-overlay-backdrop");
  const closeBtn = document.getElementById("hint-overlay-close");
  if (backdrop) backdrop.addEventListener("click", closeHintLightbox);
  if (closeBtn) closeBtn.addEventListener("click", closeHintLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const ov = document.getElementById("hint-overlay");
      if (ov && ov.classList.contains("is-open")) closeHintLightbox();
    }
  });
}

// ══════════════════════════════════════════
// UNLOCK HELPERS — Timestamp-based
// ══════════════════════════════════════════

function isUnlockedInStorage(date) {
  return localStorage.getItem("unlocked_" + date) === "true";
}

function saveUnlock(date) {
  localStorage.setItem("unlocked_" + date, "true");
  localStorage.setItem("lastUnlockTime", String(Date.now()));
}

// Check if the unlock window is active for a given date
// Window = PERMANENT once 11:11 passes (so the user can always unlock after the time)
function isUnlockWindowOpen(date) {
  if (detectClockTampering()) return false;
  const entry = UNLOCK_TIMESTAMPS.find(e => e.date === date);
  if (!entry || entry.ts === 0) return false; // First memory is auto
  const now = Date.now();
  // Once 11:11 passes, window stays open permanently
  return now >= entry.ts;
}

// Check if the unlock timestamp has been reached (date's 11:11 has passed)
function isUnlockTimeReached(date) {
  const entry = UNLOCK_TIMESTAMPS.find(e => e.date === date);
  if (!entry) return false;
  if (entry.ts === 0) return true; // First memory always "reached"
  return Date.now() >= entry.ts;
}

// Get the next unlock timestamp that hasn't been unlocked yet
function getNextUnlockTimestamp() {
  for (const entry of UNLOCK_TIMESTAMPS) {
    if (entry.ts === 0) continue; // Skip first memory (auto)
    if (!isUnlockedInStorage(entry.date) && entry.ts > Date.now()) {
      return entry;
    }
  }
  // Check for entries whose window hasn't been used yet today
  for (const entry of UNLOCK_TIMESTAMPS) {
    if (entry.ts === 0) continue;
    if (!isUnlockedInStorage(entry.date)) return entry;
  }
  return null;
}

// ── Anti-Clock-Tampering ──
function initClockSecurity() {
  const stored = localStorage.getItem("firstAccessTime");
  if (!stored) {
    localStorage.setItem("firstAccessTime", String(Date.now()));
  }
  localStorage.setItem("lastCheckTime", String(Date.now()));
}

function detectClockTampering() {
  const firstAccess = Number(localStorage.getItem("firstAccessTime") || 0);
  const lastCheck = Number(localStorage.getItem("lastCheckTime") || 0);
  const now = Date.now();

  // Clock went backwards more than 5 minutes from first access
  if (firstAccess > 0 && now < firstAccess - 300000) return true;

  // Clock jumped backwards more than 48 hours since last check
  if (lastCheck > 0 && now < lastCheck - 172800000) return true;

  // Update last check (only if time is moving forward)
  if (now >= lastCheck) {
    localStorage.setItem("lastCheckTime", String(now));
  }

  return false;
}

function createMemory(memoryData) {
  const { date, type, title, text, media, special, hint, hintMedia } = memoryData;
  const isFirstMem = MEMORIES[0].date === date;
  const isUnlocked = isFirstMem
    ? localStorage.getItem("firstMemoryUnlocked") === "true"
    : isUnlockedInStorage(date);
  const timeReached = isUnlockTimeReached(date);

  const item = document.createElement("div");
  item.className = "timeline-item";
  item.setAttribute("data-date", date);
  if (isUnlocked) item.classList.add("is-unlocked");
  if (special) item.classList.add("is-special");

  const card = document.createElement("div");
  card.className = "memory-card";
  card.setAttribute("data-date", date);
  if (isUnlocked) card.classList.add("is-unlocked");
  if (special) card.classList.add("is-special");
  if (!isUnlocked && !isFirstMem) card.classList.add("memory-card--locked");

  const dateObj = new Date(date + "T00:00:00");
  const formattedDate = dateObj.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const icons = { text: "✍️", photo: "📷", video: "🎬", audio: "🎵", game: "🎮" };

  // Header
  const header = document.createElement("div");
  header.className = "memory-card__header";
  header.innerHTML = `
    <div class="memory-card__icon">${special ? "⭐" : icons[type] || "💜"}</div>
    <div class="memory-card__meta">
      <div class="memory-card__date">${formattedDate}</div>
      <h3 class="memory-card__title">${isUnlocked ? title : (isFirstMem ? title : "???")}</h3>
    </div>
  `;
  card.appendChild(header);

  if (isFirstMem) {
    // ── FIRST MEMORY: always render (click shows ceremony) ──
    if (isUnlocked) {
      card.classList.add("is-unlocked");
      item.classList.add("is-unlocked");
    }
    renderFirstMemoryBody(card, memoryData);
  } else if (isUnlocked) {
    // ── UNLOCKED (non-first) ──
    renderUnlockedBody(card, memoryData);
  } else if (timeReached) {
    // ── TIMESTAMP REACHED but NOT UNLOCKED: show unlock area ──
    renderLockedWithUnlockArea(card, memoryData);
  } else {
    // ── NOT REACHED: standard locked ──
    renderLockedStandard(card, memoryData);
  }

  item.appendChild(card);
  return item;
}

// ── First memory body: click replays ceremony ──
function renderFirstMemoryBody(card, memory) {
  const body = document.createElement("div");
  body.className = "memory-card__body";

  card.style.cursor = "pointer";
  card.title = "✨ Clic para revivir este recuerdo ✨";

  const zoomHint = document.createElement("div");
  zoomHint.className = "zoom-hint-icon";
  zoomHint.innerHTML = "🔍";
  card.appendChild(zoomHint);

  // Click replays the cinematic ceremony
  card.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    showFirstMemoryCeremony();
  });

  if (memory.text) {
    const textEl = document.createElement("div");
    textEl.className = "memory-card__text";
    const paragraphs = memory.text.split("\n").filter((p) => p.trim());
    textEl.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
    body.appendChild(textEl);
  }

  if (memory.media && memory.type === "photo") {
    const photoWrap = document.createElement("div");
    photoWrap.className = "memory-card__photo";
    photoWrap.innerHTML = `<img src="${memory.media}" alt="${memory.title}" loading="lazy">`;
    body.appendChild(photoWrap);
  }

  card.appendChild(body);
}

// ── Render unlocked card body (non-first memories) ──
function renderUnlockedBody(card, memory) {
  const { type, title, text, media } = memory;
  const body = document.createElement("div");
  body.className = "memory-card__body";

  card.style.cursor = "pointer";
  card.title = "✨ Clic para ampliar recuerdo ✨";

  const zoomHint = document.createElement("div");
  zoomHint.className = "zoom-hint-icon";
  zoomHint.innerHTML = "🔍";
  card.appendChild(zoomHint);

  card.addEventListener("click", (e) => {
    if (e.target.tagName === "VIDEO" || e.target.tagName === "AUDIO" || e.target.tagName === "BUTTON") return;
    // Don't open lightbox if this is a game or special type that handles its own clicks
    if (type === "game") return;

    openGalleryLightbox({
      title: title,
      text: text,
      image: (type === "photo") ? media : null,
      sound: (type === "audio") ? media : null
    });
  });

  if (text) {
    const textEl = document.createElement("div");
    textEl.className = "memory-card__text";
    const paragraphs = text.split("\n").filter((p) => p.trim());
    textEl.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
    body.appendChild(textEl);
  }

  if (media) {
    if (type === "photo") {
      const photoWrap = document.createElement("div");
      photoWrap.className = "memory-card__photo";
      photoWrap.innerHTML = `<img src="${media}" alt="${title}" loading="lazy">`;
      body.appendChild(photoWrap);
    }
    if (type === "video") {
      const videoWrap = document.createElement("div");
      videoWrap.className = "memory-card__video";
      videoWrap.innerHTML = `<video src="${media}" controls playsinline preload="metadata"></video>`;
      body.appendChild(videoWrap);
    }
    if (type === "audio") {
      const audioWrap = document.createElement("div");
      audioWrap.className = "memory-card__audio";
      audioWrap.innerHTML = `<audio src="${media}" controls preload="metadata"></audio>`;
      body.appendChild(audioWrap);
    }
  }
    
  // ── GAME LOGIC HOOK ──
  if (type === "game") {
      renderGameMemory(body, memory);
  }

  card.appendChild(body);
}

// ══════════════════════════════════════════
// MINI-JUEGO: VUELO DE RECUERDOS (ENHANCED)
// ══════════════════════════════════════════

let gameInstance = null; 

// ── Game: "Vuelo de Recuerdos" — Enhanced ──
function renderGameMemory(container, memory) {
    container.innerHTML = "";

    const gameWrapper = document.createElement("div");
    gameWrapper.className = "game-wrapper";
    
    const statsBar = document.createElement("div");
    statsBar.className = "game-stats";
    statsBar.innerHTML = `
        <div class="coin-display">🪙 <span id="game-coin-count">${gameCoins}</span></div>
        <div class="game-actions">
             <button class="shop-btn-trigger">🛍️ Tienda</button>
        </div>
    `;
    gameWrapper.appendChild(statsBar);

    const canvasContainer = document.createElement("div");
    canvasContainer.className = "game-canvas-container";
    
    const canvas = document.createElement("canvas");
    canvas.id = "game-canvas";
    canvas.width = 600; 
    canvas.height = 300;
    canvasContainer.appendChild(canvas);
    
    const instructions = document.createElement("div");
    instructions.className = "game-instructions";
    instructions.innerHTML = `<small>Toca o haz click para volar 💜 • Esquiva obstáculos • Recoge monedas 🪙</small>`;
    
    const startOverlay = document.createElement("div");
    startOverlay.className = "game-overlay game-start-overlay";
    startOverlay.innerHTML = `
        <div class="overlay-content">
            <h3>Vuelo de Recuerdos 💜</h3>
            <p>Recoge monedas volando entre los obstáculos</p>
            <p class="subtitle">Usa las monedas en la tienda para desbloquear fotos</p>
            <button class="btn-play">▶ Jugar</button>
        </div>
    `;
    canvasContainer.appendChild(startOverlay);

    const gameOverOverlay = document.createElement("div");
    gameOverOverlay.className = "game-overlay game-over-overlay";
    gameOverOverlay.style.display = "none";
    gameOverOverlay.innerHTML = `
        <div class="overlay-content">
            <h3>💔 ¡Auch!</h3>
            <p id="game-over-score">Monedas: ${gameCoins}</p>
            <button class="btn-play">🔄 Intentar de nuevo</button>
            <button class="btn-shop-over" style="margin-top:8px;background:#8b5cf6;">🛍️ Ir a la Tienda</button>
        </div>
    `;
    canvasContainer.appendChild(gameOverOverlay);
    
    gameWrapper.appendChild(canvasContainer);
    gameWrapper.appendChild(instructions); 
    container.appendChild(gameWrapper);

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let isPlaying = false;
    let score = 0;
    let frameCount = 0;
    const GRAVITY = 0.22;
    const LIFT = -4.2;
    const BASE_SPEED = 2;
    let gameSpeed = BASE_SPEED;
    
    let gPlayer = { x: 60, y: 150, vy: 0, r: 14, trail: [] };
    let gObstacles = [];
    let coinsArray = [];
    let gParticles = [];
    let bgStars = [];

    function generateStars() {
        bgStars = [];
        for (let i = 0; i < 50; i++) {
            bgStars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 + 0.3, tw: Math.random() * Math.PI * 2, sp: Math.random() * 0.02 + 0.01 });
        }
    }

    function resetGame() {
        gPlayer = { x: 60, y: canvas.height / 2, vy: 0, r: 14, trail: [] };
        gObstacles = []; coinsArray = []; gParticles = [];
        score = 0; frameCount = 0; gameSpeed = BASE_SPEED;
        gOpts.obstacleTimer = 120; gOpts.coinTimer = 40;
        isPlaying = true; window.isGameRunning = true;
        gameOverOverlay.style.display = "none";
        startOverlay.style.display = "none";
        generateStars();
        animate();
    }

    function spawnObstacle() {
        const gap = Math.max(100, 130 - score * 2);
        const minH = 30;
        const space = canvas.height - gap - (minH * 2);
        const topH = minH + Math.random() * space;
        gObstacles.push({ x: canvas.width, w: 32, hTop: topH, hBottom: canvas.height - topH - gap, passed: false });
    }

    function spawnCoin() {
        const y = 30 + Math.random() * (canvas.height - 60);
        coinsArray.push({ x: canvas.width + Math.random() * 50, y, r: 18, hitR: 28, collected: false, glow: 0 }); 
    }

    function addGParticle(x, y, color, count) {
        for (let i = 0; i < count; i++) {
            gParticles.push({ x, y, vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4, r: Math.random() * 3 + 1, life: 1, color: color || '#fbbf24' });
        }
    }

    function doGameOver() {
        isPlaying = false; window.isGameRunning = false;
        cancelAnimationFrame(animationFrameId);
        const scoreEl = gameOverOverlay.querySelector('#game-over-score');
        if (scoreEl) scoreEl.textContent = '🪙 Monedas: ' + gameCoins;
        gameOverOverlay.style.display = "flex";
    }

    function animate() {
        if (!isPlaying) return;
        frameCount++;

        // Background gradient + stars
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, '#0f0a1e'); grad.addColorStop(0.5, '#1a1a2e'); grad.addColorStop(1, '#16213e');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, canvas.width, canvas.height);
        bgStars.forEach(s => {
            s.tw += s.sp; s.x -= gameSpeed * 0.2; if (s.x < 0) s.x = canvas.width;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + (0.3 + Math.sin(s.tw) * 0.3) + ')'; ctx.fill();
        });

        // Physics
        gPlayer.vy += GRAVITY; gPlayer.y += gPlayer.vy;
        if (gPlayer.y + gPlayer.r >= canvas.height) { gPlayer.y = canvas.height - gPlayer.r; gPlayer.vy = 0; }
        if (gPlayer.y - gPlayer.r <= 0) { gPlayer.y = gPlayer.r; gPlayer.vy = 0; }
        gameSpeed = BASE_SPEED + Math.min(score * 0.08, 1.5);

        // Spawners
        if (gOpts.obstacleTimer-- <= 0) { spawnObstacle(); gOpts.obstacleTimer = Math.max(90, 150 - score * 5); }
        if (gOpts.coinTimer-- <= 0) { spawnCoin(); gOpts.coinTimer = 40 + Math.random() * 50; }

        // Draw obstacles
        for (let i = gObstacles.length - 1; i >= 0; i--) {
            const obs = gObstacles[i]; obs.x -= gameSpeed;
            const tGrad = ctx.createLinearGradient(obs.x, 0, obs.x + obs.w, 0);
            tGrad.addColorStop(0, 'rgba(139,92,246,0.35)'); tGrad.addColorStop(0.5, 'rgba(139,92,246,0.5)'); tGrad.addColorStop(1, 'rgba(139,92,246,0.35)');
            ctx.fillStyle = tGrad;
            ctx.fillRect(obs.x, 0, obs.w, obs.hTop);
            ctx.fillStyle = 'rgba(139,92,246,0.6)'; ctx.fillRect(obs.x - 3, obs.hTop - 8, obs.w + 6, 8);
            ctx.fillStyle = tGrad;
            const bY = canvas.height - obs.hBottom;
            ctx.fillRect(obs.x, bY, obs.w, obs.hBottom);
            ctx.fillStyle = 'rgba(139,92,246,0.6)'; ctx.fillRect(obs.x - 3, bY, obs.w + 6, 8);
            ctx.strokeStyle = 'rgba(139,92,246,0.3)'; ctx.lineWidth = 1;
            ctx.strokeRect(obs.x, 0, obs.w, obs.hTop); ctx.strokeRect(obs.x, bY, obs.w, obs.hBottom);

            const pad = 6;
            const pL = gPlayer.x - gPlayer.r + pad, pR = gPlayer.x + gPlayer.r - pad;
            const pT = gPlayer.y - gPlayer.r + pad, pB = gPlayer.y + gPlayer.r - pad;
            if (pR > obs.x && pL < obs.x + obs.w && pT < obs.hTop) { doGameOver(); return; }
            if (pR > obs.x && pL < obs.x + obs.w && pB > bY) { doGameOver(); return; }
            if (!obs.passed && obs.x + obs.w < gPlayer.x) { obs.passed = true; score++; }
            if (obs.x + obs.w < -10) gObstacles.splice(i, 1);
        }

        // Draw coins
        for (let i = coinsArray.length - 1; i >= 0; i--) {
            const coin = coinsArray[i]; coin.x -= gameSpeed; coin.glow = (coin.glow + 0.05) % (Math.PI * 2);
            if (!coin.collected) {
                ctx.save();
                ctx.shadowBlur = 15; ctx.shadowColor = 'rgba(251,191,36,' + (0.3 + Math.sin(coin.glow) * 0.2) + ')';
                ctx.beginPath(); ctx.arc(coin.x, coin.y, coin.r, 0, Math.PI * 2);
                const cGrad = ctx.createRadialGradient(coin.x - 3, coin.y - 3, 2, coin.x, coin.y, coin.r);
                cGrad.addColorStop(0, '#fde68a'); cGrad.addColorStop(0.5, '#fbbf24'); cGrad.addColorStop(1, '#d97706');
                ctx.fillStyle = cGrad; ctx.fill();
                ctx.strokeStyle = '#b45309'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
                ctx.fillStyle = '#78350f'; ctx.font = 'bold ' + coin.r + 'px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('$', coin.x, coin.y + 1);
            }
            const dx = gPlayer.x - coin.x, dy = gPlayer.y - coin.y;
            if (!coin.collected && Math.sqrt(dx*dx + dy*dy) < gPlayer.r + coin.hitR) {
                coin.collected = true; gameCoins++; updateCoinDisplay();
                localStorage.setItem('minigame_coins', gameCoins); addGParticle(coin.x, coin.y, '#fbbf24', 8);
            }
            if (coin.x + coin.r < -10) coinsArray.splice(i, 1);
        }

        // Draw player
        gPlayer.trail.push({ x: gPlayer.x, y: gPlayer.y });
        if (gPlayer.trail.length > 8) gPlayer.trail.shift();
        gPlayer.trail.forEach((t, i) => {
            const alpha = (i / gPlayer.trail.length) * 0.3;
            ctx.beginPath(); ctx.arc(t.x, t.y, gPlayer.r * (i / gPlayer.trail.length) * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168,85,247,' + alpha + ')'; ctx.fill();
        });
        ctx.save(); ctx.shadowBlur = 20; ctx.shadowColor = '#a855f7';
        ctx.beginPath(); ctx.arc(gPlayer.x, gPlayer.y, gPlayer.r, 0, Math.PI * 2);
        const pGrad = ctx.createRadialGradient(gPlayer.x - 3, gPlayer.y - 3, 2, gPlayer.x, gPlayer.y, gPlayer.r);
        pGrad.addColorStop(0, '#c084fc'); pGrad.addColorStop(0.6, '#a855f7'); pGrad.addColorStop(1, '#7c3aed');
        ctx.fillStyle = pGrad; ctx.fill(); ctx.restore();
        ctx.beginPath(); ctx.arc(gPlayer.x - 4, gPlayer.y - 4, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fill();
        ctx.font = gPlayer.r + 'px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('💜', gPlayer.x, gPlayer.y);

        // Draw particles
        for (let i = gParticles.length - 1; i >= 0; i--) {
            const p = gParticles[i]; p.x += p.vx; p.y += p.vy; p.life -= 0.03;
            if (p.life <= 0) { gParticles.splice(i, 1); continue; }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
            ctx.globalAlpha = p.life; ctx.fillStyle = p.color; ctx.fill(); ctx.globalAlpha = 1;
        }

        // Score
        ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'right'; ctx.textBaseline = 'top';
        ctx.fillText('Puntos: ' + score, canvas.width - 10, 10);

        animationFrameId = requestAnimationFrame(animate);
    }

    let gOpts = { obstacleTimer: 120, coinTimer: 40 };

    const jump = (e) => {
        e.stopPropagation();
        if (!isPlaying) return;
        if (e.type === 'touchstart') e.preventDefault();
        gPlayer.vy = LIFT;
        addGParticle(gPlayer.x, gPlayer.y + gPlayer.r, '#a855f7', 3);
    };

    canvas.addEventListener('mousedown', jump);
    canvas.addEventListener('touchstart', jump, { passive: false });
    canvas.addEventListener('click', (e) => e.stopPropagation());
    canvasContainer.addEventListener('touchstart', (e) => {
        if (isPlaying) { e.preventDefault(); e.stopPropagation(); }
    }, { passive: false });

    startOverlay.querySelector('.btn-play').onclick = (e) => {
        e.stopPropagation();
        const rect = canvasContainer.getBoundingClientRect();
        canvas.width = rect.width; canvas.height = rect.height;
        resetGame();
    };

    gameOverOverlay.querySelector('.btn-play').onclick = (e) => {
        e.stopPropagation(); resetGame();
    };
    
    gameOverOverlay.querySelector('.btn-shop-over').onclick = (e) => {
        e.stopPropagation(); openShopModal();
    };

    statsBar.querySelector('.shop-btn-trigger').addEventListener('click', (e) => {
        e.stopPropagation();
        if (isPlaying) { isPlaying = false; cancelAnimationFrame(animationFrameId); }
        openShopModal();
    });

    gameWrapper.addEventListener('click', (e) => e.stopPropagation());
    gameWrapper.addEventListener('mousedown', (e) => e.stopPropagation());
    gameWrapper.addEventListener('touchstart', (e) => e.stopPropagation());
}
// END GAME LOGIC

let player = {};
let obstacles = [];
let coins = [];

function stopGame() {
   // Legacy stub
}

function updateCoinDisplay() {
    const el = document.getElementById("game-coin-count");
    if (el) el.textContent = gameCoins;
}

// ══════════════════════════════════════════
// SHOP SYSTEM
// ══════════════════════════════════════════

function openShopModal() {
    // Ensure game is paused if active
    if (typeof stopGame === "function") stopGame();
    
    // Create/Reuse Modal
    let modal = document.getElementById("shop-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "shop-modal";
        modal.className = "shop-modal";
        document.body.appendChild(modal);
    }
    
    // Build Items HTML
    let itemsHtml = '';
    SHOP_PHOTOS.forEach(item => {
        const isUnlocked = unlockedShopItems.includes(item.id);
        
        let buttonHtml;
        if (isUnlocked) {
             buttonHtml = `<button class="btn-direct-view" onclick="event.stopPropagation(); window.viewShopItem('${item.id}')">Ver Foto 👁️</button>`;
        } else {
             // FORCE VISIBILITY STYLES INLINE
             buttonHtml = `<button class="btn-direct-buy" style="display:block !important; visibility:visible !important; opacity:1 !important;" onclick="event.stopPropagation(); window.confirmBuy('${item.id}')">Desbloquear (${item.price} 🪙)</button>`;
        }

        itemsHtml += `
            <div class="shop-item ${isUnlocked ? 'unlocked' : 'locked'}" data-id="${item.id}">
                <div class="shop-item-img">
                    <img src="${item.url}" class="${isUnlocked ? '' : 'blur'}" loading="lazy" decoding="async">
                    ${!isUnlocked ? '<div class="lock-overlay">🔒</div>' : ''}
                </div>
                <div class="shop-item-info" style="display:flex; flex-direction:column; gap:8px;">
                    <span style="font-weight:bold;">${item.title}</span>
                    <div style="margin-top:5px; width:100%;">
                        ${buttonHtml}
                    </div>
                </div>
            </div>
        `;
    });

    // Content
    modal.innerHTML = `
        <div class="shop-content">
            <div class="shop-header">
                <h2>Tienda de Recuerdos</h2>
                <div class="shop-coins">🪙 ${gameCoins}</div>
                <button class="shop-close">✕</button>
            </div>
            <div class="shop-grid">
                ${itemsHtml}
            </div>
            <div style="padding: 1rem; text-align: center; color: #888; font-size: 0.8rem;">
                Si las imágenes no abren, usa el botón directo de arriba.
            </div>
        </div>
    `;
    
    modal.classList.add("active");
    
    // Attach Listeners
    modal.querySelector(".shop-close").onclick = () => {
        modal.classList.remove("active");
    };

    // ITEM CLICK LISTENERS (Fallback)
    const items = modal.querySelectorAll(".shop-item");
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            // Only trigger if not clicking button to avoid double fire
            if(e.target.tagName !== "BUTTON") {
                const id = item.getAttribute("data-id");
                window.shopItemClick(id); 
            }
        });
    });
}

// Handler for shop item clicks - EXPLICITLY GLOBAL
window.shopItemClick = function(id) {
    if(!id) return;
    const item = SHOP_PHOTOS.find(p => p.id === id);
    if (!item) return;

    if (unlockedShopItems.includes(id)) {
        // Already unlocked -> View
        try { window.viewShopItem(id); } catch(e) { console.error("View item error:", e); }
    } else {
        // Locked -> Confirm Buy
        try { openShopDetailsModal(item); } catch(e) { console.error("Open details error:", e); }
    }
};

window.shopItemClickDebug = function() { alert("Click handler is active"); };

// Details Modal - Global Function
window.openShopDetailsModal = function(item) {
    // A secondary modal for confirmation
    let details = document.getElementById("shop-details");
    if (details) {
        details.remove(); // Clean slate to avoid old event listeners or state
    }
    
    details = document.createElement("div");
    details.id = "shop-details";
    details.className = "shop-details-modal";
    document.body.appendChild(details);
    
    details.innerHTML = `
        <div class="shop-details-content">
            <button class="details-close">✕</button>
            <h3>${item.title}</h3>
            <div class="details-img-wrapper">
                <img src="${item.url}" class="details-img blur">
                <div class="lock-overlay">🔒</div>
            </div>
            <p class="details-price">Costo: <span>${item.price} 🪙</span></p>
            <button class="btn-confirm-buy" data-id="${item.id}">
                Desbloquear
            </button>
        </div>
    `;
    
    // Animation frame to ensure DOM is ready for transition
    requestAnimationFrame(() => details.classList.add("active"));
    
    // Close button
    details.querySelector(".details-close").onclick = () => {
        details.classList.remove("active");
        setTimeout(() => details.remove(), 300); // Remove after transition
    };

    // Confirm button
    details.querySelector(".btn-confirm-buy").onclick = () => {
        window.confirmBuy(item.id);
    };
};

// Confirm logic
window.confirmBuy = function(id) {
    const item = SHOP_PHOTOS.find(p => p.id === id);
    if (!item) return;

    // Check balance
    if (gameCoins >= item.price) {
        // Close details modal first
        const details = document.getElementById("shop-details");
        if(details) details.classList.remove("active");
        
        // Execute buy logic
        gameCoins -= item.price;
        unlockedShopItems.push(id);
        
        // Save
        localStorage.setItem("minigame_coins", gameCoins);
        localStorage.setItem("minigame_unlocked_items", JSON.stringify(unlockedShopItems));
        
        // Refresh UI
        openShopModal(); // Refresh main list to show unlocked state
        updateCoinDisplay();
        
        // Animation
        showShopReveal(id);
    } else {
        alert("¡No tienes suficientes monedas!");
    }
};
// Global functions for inline onclicks - EXPOSED TO WINDOW
window.buyItem = function(id, price) {
    if (gameCoins >= price) {
        // Debounce simple check
        if(unlockedShopItems.includes(id)) {
             try { window.viewShopItem(id); } catch(e){}
             return;
        }

        gameCoins -= price;
        unlockedShopItems.push(id);
        
        // Save
        localStorage.setItem("minigame_coins", gameCoins);
        localStorage.setItem("minigame_unlocked_items", JSON.stringify(unlockedShopItems));
        
        // Refresh UI
        // Force small delay to allow state update if needed, though sync is fine
        openShopModal(); 
        updateCoinDisplay();
        
        // Show Reveal
        showShopReveal(id);
    } else {
        // Show a custom toast or alert
        const modal = document.getElementById("shop-modal");
        const existingAlert = modal.querySelector(".shop-alert");
        if(existingAlert) existingAlert.remove();
        
        const alertBox = document.createElement("div");
        alertBox.className = "shop-alert";
        alertBox.innerText = "¡No tienes suficientes monedas!";
        alertBox.style.cssText = "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: #ef4444; color: white; padding: 10px 20px; border-radius: 20px; animation: fadeOut 3s forwards;";
        modal.querySelector(".shop-content").appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000);
    }
};

window.viewShopItem = function(id) {
     const item = SHOP_PHOTOS.find(p => p.id === id);
     if(item) {
         openGalleryLightbox({
             title: item.title,
             text: "📸 Mándame captura de esta pantalla para enviártela por WhatsApp",
             image: item.url
         });
     }
};

function showShopReveal(id) {
    const item = SHOP_PHOTOS.find(p => p.id === id);
    if (!item) return;
    
    // Close shop
    const modal = document.getElementById('shop-modal');
    if (modal) modal.classList.remove('active');
    
    // Create Reveal Overlay
    let reveal = document.getElementById('shop-reveal');
    if (reveal) reveal.remove();
    
    reveal = document.createElement('div');
    reveal.id = 'shop-reveal';
    reveal.className = 'shop-reveal-overlay';
    document.body.appendChild(reveal);
    
    // Build the cinematic reveal
    reveal.innerHTML = `
        <div class="reveal-content" style="opacity:0; transform:scale(0.8) translateY(40px);">
            <div class="reveal-mystery" style="font-size:4rem; margin-bottom:1rem; animation: revealMysteryPulse 1.5s ease-in-out infinite;">🎁</div>
            <h2 class="reveal-title" style="opacity:0;">¿Qué foto será...?</h2>
            <div class="reveal-img-wrapper" style="opacity:0; filter:blur(30px) saturate(0); transform:scale(0.6);">
                <img src="${item.url}" class="reveal-img" style="display:block;">
            </div>
            <p class="reveal-note" style="opacity:0; color: #fbbf24; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">
                📸 "Mándame captura de esta pantalla para enviártela por WhatsApp"
            </p>
            <button class="reveal-close" style="opacity:0; pointer-events:none;">Continuar 💜</button>
        </div>
    `;
    
    reveal.classList.add('active');
    lockScroll();
    
    const content = reveal.querySelector('.reveal-content');
    const title = reveal.querySelector('.reveal-title');
    const mystery = reveal.querySelector('.reveal-mystery');
    const imgWrap = reveal.querySelector('.reveal-img-wrapper');
    const note = reveal.querySelector('.reveal-note');
    const closeBtn = reveal.querySelector('.reveal-close');
    
    // Phase 1: Content appears (0-500ms)
    setTimeout(() => {
        content.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        content.style.opacity = '1';
        content.style.transform = 'scale(1) translateY(0)';
    }, 100);
    
    // Phase 2: Mystery text (500ms-2s) — suspense buildup
    setTimeout(() => {
        title.style.transition = 'opacity 1s ease';
        title.style.opacity = '1';
    }, 800);
    
    // Phase 3: Blurred image appears (2s-3s)
    setTimeout(() => {
        imgWrap.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        imgWrap.style.opacity = '1';
        imgWrap.style.transform = 'scale(1)';
    }, 2000);
    
    // Phase 4: Unblur reveal! (3s-4.5s) — the big moment
    setTimeout(() => {
        mystery.style.transition = 'all 0.5s ease';
        mystery.style.opacity = '0';
        mystery.style.transform = 'scale(2)';
        title.textContent = '¡Recuerdo Desbloqueado! 💜';
        imgWrap.style.transition = 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
        imgWrap.style.filter = 'blur(0px) saturate(1)';
        imgWrap.style.boxShadow = '0 0 60px rgba(123,92,255,0.6), 0 0 120px rgba(123,92,255,0.2)';
    }, 3200);
    
    // Phase 5: Show note and close button (4.5s+)
    setTimeout(() => {
        note.style.transition = 'opacity 0.8s ease';
        note.style.opacity = '1';
        closeBtn.style.transition = 'opacity 0.6s ease';
        closeBtn.style.opacity = '1';
        closeBtn.style.pointerEvents = 'auto';
    }, 4800);
    
    // Close handler
    closeBtn.addEventListener('click', () => {
        reveal.style.transition = 'opacity 0.4s ease';
        reveal.style.opacity = '0';
        setTimeout(() => {
            reveal.remove();
            unlockScroll();
            openShopModal();
        }, 400);
    });
}
function renderLockedWithUnlockArea(card, memory) {
  const { type, hint, hintMedia, date } = memory;
  const locked = document.createElement("div");
  locked.className = "locked-content";
  locked.innerHTML = `
    ${buildHintPreview(type, hintMedia)}
    <div class="locked-content__overlay">
      <div class="locked-content__icon" id="lock-icon-${date}">🔒</div>
      <div class="locked-content__text">${hint || "Aún no despierta…"}</div>
      <div class="unlock-area" id="unlock-area-${date}"></div>
    </div>
  `;
  locked.style.cursor = "pointer";
  locked.addEventListener("click", (e) => {
    if (e.target.closest(".unlock-btn")) return;
    openHintLightbox(memory);
  });
  card.appendChild(locked);
}

// ── Standard locked (timestamp not reached) ──
function renderLockedStandard(card, memory) {
  const { type, hint, hintMedia, date } = memory;
  const locked = document.createElement("div");
  locked.className = "locked-content";
  locked.innerHTML = `
    ${buildHintPreview(type, hintMedia)}
    <div class="locked-content__overlay">
      <div class="locked-content__icon" id="lock-icon-${date}">🔒</div>
      <div class="locked-content__text">${hint || "Aún no despierta…"}</div>
      <div class="unlock-area" id="unlock-area-${date}"></div>
    </div>
  `;
  locked.style.cursor = "pointer";
  locked.addEventListener("click", () => openHintLightbox(memory));
  card.appendChild(locked);
}

// ── Build hint preview HTML ──
function buildHintPreview(type, hintMedia) {
  if (hintMedia && (type === "photo" || type === "video")) {
    return `<div class="locked-content__preview"><img src="${hintMedia}" alt="" loading="lazy"></div>`;
  }
  if (type === "audio") {
    return `<div class="locked-content__preview locked-content__preview--wave">
      <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
      <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
      <div class="wave-bar"></div><div class="wave-bar"></div>
    </div>`;
  }
  return `<div class="locked-content__preview locked-content__preview--paper">
    <div class="paper-line"></div><div class="paper-line"></div><div class="paper-line"></div>
    <div class="paper-line"></div>
  </div>`;
}

// ══════════════════════════════════════════
// PARTICLES
// ══════════════════════════════════════════
let particleBrightness = 1;
window.isGameRunning = false; // Global flag to pause particles

function initParticles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      opacity: Math.random() * 0.3 + 0.05,
      hue: Math.random() > 0.5 ? 260 : 140,
    };
  }

  function initParticleArray() {
    // OPTIMIZATION: Reduced particle count for performance
    const count = window.innerWidth < 768 ? 20 : 40; 
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function draw() {
    if (!window.isGameRunning) { // Only draw if game is NOT running
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * particleBrightness, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${p.opacity * particleBrightness})`;
          ctx.fill();
        }
    }
    requestAnimationFrame(draw);
  }

  resize();
  initParticleArray();
  draw();
  
  // OPTIMIZATION: Debounce resize event
  let resizeTimer;
  window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
          resize();
          initParticleArray();
      }, 200);
  });
}

// ══════════════════════════════════════════
// 11:11 UNLOCK SYSTEM — Main Controller
// ══════════════════════════════════════════

let unlockCheckInterval = null;

function init1111System() {
  initClockSecurity();

  // ── STRICT LOCK ENFORCEMENT FOR FEB 16 ──
  // If it's before 11:11 AM on Feb 16, FORCE LOCK by removing from storage
  const feb16Target = new Date("2026-02-16T11:11:00").getTime();
  const now = Date.now();
  if (now < feb16Target) {
      console.log("🔒 Relocking Feb 16 memory (Time hasn't arrived)");
      localStorage.removeItem("unlocked_2026-02-16");
      // Also ensure UI is reset if needed (reload might be best, but we'll try to handle it)
      const card = document.querySelector('.memory-card[data-date="2026-02-16"]');
      if (card) {
          card.classList.remove("is-unlocked", "memory-card--ready", "is-visible");
          card.classList.add("memory-card--locked");
      }
  }

  // Check every second
  unlockCheckInterval = setInterval(check1111Status, 1000);
  check1111Status(); // Run immediately too
}

function check1111Status() {
  // Skip checks when tab is hidden (performance)
  if (document.hidden) return;

  const now = Date.now();

  MEMORIES.forEach((memory) => {
    const { date } = memory;
    const isFirstMem = MEMORIES[0].date === date;

    // Skip first memory (handled by auto-intro) and already unlocked
    if (isFirstMem) return;
    if (isUnlockedInStorage(date)) return;

    const card = document.querySelector(`.memory-card[data-date="${date}"]`);
    if (!card) return;

    const unlockArea = document.getElementById("unlock-area-" + date);
    if (!unlockArea) return;

    // Check if time is reached (allow 1 hour window or if specifically currently active)
    const entry = UNLOCK_TIMESTAMPS.find(e => e.date === date);
    if (!entry) return;

    const isTimeReached = now >= entry.ts;
    const isWindowOpen = isTimeReached; // Permanent once 11:11 passes

    if (isWindowOpen) {
      // Unlock window is active! Show unlock button & add glow
      if (!card.classList.contains("memory-card--ready")) {
          card.classList.add("memory-card--ready");
          // Force reflow or animation potentially
      }
      
      if (!unlockArea.querySelector(".unlock-btn")) {
        unlockArea.innerHTML = `<button class="unlock-btn" data-date="${date}">✨ Desbloquear recuerdo</button>`;
        const btn = unlockArea.querySelector(".unlock-btn");
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          unlockMemory(date);
        });
        // Add subtle pulse animation to button
        btn.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' }
        ], {
            duration: 2000,
            iterations: Infinity
        });
      }
    } else {
      // Not in window — show waiting message with next timestamp info
      if (card.classList.contains("memory-card--ready")) {
          card.classList.remove("memory-card--ready");
          unlockArea.innerHTML = ""; // Clear button if window passed
      }

      if (now < entry.ts) {
        // Future unlock - SHOW EXACT COUNTDOWN ALWAYS
        const diff = Math.max(0, entry.ts - now);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let timeString = "";
        if(days > 0) timeString += `<span class="time-val">${days}d</span> `;
        if(hours > 0 || days > 0) timeString += `<span class="time-val">${hours}h</span> `;
        timeString += `<span class="time-val">${minutes}m</span> <span class="time-val">${seconds}s</span>`;

        unlockArea.innerHTML = `
            <div class="wait-1111-msg">
                <div>Desbloqueo en:</div>
                <div class="countdown-mini">${timeString}</div>
            </div>`;
      } else {
        // Window passed — next opportunity (or missed)
        unlockArea.innerHTML = `<div class="wait-1111-msg">Vuelve a las <span class="time-highlight">11:11</span> para desbloquearlo</div>`;
      }
    }
  });

  // Update countdown
  updateCountdownPrecise();
}

function unlockMemory(date) {
  // Save to localStorage
  saveUnlock(date);

  const card = document.querySelector(`.memory-card[data-date="${date}"]`);
  if (!card) return;

  const memory = MEMORIES.find(m => m.date === date);
  if (!memory) return;

  // ── Animation: Lock Break ──
  const lockIcon = document.getElementById("lock-icon-" + date);
  if (lockIcon) {
    lockIcon.classList.add("lock-breaking");
  }

  // ── Animation: Card Elevate ──
  card.classList.add("card-elevating");

  setTimeout(() => {
    // Remove locked content, rebuild as unlocked
    card.classList.remove("memory-card--locked", "memory-card--ready", "card-elevating");
    card.classList.add("is-unlocked");
    card.innerHTML = ""; // Clear

    // Rebuild header
    const icons = { text: "✍️", photo: "📷", video: "🎬", audio: "🎵" };
    const dateObj = new Date(date + "T00:00:00");
    const formattedDate = dateObj.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

    const header = document.createElement("div");
    header.className = "memory-card__header";
    header.innerHTML = `
      <div class="memory-card__icon">${memory.special ? "⭐" : icons[memory.type] || "💜"}</div>
      <div class="memory-card__meta">
        <div class="memory-card__date">${formattedDate}</div>
        <h3 class="memory-card__title">${memory.title}</h3>
      </div>
    `;
    card.appendChild(header);

    // Rebuild body with content-reveal animation
    renderUnlockedBody(card, memory);
    const body = card.querySelector(".memory-card__body");
    if (body) body.classList.add("content-reveal");

    // Update timeline-item too
    const item = card.closest(".timeline-item");
    if (item) item.classList.add("is-unlocked");

    // Scroll into view
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1000); // Wait for lock-break animation
}

// ══════════════════════════════════════════
// FIRST MEMORY — Cinematic Ceremony
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// FIRST MEMORY — Cinematic Ceremony (REBUILD PENDING)
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// FIRST MEMORY — Cinematic Ceremony (RENAMED NUCLEAR FIX)
// ══════════════════════════════════════════

// FIRST MEMORY — Cinematic Ceremony (Dual ID Support)
// ══════════════════════════════════════════

function getFirstMemoryElement(suffix) {
    return document.getElementById('start-memory-' + suffix) || document.getElementById('first-memory-' + suffix);
}

function showFirstMemoryCeremony() {
    const overlay = document.getElementById('start-memory-modal') || document.getElementById('first-memory-overlay');
    const img = getFirstMemoryElement('image') || document.getElementById('first-memory-img');
    const textBox = getFirstMemoryElement('text') || document.getElementById('first-memory-text-box');
    const closeBtn = getFirstMemoryElement('close');
    const card = overlay ? overlay.querySelector('.start-memory-card, .first-memory-content') : null;

    if (!overlay || !img || !textBox) return;

    // Reset everything
    img.src = '';
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.filter = 'blur(20px) brightness(0.3)';
    img.style.transition = 'none';
    textBox.innerHTML = '';
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.85) translateY(30px)';
        card.style.transition = 'none';
    }
    if (closeBtn) {
        closeBtn.style.opacity = '0';
        closeBtn.style.pointerEvents = 'none';
        closeBtn.style.transition = 'none';
    }

    // Open Overlay
    overlay.classList.add('active');
    if (overlay.classList.contains('first-memory-overlay')) overlay.classList.add('is-active');
    lockScroll();

    // ═══════════════════════════════════════
    // ✨ NOSTALGIA CINEMATIC INTRO (4 seconds)
    // A beautiful effect mixing emotion & wonder
    // ═══════════════════════════════════════

    // Create cinematic intro layer
    const introLayer = document.createElement('div');
    introLayer.className = 'nostalgia-intro-layer';
    introLayer.innerHTML = `
        <canvas id="nostalgia-particles-canvas" class="nostalgia-canvas"></canvas>
        <div class="nostalgia-vignette"></div>
        <div class="nostalgia-heartbeat">💜</div>
        <div class="nostalgia-text-1">Cada historia tiene un comienzo...</div>
        <div class="nostalgia-text-2">Esta es la nuestra 💜</div>
        <div class="nostalgia-flash"></div>
    `;
    overlay.appendChild(introLayer);

    // Style the intro layer
    const introStyle = document.createElement('style');
    introStyle.id = 'nostalgia-intro-style';
    introStyle.textContent = `
        .nostalgia-intro-layer {
            position: fixed; inset: 0; z-index: 100000;
            background: radial-gradient(ellipse at center, #1a0a2e 0%, #050208 60%, #000 100%);
            display: flex; align-items: center; justify-content: center;
            flex-direction: column; overflow: hidden;
            animation: nostalgiaLayerIn 0.8s ease-out forwards;
        }
        @keyframes nostalgiaLayerIn { from { opacity:0; } to { opacity:1; } }
        .nostalgia-canvas {
            position: absolute; inset: 0; width: 100%; height: 100%;
        }
        .nostalgia-vignette {
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
            pointer-events: none;
        }
        .nostalgia-heartbeat {
            font-size: 5rem; opacity: 0; position: relative; z-index: 2;
            animation: nostalgiaHeartbeat 2s ease-in-out 0.3s forwards;
            text-shadow: 0 0 60px rgba(123,92,255,0.8), 0 0 120px rgba(123,92,255,0.4);
            filter: drop-shadow(0 0 30px rgba(139,92,246,0.6));
        }
        @keyframes nostalgiaHeartbeat {
            0% { opacity:0; transform:scale(0.3); }
            15% { opacity:1; transform:scale(1.3); }
            25% { transform:scale(0.9); }
            35% { transform:scale(1.15); }
            45% { transform:scale(1); }
            55% { transform:scale(1.1); }
            65% { transform:scale(1); }
            80% { opacity:1; transform:scale(1); }
            100% { opacity:0; transform:scale(2.5); filter: drop-shadow(0 0 80px rgba(139,92,246,0.9)); }
        }
        .nostalgia-text-1 {
            font-family: 'Playfair Display', serif; font-size: 1.4rem;
            color: rgba(255,255,255,0.9); opacity: 0; position: relative; z-index: 2;
            text-align: center; padding: 0 20px; letter-spacing: 1px;
            animation: nostalgiaText1 3.5s ease-in-out 0.8s forwards;
            text-shadow: 0 0 20px rgba(123,92,255,0.5);
        }
        @keyframes nostalgiaText1 {
            0% { opacity:0; transform:translateY(20px); letter-spacing:3px; }
            20% { opacity:1; transform:translateY(0); letter-spacing:1px; }
            70% { opacity:1; }
            100% { opacity:0; transform:translateY(-10px); }
        }
        .nostalgia-text-2 {
            font-family: 'Playfair Display', serif; font-size: 1.8rem;
            font-style: italic; color: rgba(255,255,255,0.95); opacity: 0;
            position: relative; z-index: 2; text-align: center; padding: 0 20px;
            animation: nostalgiaText2 2.5s ease-in-out 2.2s forwards;
            text-shadow: 0 0 30px rgba(123,92,255,0.6);
        }
        @keyframes nostalgiaText2 {
            0% { opacity:0; transform:scale(0.8) translateY(15px); }
            30% { opacity:1; transform:scale(1) translateY(0); }
            70% { opacity:1; }
            100% { opacity:0; transform:scale(1.1); }
        }
        .nostalgia-flash {
            position: absolute; inset: 0; background: white; opacity: 0;
            z-index: 3; pointer-events: none;
            animation: nostalgiaFlash 0.6s ease-out 3.6s forwards;
        }
        @keyframes nostalgiaFlash {
            0% { opacity:0; }
            30% { opacity:0.8; }
            100% { opacity:0; }
        }
    `;
    document.head.appendChild(introStyle);

    // Particle system for nostalgia intro
    const nCanvas = document.getElementById('nostalgia-particles-canvas');
    if (nCanvas) {
        const nCtx = nCanvas.getContext('2d');
        nCanvas.width = window.innerWidth;
        nCanvas.height = window.innerHeight;
        const nParticles = [];
        const nCount = window.innerWidth < 768 ? 40 : 80;

        for (let i = 0; i < nCount; i++) {
            nParticles.push({
                x: Math.random() * nCanvas.width,
                y: Math.random() * nCanvas.height,
                size: Math.random() * 3 + 0.5,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: -Math.random() * 1.5 - 0.3,
                opacity: Math.random() * 0.6 + 0.1,
                hue: Math.random() > 0.5 ? 270 : 320,
                life: 1
            });
        }

        let nRunning = true;
        function animateNostalgiaParticles() {
            if (!nRunning) return;
            nCtx.clearRect(0, 0, nCanvas.width, nCanvas.height);
            for (const p of nParticles) {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.y < -10) { p.y = nCanvas.height + 10; p.x = Math.random() * nCanvas.width; }
                if (p.x < -10) p.x = nCanvas.width + 10;
                if (p.x > nCanvas.width + 10) p.x = -10;
                nCtx.beginPath();
                nCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                nCtx.fillStyle = `hsla(${p.hue}, 70%, 75%, ${p.opacity})`;
                nCtx.shadowBlur = 15;
                nCtx.shadowColor = `hsla(${p.hue}, 70%, 75%, ${p.opacity * 0.5})`;
                nCtx.fill();
                nCtx.shadowBlur = 0;
            }
            requestAnimationFrame(animateNostalgiaParticles);
        }
        animateNostalgiaParticles();

        // Stop particles after intro ends
        setTimeout(() => { nRunning = false; }, 4200);
    }

    // ═══ After 4s intro, transition to memory content ═══
    setTimeout(() => {
        // Fade out intro
        introLayer.style.transition = 'opacity 0.8s ease-out';
        introLayer.style.opacity = '0';
        setTimeout(() => {
            introLayer.remove();
            const styleEl = document.getElementById('nostalgia-intro-style');
            if (styleEl) styleEl.remove();
        }, 800);

        // ═══ NOW SHOW THE MEMORY CARD ═══

        // Phase 1: Card fades in with spring animation
        setTimeout(() => {
            if (card) {
                card.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            }
        }, 100);

        // Phase 2: Image loads with cinematic blur-to-clear
        setTimeout(() => {
            img.src = FIRST_MEMORY.image;
            const revealImg = () => {
                img.style.transition = 'all 2s cubic-bezier(0.16, 1, 0.3, 1)';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                img.style.filter = 'blur(0px) brightness(1)';
            };
            img.onload = revealImg;
            if (img.complete) revealImg();
        }, 600);

        // Phase 3: Typewriter text
        const lines = FIRST_MEMORY.text.split(/[.,]/).filter(s => s.trim().length > 0);
        let textDelay = 2500;

        lines.forEach((line) => {
            setTimeout(() => {
                const p = document.createElement('p');
                p.className = 'start-memory-typewriter';
                p.style.opacity = '0';
                p.style.transform = 'translateY(10px)';
                p.style.transition = 'all 0.6s ease';
                p.textContent = line.trim();
                textBox.appendChild(p);
                requestAnimationFrame(() => {
                    p.style.opacity = '1';
                    p.style.transform = 'translateY(0)';
                });
                const scrollParent = textBox.parentElement;
                if (scrollParent) scrollParent.scrollTop = scrollParent.scrollHeight;
            }, textDelay);
            textDelay += 1200;
        });

        // Phase 4: Show close button after all text
        const totalTextTime = 2500 + lines.length * 1200 + 800;
        setTimeout(() => {
            if (closeBtn) {
                closeBtn.style.transition = 'all 0.6s ease';
                closeBtn.style.opacity = '1';
                closeBtn.style.pointerEvents = 'auto';
            }
        }, totalTextTime);
    }, 4000);

    // Setup Close Event
    if (closeBtn) {
        closeBtn.onclick = closeFirstMemory;
        closeBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            closeFirstMemory();
        });
    }
}

function closeFirstMemory() {
    const overlay = document.getElementById("start-memory-modal") || document.getElementById("first-memory-overlay");
    if (!overlay) return;

    overlay.classList.remove("active");
    overlay.classList.remove("is-active"); // Legacy
    
    // FORCE UNLOCK SCROLL AGGRESSIVELY
    document.body.style.overflow = ""; 
    document.documentElement.style.overflow = "";
    document.body.style.position = ""; 
    document.body.style.top = "";
    document.body.classList.remove("gallery-open");
    window.scrollTo(0, savedScrollY || 0);

    // Unlock logic
    localStorage.setItem("firstMemoryUnlocked", "true");
    saveUnlock(MEMORIES[0].date);
    
    // Update the first memory card in the timeline to show as unlocked
    const card = document.querySelector('.memory-card[data-date="' + MEMORIES[0].date + '"]');
    if (card) {
      card.classList.add("is-unlocked");
      card.classList.remove("memory-card--locked");
      const titleEl = card.querySelector(".memory-card__title");
      if (titleEl) titleEl.textContent = MEMORIES[0].title;
      const item = card.closest(".timeline-item");
      if (item) item.classList.add("is-unlocked");
    }
    
    check1111Status(); // Refresh UI
}

function initFirstMemoryOverlay() {
    const closeBtn = getFirstMemoryElement("close");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeFirstMemory);
        closeBtn.addEventListener("touchend", (e) => {
             e.preventDefault();
             closeFirstMemory();
        });
    }
}

// Particles logic deleted for clean rebuild

// ══════════════════════════════════════════
// COUNTDOWN — Precise to next absolute timestamp
// ══════════════════════════════════════════

function updateCountdownPrecise() {
  const container = document.getElementById("countdown-timer");
  if (!container) return;

  // Check if all memories are unlocked
  const firstDone = localStorage.getItem("firstMemoryUnlocked") === "true";
  const restDone = MEMORIES.slice(1).every(m => isUnlockedInStorage(m.date));
  if (firstDone && restDone) {
    container.innerHTML = `<span class="countdown__label">Todos los recuerdos han despertado 💜</span>`;
    return;
  }

  // Check if any unlock window is currently open
  const openEntry = UNLOCK_TIMESTAMPS.find(e => e.ts > 0 && !isUnlockedInStorage(e.date) && isUnlockWindowOpen(e.date));
  if (openEntry) {
    container.innerHTML = `<span class="countdown__label">✨ ¡Son las 11:11! Desbloquea un recuerdo ✨</span>`;
    return;
  }

  // Find next upcoming timestamp
  const next = getNextUnlockTimestamp();
  if (!next) {
    container.innerHTML = `<span class="countdown__label">Todos los recuerdos han despertado 💜</span>`;
    return;
  }

  const diff = next.ts - Date.now();
  if (diff <= 0) {
    // Timestamp passed but not yet unlocked — show "missed window"
    container.innerHTML = `<span class="countdown__label">Vuelve a las <span class="time-highlight">11:11</span> para desbloquear</span>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const nextDate = new Date(next.ts);
  const dateLabel = nextDate.toLocaleDateString("es-ES", { day: "numeric", month: "short" });

  container.innerHTML = `
    <span class="countdown__label">Próximo recuerdo: ${dateLabel} a las 11:11</span>
    <div class="countdown__timer">
      ${days > 0 ? `<div class="countdown__unit">
        <span class="countdown__value">${String(days).padStart(2, "0")}</span>
        <span class="countdown__unit-label">Días</span>
      </div>` : ""}
      <div class="countdown__unit">
        <span class="countdown__value">${String(hours).padStart(2, "0")}</span>
        <span class="countdown__unit-label">Hrs</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__value">${String(minutes).padStart(2, "0")}</span>
        <span class="countdown__unit-label">Min</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__value">${String(seconds).padStart(2, "0")}</span>
        <span class="countdown__unit-label">Seg</span>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════════
// SCROLL REVEAL (IntersectionObserver)
// ══════════════════════════════════════════
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
            const card = entry.target.querySelector(".memory-card.is-unlocked");
            if (card) {
              card.classList.add("unlock-animate");
            }
          }, index * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });
}

// ══════════════════════════════════════════
// SMOOTH SCROLL — "Comenzar" button
// ══════════════════════════════════════════
function initSmoothScroll() {
  const btn = document.getElementById("btn-start");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById("timeline");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ══════════════════════════════════════════
// APPLY CONFIG
// ══════════════════════════════════════════
function applyConfig() {
  const root = document.documentElement;
  root.style.setProperty("--accent1", CONFIG.accent1);
  root.style.setProperty("--accent2", CONFIG.accent2);

  const hex2rgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  root.style.setProperty("--accent1-soft", hex2rgba(CONFIG.accent1, 0.15));
  root.style.setProperty("--accent2-soft", hex2rgba(CONFIG.accent2, 0.12));
  root.style.setProperty("--accent1-glow", hex2rgba(CONFIG.accent1, 0.35));
  root.style.setProperty("--accent2-glow", hex2rgba(CONFIG.accent2, 0.25));

  const namesText = `${CONFIG.names[0]} & ${CONFIG.names[1]}`;
  const subtitleEl = document.getElementById("portada-subtitle");
  if (subtitleEl) subtitleEl.textContent = `La historia de ${namesText}`;
}

// ══════════════════════════════════════════
// BUILD TIMELINE
// ══════════════════════════════════════════
function buildTimeline() {
  const timelineEl = document.getElementById("timeline-list");
  if (!timelineEl) return;
  MEMORIES.forEach((memory) => {
    const el = createMemory(memory);
    timelineEl.appendChild(el);
  });
}

// ══════════════════════════════════════════
// PERFORMANCE — Visibility & Resize
// ══════════════════════════════════════════

// Pause expensive operations when tab is hidden
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause particle animation
    if (typeof particleRaf !== "undefined" && particleRaf) {
      cancelAnimationFrame(particleRaf);
    }
  } else {
    // Resume particle animation
    if (typeof animateParticles === "function") {
      animateParticles();
    }
    // Immediately check unlock status
    check1111Status();
  }
});

// Debounced resize handler
let resizeTimer = null;
window.addEventListener("resize", () => {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Resize particle canvas if needed
    const canvas = document.getElementById("particles");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, 250);
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  buildTimeline();
  buildGallery();
  initGalleryLightbox();
  initHintLightbox();
  initFirstMemoryOverlay();
  initFloatingPhotos();
  initParticles();
  init1111System();
  initSmoothScroll();

  requestAnimationFrame(() => {
    initScrollReveal();
  });

  // ── AUTO-INTRO: First memory ceremony on first visit ──
  if (localStorage.getItem("firstMemoryUnlocked") !== "true") {
    // First time visiting — play cinematic intro after a short delay
    setTimeout(() => {
      showFirstMemoryCeremony();
    }, 1500);
  }
});
