
    // Update the script content
    const englishText = `In our developments, we focus on Innovating 
    AI & Spatial Tech Solutions and Autonomous Robotics for a safer future. 
    We have Military production license, Military technical activity license, 
    Facility Security Clearance Certificate and are proud co-founders of the Hungarian XR Coalition.`;

    const hungarianText = `Fejlesztésinkben MI, MR és autonóm robotikai megoldásokkal törekszünk, a biztonságos jövő megteremtésére. Rendelkezünk Haditechnikai gyártási engedéllyel, Haditechnikai tevékenységi engedéllyel, Telephely Biztonsági tanúsítvánnyal, és büszke társalapítói vagyunk a Magyar XR Koalíciónak.`;

    function localize() {
        var image = document.getElementById("flag");
        var clicks = image.getAttribute("clicks");
        if (clicks === null) {
            clicks = 0;
        }
        clicks++;
        image.setAttribute("clicks", clicks);
        if (clicks % 2 === 1) {
            var p = image.parentNode.getElementsByTagName("p")[0];
            p.innerHTML = hungarianText;
            image.src = "assets/images/england-flag.png";
        } else {
            var p = image.parentNode.getElementsByTagName("p")[0];
            p.innerHTML = englishText;
            image.src = "assets/images/hungarian-flag.png";
        }
    }