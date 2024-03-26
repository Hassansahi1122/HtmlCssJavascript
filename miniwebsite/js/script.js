
const selectedVersion = document.querySelector(".selected-version");
const versionList = document.querySelector(".version-list");
const listItems = document.querySelectorAll(".version-list li");
const versionboot = document.querySelector('.versionboot');
const selectedBrightness = document.querySelector(".selected-brightness");
const brightnessList = document.querySelector(".brightness-list");
const brightnessItems = document.querySelectorAll(".brightness-list li");
const combineList = document.querySelector(".combine-list");
const items5 = document.querySelector(".grid-5items");
const contact3 = document.querySelector(".grid-3contact");
const grid_version_bright = document.querySelector(".grid-version-bright");
const gridgrid_container = document.querySelector(".grid-container");
let logo = document.querySelector(".logo");


// version js 
selectedVersion.addEventListener("click", function() {
  versionList.style.display = versionList.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function(event) {
  if (!selectedVersion.contains(event.target) && !versionList.contains(event.target)) {
    versionList.style.display = "none";
  }
});

listItems.forEach(function(item) {
  item.addEventListener("click", function() {
    listItems.forEach(function(li) {
      li.classList.remove("active");
    });
    item.classList.add("active");
    selectedVersion.innerHTML = `${item.textContent} <i class="fa fa-caret-down" aria-hidden="true" ></i>`;
    versionList.style.display = "none";
  });
});
listItems[0].classList.add("active");
 //   brightness js 
 selectedBrightness.addEventListener("click", function() {
  brightnessList.style.display = brightnessList.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function(event) {
  if (!selectedBrightness.contains(event.target) && !brightnessList.contains(event.target)) {
    brightnessList.style.display = "none";
  }
});
brightnessItems.forEach(function(item) {
  item.addEventListener("click", function() {
    brightnessItems.forEach(function(li) {
      li.classList.remove("active");
      li.querySelector("button.tick-button").classList.remove("clicked");
    });
    item.classList.add("active");
    item.querySelector("button.tick-button").classList.add("clicked");
    selectedBrightness.innerHTML = `<i class="${item.firstChild.className}"></i><i class="fa fa-caret-down"></i>`;
    brightnessList.style.display = "none";
  });
});
brightnessItems[0].classList.add("active");
brightnessItems[0].querySelector("button.tick-button").classList.add("clicked");

grid_version_bright.style.display = "flex";
items5.style.display = "flex";
contact3.style.display = "flex";

  function widthapplyer (){
   
const mediaquery = window.matchMedia("(max-width : 991px)");
if(mediaquery.matches){

  selectedVersion.innerHTML = `<span class="versionboot">Bootsatrap</span>${listItems[0].textContent} <i class="fa fa-caret-down" aria-hidden="true" ></i>`;

  // Tick the "Light" item by default
  // selectedBrightness.innerHTML = `<i class="${brightnessItems[0].firstChild.className}"></i><i class="fa fa-caret-down"></i>`;
  
  combineList.appendChild(items5);
  combineList.appendChild(contact3);
  combineList.appendChild(grid_version_bright);

    const threeDots = document.querySelector(".three-dots");
    const crossButton = document.querySelector(".cross-button");
  
    threeDots.addEventListener("click", function() {
      combineList.style.display = "flex";
      grid_version_bright.style.display = "flex";
      items5.style.display = "grid";
      contact3.style.display = "grid";
    });
  
    crossButton.addEventListener("click", function() {
      combineList.style.display = "none";
      grid_version_bright.style.display = "none";
      items5.style.display = "none";
      contact3.style.display = "none";
    });
  
    document.addEventListener("click", function(event) {
      if (!combineList.contains(event.target) && !threeDots.contains(event.target)) {
        combineList.style.display = "none";
        // grid_version_bright.style.display = "none";
        // items5.style.display = "none";
        // contact3.style.display = "none";
      }
    });
}else{
  grid_version_bright.style.display = "flex";
items5.style.display = "flex";
contact3.style.display = "flex";
    logo.after(items5);
    gridgrid_container.appendChild(contact3);
   gridgrid_container.appendChild(grid_version_bright);
  selectedVersion.innerHTML = `${listItems[0].textContent} <i class="fa fa-caret-down" aria-hidden="true" ></i>`;
  console.log("happy");
  // Tick the "Light" item by default
  // selectedBrightness.innerHTML = `<i class="${brightnessItems[0].firstChild.className}"></i><i class="fa fa-caret-down"></i>`;
}
}

            window.addEventListener('resize',widthapplyer);
            window.addEventListener('load',widthapplyer);
            window.addEventListener("DOMContentLoaded",widthapplyer);

// //////////////////////////////////////
//            Pricing
// /////////////////////////////////////
let popuPrice = document.querySelector(".popup-price");
let closePrice = document.querySelector(".close-price");
function popupClose(){
    popuPrice.style.display = "none";
}

