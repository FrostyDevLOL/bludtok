document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Like button functionality
    const likeButtons = document.querySelectorAll('.video-actions button:first-child');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('active');
            const icon = button.querySelector('i');
            icon.style.color = button.classList.contains('active') ? '#ff4040' : '#fff';
        });
    });
}); 