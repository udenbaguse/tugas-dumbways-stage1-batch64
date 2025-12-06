export let selectedImage = "";

// Function to convert an image file to a Base64 string
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); //Create a FileReader instance
    reader.readAsDataURL(file); //Read the file as a data URL (Base64)
    reader.onload = () => resolve(reader.result); //Resolve the promise with the result when done
    reader.onerror = (error) => reject(error); //Reject the promise on error
  });
}

export function handleFormSubmit(renderProjects, selectedImage) {
  const submitBtn = document.getElementById("submitBtn");
  const uploadImage = document.getElementById("uploadImage");

  uploadImage.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (file) {
      // If a file is selected, convert it to Base64 and store it in selectedImage
      selectedImage = await getBase64(file);
    }
  });

  submitBtn.addEventListener("click", () => {
    const projectName = document.getElementById("projectName").value.trim();
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value.trim();
    const technologies = [
      ...document.querySelectorAll(".tech-checkbox:checked"),
    ].map((checkbox) => checkbox.value);

    // Validation: Ensure required fields are filled
    if (!projectName || !startDate || !endDate || technologies.length === 0) {
      alert(
        "Formnya diisi semua yaa, minimal harus ada nama project, tanggal mulai, tanggal selesai, dan teknologi yang digunakan lah Boss!"
      );
      return;
    }

    alert("Data project berhasil ditambahkan!");

    // Retrieve project data from local storage or initialize with an empty array
    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    const id = projects.length + 1;
    const newProjectObject = {
      id,
      name: projectName,
      startDate,
      endDate,
      description,
      technologies,
      image: selectedImage, // selectedImage is base64 string now
    };

    console.log("Data Proyek Baru:", newProjectObject);

    projects.push(newProjectObject); // add new project to array projects
    localStorage.setItem("projects", JSON.stringify(projects)); // save to local storage
    renderProjects(projects, document.getElementById("root")); // Render projects

    // Reset form
    document.getElementById("projectName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("description").value = "";
    document
      .querySelectorAll(".tech-checkbox")
      .forEach((c) => (c.checked = false));
    uploadImage.value = "";
  });
}