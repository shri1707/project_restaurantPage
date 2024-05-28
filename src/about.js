import "./style.css";
import phoneSVG from "../SVG/phone-outline.svg"
import mailSVG from "../SVG/at.svg"
import buildSVG from "../SVG/office-building.svg"

function aboutDisplay() {
    const container = document.createElement("div")
    container.classList.add("container")

    const para = document.createElement("p")
    para.textContent = "Nestled in a meticulously restored 19th-century mansion, our vintage heritage hotel exudes timeless charm with antique furnishings and elegant period décor. Guests can enjoy modern comforts amidst the rich cultural tapestry of our historic district, savoring gourmet cuisine and lush gardens. Experience the perfect blend of history and luxury at our distinguished hotel."
    container.appendChild(para)

    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phone= document.createElement("div")
    phone.classList.add("phone")

    const phoneimg= document.createElement("img")
    phoneimg.src= phoneSVG
    phone.appendChild(phoneimg)

    const detail= document.createElement("div")
    detail.classList.add("detail")
    detail.textContent= "9988435670"
    phone.appendChild(detail)
    contact.appendChild(phone)
    

    const mail = document.createElement("div")
    mail.classList.add("mail")

    const mailimg= document.createElement("img")
    mailimg.src= mailSVG
    mail.appendChild(mailimg)

    const mailDetail= document.createElement("div")
    mailDetail.classList.add("detail")
    mailDetail.textContent= "abc@fakemail.com"
    mail.appendChild(mailDetail)
    contact.appendChild(mail)

    const address= document.createElement("div")
    address.classList.add("address")

    const buildingimg= document.createElement("img")
    buildingimg.src= buildSVG
    address.appendChild(buildingimg)

    const addDetail= document.createElement("div")
    addDetail.classList.add("detail")
    addDetail.textContent="149/2, Sector-12, Delhi"
    address.appendChild(addDetail)
    contact.appendChild(address)

    container.appendChild(contact)

    return container
}

export{aboutDisplay}