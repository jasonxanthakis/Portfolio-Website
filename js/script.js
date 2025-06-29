// Add smooth scrolling for the navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerPoint = 190; // Adjust as needed
  const introTexts = document.querySelectorAll(".intro-text");

  if (scrollY > triggerPoint) {
    introTexts.forEach(el => el.classList.add("fade-out"));
  } else {
    introTexts.forEach(el => el.classList.remove("fade-out"));
  }
});

// Download resume on click
document.getElementById("download-resume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "pdf/resume.pdf";
    link.download = "Jason_Xanthakis_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});