// Attach event listeners to TOC buttons
for (const element of document.getElementById("tableContentsBtns").children) {
    // Make sure we are dealing with only buttonss
    if (element.tagName !== "BUTTON")
        continue;

    element.addEventListener("click", tocButtonClicked);
}

function tocButtonClicked(event) {
    // Get the id we are going to from the event
    const id = event.target.id.split("_")[1];
    window.scroll({ top: document.getElementById(id).offsetTop, behavior: "smooth" });
}