const categoriesUl = document.querySelectorAll('.item');
console.log(
    `Number of categories: ${categoriesUl.length}`
);

const categoriesElements = categoriesUl.forEach((e) => {
    console.log(
        `Category: ${e.querySelector('h2').textContent}\nElements: ${e.querySelector('ul').childElementCount}`
    )
});