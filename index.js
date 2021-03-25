const cats = [
  {
    name: "Kandy",
    imgUrl: "https://images-cdn.9gag.com/photo/3630193_700b.jpg",
  },
  {
    name: "Sir John II",
    imgUrl:
      "https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584",
  },
];

const dogs = [
  {
    name: "Bill",
    imgUrl: "https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg",
  },
  {
    name: "Shawna",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx",
  },
];

// create a variable for the select
const animalSelect = document.getElementById("animalSelect");

//create a variable for the <ul>
const animalList = document.getElementById("animalList");

// listen to a change event on the select
animalSelect.addEventListener("change", (event) => {
  //clearing the list every time you select a new animal
  animalList.innerHTML = "";

  //if user clicked on cats option
  if (event.target.value === "cats") {
    //call function renderAnimal and pass cats array
    renderAnimal(cats);

    //if user clicked on dogs option
  } else if (event.target.value === "dogs") {
    //call function renderAnimal and pass dogs array

    renderAnimal(dogs);
  } else {
    // create only one array for both animals with the spread operator
    const animals = [...cats, ...dogs];
    //call function renderAnimal and pass animals array

    renderAnimal(animals);
  }
});

// create a renderAnimal function that receives an array of animals as argument
const renderAnimal = (animalArray) => {
  // iterate over array of animals
  animalArray.map((animal) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    //assign value to newly created p
    p.innerText = animal.name;

    //assign value to newly created img
    img.src = animal.imgUrl;

    //append paragraph and image to li
    li.appendChild(p);
    li.appendChild(img);

    //append li to <ul>
    animalList.appendChild(li);
  });
};
