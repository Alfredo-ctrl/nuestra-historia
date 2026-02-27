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
    type: "book",
    title: "Una Historia que Merece Ser Escuchada",
    text: "Un libro escrito desde el corazón… cada página guarda un pedazo de nuestra historia.",
    media: null,
    special: false,
    hint: "Una historia escrita desde el corazón te espera…",
    hintMedia: null,
  },
  {
    date: "2026-02-20",
    type: "book2",
    title: "Declaraciones",
    text: "Un libro sentimental con todo lo que siempre quise decirte…",
    media: null,
    special: false,
    hint: "Un libro con palabras que guardé por mucho tiempo…",
    hintMedia: null,
  },
  {
    date: "2026-02-22",
    type: "quest",
    title: "La búsqueda secreta",
    text: "Cuando estés lista, empieza la búsqueda.",
    media: null,
    special: false,
    hint: "Hoy comienza algo importante…",
    hintMedia: null,
  },
  {
    date: "2026-02-24",
    type: "safe",
    title: "Caja fuerte secreta",
    text: "Ingresa el código de 4 dígitos para abrir este regalo.",
    media: null,
    special: false,
    hint: "Hoy se desbloquea una caja fuerte…",
    hintMedia: null,
  },
  {
    date: "2026-02-26",
    type: "housegame",
    title: "La casa de los recuerdos",
    text: "Explora la casa oscura, encuentra todas las fotos y usa la linterna infrarroja para descubrir números ocultos.",
    media: null,
    special: false,
    hint: "Hoy toca explorar una casa llena de pistas…",
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
    { id: "clue2-fake-1", price: 100, type: "card", title: "Tarjeta Misteriosa A", text: "en esta no hay nada, sigue probando" },
    { id: "clue2-fake-2", price: 100, type: "card", title: "Tarjeta Misteriosa B", text: "en esta no hay nada, sigue probando" },
    { id: "clue2-fake-3", price: 100, type: "card", title: "Tarjeta Misteriosa C", text: "en esta no hay nada, sigue probando" },
    { id: "clue2-fake-4", price: 100, type: "card", title: "Tarjeta Misteriosa D", text: "en esta no hay nada, sigue probando" },
    { id: "clue2-real", price: 100, type: "card", title: "Tarjeta Misteriosa Final", text: "Parte del código encontrada: 2", codeDigit: "2", revealAfterDecoys: true },
];

const SAFE_24_CODE = "2412";
const SAFE_24_STORAGE_KEY = "safe_2026_02_24_opened";
const SHOP_DECOY_IDS = ["clue2-fake-1", "clue2-fake-2", "clue2-fake-3", "clue2-fake-4"];
const HOUSE_GAME_AVATAR_URL = "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1772149704/image-removebg-preview_fqyyk5.png";
const HOUSE_GAME_26_UNLOCK_KEY = "house_game_2026_02_26_unlocked";

const SAFE_24_CODE = "2412";
const SAFE_24_STORAGE_KEY = "safe_2026_02_24_opened";
const SHOP_DECOY_IDS = ["clue2-fake-1", "clue2-fake-2", "clue2-fake-3", "clue2-fake-4"];
const HOUSE_GAME_AVATAR_URL = "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1772149704/image-removebg-preview_fqyyk5.png";

const SAFE_24_CODE = "2412";
const SAFE_24_STORAGE_KEY = "safe_2026_02_24_opened";
const SHOP_DECOY_IDS = ["clue2-fake-1", "clue2-fake-2", "clue2-fake-3", "clue2-fake-4"];

// STATE
let gameCoins = 0;
let unlockedShopItems = [];
let gameActive = false;
let gameRaf = null;

// INIT Load
function loadGameState() {
  // Reset V4 requested: start coins from 0 and clean previous progression once
  if (localStorage.getItem("minigame_reset_v4") !== "true") {
    localStorage.setItem("minigame_coins", "0");
    localStorage.setItem("minigame_unlocked_items", "[]");
    localStorage.setItem("minigame_reset_v4", "true");
  }

  const savedCoins = localStorage.getItem("minigame_coins");
  if (savedCoins !== null && !Number.isNaN(parseInt(savedCoins, 10))) gameCoins = parseInt(savedCoins, 10);

  const savedItems = localStorage.getItem("minigame_unlocked_items");
  if (savedItems) unlockedShopItems = JSON.parse(savedItems);

  // No starter gift now: coins should begin at 0
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

  const icons = { text: "✍️", photo: "📷", video: "🎬", audio: "🎵", game: "🎮", housegame: "🏚️", book: "📖", safe: "🧰" };

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
    // Don't open lightbox if this is a game or book type that handles its own clicks
    if (type === "game" || type === "housegame" || type === "book" || type === "book2" || type === "quest" || type === "safe") return;

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

  if (type === "housegame") {
      renderHouseMysteryMemory(body, memory);
  }

  if (type === "housegame") {
      renderHouseMysteryMemory(body, memory);
  }

  // ── BOOK LOGIC HOOK ──
  if (type === "book") {
      renderBookMemory(body, memory);
  }

  // ── BOOK 2 (DECLARACIONES) LOGIC HOOK ──
  if (type === "book2") {
      renderBook2Memory(body, memory);
  }

  // ── QUEST (BÚSQUEDA) LOGIC HOOK ──
  if (type === "quest") {
      renderQuestMemory(body, memory);
  }

  // ── SAFE (CAJA FUERTE) LOGIC HOOK ──
  if (type === "safe") {
      renderSafeMemory(body, memory);
  }

  card.appendChild(body);
}

function renderSafeMemory(container, memory) {
  const alreadyOpened = localStorage.getItem(SAFE_24_STORAGE_KEY) === "true";
  container.innerHTML = `
    <div class="safe-memory">
      <div class="safe-drawing ${alreadyOpened ? "safe-drawing--open" : ""}">
        <div class="safe-drawing__door"></div>
        <div class="safe-drawing__dial">✶</div>
      </div>
      <p class="safe-memory__text">${memory.text || "Ingresa el código de 4 números."}</p>
      <div class="safe-inputs">
        <input class="safe-digit" inputmode="numeric" maxlength="1" aria-label="Dígito 1" ${alreadyOpened ? "disabled" : ""}>
        <input class="safe-digit" inputmode="numeric" maxlength="1" aria-label="Dígito 2" ${alreadyOpened ? "disabled" : ""}>
        <input class="safe-digit" inputmode="numeric" maxlength="1" aria-label="Dígito 3" ${alreadyOpened ? "disabled" : ""}>
        <input class="safe-digit" inputmode="numeric" maxlength="1" aria-label="Dígito 4" ${alreadyOpened ? "disabled" : ""}>
      </div>
      <button class="safe-open-btn" type="button" ${alreadyOpened ? "disabled" : ""}>🔓 Desbloquear caja fuerte</button>
      <p class="safe-feedback">${alreadyOpened ? "Caja fuerte abierta 💜" : "Por ahora permanece bloqueada."}</p>
    </div>
  `;

  if (alreadyOpened) return;
  const digits = Array.from(container.querySelectorAll(".safe-digit"));
  const btn = container.querySelector(".safe-open-btn");
  const feedback = container.querySelector(".safe-feedback");
  const safeBox = container.querySelector(".safe-drawing");

  digits.forEach((input, idx) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);
      if (input.value && digits[idx + 1]) digits[idx + 1].focus();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && digits[idx - 1]) digits[idx - 1].focus();
    });
  });

  btn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const code = digits.map((d) => d.value).join("");
    if (code.length < 4) {
      feedback.textContent = "Faltan dígitos...";
      safeBox?.classList.remove("safe-drawing--shake");
      void safeBox?.offsetWidth;
      safeBox?.classList.add("safe-drawing--shake");
      return;
    }
    if (code !== SAFE_24_CODE) {
      feedback.textContent = "Código incorrecto, sigue buscando pistas.";
      safeBox?.classList.remove("safe-drawing--shake");
      void safeBox?.offsetWidth;
      safeBox?.classList.add("safe-drawing--shake");
      return;
    }

    localStorage.setItem(SAFE_24_STORAGE_KEY, "true");
    safeBox?.classList.add("safe-drawing--open");
    feedback.textContent = "¡Código correcto! Caja fuerte abierta ✨";
    showSafeOpenAnimation();
    digits.forEach((d) => (d.disabled = true));
    btn.disabled = true;
  });
}

function showSafeOpenAnimation() {
  let overlay = document.getElementById("safe-open-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "safe-open-overlay";
    overlay.className = "safe-open-overlay";
    overlay.innerHTML = `
      <div class="safe-open-overlay__content">
        <div class="safe-open-burst">💥</div>
        <h3>Caja fuerte abierta</h3>
        <p>Regalo desbloqueado con éxito 💜</p>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  overlay.classList.add("active");
  setTimeout(() => overlay.classList.remove("active"), 2200);
}

function renderQuestMemory(container, memory) {
  container.innerHTML = `
    <div class="quest-memory">
      <p class="quest-memory__text">${memory.text || "Empieza cuando tú quieras."}</p>
      <button class="quest-start-btn" type="button">🗝️ Iniciar búsqueda</button>
    </div>
  `;

  const btn = container.querySelector(".quest-start-btn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showQuestSequence();
    });
  }
}

function showQuestSequence() {
  let overlay = document.getElementById("quest-sequence-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "quest-sequence-overlay";
    overlay.className = "quest-sequence-overlay";
    overlay.innerHTML = `
      <div class="quest-sequence-overlay__backdrop"></div>
      <div class="quest-sequence-overlay__content">
        <div class="quest-sequence-title">La búsqueda inició</div>
        <div class="quest-tutorial-sheet" aria-live="polite">
          <h3>Tutorial</h3>
          <p>
            en todos estos recuerdos y estas pistas an estado ocultos secretos que tienes que buscar,
            cosas ocultas y cosas que tendras que encontrar, debes tener buen ojo ya que no todos
            estan a la vista y tal vez algunos estan mas escondidos que otros, buena suerte, todo
            tiene tiempo limite, si te atrasas mas pistas iran apareciendo, buena suerte te amo
          </p>
          <button type="button" class="quest-tutorial-close">Entendido 💜</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".quest-tutorial-close");
    const backdrop = overlay.querySelector(".quest-sequence-overlay__backdrop");
    const closeOverlay = () => overlay.classList.remove("is-open", "show-sheet");
    if (closeBtn) closeBtn.addEventListener("click", closeOverlay);
    if (backdrop) backdrop.addEventListener("click", closeOverlay);
  }

  overlay.classList.add("is-open");
  overlay.classList.remove("show-sheet");
  window.setTimeout(() => {
    overlay.classList.add("show-sheet");
  }, 1800);
}

function injectBookSecretClues(text) {
  const clues = [
    { word: "busca", number: 1 },
    { word: "en", number: 2 },
    { word: "mis", number: 3 },
    { word: "destacadas", number: 4 },
  ];

  let updated = text;
  const missing = [];

  clues.forEach(({ word, number }) => {
    const rx = new RegExp(`\\b(${word})\\b`, "i");
    if (rx.test(updated)) {
      updated = updated.replace(rx, `$1<span class="book-secret-clue" aria-hidden="true">${number}</span>`);
    } else {
      missing.push({ word, number });
    }
  });

  if (missing.length) {
    const extraWords = missing
      .map(({ word, number }) => `${word}<span class="book-secret-clue" aria-hidden="true">${number}</span>`)
      .join(" ");
    updated += `\n\nPista: ${extraWords}.`;
  }

  return updated;
}

function getHouseGameImagePool() {
  const gallery = (Array.isArray(GALLERY) ? GALLERY.map((g) => g.image) : []);
  const floating = (Array.isArray(FLOATING_MEMORIES) ? FLOATING_MEMORIES.map((f) => f.url) : []);
  return Array.from(new Set([...gallery, ...floating])).filter(Boolean);
}

function renderHouseMysteryMemory(container, memory) {
  if (window.__houseGame26Cleanup) {
    try { window.__houseGame26Cleanup(); } catch (_) {}
  }

  const gameUnlocked = localStorage.getItem(HOUSE_GAME_26_UNLOCK_KEY) === "true";
  if (!gameUnlocked) {
    container.innerHTML = `
      <div class="house-game-gate">
        <p class="house-game-hint">${memory.text || "Explora y encuentra pistas."}</p>
        <button class="house-game-start-btn" id="house-game-start-btn">🔓 Desbloquear juego</button>
        <p class="house-game-gate__sub">Este recuerdo abre una casa oscura con pistas escondidas.</p>
      </div>
    `;

    const startBtn = container.querySelector("#house-game-start-btn");
    startBtn?.addEventListener("click", () => {
      localStorage.setItem(HOUSE_GAME_26_UNLOCK_KEY, "true");
      startBtn.disabled = true;
      startBtn.textContent = "✨ Iniciando...";
      setTimeout(() => renderHouseMysteryMemory(container, memory), 650);
    });
    return;
  }

  container.innerHTML = `
    <div class="house-game-wrap">
      <p class="house-game-hint">${memory.text || "Explora y encuentra pistas."}</p>
      <div class="house-game-stage">
        <canvas class="house-game-canvas" id="house-game-canvas" width="960" height="560"></canvas>
        <div class="house-game-ui">
          <div class="house-game-chip">🎯 Objetivo: buscar fotos y números ocultos</div>
          <div class="house-game-chip">🕹️ Teclas: WASD / Flechas</div>
          <button class="house-game-chip house-game-action" id="house-game-inspect">Inspeccionar foto</button>
        </div>
      </div>
      <div class="house-game-touch" aria-hidden="true">
        <button data-dir="up">↑</button>
        <button data-dir="left">←</button>
        <button data-dir="down">↓</button>
        <button data-dir="right">→</button>
      </div>
    </div>
  `;

  const canvas = container.querySelector("#house-game-canvas");
  const inspectBtn = container.querySelector("#house-game-inspect");
  const touchButtons = Array.from(container.querySelectorAll(".house-game-touch button"));
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const keys = { up: false, down: false, left: false, right: false };
  const world = { width: 2600, height: 1800 };
  const rooms = [
    { x: 80, y: 120, w: 700, h: 480, n: "Sala" },
    { x: 860, y: 120, w: 620, h: 430, n: "Comedor" },
    { x: 1540, y: 120, w: 560, h: 430, n: "Cocina" },
    { x: 260, y: 720, w: 620, h: 460, n: "Pasillo" },
    { x: 960, y: 680, w: 680, h: 520, n: "Habitación" },
    { x: 1720, y: 680, w: 640, h: 520, n: "Closet" },
    { x: 700, y: 1300, w: 1100, h: 420, n: "Sótano" },
  ];
  const lamps = [
    { x: 420, y: 280, r: 180 }, { x: 1200, y: 300, r: 160 }, { x: 1820, y: 300, r: 170 },
    { x: 520, y: 930, r: 170 }, { x: 1260, y: 920, r: 180 }, { x: 2000, y: 940, r: 190 }, { x: 1280, y: 1510, r: 210 },
  ];

  const photoSpots = [];
  rooms.forEach((r) => {
    for (let i = 0; i < 4; i++) {
      photoSpots.push({
        x: r.x + 70 + (i % 2) * (r.w * 0.45),
        y: r.y + 60 + Math.floor(i / 2) * (r.h * 0.45),
      });
    }
  });

  const imagePool = getHouseGameImagePool();
  const photos = photoSpots.slice(0, imagePool.length).map((s, i) => ({
    id: "hg_" + i,
    x: s.x,
    y: s.y,
    w: 110,
    h: 80,
    url: imagePool[i],
    img: null,
    found: false,
    clue: null,
  }));
  if (photos[5]) photos[5].clue = "1";
  if (photos[17]) photos[17].clue = "9";

  photos.forEach((p) => {
    p.img = new Image();
    p.img.src = p.url;
  });

  const playerImg = new Image();
  playerImg.src = HOUSE_GAME_AVATAR_URL;

  const player = { x: 230, y: 220, r: 28, speed: 240, bob: 0 };
  const camera = { x: 0, y: 0 };
  let nearPhoto = null;
  let running = true;
  let last = performance.now();

  function onKey(e, down) {
    if (["ArrowUp", "w", "W"].includes(e.key)) keys.up = down;
    if (["ArrowDown", "s", "S"].includes(e.key)) keys.down = down;
    if (["ArrowLeft", "a", "A"].includes(e.key)) keys.left = down;
    if (["ArrowRight", "d", "D"].includes(e.key)) keys.right = down;
  }

  const keyDown = (e) => onKey(e, true);
  const keyUp = (e) => onKey(e, false);
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);

  touchButtons.forEach((btn) => {
    const dir = btn.getAttribute("data-dir");
    btn.addEventListener("pointerdown", () => { if (dir) keys[dir] = true; });
    btn.addEventListener("pointerup", () => { if (dir) keys[dir] = false; });
    btn.addEventListener("pointerleave", () => { if (dir) keys[dir] = false; });
  });

  const inspectNearby = () => {
    if (!nearPhoto) return;
    openInfraInspectModal(nearPhoto);
  };
  inspectBtn?.addEventListener("click", (e) => { e.stopPropagation(); inspectNearby(); });
  canvas.addEventListener("click", () => inspectNearby());

  function update(dt) {
    let vx = 0, vy = 0;
    if (keys.left) vx -= 1;
    if (keys.right) vx += 1;
    if (keys.up) vy -= 1;
    if (keys.down) vy += 1;
    const mag = Math.hypot(vx, vy) || 1;
    vx /= mag; vy /= mag;

    player.x = Math.max(20, Math.min(world.width - 20, player.x + vx * player.speed * dt));
    player.y = Math.max(20, Math.min(world.height - 20, player.y + vy * player.speed * dt));
    if (vx || vy) player.bob += dt * 12;

    camera.x += ((player.x - canvas.width / 2) - camera.x) * 0.08;
    camera.y += ((player.y - canvas.height / 2) - camera.y) * 0.08;
    camera.x = Math.max(0, Math.min(world.width - canvas.width, camera.x));
    camera.y = Math.max(0, Math.min(world.height - canvas.height, camera.y));

    nearPhoto = null;
    for (const p of photos) {
      const cx = p.x + p.w / 2;
      const cy = p.y + p.h / 2;
      const d2 = (cx - player.x) ** 2 + (cy - player.y) ** 2;
      if (d2 < 120 ** 2) {
        nearPhoto = p;
        p.found = true;
        break;
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0b0b10";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // world floor + rooms
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    ctx.fillStyle = "#11131a";
    ctx.fillRect(0, 0, world.width, world.height);
    rooms.forEach((r) => {
      ctx.fillStyle = "#1b1f2a";
      ctx.fillRect(r.x, r.y, r.w, r.h);
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 3;
      ctx.strokeRect(r.x, r.y, r.w, r.h);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.font = "18px Inter";
      ctx.fillText(r.n, r.x + 14, r.y + 24);
    });

    // closets/cabinets props
    rooms.forEach((r, i) => {
      ctx.fillStyle = i % 2 ? "#2f3443" : "#353a49";
      ctx.fillRect(r.x + 25, r.y + r.h - 78, 140, 48);
      ctx.fillRect(r.x + r.w - 185, r.y + 30, 150, 52);
    });

    // photos
    photos.forEach((p) => {
      const onScreen = p.x + p.w > camera.x && p.x < camera.x + canvas.width && p.y + p.h > camera.y && p.y < camera.y + canvas.height;
      if (!onScreen) return;
      if (nearPhoto === p) {
        ctx.strokeStyle = "rgba(255, 210, 80, 0.9)";
        ctx.lineWidth = 4;
        ctx.shadowBlur = 22;
        ctx.shadowColor = "rgba(255, 220, 120, 0.9)";
        ctx.strokeRect(p.x - 4, p.y - 4, p.w + 8, p.h + 8);
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = "#efefef";
      ctx.fillRect(p.x, p.y, p.w, p.h);
      if (p.img && p.img.complete) {
        ctx.drawImage(p.img, p.x + 6, p.y + 6, p.w - 12, p.h - 12);
      } else {
        ctx.fillStyle = "#6b7280";
        ctx.fillRect(p.x + 6, p.y + 6, p.w - 12, p.h - 12);
      }
    });

    // player with bobbing animation
    const bobY = Math.sin(player.bob) * 4;
    const pw = 52, ph = 66;
    if (playerImg.complete) {
      ctx.drawImage(playerImg, player.x - pw / 2, player.y - ph / 2 + bobY, pw, ph);
    } else {
      ctx.fillStyle = "#a78bfa";
      ctx.beginPath();
      ctx.arc(player.x, player.y + bobY, player.r * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

    // darkness and lighting
    ctx.fillStyle = "rgba(0,0,0,0.78)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";
    const carveLight = (x, y, r) => {
      const g = ctx.createRadialGradient(x, y, 10, x, y, r);
      g.addColorStop(0, "rgba(0,0,0,0.95)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };
    lamps.forEach((l) => carveLight(l.x - camera.x, l.y - camera.y, l.r));
    carveLight(player.x - camera.x, player.y - camera.y, 140);
    ctx.globalCompositeOperation = "source-over";

    // minimap
    const mapX = canvas.width - 165, mapY = 14, mapW = 150, mapH = 105;
    ctx.fillStyle = "rgba(10,10,16,0.75)";
    ctx.fillRect(mapX, mapY, mapW, mapH);
    rooms.forEach((r) => {
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.strokeRect(mapX + (r.x / world.width) * mapW, mapY + (r.y / world.height) * mapH, (r.w / world.width) * mapW, (r.h / world.height) * mapH);
    });
    photos.forEach((p) => {
      ctx.fillStyle = p.found ? "#34d399" : "#9ca3af";
      ctx.fillRect(mapX + (p.x / world.width) * mapW, mapY + (p.y / world.height) * mapH, 2.6, 2.6);
    });
    ctx.fillStyle = "#a78bfa";
    ctx.beginPath();
    ctx.arc(mapX + (player.x / world.width) * mapW, mapY + (player.y / world.height) * mapH, 3.3, 0, Math.PI * 2);
    ctx.fill();

    if (nearPhoto) {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "bold 14px Inter";
      ctx.fillText("Foto encontrada — toca para inspeccionar", 16, canvas.height - 16);
    }
  }

  function loop(now) {
    if (!running) return;
    const dt = Math.min(0.033, (now - last) / 1000);
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  function openInfraInspectModal(photo) {
    let modal = document.getElementById("infra-photo-modal");
    if (modal) modal.remove();
    modal = document.createElement("div");
    modal.id = "infra-photo-modal";
    modal.className = "infra-photo-modal";
    modal.innerHTML = `
      <div class="infra-photo-modal__backdrop"></div>
      <div class="infra-photo-modal__content">
        <h4>Escáner infrarrojo</h4>
        <p>Mueve la linterna para buscar un número oculto.</p>
        <canvas width="720" height="460" class="infra-photo-canvas"></canvas>
        <button class="infra-photo-close">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);

    const mCanvas = modal.querySelector(".infra-photo-canvas");
    const mCtx = mCanvas.getContext("2d");
    const closeBtn = modal.querySelector(".infra-photo-close");
    const backdrop = modal.querySelector(".infra-photo-modal__backdrop");
    const pointer = { x: mCanvas.width * 0.5, y: mCanvas.height * 0.5 };

    const img = new Image();
    img.src = photo.url;
    const cluePos = { x: 90 + Math.random() * (mCanvas.width - 180), y: 80 + Math.random() * (mCanvas.height - 160) };
    let irRunning = true;

    const handleMove = (ev) => {
      const rect = mCanvas.getBoundingClientRect();
      const t = ev.touches ? ev.touches[0] : ev;
      pointer.x = ((t.clientX - rect.left) / rect.width) * mCanvas.width;
      pointer.y = ((t.clientY - rect.top) / rect.height) * mCanvas.height;
    };
    mCanvas.addEventListener("mousemove", handleMove);
    mCanvas.addEventListener("touchmove", handleMove, { passive: true });

    const closeModal = () => { irRunning = false; modal.remove(); };
    closeBtn?.addEventListener("click", closeModal);
    backdrop?.addEventListener("click", closeModal);

    function renderIR() {
      if (!irRunning) return;
      mCtx.fillStyle = "#06070c";
      mCtx.fillRect(0, 0, mCanvas.width, mCanvas.height);
      if (img.complete) {
        mCtx.drawImage(img, 0, 0, mCanvas.width, mCanvas.height);
      }

      if (photo.clue) {
        mCtx.save();
        mCtx.font = "bold 110px Inter";
        mCtx.fillStyle = "rgba(255, 60, 80, 0.45)";
        mCtx.fillText(photo.clue, cluePos.x, cluePos.y);
        mCtx.restore();
      }

      mCtx.fillStyle = "rgba(0,0,0,0.92)";
      mCtx.fillRect(0, 0, mCanvas.width, mCanvas.height);
      mCtx.globalCompositeOperation = "destination-out";
      const rg = mCtx.createRadialGradient(pointer.x, pointer.y, 18, pointer.x, pointer.y, 128);
      rg.addColorStop(0, "rgba(0,0,0,1)");
      rg.addColorStop(1, "rgba(0,0,0,0)");
      mCtx.fillStyle = rg;
      mCtx.beginPath();
      mCtx.arc(pointer.x, pointer.y, 128, 0, Math.PI * 2);
      mCtx.fill();
      mCtx.globalCompositeOperation = "source-over";

      requestAnimationFrame(renderIR);
    }
    requestAnimationFrame(renderIR);
  }

  window.__houseGame26Cleanup = () => {
    running = false;
    window.removeEventListener("keydown", keyDown);
    window.removeEventListener("keyup", keyUp);
  };
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
    instructions.innerHTML = `<small>Toca o haz click para volar 💜 • Esquiva obstáculos • Recoge monedas 🪙 • Verde: turbo 5s • Azul: gravedad invertida 5s</small>`;
    
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
    let powerups = [];
    let bgGradient = null;
    const activeEffects = { speedUntil: 0, invertUntil: 0 };
    const EFFECT_DURATION = 5000;

    function generateStars() {
        bgStars = [];
        for (let i = 0; i < 30; i++) {
            bgStars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 + 0.3, tw: Math.random() * Math.PI * 2, sp: Math.random() * 0.02 + 0.01 });
        }
        bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGradient.addColorStop(0, '#0f0a1e');
        bgGradient.addColorStop(0.5, '#1a1a2e');
        bgGradient.addColorStop(1, '#16213e');
    }

    function resetGame() {
        gPlayer = { x: 60, y: canvas.height / 2, vy: 0, r: 14, trail: [] };
        gObstacles = []; coinsArray = []; gParticles = []; powerups = [];
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

    function spawnPowerup() {
        const y = 40 + Math.random() * (canvas.height - 80);
        const type = Math.random() < 0.5 ? 'speed' : 'invert';
        powerups.push({ x: canvas.width + 20, y, r: 13, type, glow: Math.random() * Math.PI * 2 });
    }

    function spawnPowerup() {
        const y = 40 + Math.random() * (canvas.height - 80);
        const type = Math.random() < 0.5 ? 'speed' : 'invert';
        powerups.push({ x: canvas.width + 20, y, r: 13, type, glow: Math.random() * Math.PI * 2 });
    }

    function spawnPowerup() {
        const y = 40 + Math.random() * (canvas.height - 80);
        const type = Math.random() < 0.5 ? 'speed' : 'invert';
        powerups.push({ x: canvas.width + 20, y, r: 13, type, glow: Math.random() * Math.PI * 2 });
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

        const nowMs = Date.now();
        const speedBoostActive = activeEffects.speedUntil > nowMs;
        const invertActive = activeEffects.invertUntil > nowMs;

        // Background gradient + stars
        ctx.fillStyle = bgGradient || '#0f0a1e';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        bgStars.forEach(s => {
            s.tw += s.sp; s.x -= gameSpeed * 0.2; if (s.x < 0) s.x = canvas.width;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + (0.3 + Math.sin(s.tw) * 0.3) + ')'; ctx.fill();
        });

        // Physics
        const gravityNow = invertActive ? -GRAVITY : GRAVITY;
        gPlayer.vy += gravityNow; gPlayer.y += gPlayer.vy;
        if (gPlayer.y + gPlayer.r >= canvas.height) { gPlayer.y = canvas.height - gPlayer.r; gPlayer.vy = 0; }
        if (gPlayer.y - gPlayer.r <= 0) { gPlayer.y = gPlayer.r; gPlayer.vy = 0; }
        gameSpeed = (BASE_SPEED + Math.min(score * 0.08, 1.5)) * (speedBoostActive ? 1.65 : 1);

        // Spawners
        if (gOpts.obstacleTimer-- <= 0) { spawnObstacle(); gOpts.obstacleTimer = Math.max(90, 150 - score * 5); }
        if (gOpts.coinTimer-- <= 0) { spawnCoin(); gOpts.coinTimer = 40 + Math.random() * 50; }
        if (frameCount % 280 === 0) spawnPowerup();

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
            if (!coin.collected && (dx * dx + dy * dy) < (gPlayer.r + coin.hitR) * (gPlayer.r + coin.hitR)) {
                coin.collected = true; gameCoins++; updateCoinDisplay();
                localStorage.setItem('minigame_coins', gameCoins); addGParticle(coin.x, coin.y, '#fbbf24', 8);
            }
            if (coin.x + coin.r < -10) coinsArray.splice(i, 1);
        }

        // Draw + collide powerups
        for (let i = powerups.length - 1; i >= 0; i--) {
            const p = powerups[i];
            p.x -= gameSpeed;
            p.glow = (p.glow + 0.1) % (Math.PI * 2);
            const color = p.type === 'speed' ? '#22c55e' : '#3b82f6';

            ctx.save();
            ctx.shadowBlur = 16;
            ctx.shadowColor = color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();

            const pdx = gPlayer.x - p.x;
            const pdy = gPlayer.y - p.y;
            if ((pdx * pdx + pdy * pdy) < (gPlayer.r + p.r) * (gPlayer.r + p.r)) {
                if (p.type === 'speed') {
                    activeEffects.speedUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#22c55e', 10);
                } else {
                    activeEffects.invertUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#3b82f6', 10);
                }
                powerups.splice(i, 1);
                continue;
            }

            if (p.x + p.r < -10) powerups.splice(i, 1);
        }

        // Draw + collide powerups
        for (let i = powerups.length - 1; i >= 0; i--) {
            const p = powerups[i];
            p.x -= gameSpeed;
            p.glow = (p.glow + 0.1) % (Math.PI * 2);
            const color = p.type === 'speed' ? '#22c55e' : '#3b82f6';

            ctx.save();
            ctx.shadowBlur = 16;
            ctx.shadowColor = color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();

            const pdx = gPlayer.x - p.x;
            const pdy = gPlayer.y - p.y;
            if ((pdx * pdx + pdy * pdy) < (gPlayer.r + p.r) * (gPlayer.r + p.r)) {
                if (p.type === 'speed') {
                    activeEffects.speedUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#22c55e', 10);
                } else {
                    activeEffects.invertUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#3b82f6', 10);
                }
                powerups.splice(i, 1);
                continue;
            }

            if (p.x + p.r < -10) powerups.splice(i, 1);
        }

        // Draw + collide powerups
        for (let i = powerups.length - 1; i >= 0; i--) {
            const p = powerups[i];
            p.x -= gameSpeed;
            p.glow = (p.glow + 0.1) % (Math.PI * 2);
            const color = p.type === 'speed' ? '#22c55e' : '#3b82f6';

            ctx.save();
            ctx.shadowBlur = 16;
            ctx.shadowColor = color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();

            const pdx = gPlayer.x - p.x;
            const pdy = gPlayer.y - p.y;
            if ((pdx * pdx + pdy * pdy) < (gPlayer.r + p.r) * (gPlayer.r + p.r)) {
                if (p.type === 'speed') {
                    activeEffects.speedUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#22c55e', 10);
                } else {
                    activeEffects.invertUntil = nowMs + EFFECT_DURATION;
                    addGParticle(p.x, p.y, '#3b82f6', 10);
                }
                powerups.splice(i, 1);
                continue;
            }

            if (p.x + p.r < -10) powerups.splice(i, 1);
        }

        // Draw player
        gPlayer.trail.push({ x: gPlayer.x, y: gPlayer.y });
        if (gPlayer.trail.length > 6) gPlayer.trail.shift();
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
        if (speedBoostActive) ctx.fillText('Turbo activo', canvas.width - 10, 28);
        if (invertActive) ctx.fillText('Gravedad invertida', canvas.width - 10, 46);

        animationFrameId = requestAnimationFrame(animate);
    }

    let gOpts = { obstacleTimer: 120, coinTimer: 40 };

    const jump = (e) => {
        e.stopPropagation();
        if (!isPlaying) return;
        if (e.type === 'touchstart') e.preventDefault();
        const invertActive = activeEffects.invertUntil > Date.now();
        gPlayer.vy = invertActive ? Math.abs(LIFT) : LIFT;
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
    const visibleItems = getVisibleShopItems();
    visibleItems.forEach(item => {
        const isUnlocked = unlockedShopItems.includes(item.id);
        const isCard = item.type === "card";
        
        let buttonHtml;
        if (isUnlocked) {
             buttonHtml = `<button class="btn-direct-view" onclick="event.stopPropagation(); window.viewShopItem('${item.id}')">${isCard ? "Ver Tarjeta 🃏" : "Ver Foto 👁️"}</button>`;
        } else {
             // FORCE VISIBILITY STYLES INLINE
             buttonHtml = `<button class="btn-direct-buy" style="display:block !important; visibility:visible !important; opacity:1 !important;" onclick="event.stopPropagation(); window.confirmBuy('${item.id}')">Desbloquear (${item.price} 🪙)</button>`;
        }

        const mediaHtml = isCard
          ? `<div class="shop-card-preview ${isUnlocked ? "" : "blur"}">${isUnlocked ? (item.text || "Tarjeta") : "❓ Tarjeta Misteriosa"}</div>`
          : `<img src="${item.url}" class="${isUnlocked ? '' : 'blur'}" loading="lazy" decoding="async">`;

        itemsHtml += `
            <div class="shop-item ${isUnlocked ? 'unlocked' : 'locked'}" data-id="${item.id}">
                <div class="shop-item-img">
                    ${mediaHtml}
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

function areAllDecoysUnlocked() {
  return SHOP_DECOY_IDS.every((id) => unlockedShopItems.includes(id));
}

function getVisibleShopItems() {
  return SHOP_PHOTOS.filter((item) => {
    if (!item.revealAfterDecoys) return true;
    return areAllDecoysUnlocked();
  });
}

function areAllDecoysUnlocked() {
  return SHOP_DECOY_IDS.every((id) => unlockedShopItems.includes(id));
}

function getVisibleShopItems() {
  return SHOP_PHOTOS.filter((item) => {
    if (!item.revealAfterDecoys) return true;
    return areAllDecoysUnlocked();
  });
}

function areAllDecoysUnlocked() {
  return SHOP_DECOY_IDS.every((id) => unlockedShopItems.includes(id));
}

function getVisibleShopItems() {
  return SHOP_PHOTOS.filter((item) => {
    if (!item.revealAfterDecoys) return true;
    return areAllDecoysUnlocked();
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
                ${item.type === "card"
                  ? `<div class="details-card blur">Tarjeta Misteriosa</div>`
                  : `<img src="${item.url}" class="details-img blur">`
                }
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
             text: item.type === "card"
              ? (item.codeDigit ? `✅ Esta tarjeta sí tiene una pista. Número: ${item.codeDigit}` : (item.text || "en esta no hay nada, sigue probando"))
              : "📸 Mándame captura de esta pantalla para enviártela por WhatsApp",
             image: item.type === "card" ? null : item.url
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
                ${item.type === "card"
                  ? `<div class="reveal-card">${item.codeDigit ? `Número encontrado: ${item.codeDigit}` : "en esta no hay nada, sigue probando"}</div>`
                  : `<img src="${item.url}" class="reveal-img" style="display:block;">`
                }
            </div>
            <p class="reveal-note" style="opacity:0; color: #fbbf24; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">
                ${item.type === "card" ? "🧩 Sigue reuniendo pistas del código" : "📸 \"Mándame captura de esta pantalla para enviártela por WhatsApp\""}
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
// ══════════════════════════════════════════
// LIBRO INTERACTIVO — Diseño de Libro Real
// ══════════════════════════════════════════

const BOOK_COVER_IMAGE = "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771402597/IMG-20250816-WA0018_bt7e1o.jpg";

const BOOK_CHAPTERS = [
  {
    title: "Mis Razones de Amarte",
    subtitle: "El Inicio",
    content: `me es complicado el expresar mis sentimientos a una persona, y mas de una forma tan rapida y repentina, desde niño me fue complicado el expresar el como me siento, y mas en voz alta ante la gente, siempre fui alguien un poco cerrado y timido, eso y mas son cosas que eh ido cambiando contigo, pero bueno, eso lo contare mas adelante, empezemos desde el inicio, el dia que te conoci, ese 21 de julio de 2025, dia en el que cinceramente no iva con la mayor motivacion de el mundo, porque literalmente dias anteriores una maestra que me caia mal me abia mencionado que ella era directora de fcfm y estubo en la carrera que yo estaba, por lo cual me desmotivo de como me hablo de la carrera sobre lo mal que enseñaban AJSJAJSAJ, a pesar de eso al llegar a la uni, facu y el salon intente hacer mi primer amigo, ese humano que ni hablandole mucho se hizo cercano porque el ya tenia una amistad alli, le hable antes de entrar a el salon y lo motive a entrar, al entrar me sente a su lado, para minimo tener a un conocido cerca mio, al intentar charlar un poco no ubo mejoria, estubo igual de serio en todo el rato, al iniciar la clase oh un poco antes te vi, de re ojo ya que ndms estaba enfocado en no tener nervios a la clase, posteriormente inicio la clase, vi a tu en ese entonces amigo hablarte, esa fue la primera vez que te vi, no lo negare, te me hiciste muy linda, demaciado de hecho, no dude en pensar que serias la mas linda de el salon y te lloverian los hombres de el salon a pedirte tu insta, por eso mismo no hize mucho por hacercarme, y mas porque deduje que tu amigo era tu novio oh quedante o cercano, aunque no me resisti a voltear a verte en ciertos puntos, eras muy llamativa, y lo sigues siendo, alguien impecablemente linda, al salir a ese mini descanso yo ndms me salia fuera a tomar aire, ndms veia que pasabas con tu amigo y mis sospechas subian pero que mas daba? eran pareja o no presentia que no me arias ni caso, por lo que solo me quedaba apreciar lo linda que eres, posteriormente en siguiente clase pasamos a el auditorio, en donde estube solo toda esa clase mandandole fotos a amigos oh compañeros, a el final cuando escuche que algo callo cerca mio y tu me hablaste para pasartelo me fue emocionante y te quise sacar platica, o hacer un chiste rancio pero no me oportune por la presencia de tu amigo, por lo que me retire, al dia siguiente no asisti a clase porque me quede dormido, aunque sinceramente no me emocionaba ir, de igual forma esas primeras clases ya me sabia los temas, en el tercer dia fue un dia completamente normal, comun y corriente, aunque note que abian muchos cruses de miradas entre tu y yo, me dio miedo por que pensaras que te acosaba o algo asi, al terminar clases e irnos al bajar las escaleras solo vi el como estiraste tu brazo, pense que le darias algo a alguien que esta cerca de mi, por lo cual no reaccione, agitaste la mano por lo que mi reaccion fue tomar lo que tenias, con pena, miedo y confusion mire para arriba y vi tu rostro mirando para atras hacia mi, me llene de mas pena y nervios, empeze a caminar mas lento por miedo a que fuera, lo primero que pense que fuera fue algun tipo de declaracion de amor o queja y aclaro, no por ego, solamente fue lo primero que se me vino a la mente al recibir un papelito de tu parte de una forma tan oculta, me llene de miedo ya que al pensar que el era tu pareja temia una infidelidad, llame a mi mama para calmar los nervios, al igual porque veia que te detenias a pasos enfrente de mi y me daba miedo que fuese una declaracion y esperases una respuesta, al llamar a mi mama se lo mencione y me dijo que lo abriera, no lo abri asta perderte de vista ya que asta en fime fue que te logre revasar ya que seguias enfrente deteniendote continuamente, fui a rectoria por el lugar que tiene un pasilo, alli en llamada con mi mama abri el papelito y al ver que decia solo amistad suspire de libertad porque iba cargando con mucha presion y miedo, al ver lo que decia y terminar llamada con mi mama procedi a irme, al pasar por debajo de la estacion y mirar hacia arriba te vi, te vi de una forma peculiarmente seria, pasando a enojo, mi miedo volvio a subir por lo que subi rapido a la estacion, voltee a ver donde estabas y ya no estabas alli, me alarme mas por lo que envez de ir a el lado en donde siempre pasamos el qr de el metro fui a el otro lado, posteriormente veia a todos lados buscandote, me subi a el ultimo vagon de metro, me baje en cuauthemoc en donde verifique que no estubieras, al verificarlo e ir a la estacion de arriba, tomarmetro y posteriormente camion, estando mas tranquilo, puse musica y me fui a casa, en casa se lo conte a mi mama y mi hermana, se emocionaron porque literal mencione que eras la mas linda de el salon AJSJASJ, me tocaba cuidar a mi welita por la tarde por lo que al momento que me quede en su casa abri el papelito que por cierto nunca lo solte de mi mano, busque tu usuario y vi tu perfil, no lo negare, me desanime un poco mas pero no tanto como esperaba, de igual forma veia oh suponia que tu amigo era tu pareja, simplemente no era el pero si tenias, la curiosidad me gano, vi tu perfil como el de el, me di cuenta rapidamente que la unica foto que tenia el de ti era la de perfil, chistosamente sus demas fotos de destacadas las tenia ocultas para todos menos para ti, es algo que me percate por que al darle click derecho en la web de instagram y darle a inspeccionar salia history banned by 158, osea ocuta a 158 seguidores de 160, osea a todos menos tu, cosa que al verla me parecio curiosa mas no mencione nada porque ubiera sido raro y mas porque apenas 5 minutos me abias mandado ese primer sticker, por lo que segui con la charla, todo el dia me la pase aprovechando y stalkeandote, viendo gustos, viendo cercanias, etc etc, vi que te gustaba bts y kpop, para mi suerte a mi hermana igual, por lo que le rogue me enseñe todo, hacepto y desde ese dia vi mucho respecto a el tema, finalizando el dia hablamos mucho, tanto asi que llegamos a la madrugada, a el dia siguiente tampoco fui por que me enferme por ende me quede a dormr, me disculpe contigo pero de igual forma hablamos un muy buen rato, dia siguiente jueves primer dia que te hablaria, entre con mucha pena a el salon, me arme de valentia y entre, te vi, al momento de verte me emocione en silencio y me sente en donde me dijiste, e intente sacarte platica, note que tenias nervios porque hablabas en voz baja, al igual que no me veias a la cara JSJASJA, me fue tierno, ese dia fue lindo porque estubimos alli toda la clase, cerca de ti, tu amigo llego y recuerdo que le dijiste que hiziste un amigo, osea yo JAJASJSA, lo vi serio pero no le tome importancia desde entonces que vi que solo eran amigos, salimos a el mini descanso y me invitaste a ir con ustedes, hacepte ndms para conocerte mas, intentabas hablar con los 2 oh juntarnos en temas pero ninguno tenia ese interes AJJAJA, al final ndms nos fuimos a el salon y seguimos con lo nuestro, y asi siguieron siendo los dias, hablabamos mucho y nos ibamos juntos, me hablabas de tu relacion actual y aunque me atraias emocionalmente no quise verme metido en eso por lo que intente verme gei como llegue a serlo, y apoyar a tu ex relacion, aunque por dentro me era de emocion lo mal pareja que era y que iba cagandola cada vez mas, por fuera procuraba apoyarte y que no te sintieses mal ya que veia que te pegaba mucho, y para ti no era cualquier cosa, te apoye y en el camion cada que te apoyabas en mi hombro era un grito interno lleno de emocion,dias despues me mencionaste la ruptura con tu pareja, me fue complicado el escuchar eso ya que a ti si te abia pegado feo lo mal que lo pasaste, y no te culpo, vi lo mal que eras tratada, te intente apoyar en lo posible y espero alla sido de ayuda, pasaron los dias y el ultimo de cursos nos escapamos de clases a afuera, fuimos a varios lugares, a la biblioteca, pasando las facultades, a la roca, etc, pasando a irnos a casa, "mencionare algo que me da pena mencionar por lo toxico que se puede escuchar y que relacionare con algo que no me atrevia a decir ya que solo es mal entendido mio", ese mismo dia o cercano de regreso de camion que te bajaste de en casa de tu welita te topaste a un compañero en el camion, lo note desde que lo volteaste a ver desde que se subio, por eso mismo a pesar de que eramos un poco mas cercanos mantube distancia por su presencia, al bajarte junto con el no negare me llene de celos por la emocion que note en tu rostro, y mas por que no sabia nada de contexto ni informacion, llegando a mi casa directamente lo busque por asta en el mas pequeño rincon, al encontrarlo vi todo normal, un simple amigo de preparatoria comun y corriente, cosa que si me alboroto fue su conexion con tu ex pareja, me dio a entender el paradero de que se conocen, por lo que estube mas a el tanto de tu conexion y/o contacto con el que a dia de hoy lo veo igual.`
  },
  {
    title: "El Proceso",
    subtitle: "El Proceso",
    content: `Pasaban los dias y cada vez notaba mas conexion, pasaron momentos como cuando estabas con lo de el horario pagando lo de rectoria, ese mismo dia el abrazo que me diste, te pinte las uñas, me subias en historias, etc tec, muchas cosas lindas, muchos momentos que me eran lindos pasar, asta que llegaban las indirectas, esas cosas que pasaban de vez en cuando, con notas mayormente, cuando subia una nota y subias tu diciendo que si lo arias, o si te dejabas, era lindo porque nos haciamos mensos sin mencionar lo que poniamos, o el mandar videos mencionando que nos equivocamos cuando obviamente era prara nosotros JASJASJS, todo fue mejorando tanto, termine haceptando conmigomismo que en efecto, estaba enamorado de ti, estaba completamente enamorado de una y cada una de cada parte de ti, pasaron cosas, no lo negare que me daban miedo, como el sentir que si lo decia y tu no sintieras lo mismo, o que me rechazarias, y mas porque me sentia literal como el chico de el anime que vimos, opacado por ti y sintiendo que no te merezco, se lo mencone a mis recomendadoras, (mi mama y hermana) y aunque tambien se lo mencione a hector no me apetece hablar de el mucho que por cierto mencionare el porque de no querer hablarle ni tener relacion cercana con el, almenos de mi parte el tema mas que nada es nadamas por los chistes y su poco limite que tenian, y mas porque en veces lo hacia contigo, el ejemplo que mas me hizo percatarme fue que tu telefono estaba cargando y se lo pediste mendionando (me lo pasas?) cosa a la que el menciono, (tambien el telefono?) haciendo obvia referencia a el rancio chiste que por cierto te causo extrañamente gracia por eso mismo decidi no involucrarme y nada porque chistes asi seguian como una vez que te bajo la cabeza como tu lo haces conmigo cuando me agacho, etc no soy de interponerme con eso poruq nose, tal vez te llevas asi, pero equis siguiendo con el tema,se lo conte a mi mama y hermana, me dijeron que te lo dijera que no pierdo nada, y lo hize dias despues aunque fue mencionando que las indirectas si son para ti, en forma de papelito, lo tenia en mano desde tercer hora y te lo di saliendo de el metro de la misma forma que tu me lo diste :), en ese momento todo se me puso oscuro, mi mente se nublo por completo de miedo, en ese momento solo queria irme corriendo, al subir las escaleras solamente senti tu abrazo lleno de emocion y alegria, y mi mundo instantaneamente se lleno de color, senti la calida felizidad que me transmitias y la vi refljada en ese momento tan lindo, no negare que ese dia quise llorar de la felizidad de tanta alegria que me fuera haceptada la forma de la que me sentia hacia ti, a partir de ese dia todo fue hermoso, el momento de el juego de el calamar que me hizo temblar de nervios, los abrasos seguidos, los kiss kiss consecutivos, y la gran cercania y confianza que empezabamos a reforzar, le conte a mi familia con confianza y alegria lo que hize, y todo fue mejorando de una muy gran forma, fui muy feliz durante todo ese tiempo y mas sabiendo que era mutuo, nos teniamos apodos, nos subiamos a historias, nos mandavamos mas indirectas sabiendo que eran ya para nosotros, etc, dia con dia todo fue simplemente mejorando mas asta que llegaron los dias...`
  },
  {
    title: "La Declaración",
    subtitle: "La Declaración",
    content: `Los dias iban siendo muy lindos, asta nos tomabamos de la mando, llego una ves que en el camion yo te daba besitos en la mejilla, y me atrebi a darte uno muy cerca de el labio, no reaccionaste y por miedo no lo volvi a hacer, por eso fue la nota de que no te dejabas besar AJSAJSAJ, me emocione al momento de que dijiste que si te dejabas, por lo que ese dia o dias despues aumente la indirecta en persona, asta que ese dia esperando el camion me di el atrevimiento de darte el beso de pikito, por lo que tu continuamente me diste beshote de como 3 segundos que me dejo todo paraplejico bien embarazado y sin poder caminar por 1 semana AJJAJJAJAJAJ, pasando esos dias ya abia toda la confianza de el mundo, solo faltaba una cosa, ofizialisarlo, cosa que me tome mi tiempo para pensar el como, lo pense por mucho tiempo pero la verdad quise hacerlo cercano a como tu tubiste la valentia de darme el papelito, por eso mismo lo escribi en tu mano, me sudo todo el cuerpo por miedo y pena, pero la respuesta ya la sabia de antemano por que ya queriamos eso los 2, ser noviecitos los 2, despues de eso todos los siguientes dias fueron y an sido igual de hermosos, con pequeños problemas que terminamos hablando y en veces con mucho kiss kiss, pero el punto es solucionarlo bebe, todo lo que a pasado a dia de hoy y lo contado aqui es un pequeño resumen por lo que tube que pasar para llegar a brasos tuyos, y demostrando lo muy enamorado que estoy de ti, demostrando cada pizca de amor que siento por ti, y lo muy agradecido que estoy contigo por permitirme ser tu pareja, encerio te amo mi niña, y ahora te pregunto, puedo seguir siendo el amor de tu vida durante esta, y miles de vidas mas?.`
  }
];

function renderBookMemory(container, memory) {
  container.innerHTML = "";
  const bookBtn = document.createElement("button");
  bookBtn.className = "book-open-btn";
  bookBtn.innerHTML = `📖 Abrir Libro`;
  bookBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playBookIntro(() => openBookOverlay());
  });
  container.appendChild(bookBtn);
}

const BOOKMARK_COLORS = [
  "#c0392b","#e74c3c","#8e44ad","#9b59b6",
  "#2980b9","#1abc9c","#27ae60","#f39c12",
  "#d35400","#e67e22","#c9a84c"
];

function getBookmarks() {
  try { return JSON.parse(localStorage.getItem("book_bookmarks") || "[]"); }
  catch(e) { return []; }
}
function saveBookmarks(b) { localStorage.setItem("book_bookmarks", JSON.stringify(b)); }
function getLastBookPage() { return parseInt(localStorage.getItem("book_last_page") || "0"); }
function saveLastBookPage(p) { localStorage.setItem("book_last_page", String(p)); }

// ── 6-second cinematic intro ──
function playBookIntro(onComplete) {
  const intro = document.createElement("div");
  intro.className = "book-intro-overlay";
  intro.innerHTML = `
    <canvas class="book-intro-canvas" id="book-intro-canvas"></canvas>
    <div class="book-intro-vignette"></div>
    <div class="book-intro-heart">💜</div>
    <div class="book-intro-text1">Cada historia de amor es especial...</div>
    <div class="book-intro-text2">pero la nuestra es mi favorita</div>
    <div class="book-intro-book3d">
      <div class="book-intro-minibook">📖</div>
    </div>
    <div class="book-intro-flash"></div>
  `;
  document.body.appendChild(intro);
  lockScroll();

  // Particle system on canvas
  const canvas = document.getElementById("book-intro-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const PARTICLE_COUNT = 80;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -Math.random() * 1.2 - 0.3,
      size: Math.random() * 3 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "#c9a84c" : "#a08050",
      life: Math.random() * 100
    });
  }

  let animating = true;
  function animateParticles() {
    if (!animating) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life += 0.5;
      p.alpha = Math.sin(p.life * 0.03) * 0.5 + 0.2;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // After 6 seconds, remove intro and open book
  setTimeout(() => {
    animating = false;
    intro.style.transition = "opacity 0.5s ease";
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.remove();
      if (onComplete) onComplete();
    }, 500);
  }, 6000);
}

function buildBookPages() {
  const pages = [];

  // Page 0: Cover
  pages.push({
    type: "cover",
    html: `
      <div class="book-cover">
        <div class="book-cover__image-wrap">
          <img src="${BOOK_COVER_IMAGE}" alt="Portada" class="book-cover__image" />
        </div>
        <div class="book-cover__ornament">✦ ✦ ✦</div>
        <h1 class="book-cover__title">Una Historia que Merece Ser Escuchada</h1>
        <div class="book-cover__ornament">─── ♥ ───</div>
        <div class="book-cover__author">
          <span class="book-cover__written">Escrito por:</span>
          <span class="book-cover__name">ALFREDO</span>
          <span class="book-cover__sub">noviecito de mel</span>
        </div>
      </div>
    `
  });

  // Build content pages using sentence-level splitting
  BOOK_CHAPTERS.forEach((chapter, idx) => {
    // Chapter title page
    pages.push({
      type: "chapter-title",
      chapterIndex: idx,
      html: `
        <div class="book-chapter-title">
          <div class="book-chapter-number">Capítulo ${idx + 1}</div>
          <h2 class="book-chapter-name">${chapter.title}</h2>
          <div class="book-chapter-ornament">─── ♥ ───</div>
        </div>
      `
    });

    // Split content into sentences
    const rawText = idx === 0 ? injectBookSecretClues(chapter.content) : chapter.content;
    const sentences = rawText.split(/,\s*/).filter(s => s.trim().length > 0);

    // Group sentences into small chunks (~250 chars each) as "paragraphs"
    const paragraphs = [];
    let currentPara = "";
    for (const sentence of sentences) {
      if (currentPara.length + sentence.length > 250 && currentPara.length > 60) {
        paragraphs.push(currentPara.trim());
        currentPara = sentence;
      } else {
        currentPara += (currentPara ? ", " : "") + sentence;
      }
    }
    if (currentPara.trim()) paragraphs.push(currentPara.trim());

    // Store paragraphs for dynamic reflow
    pages.push({
      type: "content-reflow",
      chapterIndex: idx,
      chapterTitle: chapter.title,
      chapterSubtitle: chapter.subtitle,
      paragraphs: paragraphs
    });
  });

  // Final page
  pages.push({
    type: "end",
    html: `
      <div class="book-end-page">
        <div class="book-end-ornament">✦</div>
        <h2 class="book-end-title">FIN.</h2>
        <div class="book-end-heart">💜</div>
        <p class="book-end-text">Cada palabra fue escrita con el corazón.<br>Gracias por leer nuestra historia.</p>
        <div class="book-end-ornament">─── ♥ ───</div>
      </div>
    `
  });

  return pages;
}

// Dynamic reflow: measures actual rendered text to split into pages that fit
function reflowBookPages(skeletonPages, pageWrapper) {
  const reflowed = [];

  for (const page of skeletonPages) {
    if (page.type !== "content-reflow") {
      reflowed.push(page);
      continue;
    }

    // For content-reflow pages, measure each paragraph
    const { chapterIndex, chapterTitle, chapterSubtitle, paragraphs } = page;
    let paraIndex = 0;
    let pageCount = 0;

    while (paraIndex < paragraphs.length) {
      const isFirstContentPage = (pageCount === 0);
      pageCount++;

      // Build page HTML incrementally, measuring after each paragraph
      let headerHtml = "";
      if (isFirstContentPage) {
        headerHtml = `<div class="book-page-chapter-label">Capítulo ${chapterIndex + 1} — ${chapterSubtitle}</div>`;
      }

      // Measure how many paragraphs fit
      const fittingParas = [];
      let testedCount = 0;

      for (let i = paraIndex; i < paragraphs.length; i++) {
        const para = paragraphs[i];
        const testParas = [...fittingParas, para];

        // Build test HTML
        let testHtml = `<div class="book-page-content">${headerHtml}`;
        testParas.forEach((p, pIdx) => {
          if (isFirstContentPage && pIdx === 0 && fittingParas.length === 0 && testedCount === 0) {
            const fl = p.charAt(0).toUpperCase();
            testHtml += `<p class="book-paragraph"><span class="book-dropcap">${fl}</span>${p.substring(1)}</p>`;
          } else {
            testHtml += `<p class="book-paragraph">${p}</p>`;
          }
        });
        testHtml += `</div>`;

        // Measure
        pageWrapper.innerHTML = testHtml;
        const contentEl = pageWrapper.querySelector(".book-page-content");
        const contentHeight = contentEl ? contentEl.scrollHeight : 0;
        const availableHeight = pageWrapper.clientHeight - 20; // 20px bottom margin for page number

        if (contentHeight > availableHeight && fittingParas.length > 0) {
          // This paragraph doesn't fit, stop adding
          break;
        }

        fittingParas.push(para);
        testedCount++;

        // If even a single paragraph overflows, we still include it
        // (it's the minimum unit) and move on
        if (contentHeight > availableHeight && fittingParas.length === 1) {
          break;
        }
      }

      // Build final HTML for this page
      let finalHtml = `<div class="book-page-content">${headerHtml}`;
      fittingParas.forEach((p, pIdx) => {
        if (isFirstContentPage && pIdx === 0 && paraIndex === 0) {
          const fl = p.charAt(0).toUpperCase();
          finalHtml += `<p class="book-paragraph"><span class="book-dropcap">${fl}</span>${p.substring(1)}</p>`;
        } else {
          finalHtml += `<p class="book-paragraph">${p}</p>`;
        }
      });
      finalHtml += `</div>`;

      reflowed.push({
        type: "content",
        chapterIndex: chapterIndex,
        html: finalHtml
      });

      paraIndex += fittingParas.length;
      if (fittingParas.length === 0) {
        paraIndex++; // Safety: prevent infinite loop
      }
    }
  }

  pageWrapper.innerHTML = ""; // Clean up after measuring
  return reflowed;
}


function openBookOverlay() {
  let existing = document.getElementById("book-overlay");
  if (existing) existing.remove();

  const skeletonPages = buildBookPages();
  let pages = []; // Will be filled after reflow
  let currentPage = 0;

  let navTimeout = null;
  let navVisible = true;
  let flipping = false;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "book-overlay";
  overlay.className = "book-overlay";
  overlay.innerHTML = `
    <div class="book-overlay__backdrop"></div>
    <div class="book-container" id="book-container">
      <div class="book-body" id="book-body">
        <div class="book-top-bar" id="book-top-bar">
          <button class="book-close-btn" id="book-close-btn">✕ Cerrar</button>
          <div class="book-page-indicator" id="book-page-indicator"></div>
          <button class="book-bookmark-btn" id="book-bookmark-btn">📌</button>
        </div>
        <div class="book-page-wrapper" id="book-page-wrapper"></div>
        <div class="book-nav" id="book-nav">
          <button class="book-nav__prev" id="book-prev">◀</button>
          <button class="book-nav__next" id="book-next">▶</button>
        </div>
      </div>
      <div class="book-tabs-container" id="book-tabs-container"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  lockScroll();

  const container = document.getElementById("book-container");
  const bookBody = document.getElementById("book-body");
  const pageWrapper = document.getElementById("book-page-wrapper");
  const pageIndicator = document.getElementById("book-page-indicator");
  const prevBtn = document.getElementById("book-prev");
  const nextBtn = document.getElementById("book-next");
  const closeBtn = document.getElementById("book-close-btn");
  const bookmarkBtn = document.getElementById("book-bookmark-btn");
  const topBar = document.getElementById("book-top-bar");
  const navEl = document.getElementById("book-nav");
  const tabsContainer = document.getElementById("book-tabs-container");

  // Dynamic reflow: measure actual space and split text into fitting pages
  pages = reflowBookPages(skeletonPages, pageWrapper);
  currentPage = getLastBookPage();
  if (currentPage >= pages.length) currentPage = 0;

  // ── Page flip animation ──
  function doPageFlip(direction, callback) {
    if (flipping) return;
    flipping = true;
    const flipEl = document.createElement("div");
    flipEl.className = "book-page-flip";
    flipEl.innerHTML = `<div class="book-page-flip-sheet ${direction === 'next' ? 'flip-next' : 'flip-prev'}"></div>`;
    bookBody.appendChild(flipEl);

    setTimeout(() => {
      callback();
      setTimeout(() => {
        flipEl.remove();
        flipping = false;
      }, 100);
    }, 350);
  }

  // ── Render page ──
  function renderPage(pageIdx, direction, skipFlip) {
    if (pageIdx < 0 || pageIdx >= pages.length) return;
    if (flipping && !skipFlip) return;

    const doRender = () => {
      currentPage = pageIdx;
      saveLastBookPage(currentPage);
      pageWrapper.innerHTML = pages[pageIdx].html;
      // Add page number at bottom (skip for cover)
      if (pageIdx > 0) {
        const pageNum = document.createElement("div");
        pageNum.className = "book-page-number";
        pageNum.textContent = pageIdx;
        pageWrapper.appendChild(pageNum);
      }
      pageIndicator.textContent = `${pageIdx + 1} / ${pages.length}`;
      prevBtn.style.visibility = pageIdx === 0 ? "hidden" : "visible";
      nextBtn.style.visibility = pageIdx === pages.length - 1 ? "hidden" : "visible";
      showNav();
      renderTabs();
    };

    if (skipFlip || !direction) {
      doRender();
    } else {
      doPageFlip(direction, doRender);
    }
  }

  // ── Nav Auto-Hide ──
  function showNav() {
    navEl.classList.remove("book-nav--hidden");
    topBar.classList.remove("book-nav--hidden");
    navVisible = true;
    clearTimeout(navTimeout);
    navTimeout = setTimeout(() => {
      if (currentPage > 0) {
        navEl.classList.add("book-nav--hidden");
        topBar.classList.add("book-nav--hidden");
        navVisible = false;
      }
    }, 5000);
  }

  overlay.addEventListener("touchstart", showNav, { passive: true });
  overlay.addEventListener("mousemove", showNav);
  overlay.addEventListener("click", (e) => {
    if (e.target === pageWrapper || e.target.closest(".book-page-content,.book-cover,.book-chapter-title,.book-end-page")) {
      if (!navVisible) showNav();
    }
  });

  // ── Navigation ──
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage > 0) renderPage(currentPage - 1, "prev");
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
  });

  // ── Swipe ──
  let touchStartX = 0, touchStartY = 0;
  pageWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  pageWrapper.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
      if (dx > 0 && currentPage > 0) renderPage(currentPage - 1, "prev");
    }
  }, { passive: true });

  // ── Keyboard ──
  function onKeyDown(e) {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      if (currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentPage > 0) renderPage(currentPage - 1, "prev");
    }
    if (e.key === "Escape") closeBook();
  }
  document.addEventListener("keydown", onKeyDown);

  // ── Bookmark Tabs on right side ──
  function renderTabs() {
    const bookmarks = getBookmarks();
    tabsContainer.innerHTML = "";
    bookmarks.forEach((bm, idx) => {
      const tab = document.createElement("button");
      tab.className = "book-tab";
      tab.style.background = bm.color;
      const label = `Pin ${idx + 1}`;
      tab.innerHTML = `${label}<button class="book-tab-delete" data-idx="${idx}">✕</button>`;
      // Highlight if current page
      if (bm.page === currentPage) {
        tab.style.width = "44px";
        tab.style.boxShadow = `3px 3px 10px rgba(0,0,0,0.4), 0 0 8px ${bm.color}`;
      }
      tab.addEventListener("click", (e) => {
        if (e.target.closest(".book-tab-delete")) {
          e.stopPropagation();
          const bms = getBookmarks();
          bms.splice(parseInt(e.target.dataset.idx), 1);
          saveBookmarks(bms);
          renderTabs();
          showToast("📌 Marcador eliminado");
          return;
        }
        const dir = bm.page > currentPage ? "next" : "prev";
        renderPage(bm.page, dir);
      });
      tabsContainer.appendChild(tab);
    });
  }

  // ── Add bookmark ──
  bookmarkBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const bookmarks = getBookmarks();
    const existingIdx = bookmarks.findIndex(b => b.page === currentPage);
    if (existingIdx !== -1) {
      // Remove if already bookmarked
      bookmarks.splice(existingIdx, 1);
      saveBookmarks(bookmarks);
      renderTabs();
      showToast("📌 Marcador removido");
      return;
    }
    if (bookmarks.length >= 11) {
      showToast("¡Máximo 11 marcadores! Elimina uno primero.");
      return;
    }
    const color = BOOKMARK_COLORS[bookmarks.length % BOOKMARK_COLORS.length];
    bookmarks.push({ page: currentPage, color });
    saveBookmarks(bookmarks);
    renderTabs();
    showToast(`📌 Pin ${bookmarks.length} añadido`);
  });

  function showToast(msg) {
    const existing = bookBody.querySelector(".book-bookmark-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "book-bookmark-toast";
    toast.textContent = msg;
    bookBody.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  // ── Close ──
  function closeBook() {
    document.removeEventListener("keydown", onKeyDown);
    clearTimeout(navTimeout);
    overlay.classList.remove("book-overlay--open");
    overlay.classList.add("book-overlay--closing");
    setTimeout(() => {
      overlay.remove();
      unlockScroll();
    }, 500);
  }

  closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeBook(); });
  overlay.querySelector(".book-overlay__backdrop").addEventListener("click", closeBook);

  // ── Opening Animation ──
  requestAnimationFrame(() => {
    overlay.classList.add("book-overlay--open");
    setTimeout(() => {
      renderPage(currentPage, null, true);
    }, 600);
  });
}


// ══════════════════════════════════════════
// LIBRO 2 — DECLARACIONES (Libro Sentimental)
// ══════════════════════════════════════════

const BOOK2_COVER_IMAGE = "https://res.cloudinary.com/dbbdcxcvx/image/upload/v1771402597/IMG-20250816-WA0018_bt7e1o.jpg";

const BOOK2_INTRO_TEXT = `Me es complicado el expresarme así, el expresarme mencionando todad estas cosas, y más porque rara vez emos sido de abrirnos a expresar lo que sentimos, expresar lo que pensamos y lo que vemos, pero me quería adentrar a el tema ya que a como lo eh visto y escuchado, hay muchas cosas que no te quedan claras y te generan inseguridad, y me seria bien el mencionarlas para que de alguna forma sintieras la confianza oh comodidad de tu también en alguna oportunidad poder mencionar las cosas que no te caen que allan pasado oh que simplemente no sabes que paso, ya sea por inseguridad oh celos, en este caso hablare de varios temas, algunos sobre como pasaron las cosas, y otros haciendo mención de cosas que tal vez no me encantaron que pasarán oh cosas que me disgustaron que pasaron, para aclarar y terminar esta introducción, este será uno de los últimos textos que verás en la web para cerrar con los temas pendientes, después de esta larga introducción, iniciaré :).`;

const BOOK2_CHAPTERS = [
  {
    title: "Declaraciones de los hechos",
    subtitle: "Capítulo 1",
    content: `Se que hay confusión en algunas cosas y algunos temas que tal vez no supe explicar bien y que mencionaré ahora, tal vez en algún tema te de totalmente igual y tú ni en cuenta, pero mencionaré temas que tal vez en lo personal, a mi sí me causarían duda, el primer tema que abordaré es el de mi "amiga" tema delicado que no quería tocar pero sinceramente pasaron cosas que me hacen querer mencionar desde cero todo, esto en realidad hay confusiones que espero no sean malentendidos, y si llegaran a ser los explicare, el inicio de todo y lo que explicare es de dónde viene esa persona, como llegue a mencionar, esa amiga que mencionas, la conocí en el servicio social, en preparatoria, en la primaria que te mencioné que está por mi casa, entramos a el mismo tiempo, hace como 2 años yo estaba en 4to semestre y ella igual, en ese entonces yo tenía pareja, pareja la cual me menciono que tenía una amiga igual en servicio social, y que me estaria "vigilando" fue raro pero si fue asi, esa amiga llevava como compañía una compañera de ella la cual era de su misma preparatoria, porque si, ellas 2 eran de una preparatoria y yo de una distinta, el chiste es que en todo el servicio social no ubo ni una sola comunicación ya que éramos de áreas distintas, (en este punto abía escrito toda la historia pero muy probablemente te da igual, no lo dudo, ya ah pasado) saltandome toda la historia todo concluye con que le hable asta 3/4 de servicio, asta el final, por el único motivo de que la compañera de ella fue ex de un amigo muy cercano mio, solo por eso, para ese punto yo avía terminado con mi pareja de ese entonces, por lo que ya no estaba bajo "vigilancia" y era libre de hablarle a esa persona, le hable pero realmente al terminar el servicio no hablamos por ser de diferentes preparatorias.

pasaron los meses y ndms hablábamos por chat, en veces "salíamos" aunque las salidas eran ndms juntadas de preparatorias, en esos momentos que nos veíamos era ndms para hablar de temas en común, lo que yo notaba era que simplente ella era alguien muy apegada, se hacercaba a todas las personas y era mucho de contacto físico con cualquier persona, como quien le diría una pick me, y asi fue, todo se baso en chat, la próxima vez que la volví a ver fue la vez de las historias que viste y solo para aclarar, no, nadie beso a nadie ni paso nada entre nadie en ese lapzo, person por hacer que pienses de mas, en donde fue un mini "reencuentro" fue algo un poco emotivo ya que nisiquera pensaba en volver a ver a algún compañero de antes ya que todos mis amigos eran de otra universidad, ya que me fue cool salir así, después de todo eso la historia es la actual.

Solo quería mencionar y aclarar algunas cosas que mencionabas y que sinceramente no sabría cómo responder oh que decir, ya que no, yo nunca le guste ni a mi nunca me gustó, y tengo mis razones, las primera es físicamente, y aver, no soy alguien que se fije en eso realmente, pero te seré totalmente transparente, simplemente me acostumbré mucho a ti, que para mí tu eres alguien demaciado hermosa, cosa que normalize mucho el verte a ti, a tal punto de que mi cerebro en automático descarto a una persona como ella de mi vista, la segunda razon que nunca me cansaré de decir es que tiene una edad mayor, no estoy dispuesto a estar con alguien mayor a mí, simplemente me suena repugnante el llegar a pensar en algo asi por la diferencia de generaciones, y el tercer punto es que simpmemete no soy así bebé, no creas que puedo llegar a hacer algo tal como ser infiel bebé :c, si para ti es una infidelidad lo que viste ese día, oh alguna sospecha más lo entiendo, soy culpable de lo que piense mi bebé, pero nunca, nunca en la vida seré alguien capaz de serte infiel oh tener en mente lastimarte :c, eres mi mayor tesoro, te quiero proteger de todo y ayudar en todo, no sabes cómo me duele el simple hecho de pensar que te puedo dañar con algo asi, me es horrible y eh llegado a llorar varias veces simplente por pensar y saber que hago mal las cosas, por eso mismo eh llegado a extremos de dejar de seguir a toda mujer, y quitar el que me siga cualquier mujer, a día de hoy no tengo contacto con ninguna mujer, ndms con una que es ex compañera de el proyecto de Conalep que le mando un real, lo contesta y ya está, no hay más :c, aprovechando que estoy en un momento muy frágil me seria más fácil mencionar el que si hay palabras que por tan solo escucharlas me calan horrible en sentido de que literal siento ardor en el pecho, el solo escuchar de que no quieres que te pase mis cuentas por paz mental, oh alguna cosa equis que por qué mentalmente estás bien, me hace sentir un poco mal, ndms puedo pensar en que simplemente te daño más, me da miedo, mucho miedo el hacer las cosas mal, hago todo lo posible, ya no sigo a nadie que no sean hombres ni me sigue nadie que no sea hombre, no hablo con nadie, si es por presumirte lo hago cada que tengo fotos tuyas, te doy regalitos bebé pero pls, nunca llegues a pensar que te quiero oh te seré infiel, encerio siento que contigo me gane la lotería, contigo lo queiro todo, contigo eh experimentado cosas nuevas, eres mi primer algo en muchas cosas ya a día de hoy, encerio te amo :c, te amo como no tienes idea bebé, eres alguien increíble y te admiro, lo queiro hacer bien, xfi permíteme hacerlo bien todo contigo, te amo .`,
    skippable: true
  },
  {
    title: "Declaraciones",
    subtitle: "Capítulo 2",
    content: `Después de lo escrito quería mencionar oh expresar algunas cosas que si, me eh guardado durante tiempo, más que nada por miedo a equivocarme y que solo sea un mal entendido, también mencionar cosas que eh hecho que es por simple inseguridad oh miedo oh celos de las que claro, no estoy nada orgulloso.

En algunas ocasiones llegue a ver qué amigos cercanos tuyos son amigos cercanos igual de tu ex pareja, como tal no me causa miedo ni inseguridad, ni mucho menos diré nombres exactos, pero lo único que vi para mencionar esto es lo siguiente, en algún momento donde yo tenía tu cuenta me llegaban mensajes de un amigo con el que hablabas, no entre a el chat ni mucho menos, solo me dio curiosidad de ver si lo reconocía, en veces hay seguidos que conozco, vi los seguidos y seguidores de esa persona y me tope con tu ex pareja, no me causo ninguna reacción ya que trate de sobrepensar lo menos posible e intentar creer que eran amigos en su momento, por eso mismo llegué a preguntar si tú ex pareja estaba en tu misma preparatoria, lo siguente es historia pasada pero el tema principal es ese.

No negaré que días después, semanas, meses, estuve al tanto de todos los movimientos de dichas personas, tanto tu ex pareja como esa amistad, de las 2 personas no vi gran cambio/movimiento, asta que veía compartidos de tu ex pareja mencionandote, y si, literal asi, no en forma cercana ni nada, más que nada enfocada en hate, pero me llamaba la atención, esto es más a día de hoy de lo que parece.

Hay datos que llegue a mencionar que te percatabas que si eran reales a como tú los pensabas solo que me hacía wei, sobre por lo que no quería poner notitas en tus historias y asi, las predicciones y el porque no quería eran por lo que mencioné, (si llegara a ser yo tu ex pareja sería incomodo que se quedarán allí) lo demás es tema pasado.

No respondas ninguna de estas menciones porfavor, me es más incómodo de lo que crees, además de que en algunas nisiquiera puedes hacer nada, y te disculpas, solo quería pedir que lo tuvieras en cuenta las que son posibles el hacer algo :c, no por celos ni inseguridad, solo incomodidad.`,
    skippable: false
  },
  {
    title: "Dudes",
    subtitle: "Capítulo 3",
    content: `No se de que otro tema podrías tener dudas princesa, y me seria de mucha ayuda que lo platicaras conmigo bebe, si en algún momento estás dispuesta a decirme todo lo que cargas, te prometo por lo que más quiero que aré lo mismo, si me dices todo en persona, lo mismo aré, sin mentirte, sin excusas, con toda prueba que necesites, solamente quiero ser más unido contigo, odio el que Allan dudas de algo, si hay alguna duda pls dimela, si tengo una duda con gusto te la digo bebé, solamente quiero ser más cercano a ti bebé :c, no quiero que Allan secretos, no me gusta que digas "me lo guardaré" encerio quiero escucharte, quiero resolver las cosas, estoy contigo bebé, soy tu noviecito :c, en todo te quiero ayudar y en todo quiero estar contigo, somos uno solo bebé, porfavor, hablemos todo :c, te amo princesa ♥️

-prometo será la última vez que escriba algo aquí, no es por nada, solo quiero que desde ahora, todo, lo hablemos en persona oh simlemete lo hablemos entre tú y yo como pareja ♥️`,
    skippable: false
  }
];

function isChapter1Skipped() {
  return localStorage.getItem("book2_ch1_skipped") === "true";
}

function skipChapter1() {
  localStorage.setItem("book2_ch1_skipped", "true");
}

function renderBook2Memory(container, memory) {
  container.innerHTML = "";
  const bookBtn = document.createElement("button");
  bookBtn.className = "book2-open-btn";
  bookBtn.innerHTML = `📖 Abrir Declaraciones`;
  bookBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playBook2Intro(() => openBook2Overlay());
  });
  container.appendChild(bookBtn);
}

// ── 3D Book Opening Intro Animation ──
function playBook2Intro(onComplete) {
  const intro = document.createElement("div");
  intro.className = "book2-intro-overlay";
  intro.innerHTML = `
    <canvas class="book2-intro-canvas" id="book2-intro-canvas"></canvas>
    <div class="book2-intro-vignette"></div>
    <div class="book2-3d-scene">
      <div class="book2-3d-book" id="book2-3d-book">
        <div class="book2-3d-spine"></div>
        <div class="book2-3d-cover-back"></div>
        <div class="book2-3d-page book2-3d-page--1"></div>
        <div class="book2-3d-page book2-3d-page--2"></div>
        <div class="book2-3d-page book2-3d-page--3"></div>
        <div class="book2-3d-cover-front" id="book2-3d-front">
          <div class="book2-3d-cover-label">Declaraciones</div>
        </div>
      </div>
    </div>
    <div class="book2-intro-flash"></div>
  `;
  document.body.appendChild(intro);
  lockScroll();

  // Soft floating particles
  const canvas = document.getElementById("book2-intro-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.6 - 0.15,
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.35 + 0.1,
      color: ["#e8a0bf","#c77dba","#9b59b6","#d4a5a5","#f5c6d0"][Math.floor(Math.random() * 5)],
      life: Math.random() * 100
    });
  }
  let animating = true;
  function animateParticles() {
    if (!animating) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life += 0.4;
      p.alpha = Math.sin(p.life * 0.025) * 0.3 + 0.1;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, p.alpha); ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Trigger the book open animation after a brief pause
  setTimeout(() => {
    const front = document.getElementById("book2-3d-front");
    if (front) front.classList.add("book2-3d-cover--open");
    // Stagger page reveals
    const pages = intro.querySelectorAll(".book2-3d-page");
    pages.forEach((pg, i) => {
      setTimeout(() => pg.classList.add("book2-3d-page--open"), 400 + i * 300);
    });
  }, 1200);

  setTimeout(() => {
    animating = false;
    intro.style.transition = "opacity 0.6s ease";
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.remove();
      if (onComplete) onComplete();
    }, 600);
  }, 5000);
}

function buildBook2Pages() {
  const pages = [];

  // Page 0: Cover
  pages.push({
    type: "cover",
    html: `
      <div class="book2-cover">
        <div class="book2-cover__image-wrap">
          <img src="${BOOK2_COVER_IMAGE}" alt="Portada" class="book2-cover__image" />
        </div>
        <div class="book2-cover__ornament">✦ ✦ ✦</div>
        <h1 class="book2-cover__title">Declaraciones</h1>
        <div class="book2-cover__ornament">─── ♥ ───</div>
      </div>
    `
  });

  // Page 1: Introduction
  pages.push({
    type: "intro",
    html: `
      <div class="book2-intro-page">
        <div class="book2-intro-page__label">Introducción</div>
        <div class="book2-intro-page__ornament">─── ✦ ───</div>
        <div class="book2-intro-page__text">${BOOK2_INTRO_TEXT.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
      </div>
    `
  });

  // Build chapters
  BOOK2_CHAPTERS.forEach((chapter, idx) => {
    // Chapter 1 skip check
    if (idx === 0 && chapter.skippable) {
      // Insert skip decision page
      pages.push({
        type: "skip-decision",
        chapterIndex: idx,
        html: `
          <div class="book2-skip-page">
            <div class="book2-skip-page__icon">⚠️</div>
            <h2 class="book2-skip-page__title">Capítulo ${idx + 1}: ${chapter.title}</h2>
            <p class="book2-skip-page__subtitle">${chapter.subtitle}</p>
            <div class="book2-skip-page__ornament">─── ♥ ───</div>
            <p class="book2-skip-page__question">¿Quieres saltarlo?</p>
            <div class="book2-skip-page__buttons">
              <button class="book2-skip-btn book2-skip-btn--yes" id="book2-skip-yes">Sí, saltarlo</button>
              <button class="book2-skip-btn book2-skip-btn--no" id="book2-skip-no">No, quiero leerlo</button>
            </div>
            <p class="book2-skip-page__warning">⚠️ Si eliges saltarlo, este capítulo se bloqueará permanentemente.</p>
          </div>
        `
      });
    }

    // Chapter title page
    pages.push({
      type: "chapter-title",
      chapterIndex: idx,
      html: `
        <div class="book2-chapter-title">
          <div class="book2-chapter-number">Capítulo ${idx + 1}</div>
          <h2 class="book2-chapter-name">${chapter.title}</h2>
          <p class="book2-chapter-subtitle">${chapter.subtitle}</p>
          <div class="book2-chapter-ornament">─── ♥ ───</div>
        </div>
      `
    });

    // Split content into paragraphs for reflow
    const rawText = chapter.content;
    const sentences = rawText.split(/\.\s+/).filter(s => s.trim().length > 0);
    const paragraphs = [];
    let currentPara = "";
    for (const sentence of sentences) {
      if (currentPara.length + sentence.length > 250 && currentPara.length > 60) {
        paragraphs.push(currentPara.trim());
        currentPara = sentence;
      } else {
        currentPara += (currentPara ? ". " : "") + sentence;
      }
    }
    if (currentPara.trim()) {
      let finalP = currentPara.trim();
      if (!finalP.endsWith('.') && !finalP.endsWith('♥')) finalP += '.';
      paragraphs.push(finalP);
    }

    pages.push({
      type: "content-reflow",
      chapterIndex: idx,
      chapterTitle: chapter.title,
      chapterSubtitle: chapter.subtitle,
      paragraphs: paragraphs
    });
  });

  // Final page
  pages.push({
    type: "end",
    html: `
      <div class="book2-end-page">
        <div class="book2-end-ornament">✦</div>
        <h2 class="book2-end-title">FIN.</h2>
        <div class="book2-end-heart">💜</div>
        <p class="book2-end-text">Cada palabra fue escrita con el alma.<br>Gracias por leer mis declaraciones.<br><br>Te amo, hoy, mañana, y siempre.</p>
        <div class="book2-end-ornament">─── ♥ ───</div>
      </div>
    `
  });

  return pages;
}

function reflowBook2Pages(skeletonPages, pageWrapper) {
  const reflowed = [];

  for (const page of skeletonPages) {
    if (page.type !== "content-reflow") {
      reflowed.push(page);
      continue;
    }

    const { chapterIndex, chapterTitle, chapterSubtitle, paragraphs } = page;
    let paraIndex = 0;
    let pageCount = 0;

    while (paraIndex < paragraphs.length) {
      const isFirstContentPage = (pageCount === 0);
      pageCount++;

      let headerHtml = "";
      if (isFirstContentPage) {
        headerHtml = `<div class="book2-page-chapter-label">Capítulo ${chapterIndex + 1} — ${chapterSubtitle}</div>`;
      }

      const fittingParas = [];
      let testedCount = 0;

      for (let i = paraIndex; i < paragraphs.length; i++) {
        const para = paragraphs[i];
        const testParas = [...fittingParas, para];

        let testHtml = `<div class="book2-page-content">${headerHtml}`;
        testParas.forEach((p, pIdx) => {
          if (isFirstContentPage && pIdx === 0 && fittingParas.length === 0 && testedCount === 0) {
            const fl = p.charAt(0).toUpperCase();
            testHtml += `<p class="book2-paragraph"><span class="book2-dropcap">${fl}</span>${p.substring(1)}</p>`;
          } else {
            testHtml += `<p class="book2-paragraph">${p}</p>`;
          }
        });
        testHtml += `</div>`;

        pageWrapper.innerHTML = testHtml;
        const contentEl = pageWrapper.querySelector(".book2-page-content");
        const contentHeight = contentEl ? contentEl.scrollHeight : 0;
        const availableHeight = pageWrapper.clientHeight - 20;

        if (contentHeight > availableHeight && fittingParas.length > 0) break;

        fittingParas.push(para);
        testedCount++;

        if (contentHeight > availableHeight && fittingParas.length === 1) break;
      }

      let finalHtml = `<div class="book2-page-content">${headerHtml}`;
      fittingParas.forEach((p, pIdx) => {
        if (isFirstContentPage && pIdx === 0 && paraIndex === 0) {
          const fl = p.charAt(0).toUpperCase();
          finalHtml += `<p class="book2-paragraph"><span class="book2-dropcap">${fl}</span>${p.substring(1)}</p>`;
        } else {
          finalHtml += `<p class="book2-paragraph">${p}</p>`;
        }
      });
      finalHtml += `</div>`;

      reflowed.push({
        type: "content",
        chapterIndex: chapterIndex,
        html: finalHtml
      });

      paraIndex += fittingParas.length;
      if (fittingParas.length === 0) paraIndex++;
    }
  }

  pageWrapper.innerHTML = "";
  return reflowed;
}

function openBook2Overlay() {
  let existing = document.getElementById("book2-overlay");
  if (existing) existing.remove();

  const skeletonPages = buildBook2Pages();
  let pages = [];
  let currentPage = 0;
  let navTimeout = null;
  let navVisible = true;
  let flipping = false;
  const ch1Skipped = isChapter1Skipped();

  const overlay = document.createElement("div");
  overlay.id = "book2-overlay";
  overlay.className = "book2-overlay";
  overlay.innerHTML = `
    <div class="book2-overlay__backdrop"></div>
    <div class="book2-container" id="book2-container">
      <div class="book2-body" id="book2-body">
        <div class="book2-top-bar" id="book2-top-bar">
          <button class="book2-close-btn" id="book2-close-btn">✕ Cerrar</button>
          <div class="book2-page-indicator" id="book2-page-indicator"></div>
          <button class="book2-bookmark-btn" id="book2-bookmark-btn">📌</button>
        </div>
        <div class="book2-page-wrapper" id="book2-page-wrapper"></div>
        <div class="book2-nav" id="book2-nav">
          <button class="book2-nav__prev" id="book2-prev">◀</button>
          <button class="book2-nav__next" id="book2-next">▶</button>
        </div>
      </div>
      <div class="book2-tabs-container" id="book2-tabs-container"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  lockScroll();

  const container = document.getElementById("book2-container");
  const bookBody = document.getElementById("book2-body");
  const pageWrapper = document.getElementById("book2-page-wrapper");
  const pageIndicator = document.getElementById("book2-page-indicator");
  const prevBtn = document.getElementById("book2-prev");
  const nextBtn = document.getElementById("book2-next");
  const closeBtn = document.getElementById("book2-close-btn");
  const bookmarkBtn = document.getElementById("book2-bookmark-btn");
  const topBar = document.getElementById("book2-top-bar");
  const navEl = document.getElementById("book2-nav");
  const tabsContainer = document.getElementById("book2-tabs-container");

  // Reflow pages
  pages = reflowBook2Pages(skeletonPages, pageWrapper);

  // If chapter 1 was skipped, remove ch1 content pages (keep skip-decision to show "blocked" msg)
  if (ch1Skipped) {
    // Find the skip-decision page and replace it with a "blocked" message
    pages = pages.map(p => {
      if (p.type === "skip-decision") {
        return {
          type: "chapter-blocked",
          chapterIndex: 0,
          html: `
            <div class="book2-blocked-page">
              <div class="book2-blocked-page__icon">🔒</div>
              <h2 class="book2-blocked-page__title">Capítulo 1: Bloqueado</h2>
              <p class="book2-blocked-page__text">Elegiste saltar este capítulo.<br>Ha sido bloqueado permanentemente.</p>
              <div class="book2-blocked-page__ornament">─── ♥ ───</div>
            </div>
          `
        };
      }
      return p;
    });
    // Remove chapter title and content pages for chapter 0
    pages = pages.filter(p => {
      if ((p.type === "chapter-title" || p.type === "content") && p.chapterIndex === 0) return false;
      return true;
    });
  }

  currentPage = parseInt(localStorage.getItem("book2_last_page") || "0");
  if (currentPage >= pages.length) currentPage = 0;

  function getBook2Bookmarks() {
    try { return JSON.parse(localStorage.getItem("book2_bookmarks") || "[]"); }
    catch(e) { return []; }
  }
  function saveBook2Bookmarks(b) { localStorage.setItem("book2_bookmarks", JSON.stringify(b)); }

  // Page flip animation
  function doPageFlip(direction, callback) {
    if (flipping) return;
    flipping = true;
    const flipEl = document.createElement("div");
    flipEl.className = "book2-page-flip";
    flipEl.innerHTML = `<div class="book2-page-flip-sheet ${direction === 'next' ? 'flip-next' : 'flip-prev'}"></div>`;
    bookBody.appendChild(flipEl);
    setTimeout(() => {
      callback();
      setTimeout(() => { flipEl.remove(); flipping = false; }, 100);
    }, 350);
  }

  // Render page
  function renderPage(pageIdx, direction, skipFlip) {
    if (pageIdx < 0 || pageIdx >= pages.length) return;
    if (flipping && !skipFlip) return;

    const doRender = () => {
      currentPage = pageIdx;
      localStorage.setItem("book2_last_page", String(currentPage));
      pageWrapper.innerHTML = pages[pageIdx].html;

      // Page number
      if (pageIdx > 0) {
        const pageNum = document.createElement("div");
        pageNum.className = "book2-page-number";
        pageNum.textContent = pageIdx;
        pageWrapper.appendChild(pageNum);
      }
      pageIndicator.textContent = `${pageIdx + 1} / ${pages.length}`;
      prevBtn.style.visibility = pageIdx === 0 ? "hidden" : "visible";
      nextBtn.style.visibility = pageIdx === pages.length - 1 ? "hidden" : "visible";

      // Handle skip decision buttons
      if (pages[pageIdx].type === "skip-decision" && !ch1Skipped) {
        const yesBtn = pageWrapper.querySelector("#book2-skip-yes");
        const noBtn = pageWrapper.querySelector("#book2-skip-no");
        if (yesBtn) {
          yesBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            skipChapter1();
            // Close and reopen to rebuild with skipped chapter
            closeBook2();
            setTimeout(() => openBook2Overlay(), 600);
          });
        }
        if (noBtn) {
          noBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            // Just go to next page (the chapter)
            renderPage(currentPage + 1, "next");
          });
        }
      }

      showNav();
      renderTabs();
    };

    if (skipFlip || !direction) {
      doRender();
    } else {
      doPageFlip(direction, doRender);
    }
  }

  // Nav auto-hide
  function showNav() {
    navEl.classList.remove("book2-nav--hidden");
    topBar.classList.remove("book2-nav--hidden");
    navVisible = true;
    clearTimeout(navTimeout);
    navTimeout = setTimeout(() => {
      if (currentPage > 0) {
        navEl.classList.add("book2-nav--hidden");
        topBar.classList.add("book2-nav--hidden");
        navVisible = false;
      }
    }, 5000);
  }

  overlay.addEventListener("touchstart", showNav, { passive: true });
  overlay.addEventListener("mousemove", showNav);
  overlay.addEventListener("click", (e) => {
    if (e.target === pageWrapper || e.target.closest(".book2-page-content,.book2-cover,.book2-chapter-title,.book2-end-page,.book2-intro-page")) {
      if (!navVisible) showNav();
    }
  });

  // Navigation
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage > 0) renderPage(currentPage - 1, "prev");
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
  });

  // Swipe
  let touchStartX = 0, touchStartY = 0;
  pageWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  pageWrapper.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
      if (dx > 0 && currentPage > 0) renderPage(currentPage - 1, "prev");
    }
  }, { passive: true });

  // Keyboard
  function onKeyDown(e) {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      if (currentPage < pages.length - 1) renderPage(currentPage + 1, "next");
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentPage > 0) renderPage(currentPage - 1, "prev");
    }
    if (e.key === "Escape") closeBook2();
  }
  document.addEventListener("keydown", onKeyDown);

  // Bookmark tabs
  function renderTabs() {
    const bookmarks = getBook2Bookmarks();
    tabsContainer.innerHTML = "";
    bookmarks.forEach((bm, idx) => {
      const tab = document.createElement("button");
      tab.className = "book2-tab";
      tab.style.background = bm.color;
      const label = `Pin ${idx + 1}`;
      tab.innerHTML = `${label}<button class="book2-tab-delete" data-idx="${idx}">✕</button>`;
      if (bm.page === currentPage) {
        tab.style.width = "44px";
        tab.style.boxShadow = `3px 3px 10px rgba(0,0,0,0.4), 0 0 8px ${bm.color}`;
      }
      tab.addEventListener("click", (e) => {
        if (e.target.closest(".book2-tab-delete")) {
          e.stopPropagation();
          const bms = getBook2Bookmarks();
          bms.splice(parseInt(e.target.dataset.idx), 1);
          saveBook2Bookmarks(bms);
          renderTabs();
          showToast("📌 Marcador eliminado");
          return;
        }
        const dir = bm.page > currentPage ? "next" : "prev";
        renderPage(bm.page, dir);
      });
      tabsContainer.appendChild(tab);
    });
  }

  // Add bookmark
  bookmarkBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const bookmarks = getBook2Bookmarks();
    const existingIdx = bookmarks.findIndex(b => b.page === currentPage);
    if (existingIdx !== -1) {
      bookmarks.splice(existingIdx, 1);
      saveBook2Bookmarks(bookmarks);
      renderTabs();
      showToast("📌 Marcador removido");
      return;
    }
    if (bookmarks.length >= 11) {
      showToast("¡Máximo 11 marcadores! Elimina uno primero.");
      return;
    }
    const bmColors = ["#8e44ad","#c0392b","#e74c3c","#9b59b6","#2980b9","#1abc9c","#27ae60","#f39c12","#d35400","#e67e22","#c9a84c"];
    const color = bmColors[bookmarks.length % bmColors.length];
    bookmarks.push({ page: currentPage, color });
    saveBook2Bookmarks(bookmarks);
    renderTabs();
    showToast(`📌 Pin ${bookmarks.length} añadido`);
  });

  function showToast(msg) {
    const existing = bookBody.querySelector(".book2-bookmark-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "book2-bookmark-toast";
    toast.textContent = msg;
    bookBody.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  // Close
  function closeBook2() {
    document.removeEventListener("keydown", onKeyDown);
    clearTimeout(navTimeout);
    overlay.classList.remove("book2-overlay--open");
    overlay.classList.add("book2-overlay--closing");
    setTimeout(() => {
      overlay.remove();
      unlockScroll();
    }, 500);
  }

  closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeBook2(); });
  overlay.querySelector(".book2-overlay__backdrop").addEventListener("click", closeBook2);

  // Opening animation
  requestAnimationFrame(() => {
    overlay.classList.add("book2-overlay--open");
    setTimeout(() => {
      renderPage(currentPage, null, true);
    }, 600);
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
    const icons = { text: "✍️", photo: "📷", video: "🎬", audio: "🎵", game: "🎮", housegame: "🏚️", book: "📖", book2: "📖", quest: "🗝️", safe: "🧰" };
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

function showSiteEntranceAnimation() {
  const existing = document.getElementById("site-entry-overlay");
  if (existing) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const overlay = document.createElement("div");
  overlay.id = "site-entry-overlay";
  overlay.className = "site-entry-overlay";

  const starCount = reduceMotion ? 6 : 18;
  let starsHtml = "";
  for (let i = 0; i < starCount; i++) {
    const delay = (Math.random() * 1.2).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const top = (Math.random() * 100).toFixed(2);
    starsHtml += `<span class="site-entry-star" style="--d:${delay}s;left:${left}%;top:${top}%">✦</span>`;
  }

  overlay.innerHTML = `
    <div class="site-entry-overlay__bg"></div>
    <div class="site-entry-overlay__content">
      ${starsHtml}
      <div class="site-entry-title">Nuestra Historia</div>
      <div class="site-entry-subtitle">Bienvenida, mi amor 💜</div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("is-visible"));

  const life = reduceMotion ? 900 : 2300;
  setTimeout(() => {
    overlay.classList.add("is-leaving");
    setTimeout(() => overlay.remove(), reduceMotion ? 250 : 650);
  }, life);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  showSiteEntranceAnimation();
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
