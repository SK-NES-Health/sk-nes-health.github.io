// Select all .grid-item elements
const gridItems = document.querySelectorAll(".grid-item")

// Select the navbar
const navbar = document.querySelector(".ATDnavbar")
// Hide all .grid-item elements
gridItems.forEach((item, index) => {
  if (index !== 0) {
    // Skip the first item
    item.style.display = "none"
  }
})

gridItems.forEach((item, index) => {
  // Extract the h2 text
  const h2Text = item.querySelector("h2").textContent

  // Create a new navbar item
  const navbarItem = document.createElement("button")
  navbarItem.textContent = h2Text

  // Add a click event listener to the navbar item
  navbarItem.addEventListener("click", event => {
    event.preventDefault()

    // Hide all .grid-item elements
    gridItems.forEach(otherItem => {
      otherItem.style.display = "none"
    })

    // Show the corresponding .grid-item
    item.style.display = "flex"
  })

  // Add the navbar item to the navbar
  navbar.appendChild(navbarItem)
})
