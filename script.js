 
 


const menuicon= document.querySelector('#menu-icon');
const navbar= document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 

function sendMail(){ 
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById('subject').value,
        text: document.getElementById("text").value,
        phone: document.getElementById('phone').value,

    }
    
    emailjs.send("service_mvjsqmd","template_jllr1xv", params) .then(function(response) {
        alert("Form submitted.");
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        console.log("FAILED...", error);
        alert("Form submission failed. Please try again later.");
    }); 
}


function clearField(){
    document.getElementById('form1').reset();
}
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    
    if (checkBox.checked == true){
         alert('theme change');

      } else {
         alert('theme change');
      }
})

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);