import "./style.css";
import fbsvg from "../SVG/facebook.svg";
import igsvg from "../SVG/instagram.svg";
import ytsvg from "../SVG/youtube.svg";


function createHome() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main");
    
    const heading = document.createElement("h2");
    const quote = document.createElement("div");
    const schedule = document.createElement("div");
    const head = document.createElement("div");
    const time = document.createElement("ul");
    const days = document.createElement("li");
    const timing = document.createElement("li");
    const close = document.createElement("li");
    const findus = document.createElement("div");
    const findusHead = document.createElement("h3");
    const fb = document.createElement("img");
    const ig = document.createElement("img");
    const yt = document.createElement("img");
    const imgCont = document.createElement("div")

    heading.textContent = "Welcome to The Grand Heritage Manor";
    quote.textContent = `"Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious."`;
    head.textContent = "Opening hours:";
    days.textContent = "Tuesday - Sunday";
    timing.textContent = "9AM - 12AM";
    close.textContent = "Monday Closed";
    findusHead.textContent = "Find Us";
    fb.src = fbsvg;
    ig.src = igsvg;
    yt.src = ytsvg;

    imgCont.classList.add("imgCont")
    head.classList.add("head");
    quote.classList.add("quote");
    schedule.classList.add("schedule");
    time.classList.add("time");
    findus.classList.add("findUs");
    
    findus.appendChild(findusHead);
    findus.appendChild(imgCont)
    imgCont.appendChild(fb);
    imgCont.appendChild(ig);
    imgCont.appendChild(yt);

    time.appendChild(days);
    time.appendChild(timing);
    time.appendChild(close);

    schedule.appendChild(head);
    schedule.appendChild(time);


    mainContainer.appendChild(heading);
    mainContainer.appendChild(quote);
    mainContainer.appendChild(schedule);
    mainContainer.appendChild(findus);

    return mainContainer;
}

function homePage() {
    const home = createHome();
    return home;
}

export { homePage };