function verifyAndDeploy() {
  const username = document.getElementById("githubUsername").value.trim();
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  if (!username) {
    alert("⚠️ Please enter your GitHub username");
    loader.style.display = "none";
    return;
  }

  const repo = "YOUR_REPO_NAME"; // 👈 Badilisha hapa na jina la repo yako
  const apiUrl = `https://api.github.com/repos/${username}/${repo}`;

  fetch(apiUrl)
    .then(response => {
      loader.style.display = "none";
      if (response.status === 200) {
        window.location.href = `https://render.com/deploy?repository=https://github.com/${username}/${repo}`;
      } else {
        alert("❌ You must fork the repository first.");
      }
    })
    .catch(() => {
      loader.style.display = "none";
      alert("🚫 Error verifying repository.");
    });
}
