const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
 img.classList.toggle("show");

})

// differents

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
})


// autre partie

document.getElementById("input").addEventListener("input", () => {
  console.log(e.target.value);
})

//  autre partie

const theme = document.querySelectorAll(".theme");


theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "goldTheme", "greenTheme")
    switch(e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
        case "gold":
          document.body.classList.add("goldTheme");
          break;
          case "green":
            document.body.classList.add("greenTheme");
            default:
              null;
    }
  })
})