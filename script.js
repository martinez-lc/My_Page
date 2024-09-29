// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Chart.js Example - Visualize Skills
window.onload = function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['JavaScript', 'Python', 'SQL', 'Java', 'Hadoop'],
            datasets: [{
                label: 'Skill Proficiency (%)',
                data: [90, 85, 80, 70, 75],
                backgroundColor: [
                    '#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12'
                ]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Show project details in a modal or expanding div (basic example)
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        alert('Here are the details for this project...');
    });
});
