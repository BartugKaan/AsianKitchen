const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnContainer = document.querySelector(".btn-container");
let foodContainer = document.querySelector(".food-row");
let buttons = btnContainer.getElementsByTagName("button");
buttons = Array.from(buttons);
let foodList = getFoods();
let btnCategorys = returnBtnCategory();

for (let i = 0; i < buttons.length; i++) {
  let clicked_btn = getId(buttons[i].id);
  buttons[i].addEventListener("click", function () {
    for (let j = 0; j < menu.length; j++) {
      if (clicked_btn == "all") {
        foodContainer.innerHTML = "";
        for (let k = 0; k < foodList.length; k++) {
          for (let l = 0; l < foodList[k].length; l++) {
            let food = foodList[k][l];
            foodContainer.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${food.img}
              alt=${food.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${food.title}</h4>
                <h4 class="price">${food.price}</h4>
              </div>
              <div class="menu-text">
                ${food.desc}
              </div>
            </div>
          </div>
    `;
          }
        }
      } else {
        foodContainer.innerHTML = "";
        let foodListByCategory = getFoodsByCategory(clicked_btn);
        for (let index = 0; index < foodListByCategory.length; index++) {
          let food = foodListByCategory[index];
          foodContainer.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${food.img}
            alt=${food.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title
            ">
              <h4>${food.title}</h4>
              <h4 class="price">${food.price}</h4>
            </div>
            <div class="menu-text">
              ${food.desc}
            </div>
          </div>
        </div>
  `;
        }
      }
    }
  });
}

function getId(clicked_id) {
  let id = clicked_id;
  return id;
}

function returnFoodCategory() {
  let foodCategory = [];
  for (let index = 0; index < menu.length; index++) {
    let tempCategory = menu[index].category;
    if (!foodCategory.includes(tempCategory)) {
      foodCategory.push(tempCategory);
    }
  }
  return foodCategory;
}

function returnBtnCategory() {
  let btnCategory = [];
  for (let index = 0; index < buttons.length; index++) {
    let tempBtnCategory = buttons[index].innerText;
    btnCategory.push(tempBtnCategory);
  }
  return btnCategory;
}

function getFoods() {
  let foodCategory = returnFoodCategory();
  let foodList = [];
  for (let index = 0; index < foodCategory.length; index++) {
    let tempFood = menu.filter((food) => food.category === foodCategory[index]);
    foodList.push(tempFood);
  }
  return foodList;
}

function getFoodsByCategory(category) {
  let foodList = [];
  for (let index = 0; index < menu.length; index++) {
    if (menu[index].category === category) {
      foodList.push(menu[index]);
    }
  }
  return foodList;
}
