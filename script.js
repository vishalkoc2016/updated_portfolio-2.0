// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }
    
    // Email form functionality
    function sendMail() { 
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById('subject').value,
            text: document.getElementById("text").value,
            phone: document.getElementById('phone').value,
        };
        
        emailjs.send("service_mvjsqmd", "template_jllr1xv", params).then(function(response) {
            alert("Form submitted.");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            console.log("FAILED...", error);
            alert("Form submission failed. Please try again later.");
        }); 
    }
    
    // Make sendMail function globally accessible
    window.sendMail = sendMail;
    
    // Theme switching functionality
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    if (toggleSwitch) {
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark if none set
        
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleSwitch.checked = (currentTheme === 'dark');
        
        // Theme switch function
        function switchTheme(e) {
            const newTheme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            console.log('Theme switched to:', newTheme); // Debug logging
        }
        
        // Add event listener to theme toggle
        toggleSwitch.addEventListener('change', switchTheme);
        
        // Debug logging
        console.log('Theme toggle initialized. Current theme:', currentTheme);
    } else {
        console.error('Theme toggle switch not found in the DOM');
    }
});