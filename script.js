const form = document.getElementById("idForm");
const photoInput = document.getElementById("photo");
const cPhoto = document.getElementById("cPhoto");
const noPhoto = document.getElementById("noPhoto");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("cCollege").textContent = document.getElementById("college").value;
  document.getElementById("cName").textContent = document.getElementById("name").value;
  document.getElementById("cEnroll").textContent = document.getElementById("enroll").value;
  document.getElementById("cId").textContent = document.getElementById("sid").value;
  document.getElementById("cGuardian").textContent = document.getElementById("guardian").value || "-";
  document.getElementById("cCourse").textContent = document.getElementById("course").value;
  document.getElementById("cPhone").textContent = document.getElementById("phone").value;

  
  const file = photoInput.files[0];
  if (file) {
    cPhoto.src = URL.createObjectURL(file);
    cPhoto.style.display = "block";
    noPhoto.style.display = "none";
  }
});

document.getElementById("printBtn").addEventListener("click", function () {
  window.print();
});
