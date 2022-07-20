const buttonEl = document.getElementById("convert")
const el = document.querySelector(".conversions")
buttonEl.addEventListener("click", function () {
  el.innerHTML = ""
  const inputValue = document.querySelector("#input-el").value
  const units = [
    {
      unit: "Length (Meter/Feet)",
      conversion: `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`,
    },
    {
      unit: "Volume (Liters/Gallons)",
      conversion: `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`,
    },
    {
      unit: "Mass (Kilograms/Pounds)",
      conversion: `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`,
    }
  ]

  for (i = 0; i < units.length; i++) {
    el.innerHTML += `<div><h2>${units[i].unit}</h2><p>${units[i].conversion}</p></div>`
  }
    
})

const lightMode = () => {
  let element = document.querySelector(".main"),
    switcher = document.querySelector(".switch")
  if (element.classList.contains("light-mode")) {
    switcher.classList.add("bi-sun-fill")
  } else {
    switcher.classList.remove("bi-sun-fill")
  }
  element.classList.toggle("light-mode")
}
