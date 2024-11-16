document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    let currentVideoIndex = 0;

    // Hide all videos except the first one
    videos.forEach((video, index) => {
        if (index !== 0) {
            video.parentElement.style.display = 'none';
        }
    });

    // Play first video
    videos[0].play();

    // Handle video clicks
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Swipe functionality
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', e => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
            if (swipeDistance > 0 && currentVideoIndex < videos.length - 1) {
                // Swipe up - next video
                switchVideo(currentVideoIndex + 1);
            } else if (swipeDistance < 0 && currentVideoIndex > 0) {
                // Swipe down - previous video
                switchVideo(currentVideoIndex - 1);
            }
        }
    }

    function switchVideo(newIndex) {
        // Hide current video
        videos[currentVideoIndex].pause();
        videos[currentVideoIndex].parentElement.style.display = 'none';

        // Show and play new video
        currentVideoIndex = newIndex;
        videos[currentVideoIndex].parentElement.style.display = 'block';
        videos[currentVideoIndex].play();
    }

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