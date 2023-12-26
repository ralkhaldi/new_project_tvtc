// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of the projects section
    function toggleProjects() {
        const projectsSection = document.getElementById('projects');
        projectsSection.classList.toggle('hidden');
    }

    // Attach a click event to the projects button (you can add this button in your HTML)
    const projectsButton = document.getElementById('projects-button');
    if (projectsButton) {
        projectsButton.addEventListener('click', toggleProjects);
    }
});
