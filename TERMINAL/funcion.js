for (let i = 1; i <= 4; i++) {
  const linkId = `toggleLink${i}`;
  document.getElementById(linkId).addEventListener("click", function(e) {
    e.preventDefault();

    const divId = `miDiv${i}`;
    const div = document.getElementById(divId);

    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}
