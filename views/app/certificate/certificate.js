import CertificateGenerator from "./certificateGenerator.js";

document.getElementById("submitQuiz").addEventListener("click", () => {
  const userName = document.getElementById("courseName").value.trim();
  if (!userName) {
    //if username is empty, prompt them to add it
    alert("Please enter your name!");
    return;
  }

  let correctAnswers = { q1: "vanilla", q2: "seaSalt" };
  let totalQuestions = Object.keys(correctAnswers).length;
  let userScore = 0;

  // calc user score
  for (let question in correctAnswers) {
    let selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswers[question]) {
      userScore++;
    }
  }

  // get score as a percent
  let scorePercent = ((userScore / totalQuestions) * 100).toFixed(2);

  // generate the PDF with the content
  const certPdf = new CertificateGenerator(
    "Certificate",
    userName,
    scorePercent
  );

  certPdf.generateCertificate();
  certPdf.updatePreview();

  // display download button when pdf is loaded
  document.getElementById("downloadPdf").style.display = "block";
  document.getElementById("downloadPdf").addEventListener("click", () => {
    certPdf.save("Certificate_of_Completion.pdf"); // PDF file name when downloaded
  });
});
