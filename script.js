// Booking Form Submission
document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your booking has been submitted successfully!");
});
// Function to toggle lesson details
function toggleDetails(lesson) {
    const details = document.getElementById(lesson + '-details');
    const isVisible = details.style.display === 'block';

    // Hide all details
    const allDetails = document.querySelectorAll('.lesson-details');
    allDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Toggle visibility of the clicked lesson details
    details.style.display = isVisible ? 'none' : 'block';
}
