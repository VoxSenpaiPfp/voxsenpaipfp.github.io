const clientId = "0fe08a61aed1730";
const albumId = "GDWNGaM"; // Replace with your actual album ID
const boysSection = document.getElementById("boys-section");

async function fetchBoysPFP() {
    try {
        const response = await fetch(`https://api.imgur.com/3/album/${albumId}/images`, {
            headers: {
                Authorization: `Client-ID ${clientId}`
            }
        });
        
        const data = await response.json();
        if (data.success) {
            displayImages(data.data);
        } else {
            console.error("Failed to fetch images from Imgur", data);
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function displayImages(images) {
    boysSection.innerHTML = ""; // Clear previous content
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.link;
        imgElement.alt = "Anime Boy PFP";
        imgElement.style.width = "150px";
        imgElement.style.margin = "10px";
        boysSection.appendChild(imgElement);
    });
}

fetchBoysPFP();
