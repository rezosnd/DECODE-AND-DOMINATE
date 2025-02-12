document.addEventListener("DOMContentLoaded", function () {
    const textElem = document.querySelector(".hacking-animation__text");
    const overlayElem = document.querySelector("#overlayText");
    const textStrings = [
        "/// KIIT Cyber Fest Hackathon ///", 
        "<student@hackingKIIT>:::CyberWarrior", 
        "Commence KIIT hacking module@kiitfest.2025", 
        "...Connecting KIIT Network...SUCCESS", 
        "... Welcome to the Ultimate Hack Fest \\", 
        "INITIATING PAYLOAD ...//EXTRACTING DATA...", 
        "{ENTER YOUR ID}/// -- \\\ KIIT_H4CK3R \\",
        "SYSTEM BREACH DETECTED...", 
        "PLEASE ENTER ENCRYPTION KEY...",
        "$%$%$P@$$W0RD123$%$%$%", 
        "\\...TARGET SYSTEM BREACHED...\\",
        "GRANTING ROOT ACCESS...",
        "...EXECUTING PAYLOAD..."
    ];

    function typeText(element) {
        let text = textStrings[Math.floor(Math.random() * textStrings.length)];
        let index = 0;
        function typeCharacter() {
            if (index < text.length) {
                let span = document.createElement("span");
                span.textContent = text[index];
                span.style.color = "lime";
                element.appendChild(span);
                index++;
                setTimeout(typeCharacter, 50);
            } else {
                element.appendChild(document.createElement("br"));
                setTimeout(() => typeText(element), 500);
            }
        }
        typeCharacter();
    }
    typeText(textElem);
    typeText(overlayElem);
});
const clickSound = document.getElementById("click-sound");

        document.addEventListener("click", function() {
            clickSound.play();
        });

        function openPopup(popupId) {
            document.getElementById(popupId).style.display = 'block';
        }

        function closePopup(popupId) {
            document.getElementById(popupId).style.display = 'none';
        }

        document.getElementById("aboutEventBtn").addEventListener("click", function(event) {
            event.preventDefault();
            openPopup("popupEvent");
        });
        document.getElementById("rnd1").addEventListener("click", function(event) {
            event.preventDefault();
            openPopup("popupRnd1");
        });
        document.getElementById("rnd2").addEventListener("click", function(event) {
            event.preventDefault();
            openPopup("popupRnd2");
        });
        document.getElementById("rnd3").addEventListener("click", function(event) {
            event.preventDefault();
            openPopup("popupRnd3");
        });
        document.getElementById("aboutUs").addEventListener("click", function(event) {
            event.preventDefault();
            openPopup("popupAboutUs");
        });
       // Function to check if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Show the hacker disclaimer only if it's not a mobile device
window.onload = function() {
    const disclaimer = document.getElementById('hacker-disclaimer');
    const closeBtn = document.getElementById('close-disclaimer');

    // Show modal on desktop or mobile as per the condition
    if (isMobileDevice()) {
        // Display the modal for mobile devices as well
        disclaimer.classList.add('show');
    } else {
        // Show modal only for web (desktop)
        disclaimer.classList.add('show');
    }

    // Add event listener to the close button
    closeBtn.addEventListener('click', function() {
        disclaimer.style.display = 'none'; // Close the modal when the button is clicked
    });
};
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        localStorage.setItem("tab_switched", "true");
    } else {
        if (localStorage.getItem("tab_switched") === "true") {
            localStorage.removeItem("tab_switched");
            location.reload();
        }
    }
});

window.addEventListener("load", function() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
});
function openInFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }
  
  // Call the function to open the page in full screen when the page loads
  window.onload = openInFullscreen; 
