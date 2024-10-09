// script.js

// Function to dynamically add content to the about section
function addAboutContent() {
    const aboutContent = document.getElementById('about-content');
    
    const aboutTitle = document.createElement('p');
    aboutTitle.id = 'about-title';
    aboutTitle.textContent = 'Albert Einstein';
    
    const aboutDescription = document.createElement('p');
    aboutDescription.id = 'about-description';
    aboutDescription.textContent = 'Renowned for his groundbreaking contributions to physics, he transformed our understanding of space, time, and energy through his theories of relativity. Beyond his scientific achievements, his dedication to humanitarian ideals and peace reflected a deep commitment to humanity. Einstein\'s enduring legacy inspires generations to embrace intellect, compassion, and the relentless quest for knowledge.';

    // Clear existing content and append new content
    aboutContent.innerHTML = ''; // Clear existing content
    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutDescription);
}

// Call the function to add content
addAboutContent();
