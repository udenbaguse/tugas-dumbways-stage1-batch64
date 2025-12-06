import { renderProjects } from "./render.js";
import { handleFormSubmit, selectedImage } from "./formHandler.js";

// to get data from local storage and render projects
function loadProjectsFromLocalStorage() {
  const projectsContainer = document.getElementById("root");
  const projectsData = localStorage.getItem("projects");

  // projects array initialization
  let projects = []; 

  if (projectsData) {
    projects = JSON.parse(projectsData);
  }
  renderProjects(projects, projectsContainer);

}

// setup event listeners and initial render
function initializeApp() {
  // Handle form submission
  handleFormSubmit(renderProjects, selectedImage);
}

// Call loadProjectsFromLocalStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadProjectsFromLocalStorage();
  initializeApp(); // Call initializeApp after loading data
});












// import { renderProjects } from "./render.js";
// import { handleFormSubmit, selectedImage } from "./formHandler.js";

// // Fungsi untuk mengambil data dari local storage dan merender proyek
// function loadProjectsFromLocalStorage() {
//   const projectsContainer = document.getElementById("root"); // Pastikan elemen DOM sudah tersedia
//   const projectsData = localStorage.getItem("projects");
//   let projects = []; // Inisialisasi projects dengan array kosong

//   if (projectsData) {
//     projects = JSON.parse(projectsData);
//   } else {
//     // Jika tidak ada data di local storage, gunakan data awal dari projectData.js
//     import("./projectsData.js")
//       .then((module) => {
//         projects = module.projects;
//         renderProjects(projects, projectsContainer);
//       })
//       .catch((error) => {
//         console.error("Gagal memuat projectsData.js:", error);
//       });
//     return; // Keluar dari fungsi setelah memuat dari projectData.js
//   }

//   renderProjects(projects, projectsContainer);
// }

// // Fungsi inisialisasi untuk mengatur event listener dan render awal
// function initializeApp() {
//   // Menangani pengiriman formulir
//   handleFormSubmit(renderProjects, selectedImage);

//   // (Opsional) Tambahkan event listener tambahan jika diperlukan, contoh:
//   // uploadImage.addEventListener('change', handleImageUpload);
// }

// // Panggil fungsi loadProjectsFromLocalStorage saat halaman dimuat
// document.addEventListener("DOMContentLoaded", () => {
//   loadProjectsFromLocalStorage();
//   initializeApp(); // Panggil initializeApp setelah memuat data
// });




// import { projects } from "./projectsData.js";
// import { renderProjects } from "./render.js";
// import { handleFormSubmit, selectedImage } from "./formHandler.js";

// // DOM Elements
// const projectsContainer = document.getElementById("root");
// const uploadImage = document.getElementById("uploadImage");

// // Fungsi inisialisasi untuk mengatur event listener dan render awal
// function initializeApp() {
//   // Render proyek awal
//   renderProjects(projects, projectsContainer);

//   // Menangani pengiriman formulir
//   handleFormSubmit(projects, renderProjects, selectedImage);

//   // (Opsional) Tambahkan event listener tambahan jika diperlukan, contoh:
//   // uploadImage.addEventListener('change', handleImageUpload);
// }

// // Panggil fungsi inisialisasi saat dokumen selesai dimuat
// document.addEventListener("DOMContentLoaded", initializeApp);

