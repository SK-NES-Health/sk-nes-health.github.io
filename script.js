// List of image filenames in the Images/Homepage-Images/InfoDisplay directory
const imageFilenames = ["Chill", "ColdFluImmunity", "Day", "EMF", "Energy", "ESR01", "ESR02", "FatMetabolism", "Female", "HeartDriverED6", "HeartImprinterED2", "Love", "Male", "Muscles", "Nerve", "Night", "Peace", "Polarity", "Rejuvenation", "Sleep", "Youth"]

// Select the parent element where you want to insert the infocards
const parentElement = document.querySelector(".infodisplay")

imageFilenames.forEach(filename => {
  const infocard = document.createElement("div")
  infocard.className = "infocard"

  const img = document.createElement("img")
  img.className = "info-img"
  img.src = `./Images/Homepage-Images/InfoDisplay/${filename}.jpg`

  const infoDetails = document.createElement("div")
  infoDetails.className = "info-details"

  const orderBtn = document.createElement("button")
  orderBtn.className = "order-btn"
  orderBtn.textContent = "Order"

  infocard.appendChild(img)
  infocard.appendChild(infoDetails)
  infocard.appendChild(orderBtn)

  parentElement.appendChild(infocard)
})
