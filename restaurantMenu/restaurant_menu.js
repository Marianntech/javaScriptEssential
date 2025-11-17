const breakfastMenu = ['Pancakes- $7', 'Eggs Benedict- $14', 'Oatmeal- $9', 'Frittata- $7.70'];
const mainCourseMenu = ['Steak- $34', 'Pasta- $18', 'Burger- $12', 'Salmon- $24'];
const dessertMenu = ['Cake- $8', 'Ice Cream- $4.50', 'Pudding- $5', 'Fruit Salad- $8'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;