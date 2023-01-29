const items = document.querySelectorAll('.as-imagegrid-item  span');

const arr = [];

for (let item of items) {
  arr.push(item.textContent);
}

console.log(arr);
