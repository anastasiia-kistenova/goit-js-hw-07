// 1

const listWithId = document.querySelectorAll('#categories');

const categoriesItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

// 2

categoriesItems.forEach((categoriesItem) => {
const categoriesName = categoriesItem.querySelector('h2').textContent;
const categoriesEl = categoriesItem.querySelectorAll("li.el-list");

console.log(`Category: ${categoriesName}`);
console.log(`Elements: ${categoriesEl.length}`);

});





