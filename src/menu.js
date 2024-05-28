import "./style.css";

class food {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }

    display() {
        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-item");

        // Create elements for name, price, and image
        const foodName = document.createElement("h3");
        const foodPrice = document.createElement("p");
        const foodImage = document.createElement("img");

        // Set the content of the elements
        foodName.textContent = this.name;
        foodPrice.textContent = this.price;
        foodImage.src = this.img;
        foodImage.alt = this.name;

        // Append the elements to the container
        foodContainer.appendChild(foodName);
        foodContainer.appendChild(foodPrice);
        foodContainer.appendChild(foodImage);

        return foodContainer
    }
}

function menu() {
    const mainContainer = document.createElement("div")
    const starter = document.createElement("div")
    const mains = document.createElement("div")
    const sweetDish = document.createElement("div")
    const starterName = document.createElement("div")
    const mainsName = document.createElement("div")
    const sweetName = document.createElement("div")

    starterName.textContent = "Starters"
    mainsName.textContent = "Main Course"
    sweetName.textContent = "Sweet Dish"

    mainContainer.classList.add("mainContainer")
    starter.classList.add("starter")
    mains.classList.add("mains")
    sweetDish.classList.add("sweets")

    const fries = new food("Fries", "Rs.100", "https://www.thespruceeats.com/thmb/_uO-Y9p8eu4ZVFnNQZmVqjLPoBg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg")
    const chowmein = new food("Chowmein", "Rs.300", "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprodarticles%2Fr22wv28cdjg.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D900%26q%3D75&w=3840&q=75")
    const mojito = new food("Mojito", "Rs.550", "https://media.istockphoto.com/id/1019323316/photo/mint-mojito-cocktail.jpg?s=612x612&w=0&k=20&c=t_iLQUqO6ItbJWM9nD2U9O0uBSqXeavts1cvVJabjxM=")
    const dal = new food("Dal Makhani", "Rs.400", "https://i.pinimg.com/564x/82/bb/b9/82bbb93fab74455c48029094a096a2d5.jpg")
    const roti = new food("Laccha Paratha", "Rs. 50(for one)", "https://media.istockphoto.com/id/1292639257/photo/lachha-paratha-a-layered-flat-bread-using-wheat-flour-popular-dish-in-north-india-isolated.jpg?s=612x612&w=0&k=20&c=191DQkniSsyk2EGK4OxwvFHJpDFHnUdqLUJN89o3M5c=")
    const rice = new food("Rice", "Rs 250(half-plate)", "https://vaya.in/recipes/wp-content/uploads/2018/02/Boiled-rice.jpg")
    const iceCream = new food("Ice Cream", "Rs.70", "https://foodwithfeeling.com/wp-content/uploads/2023/07/Creami-Chocolate-Ice-Cream-4.jpg")
    const rasgulla = new food("Rasgulla", "Rs.50(3 pieces)", "https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg")
    const rasMalai = new food("Ras Malai", "Rs.120(3 pieces)", "https://imagevars.gulfnews.com/2022/07/27/Ras-malai_1823fdf0779_large.jpg")

    starter.append(starterName)
    starter.appendChild(fries.display())
    starter.appendChild(chowmein.display())
    starter.appendChild(mojito.display())

    mains.append(mainsName)
    mains.appendChild(dal.display())
    mains.appendChild(roti.display())
    mains.appendChild(rice.display())

    sweetDish.append(sweetName)
    sweetDish.appendChild(iceCream.display())
    sweetDish.appendChild(rasgulla.display())
    sweetDish.appendChild(rasMalai.display())
    mainContainer.appendChild(starter)
    mainContainer.appendChild(mains)
    mainContainer.appendChild(sweetDish)

    return mainContainer
}

export { menu }