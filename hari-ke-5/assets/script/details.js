// get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

// get projects from local storage
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// search project by ID
const project = projects.find(p => p.id === projectId);

// validation project found
if (!project) {
    document.getElementById("projectTitle").textContent = "Project Not Found";
    throw new Error("Project not found!");
}

// Format date
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

// calculate duration
function calculateDuration(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    const diff = e - s;
    const day = diff / (1000 * 60 * 60 * 24);
    return `${day} days`;
}

// data to html
document.getElementById("projectTitle").textContent = project.name;
document.getElementById("projectImage").src = project.image;
document.getElementById("projectDate").textContent =
    `${formatDate(project.startDate)} - ${formatDate(project.endDate)}`;
document.getElementById("projectDuration").textContent =
    calculateDuration(project.startDate, project.endDate);
document.getElementById("projectDescription").textContent =
    project.description;

// Render Technologies
document.getElementById("techList").innerHTML =
    project.technologies
        .map(t => `<span class="badge text-bg-primary me-2">${t}</span>`)
        .join("");




























// // detail.js
// import { getProjectById } from "./projectsData.js";

// // Get DOM
// const detailsProject = document.querySelector("#detailProject");

// // Ambil ID dari URL
// const params = new URLSearchParams(window.location.search);
// const urlId = params.get("id");

// // Ambil project berdasarkan ID
// const project = getProjectById(urlId);

// if (!project) {
//     detailsProject.innerHTML = `
//         <h3 class="text-center mt-5 text-danger">Project not found.</h3>
//     `;
//     throw new Error("Project not found");
// }

// // ICON MAP
// const techIcons = {
//     "react": `<i class="fa-brands fa-react text-info me-2"></i>`,
//     "javascript": `<i class="fa-brands fa-js text-warning me-2"></i>`,
//     "node-js": `<i class="fa-brands fa-node-js text-success me-2"></i>`,
//     "typescript": `<i class="fa-brands fa-typescript text-primary me-2"></i>`,
//     "next-js": `<i class="fa-solid fa-n text-light me-2"></i>`
// };

// // Hitung durasi
// const start = new Date(project.startDate);
// const end = new Date(project.endDate);
// const diffTime = Math.abs(end - start);
// const durationInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// const durationInMonths = Math.ceil(durationInDays / 30);

// const durationLabel = durationInMonths > 1
//     ? `${durationInMonths} Months`
//     : `${durationInDays} Days`;


// // RENDER HTML
// detailsProject.innerHTML = `
//     <h1 class="text-center mb-4">${project.name}</h1>

//     <div class="row g-4">
//         <div class="col-md-6">
//             <img src="${project.image}"
//                 class="img-fluid rounded"
//                 style="height:300px; width:100%; object-fit:cover;">
//         </div>

//         <div class="col-md-6">
//             <div class="card bg-dark border-light">
//                 <div class="card-body">

//                     <h5 class="card-title">Details</h5>

//                     <div class="mb-3">
//                         <h6>Duration</h6>
//                         <p>
//                             <i class="fa-regular fa-calendar-days me-2"></i>
//                             ${start.toLocaleDateString("id-ID")} -
//                             ${end.toLocaleDateString("id-ID")}
//                         </p>

//                         <p>
//                             <i class="fa-solid fa-hourglass-half me-2"></i>
//                             ${durationLabel}
//                         </p>
//                     </div>

//                     <div>
//                         <h6>Technologies</h6>
//                         <ul class="list-unstyled">
//                             ${
//                                 project.technologies
//                                 .map(t => `<li>${techIcons[t] ?? `<i class='fa-solid fa-code me-2'></i>`} ${t}</li>`)
//                                 .join("")
//                             }
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>

//     <div class="mt-5">
//         <h3>Description</h3>
//         <p>${project.description}</p>
//     </div>
// `;
