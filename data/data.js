const array = ["paris", "lyon", "toulouse", "bordeau"];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}




// video youtube

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input" , (e) => {
  changeLink = (e.target.value);
if(link) {
  video.innerHTML = 
    `<iframe width="635" height="357" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?=" , "embed/");
  link = embed.split("&")[0];

}

// https://www.youtube.com/embed/RjKiX655ZPA
// https://youtu.be/q8ZSR7JLjwk?t=53