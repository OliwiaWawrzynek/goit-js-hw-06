const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newList = ingredients.forEach((e) => {
  let ingredientList = document.createElement("li");
  ingredientList.textContent = e;
  ingredientList.classList.add("item");
  list.append(ingredientList);
}
);
