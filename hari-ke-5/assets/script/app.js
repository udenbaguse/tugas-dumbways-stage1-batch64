import { projects } from "./projectsData.js";
import { renderProjects } from "./render.js";
import { selectedImage,handleFormSubmit } from "./formHandler.js";

// DOM Elements
const projectsContainer = document.getElementById("root");
const uploadImage = document.getElementById("uploadImage");




// Initial render
renderProjects(projects, projectsContainer);

// Handle form submission
handleFormSubmit(projects, renderProjects, selectedImage);
