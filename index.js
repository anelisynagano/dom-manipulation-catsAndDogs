const cats = [
    {
        name: 'Kandy',
        imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
    },
    {
        name: 'Sir John II',
        imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
    },
]

const dogs = [
    {
        name: 'Bill',
        imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
    },
    {
        name: 'Shawna',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
    },
];

const animalSelect = document.getElementById('animalSelect');
const animalList = document.getElementById('animalList');

animalSelect.addEventListener('change', (e) => {
    animalList.innerHTML = '';

    if (e.target.value === 'cats') {
        cats.map(cat => {
            console.log(cat);
            const li = document.createElement('li');
            const p = document.createElement('p');
            const img = document.createElement('img');

            // li.innerHTML = `<p>${cat.name}</p>
            //                 <img src=${cat.imgUrl}>`

            p.innerText = cat.name;
            img.src = cat.imgUrl;

            animalList.appendChild(li);
            li.appendChild(p);
            li.appendChild(img);
        })
    } else if (e.target.value === 'dogs') {
        dogs.map(dog => {
            console.log(dog);
            const li = document.createElement('li');
            const p = document.createElement('p');
            const img = document.createElement('img');

            // li.innerHTML = `<p>${dog.name}</p>
            //                 <img src=${dog.imgUrl}>`

            p.innerText = dog.name;
            img.src = dog.imgUrl;

            animalList.appendChild(li);
            li.appendChild(p);
            li.appendChild(img);
        })
    } else {
        const animalsArray = [...dogs, ...cats]; //concatenating arrays with spread operator
        animalsArray.map(animal => {
            console.log(animal);
            const li = document.createElement('li');
            const p = document.createElement('p');
            const img = document.createElement('img');

            // li.innerHTML = `<p>${animal.name}</p>
            //                 <img src=${animal.imgUrl}>`

            p.innerText = animal.name;
            img.src = animal.imgUrl;

            animalList.appendChild(li);
            li.appendChild(p);
            li.appendChild(img);
        })
    }
})

const renderAnimal = (animalArray) => {
    animalArray.map(animal => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');

        p.innerText = animal.name;
        img.src = animal.imgUrl;

        animalList.appendChild(li);
        li.appendChild(p);
        li.appendChild(img);
    })
}


