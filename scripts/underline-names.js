// Function to underline specific names
function underlineNames() {
  const namesToUnderline = [
    "Michael Ginn",
    "Alexis Palmer",
    "Ali Marashian",
    "Bhargav Shandilya",
    "Claire Post",
    "Enora Rice",
    "Juan Vásquez",
    "Marie McGregor",
    "Matthew Buchholz",
  ];
  const regex = new RegExp(`\\b(${namesToUnderline.join("|")})\\b`, "gi");

  function wrapTextWithUnderline(text) {
    return text.replace(regex, "<u>$&</u>");
  }

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentNode;
      if (parent.nodeName !== "SCRIPT" && parent.nodeName !== "STYLE") {
        const newHtml = wrapTextWithUnderline(node.textContent);
        if (newHtml !== node.textContent) {
          const span = document.createElement("span");
          span.innerHTML = newHtml;
          parent.replaceChild(span, node);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(processNode);
    }
  }

  // Start with the body of the document
  processNode(document.body);
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", underlineNames);
