// console.log("hello world");

//Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
// console.log(filterContainer);
filterBtns = filterContainer.children;
// console.log(filterBtns);
totalFilterBtn = filterBtns.length;
// console.log(totalFilterBtn);
portfolioItems = document.querySelectorAll(".portfolio-item");
// console.log(portfolioItems);
totalPortfolioItem = portfolioItems.length;
// console.log(totalPortfolioItem);

// for (let i = 0; i < totalFilterBtn; i++) {
//   //   console.log(filterBtns[i]);
//   filterBtns[i].addEventListener("click", function () {
//     // console.log(this.innerHTML);
//     // console.log(filterBtns[i].innerHTML);
//     // this.classList.add("active");
//     // filterBtns[i].classList.add("active");
//   });
// }

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    // console.log(filterValue); //click on each of the button on Portfolio page All, Web Design, Photography and Wordpress then view it on the browser console.
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter"),
  lightboxClose = lightbox.querySelector(".lightbox-close");
// console.log(lightbox);
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  // console.log(portfolioItems[i]);
  portfolioItems[i].addEventListener("click", function () {
    // console.log(i);//when click on the portfolio item its return the index of the portfolio item
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  // console.log(imgSrc); //click on each portfolio item to view the image path
  lightboxImg.src = imgSrc;
  // console.log(lightboxImg.src);
  lightboxText.innerHTML =
    portfolioItems[itemIndex].querySelector("h4").innerHTML;
  // console.log(lightboxText.innerHTML);
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
  // console.log(lightboxCounter.innerHTML);
}

//open lightbox
function toggleLightbox() {
  lightbox.classList.toggle("open"); //popup the lightbox by dynamically add open class selector to lightbox root class selector
}

//previous button
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  // console.log(itemIndex);
  changeItem();
}

//next button
function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
    changeItem();
  }
}

//close lightbox
lightbox.addEventListener("click", function (event) {
  // console.log(event.target);
  // console.log(event.target === lightboxClose);
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

//Aside Navbar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
// console.log(nav);
// console.log(navList);
// console.log(totalNavList);
// console.log(allSection);
// console.log(totalSection);

for (let i = 0; i < totalNavList; i++) {
  // console.log(navList[i]);
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // console.log(a);
    //remove back-section class selector on aside bar link
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log(navList[j].querySelector("a"));
        //add back-section class selector onto asidebar link
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");

    showSection(this); //calling of showSection() function and pass-in
    //<a href="#home" class="active"><i class="fa fa-home"></i>Home</a>
    //as an argument, whenever you click on any of the aside bar anchor tags its
    //will pass in this argument onto showSection(this)
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSectionClass(num) {
  allSection[num].classList.add("back-section"); //
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
  console.log(element.getAttribute("href").split("#")[1]);
  for(let i = 0; i < totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1]
    console.log(target)
    if(
      target === navList[i].querySelector("a")
      .getAttribute("href")
      .split("#")[1]){
        navList[i].querySelector("a")
        .classList.add("active")
      }
    }
}

//hire me button
document.querySelector(".hire-me").addEventListener("click", function(){
  // console.log(this)
  const sectionIndex = this.getAttribute("data-section-index"); //get data-section-index attribute
  // console.log(sectionIndex)
  showSection(this); //pass contact herf as an argument onto showSection() function then set it to active
  updateNav(this)
  removeBackSectionClass(); //this function will send About Me section to back once click on Hire me
  addBackSectionClass(sectionIndex) //function by passing in the position where About me section is
})

// toggling of nav button
const aside = document.querySelector(".aside"),
  navToggleBtn = document.querySelector(".nav-toggler")
  // console.log(aside)
  // console.log(navToggleBtn)
  // navToggleBtn.addEventListener("click", ()=>{
  //   asideSectionTogglerBtn();
  // })
// Alternative way of calling asideSectionTogglerBtn
navToggleBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  // console.log(aside);
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open")
  for(let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open")
  }
}

// popup download button for cv
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// preloader
window.addEventListener("load", function(){
  document.querySelector(".preloader").classList.add("opacity-0")
  setTimeout(function(){
    document.querySelector(".preloader").style.display = "none"
  }, 1000)
})