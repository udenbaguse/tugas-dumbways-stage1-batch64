export let selectedImage = "";

export function handleFormSubmit(renderProjects, selectedImage) {
  const submitBtn = document.getElementById("submitBtn");
  const uploadImage = document.getElementById("uploadImage");

  uploadImage.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      selectedImage = URL.createObjectURL(file);
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

    // validation
    if (!projectName || !startDate || !endDate || technologies.length === 0) {
      alert(
        "u need to fill all the form fields, at least project name, start date, end date, and technologies used!"
      );
      return;
    }

    alert("Project data added successfully!");

    // get project data from local storage
    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    const id = projects.length + 1;
    const newProjectObject = {
      id,
      name: projectName,
      startDate,
      endDate,
      description,
      technologies,
      image: selectedImage,
    };

    console.log("Data Proyek Baru:", newProjectObject);

    projects.push(newProjectObject);
    localStorage.setItem("projects", JSON.stringify(projects)); // Save to local storage
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








// // formHandler.js
// export let selectedImage = "";

// export function handleFormSubmit(renderProjects, selectedImage) {
//   const submitBtn = document.getElementById("submitBtn");
//   const uploadImage = document.getElementById("uploadImage");

//   uploadImage.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       selectedImage = URL.createObjectURL(file);
//     }
//   });

//   submitBtn.addEventListener("click", () => {
//     const projectName = document.getElementById("projectName").value.trim();
//     const startDate = document.getElementById("startDate").value;
//     const endDate = document.getElementById("endDate").value;
//     const description = document.getElementById("description").value.trim();
//     const technologies = [
//       ...document.querySelectorAll(".tech-checkbox:checked"),
//     ].map((checkbox) => checkbox.value);

//     // Validasi
//     if (!projectName || !startDate || !endDate || technologies.length === 0) {
//       alert(
//         "Formnya diisi semua yaa, minimal harus ada nama project, tanggal mulai, tanggal selesai, dan teknologi yang digunakan lah Boss!"
//       );
//       return;
//     }

//     alert("Data project berhasil ditambahkan!");

//     // Ambil data proyek dari local storage
//     let projects = JSON.parse(localStorage.getItem("projects")) || [];

//     const id = projects.length + 1;
//     const newProjectObject = {
//       id,
//       name: projectName,
//       startDate,
//       endDate,
//       description,
//       technologies,
//       image: selectedImage,
//     };

//     console.log("Data Proyek Baru:", newProjectObject);

//     projects.push(newProjectObject);
//     localStorage.setItem("projects", JSON.stringify(projects)); // Simpan ke local storage
//     renderProjects(projects, document.getElementById("root")); // Render proyek

//     // Reset form
//     document.getElementById("projectName").value = "";
//     document.getElementById("startDate").value = "";
//     document.getElementById("endDate").value = "";
//     document.getElementById("description").value = "";
//     document
//       .querySelectorAll(".tech-checkbox")
//       .forEach((c) => (c.checked = false));
//     uploadImage.value = "";
//   });
// }














// export let selectedImage = "";

// export function handleFormSubmit(projects, renderProjects, selectedImage) {
//   const submitBtn = document.getElementById("submitBtn");
//   const uploadImage = document.getElementById("uploadImage");

//   uploadImage.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       selectedImage = URL.createObjectURL(file);
//     }
//   });

//   submitBtn.addEventListener("click", () => {
//     const projectName = document.getElementById("projectName").value.trim();
//     const startDate = document.getElementById("startDate").value;
//     const endDate = document.getElementById("endDate").value;
//     const description = document.getElementById("description").value.trim();
//     const technologies = [
//       ...document.querySelectorAll(".tech-checkbox:checked"),
//     ].map((checkbox) => checkbox.value);

//     // Validation
//     if (!projectName || !startDate || !endDate || technologies.length === 0) {
//       alert(
//         "Formnya diisi semua yaa, minimal harus ada nama project, tanggal mulai, tanggal selesai, dan teknologi yang digunakan lah Boss!"
//       );
//     } else {
//       alert("Data project berhasil ditambahkan!");
//     }

//     const id = projects.length + 1;
//     // Create object
//     const newProjectObject = {
//       id,
//       name: projectName,
//       startDate,
//       endDate,
//       description,
//       technologies,
//       image: selectedImage,
//     };

//     console.log("Data Proyek Baru:", newProjectObject);

//     projects.push(newProjectObject);
//     renderProjects(projects, document.getElementById("root"));

//     // local storage
//     localStorage.setItem("projects", JSON.stringify(projects));

//     // Reset form
//     document.getElementById("projectName").value = "";
//     document.getElementById("startDate").value = "";
//     document.getElementById("endDate").value = "";
//     document.getElementById("description").value = "";
//     document
//       .querySelectorAll(".tech-checkbox")
//       .forEach((c) => (c.checked = false));
//     uploadImage.value = "";
//   });
// }