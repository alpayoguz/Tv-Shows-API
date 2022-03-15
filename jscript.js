// 

const sForm = document.querySelector("#showForm");

sForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
     takeInput();
    
  
})

async function displayImages(config) {

    const tvShows = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    const tvShowsData = tvShows.data;
    for (let result of tvShowsData) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}

async function takeInput() {
    const inp = sForm.elements.showInp.value;
    let config = {params: {q : inp}}
    sForm.elements.showInp.value = "";
    removeImages();
    await displayImages(config)
   
}

function removeImages() {
    let previousImages = document.querySelectorAll("img");
    for (let image of previousImages) {
        document.body.removeChild(image);
    }
}

