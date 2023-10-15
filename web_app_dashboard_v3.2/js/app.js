
/***********************************
 ALERT BANNER
***********************************/
// Insert alert banner text
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`
    <p><span class="bold">Alert:</span> You have unread messages</p>
    <p class="close-notif">x</p>
`;

// Add event listener to remove the banner when user clicks the x
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("close-notif")){
        alertBanner.style.display = "none";
    }
}
);