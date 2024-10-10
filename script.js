const gitApi = {
    "login": "fhdalv",
    "id": 31874920,
    "node_id": "MDQ6VXNlcjMxODc0OTIw",
    "avatar_url": "https://avatars.githubusercontent.com/u/31874920?v=4",
    "name": "Fahad Alvi",
    "company": null,
    "blog": "https://www.facebook.com/fhdalv",
    "location": "New York",
    "email": null,
    "hireable": true,
    "bio": "An aspiring software developer.",
    "updated_at": "2024-10-08T17:40:50Z"
  }
  document.getElementById("gitBio").innerHTML = gitApi.bio; 


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}