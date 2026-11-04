/* ============================================================
   REZEPTBUCH — script.js
   ------------------------------------------------------------
   NEUES REZEPT HINZUFÜGEN:
   1. Bild in den Ordner "images/" legen (z. B. images/lasagne.jpg)
   2. Unten im Array RECIPES einen neuen Block ergänzen:

      {
        title: "Lasagne",
        category: "Hauptgericht",     // muss zu CATEGORIES passen
        badge: "Klassiker",           // optional, Pille auf dem Bild
        image: "images/lasagne.jpg",
        time: "60 Min",
        portions: "4 Portionen",
        ingredients: ["Nudelplatten", "Hackfleisch", "..."],
        steps: ["Schritt 1 ...", "Schritt 2 ..."]
      },

   Mehr ist nicht nötig – Zählung, Filter und Suche laufen automatisch.
   ============================================================ */

const CATEGORIES = [
  "Alle Rezepte",
  "Hauptgericht",
  "Frühstück",
  "Suppen",
  "Beilage",
  "Dips",
  "Dessert",
  "Drinks"
];

const RECIPES = [
  {
    title: "Tagliatelle mit Salsiccia-Soße",
    category: "Hauptgericht",
    badge: "Meat",
    image: "images/Tagliatelle_Salsiccia.jpeg",
    time: "60 Min + 60 Min ruhen lassen",
    portions: "3-5 Portionen",
    ingredients: [
      "400g Mehl Typ 0",
      "4 Eier",
      "15ml Olivenöl",
      "400ml Passata",
      "Pancetta/Guanciale",
      "Salsiccia",
      "1 Zwiebel",
      "1,5 Zehen Knoblauch",
      "Salz",
      "Pfeffer",
      "etwas Rotwein"
    ],
    steps: [
      "Mehl, Eier, Olivenöl und etwas Salz ca. 20 Minuten zu einem Teig verkneten und ggf etwas Wasser hinzufügen. Teig im Anschluss 1 Stunde ruhen lassen.",
       "Teig mit der Nudelmaschine glätten und in dünne Streifen schneiden. Nudeln ca. 3-4 Minuten kochen und etwas Nudelwasser beiseite stellen.",
       "Etwas Pancetta/Guancale in kleine Würfel schneiden, Salsiccia (ca. 1 Wurst pro Portion) von der Haut befreien, Zwiebel würfeln, Knoblauch klein schneiden.",
       "Etwas Pancetta/Guancale für das Topping cross anbraten. Aus der Pfanne nehmen und Salciccia in der gleichen Pfanne braten.",
       "Zwiebelwürfel und Knoblauch hinzugeben und weiter anbraten. Wahlweise mit Rotwein und etwas Nudelwasser ablöschen und die Passata hinzugeben. Im Anschluss mit Salz und Pfeffer würzen.",
       "Die Tagliatelle und die Soße auf den Tellern anrichten, Pancetta/Guancale und etwas Parmesan darüber streuen - et finito.",
    ]
  },
   {
    title: "Salsiccia-Kohl-Suppe",
    category: "Suppen",
    badge: "Meat",
    image: "images/Kohlsuppe.jpeg",
    time: "70 Min",
    portions: "6 Portionen",
    ingredients: [
      "5 Salsiccia Würstchen",
      "1/2 Kohl",
      "1 Zwiebel",
      "1-2 Paprika",
      "100g Spinat",
      "2 Zehen Knoblauch",
      "1l Brühe",
      "getrocknete Thomaten",
      "150ml Kochsahne",
      "Parmesan",
      "Öl",
      "Thymian",
      "Salz",
      "Pfeffer"
    ],
    steps: [
      "Salsiccia von der Haut trennen, Zwiebeln und Paprika würfeln, Knoblauch abziehen.",
       "Salsiccia in einem großen Topf in Öl scharf anbraten, danach Zwiebeln, Paprika, etwas getrocknete Tomate und gepressten Knoblauch hinzugeben und anschwitzen. Währenddessen Kohl in Vierecke schneiden.",
       "Im Anschluss Kohl und Brühe hinzugeben und ca, 30 Minuten kochen lassen.",
       "Kochsahne hinzugeben und mit Thymian, Salz und Pfeffer abschmecken.",
       "Auf Teller geben und mit Parmesan toppen.",
    ]
  },
  {
    title: "Eingelegter Feta mit Oliven",
    category: "Beilage",
    badge: "Veggi",
    image: "images/eingelegter_Feta.jpeg.png",
    time: "10 Min",
    portions: "5 Portionen",
    ingredients: [
      "Feta",
      "Oliven",
      "Olivenöl",
      "1 Zehe Knoblauch",
      "Limettensaft",
      "Basilikum",
      "Oregano"
    ],
    steps: [
      "Feta in Würfel schneiden, Oliven halbieren, Knoblauch pressen.",
      "Alle Zutaten nach einem freien Mischverhältnis in ein gefäß geben und mit Olivenöl, Knoblauch und den Gewürzen toppen. Mit Limettensaft abschmecken.",
    ]
  },
  {
    title: "Halloumi Carbonara",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "30 Min",
    portions: "2 Portionen",
    ingredients: [
      "Spaghetti",
      "3 Eier",
      "Parmesan gerieben",
      "Halloumi",
      "Öl",
      "1 Zehe Knoblauch",
      "Pfeffer",
      "Salz",
      "Muskat",
      "Honig"
    ],
    steps: [
      "Nudeln kochen, Halloumi in Würfel schneiden und in einer Pfanne mit zugabe von Honig braten.",
      "Eigelb, Parmesan, Öl und etwas Wasser verführen, mit Salz und Pfeffer würzen und ggf. noch Muskat hinzufügen.",
      "Temperatur der Pfanne stark reduzieren, Spaghetti dazu geben und mit angerührter Soße toppen. Mit Deckel kurz stehen lassen, damit die Soße etwas bindet.",
      "Auf Teller geben und mit weiterem Parmesan und ggf. frischem Basilikum toppen.",
    ]
  },
  {
    title: "Mais-Feta-Salat",
    category: "Beilage",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "15 Min",
    portions: "4 Portionen",
    ingredients: [
     "250g Mais",
      "Feta",
      "1/2 rote Zwiebel",
      "1 Zehe Knoblauch",
      "Griechischer Joghurt",
      "Mayo",
      "Koriander",
      "1 Limette",
      "1TL Salz",
      "1TL Pfeffer",
      "1/2TL Chili",
      "1TL Paprikapulver",
       "Öl"
    ],
    steps: [
      "Ziewbel in dünne Würfel schneiden, Koriander fein hacken.",
      "Mais mit Paprikapulver in einer Pfanne in Öl anbraten und im Anschluss mit der geschnittenen Zwiebel, gepresstem Knoblauch, Koriander, Feta, Joghurt und Mayo vermischen.",
      "Mit Salz und Pfeffer abschmecken, nach belieben Chili hinzufügen und Limette darüber pressen.",
    ]
  },
  {
    title: "Eingelegter Mozzarella mit getrockneten Tomaten",
    category: "Beilage",
    badge: "Veggi",
    image: "images/fehlt.jpg",
    time: "15 Min",
    portions: "5 Portionen",
    ingredients: [
      "250g Mozzarelle Kugeln",
      "20g getrocknete Tomaten",
      "1 Zehe Knoblauch",
      "1TL Oregano",
      "1TL italienische Kräuter",
      "frischer Basilikum",
       "Öl"
    ],
    steps: [
      "Mozarella Kugeln, geschnittene getrocknete Tomaten und fein geschnittenen Knoblauch mit den restlichen Zutaten in ein Gefäß geben und vermischen.",
    ]
  },
  {
    title: "Basilikum Pesto",
    category: "Dips",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "15 Min",
    portions: "2 Portionen",
    ingredients: [
      "60g frischer Basilikum",
      "60g geriebener Parmesan",
      "2 Zehen Knoblauch",
      "120ml Olivenöl",
      "Salz",
       "1-2TL Zitronensaft",
       "Pinienkerne"
    ],
    steps: [
      "Alle Zutaten mit einem Mixer vermengen.",
    ]
  },
  {
    title: "Creamy Zucchini-Butterbohnen Bowl",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/fehlt.jpg",
    time: "30 Min",
    portions: "4 Portionen",
    ingredients: [
      "2 Zucchini",
      "6 Knoblauchzehen",
      "800g weiße Bohnen",
      "Cashew Nüsse",
      "1 Limette",
      "Salz",
      "Pfeffer",
       "60ml Wasser",
       "Brot",
       "Öl"
    ],
    steps: [
      "Cashews in Wasser einlegen.",
       "Ofen bei 160C Umluft vorheizen. Zucchini in Stücke schneiden und mit 4 abgezogenen Knoblauchzehen, Öl und Salz in eine Ofenform mit Deckel geben und 35-40 Minuten mit Deckel kochen. Im Anschluss weitere 10 Minuten ohne backen, bis die Zucchini leicht braun wird.",
       "Für die Soße: Cashews, Limettensaft, Salz, Pfeffer, 2 Knoblauchzehen und etwa 60-80ml Wasser im Mixer vermengen.",
       "Zucchini aus dem Ofen nehmen, mit einer Gabel zerdrücken, weiße Bohnen inklusive Bohnenwasser und dem Nuss-Mix hinzugeben und servieren.",
       "Brot mit etwas Öl anbraten oder Toasten und mit der Zucchini-Bohnen Bowl servieren.",
    ]
  },
  {
    title: "Jus du Maison",
    category: "Drinks",
    badge: "No alcohol",
    image: "images/jusmaison.jpeg",
    time: "5 Min",
    portions: "2 Gläser",
    ingredients: [
      "Apfelsaft",
      "Gurkensaft",
      "Zitrone"
    ],
    steps: [
      "Gegebenenfalls ist ein Entsafter notwendig.",
      "Apfelsaft und Gutkensaft im Verhältnis 50:50 mischen, etwas Zitrone hinzufügen.",
      "Et voilà. Schmeckt nach Orangen-Karotten-Saft."
    ]
  },
  {
    title: "Old School Biarritz",
    category: "Drinks",
    badge: "Alcohol",
    image: "images/oldschool.jpeg",
    time: "5 Min",
    portions: "1 Drink",
    ingredients: [
      "Dunkler Rum (mit Ananas infundiert)",
      "Mirabellenlikör",
      "Vanille-Shrub",
      "Bitter",
      "Eiswürfel"
    ],
    steps: [
      "2cl dunklen Rum mit 2cl mit dem Rest vermischen und auf Eis servieren."
    ]
  },
  {
    title: "Pinchada n°2 Biarritz",
    category: "Drinks",
    badge: "Alcohol",
    image: "images/Pinchada.jpeg",
    time: "5 Min",
    portions: "1 Drink",
    ingredients: [
      "Cognac",
      "Pistazienlikör",
      "Feigen-Cordial",
      "Aquafaba"
    ],
    steps: [
      "Rezept unbekannt."
    ]
  },
  {
    title: "Burrata-Tomaten-Salat",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/BurrataSalat.jpeg",
    time: "15 Min",
    portions: "2 Portionen",
    ingredients: [
      "2 Fleischtomaten",
      "Romanasalat",
      "1 Burrata",
      "Pinienkerne",
      "Balsamico",
      "Olivenöl"
    ],
    steps: [
      "Salatblätter klein schneiden und auf einem großen Teller verteilen.",
      "Fleischtomaten in Scheiben schneiden und halbieren. Dann auf dem Salat im Fächer auflegen.",
      "Burrata in die Mitte legen, Pinienkerne anbraten und darauf verteilen und mit Öl und Balsamico toppen."
    ]
  },
  {
    title: "Pasta mit Miesmuscheln",
    category: "Hauptgericht",
    badge: "Fisch",
    image: "images/miesmuschelpasta.jpeg",
    time: "30 Min",
    portions: "2 Portionen",
    ingredients: [
      "350g Spaghetti",
      "400g Miesmuscheln (tiefgefrohren)",
      "Weiswein",
      "Petersilie",
      "Salz",
      "Parmesan"
    ],
    steps: [
      "Spaghetti nach Anleitung kochen.",
      "Bereits offene Miesmuscheln aussortieren. In einer Pfanne etwas Öl stark erhitzen und erst dann die Miesmuscheln in die Pfanne geben und mit geschlossenem Deckel ca. 2 Minunten braten. Danach mit etwas Weiswein ablöschen, geschnittene Petersilie hinzufügen und weitere 2 Minuten braten, bis sich die Muscheln öffnen.",
      "Flüssigkeit aus der Pfanne gießen, Muscheln auf Nudeln verteilen, etwas Öl und Parmesan hinzufügen."
    ]
  },
  {
    title: "Burrata-Tomaten-Feigen-Salat",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/tomatefeigesalat.jpeg",
    time: "15 Min",
    portions: "2 Portionen",
    ingredients: [
      "2 Fleischtomaten",
      "2 Feigen",
      "1 Burrata",
      "Basilikumblätter",
      "Pinienkerne",
      "Öl",
      "Balsamico",
      "Salz",
      "Pfeffer"
    ],
    steps: [
      "Fleischtomaten und Feigen in Scheiben schneiden und gefächert mit den Basilikumblättern auf dem Teller anrichten.",
      "Burrata in die Mitte legen, Pinienkerne anbraten und darauf verteilen und mit Öl und Balsamico toppen.",
      "Mit Pfeffer und Salz verfeinern."
    ]
  }
];

/* ============================================================
   Ab hier: Logik – normalerweise nichts mehr zu ändern
   ============================================================ */

const grid        = document.getElementById("recipeGrid");
const catList     = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const emptyState  = document.getElementById("emptyState");
const headerCount = document.getElementById("headerCount");
const footerCount = document.getElementById("footerCount");
const randomBtn   = document.getElementById("randomBtn");
const modal       = document.getElementById("modal");

let activeCategory = "Alle Rezepte";
let searchTerm     = "";
let visibleRecipes = [];

/* Hilfsfunktionen -------------------------------------------------- */

// Umlaute/Groß-Klein egal machen
function norm(str){
  return (str || "")
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .trim();
}

// Suche prüft die Zutatenliste
function matchesSearch(recipe){
  if(!searchTerm) return true;
  const q = norm(searchTerm);
  return recipe.ingredients.some(i => norm(i).includes(q));
}

function matchesCategory(recipe){
  return activeCategory === "Alle Rezepte" || recipe.category === activeCategory;
}

function getFiltered(){
  return RECIPES.filter(r => matchesCategory(r) && matchesSearch(r));
}

/* Sidebar ---------------------------------------------------------- */

function renderCategories(){
  // Zähler berücksichtigen die aktuelle Suche
  const searchPool = RECIPES.filter(matchesSearch);

  catList.innerHTML = CATEGORIES.map(cat => {
    const count = cat === "Alle Rezepte"
      ? searchPool.length
      : searchPool.filter(r => r.category === cat).length;

    const active = cat === activeCategory ? " is-active" : "";
    return `<button type="button" class="filter${active}" data-cat="${cat}">
              ${cat} <span class="filter__count">${count}</span>
            </button>`;
  }).join("");
}

/* Kacheln ---------------------------------------------------------- */

function renderGrid(){
  visibleRecipes = getFiltered();

  grid.innerHTML = visibleRecipes.map((r, i) => `
    <button type="button" class="card" data-index="${i}">
      <span class="card__media" data-placeholder="${r.title}">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        ${r.badge ? `<span class="card__badge">${r.badge}</span>` : ""}
      </span>
      <span class="card__cat mono">${r.category}</span>
      <h3 class="card__title">${r.title}</h3>
      <p class="card__ing">${r.ingredients.slice(0, 4).join(", ")}</p>
      <span class="card__meta mono">${r.time}</span>
    </button>
  `).join("");

  // Fehlende Bilder → dezenter Platzhalter statt kaputtes Icon
  grid.querySelectorAll(".card__media img").forEach(img => {
    img.addEventListener("error", () => img.parentElement.classList.add("is-placeholder"));
    if(img.complete && img.naturalWidth === 0){
      img.parentElement.classList.add("is-placeholder");
    }
  });

  emptyState.hidden = visibleRecipes.length > 0;
  headerCount.textContent = `Rezepte ${visibleRecipes.length}`;
  footerCount.textContent = `${RECIPES.length} Rezepte insgesamt`;
}

function render(){
  renderCategories();
  renderGrid();
}

/* Detailansicht ---------------------------------------------------- */

function openRecipe(recipe){
  const img = document.getElementById("modalImg");
  img.src = recipe.image;
  img.alt = recipe.title;

  document.getElementById("modalCat").textContent   = recipe.category;
  document.getElementById("modalTitle").textContent = recipe.title;
  document.getElementById("modalMeta").textContent  =
    [recipe.time, recipe.portions].filter(Boolean).join("  ·  ");

  document.getElementById("modalIngredients").innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modalSteps").innerHTML =
    recipe.steps.map(s => `<li>${s}</li>`).join("");

  modal.hidden = false;
  document.body.classList.add("is-locked");
  modal.querySelector(".modal__dialog").scrollTop = 0;
}

function closeModal(){
  modal.hidden = true;
  document.body.classList.remove("is-locked");
}

/* Events ----------------------------------------------------------- */

catList.addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if(!btn) return;
  activeCategory = btn.dataset.cat;
  render();
});

grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if(!card) return;
  openRecipe(visibleRecipes[Number(card.dataset.index)]);
});

searchInput.addEventListener("input", e => {
  searchTerm = e.target.value;
  searchClear.hidden = searchTerm.length === 0;
  render();
});

searchClear.addEventListener("click", () => {
  searchTerm = "";
  searchInput.value = "";
  searchClear.hidden = true;
  render();
});

randomBtn.addEventListener("click", () => {
  // Zufall aus der aktuell sichtbaren Auswahl, sonst aus allen Rezepten
  const pool = visibleRecipes.length ? visibleRecipes : RECIPES;
  openRecipe(pool[Math.floor(Math.random() * pool.length)]);
});

modal.addEventListener("click", e => {
  if(e.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape" && !modal.hidden) closeModal();
});

render();
