const listEl = document.querySelector("#categories");

console.log(`Number of categories: ${listEl.children.length}`);

for (const el of listEl.children) {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelector(".item ul").children.length}`);
}
