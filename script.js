/* ============================================================
   Cookbook — script.js
   ------------------------------------------------------------
   HOW TO ADD A NEW RECIPE:
   1. Upload image to image folder on left hand side (e.g. lasagne.jpeg)
   2. Add a new block in the RECIPES section:

      {
        title: "Lasagne",
        category: "Main",     // has to be spelled the same as the CATEGORIES below
        badge: "Veggi",           // optional, it's the orange badge on the picture
        image: "images/lasagne.jpeg",
        time: "60 Min",
        portions: "4 Servings",
        ingredients: ["500g of Pasta", "Salt", "..."],
        steps: ["Step 1 ...", "Step 2 ..."]
      },

   Everything else will run automatically.
   ============================================================ */

const CATEGORIES = [
  "All Recipes",
  "Entree",
  "Salad",
  "Soup",
  "Baked Goods",
  "Dessert",
  "Breakfast",
  "Sides",
  "Drinks"
];

const RECIPES = [
  {
    title: "Pumpkin Bread",
    category: "Baked Goods",
    badge: "High Protein",
    image: "images/PumpkinBread.jpeg",
    time: "60 Min",
    portions: "6 Servings",
    ingredients: [
      "xxg Flour",
      "xxg Pumpkin",
      "Chocolate Chips"
    ],
    steps: [
      "Add Step 1.",
      "Add Step 2.",
      "Add Step 3.",       
    ]
  },
  {
    title: "Placeholder",
    category: "Entree",
    badge: "Fish",
    image: "images/ecample.jpeg",
    time: "30 Min",
    portions: "2 Servings",
    ingredients: [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 3",
      "Ingredient 4",
      "Ingredien 5",
      "Ingredient 6"
    ],
    steps: [
      "Step 1.",
      "Step 2.",
      "Step 3."
    ]
  }
];

/* ============================================================
   Below: Nothing to change here, it's all syntax and logic
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

let activeCategory = "All Recipes";
let searchTerm     = "";
let visibleRecipes = [];

/* Hilfsfunktionen -------------------------------------------------- */

// upper and lower cases do  not matter
function norm(str){
  return (str || "")
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .trim();
}

// Search looks for ingredients list
function matchesSearch(recipe){
  if(!searchTerm) return true;
  const q = norm(searchTerm);
  return recipe.ingredients.some(i => norm(i).includes(q));
}

function matchesCategory(recipe){
  return activeCategory === "All Recipes" || recipe.category === activeCategory;
}

function getFiltered(){
  return RECIPES.filter(r => matchesCategory(r) && matchesSearch(r));
}

/* Sidebar ---------------------------------------------------------- */

function renderCategories(){
  // Counter considering the current filter settings
  const searchPool = RECIPES.filter(matchesSearch);

  catList.innerHTML = CATEGORIES.map(cat => {
    const count = cat === "All Recipes"
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

  // Missing images → Placeholder
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

/* Detail view ---------------------------------------------------- */

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
  // Random recipes from current filtering, otherwise from all recipes
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
