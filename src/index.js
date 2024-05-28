import "./style.css";
import { homePage } from "./home.js";
import { menu } from "./menu.js";
import { aboutDisplay } from "./about.js";
console.log("hi")
function view() {
    const content = document.querySelector("#content")
    function setActiveButton(buttonId) {
        document.querySelectorAll('nav button').forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(buttonId).classList.add('active');
    }
    const displayHome = () => {
        content.innerHTML = ""
        const home = homePage()
        content.appendChild(home)
    }

    const displayMenu = () => {
        content.innerHTML = ""
        const m = menu()
        content.appendChild(m)
    }
    const displayAbout = () => {
        content.innerHTML = ""
        const a = aboutDisplay()
        content.appendChild(a)
    }

    const button = document.querySelectorAll("button")
    button.forEach(b => {
        b.addEventListener("click", () => {
            if (b.classList.contains("Home")) {
                displayHome()
                setActiveButton('homeButton')
            }
            else if (b.classList.contains("Menu")) {
                displayMenu()
                setActiveButton('menuButton');
            }
            else if (b.classList.contains("About")) {
                displayAbout()
                setActiveButton("aboutButton")
            }
        })
    });
    setActiveButton("homeButton")
    displayHome()
}
view()
