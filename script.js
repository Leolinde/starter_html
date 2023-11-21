const items = document.querySelectorAll(".food");
const pets = document.querySelectorAll(".pet-img")


items.forEach(item => {
    item.addEventListener("click", () => {
        console.log("here")
        item.classList.toggle("active");

    })
})

pets.forEach(pet => {
    pet.addEventListener("click", () => {
        pet.classList.toggle("active");
    })
})

