document.addEventListener("DOMContentLoaded", function () {
    // Get all sections
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");

    // Get buttons
    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const prev1 = document.getElementById("prev1");
    const prev2 = document.getElementById("prev2");

    // Show Step 2 when "Next" on Step 1 is clicked
    next1.addEventListener("click", function () {
        step1.style.display = "none";
        step2.style.display = "block";
    });

    // Go back to Step 1 when "Back" on Step 2 is clicked
    prev1.addEventListener("click", function () {
        step2.style.display = "none";
        step1.style.display = "block";
    });

    // Show Step 3 when "Next" on Step 2 is clicked
    next2.addEventListener("click", function () {
        step2.style.display = "none";
        step3.style.display = "block";
    });

    // Go back to Step 2 when "Back" on Step 3 is clicked
    prev2.addEventListener("click", function () {
        step3.style.display = "none";
        step2.style.display = "block";
    });

    // Handle Resume Form Submission
    document.getElementById("resumeForm").addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Job Application, Recruiter Details, and Resume Saved!");

        // Optionally redirect to another page after submission
        // window.location.href = "thank-you.html";
    });
});
