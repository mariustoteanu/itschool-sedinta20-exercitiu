let dropdownButton = document.querySelector(".about-us");
console.log(dropdownButton);

function handleDropdownClick() {
  let dropdownList = document.querySelector(".submenu");
  let dropdownListStyle = window.getComputedStyle(dropdownList);
  console.log(dropdownListStyle);
  let dropdownVisibility = dropdownListStyle.getPropertyValue("visibility");
  console.log(dropdownVisibility);
  if (dropdownVisibility === "hidden") {
    dropdownList.style.visibility = "visible";
  } else {
    dropdownList.style.visibility = "hidden";
  }
}
dropdownButton.addEventListener("click", handleDropdownClick);
