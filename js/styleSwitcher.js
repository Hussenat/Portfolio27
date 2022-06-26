const links = document.querySelectorAll(".alternate-style"); //accessing class selector on <link rel="stylesheet" class="alternate-style" title="orange" href="css/skins/orange.css" type="text/css" disabled />
// console.log(links);
const totalLinks = links.length;
// console.log(totalLinks);

// function setActiveStyle(color) {
//   //   console.log(color);
//   for (let i = 0; i < totalLinks; i++) {
//     console.log(links[i].getAttribute("title"));
//   }
// }

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
      //   console.log(links[i].getAttribute("title"));
    } else {
      links[i].setAttribute("disabled", true);
    }
  }
}

document
  .querySelector(".toggle-style-switcher")
  .addEventListener("click", open) 

  function open(){
    document.querySelector(".style-switcher").classList.toggle("open");
  }
//body skin
const bodySkin = document.querySelectorAll(".body-skin");
// console.log(bodySkin);
const totalBodySkin = bodySkin.length;
// console.log(totalBodySkin);
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    // // console.log(bodySkin[i]);
    // console.log(bodySkin[i].value);
    // console.log(this);
    // console.log(this.value);
    if (this.value == "dark") {
      // document.body.classList.add("dark") //using javaScript to add dark (body.dark) class selector onto markup or html body tags
      document.body.className = "dark";
    } else {
      // document.body.classList.remove("dark")
      document.body.className = "";
    }
  });
}
