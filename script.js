// Handle Job Application Form Submission
document.getElementById("jobForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const status = document.getElementById("status").value;

    alert(`Saved Job: ${jobTitle} at ${company} (Status: ${status})`);
});

// Handle Recruiter Form Submission
document.getElementById("recruiterForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const recruiterName = document.getElementById("recruiterName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    alert(`Saved Recruiter: ${recruiterName} (${email}, ${phone})`);
});

// Handle Resume Upload
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const resumeTitle = document.getElementById("resumeTitle").value;
    const resumeFile = document.getElementById("resumeFile").files[0];

    if (resumeFile) {
        alert(`Uploaded Resume: ${resumeTitle} (${resumeFile.name})`);
    } else {
        alert("Please upload a file.");
    }
});
