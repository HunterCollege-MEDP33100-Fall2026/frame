/* 
    Assignment: Frame
    1. Pick a free, public API (e.g. NASA, Dog API, PokéAPI, etc.)
    2. In getData(), use fetch() to fetch data from the API
    3. Insert 10+ li elements into the .frame element 
*/

const frame = document.querySelector(".frame");
let currentItem = 0;
let totalItems = 10;

async function getData() {
   try {
      frame.innerText = "Loading...";
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      //   console.log(response);

      const data = await response.json();
      const dogList = data.data;
      // console.log(dogList);

      frame.innerText = "";

      for (let i = 0; i < dogList.length; i++) {
         // get individual dog's attributes
         const dog = dogList[i];
         const dogAttributes = dog.attributes;
         //  console.log(dogAttributes);

         const listItem = document.createElement("li");

         //  add name + img
         const name = document.createElement("h1");
         name.innerText = dogAttributes.name;
         //  console.log(name);

         const img = document.createElement("img");
         img.src = dogAttributes.images[0].medium;
         img.alt = dogAttributes.name;

         listItem.appendChild(img);
         listItem.appendChild(name);

         if (i === 0) {
            listItem.classList.add("active");
         }

         frame.appendChild(listItem);
      }
      totalItems = dogList.length;
   } catch (error) {
      console.log(error);
      frame.innerText = "Something went wrong, try again later.";
   }
}

function goToItem(index) {
   const items = frame.querySelectorAll("li");

   if (items.length === 0) return;

   items[currentItem].classList.remove("active");
   currentItem = index;
   items[currentItem].classList.add("active");
}

frame.addEventListener("click", function () {
   const nextItem = (currentItem + 1) % totalItems;
   goToItem(nextItem);
});

getData();
