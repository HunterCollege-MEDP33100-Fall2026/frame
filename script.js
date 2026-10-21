/* 
    Assignment: Frame
    1. Pick a free, public API (e.g. NASA, Dog API, PokéAPI, etc.)
    2. In getData(), use fetch() to fetch data from the API
    3. Insert 10+ li elements into the .frame element 
*/

const frame = document.querySelector('.frame');
let currentItem = 0;
let totalItems = 20; // change this if you do more than 10 items

async function getData() {
    try {
        const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=20',
            {
                headers: {
                    'x-api-key': 'live_1vLcPdSe02SkJyFzHg11I47gQZFHbjBikxQfaohtFAaVFfrM7kVOHhaxxb1dmV1Q'
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch cat images');
        }

        const data = await response.json();

        frame.innerHTML = '';
        currentItem = 0;

        data.forEach((cat, index) => {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = cat.url;
            img.alt = 'Cat image ' + (index + 1);

            if (index === 0) {
                li.classList.add('active');
            }

            li.appendChild(img);
            frame.appendChild(li);
        });

        totalItems = frame.querySelectorAll('li').length;

    } catch (error) {
        console.error('Error fetching cat images:', error);
    }
}


function goToItem(index) {
    const items = frame.querySelectorAll('li');
    items[currentItem].classList.remove('active');
    currentItem = index;
    items[currentItem].classList.add('active');
}

frame.addEventListener('click', function () {
    const nextItem = (currentItem + 1) % totalItems;
    goToItem(nextItem);
});

getData();