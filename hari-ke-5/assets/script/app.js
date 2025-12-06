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
