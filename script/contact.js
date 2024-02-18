
  const toggleButton = document.querySelector(".toggleButton");
  const iconTextEle = document.querySelectorAll(".icon-text");
  const divEle = document.querySelector(".contact-info")
  const formDetails = document.querySelector(".info-form");

  function handleButton() {  
    iconTextEle.forEach(function(element) {

      divEle.classList.toggle("toggle-change");
      if (element.dataset.name === "add") {
        element.dataset.name = "newadd";
        element.textContent = "1418 EliteBody Studio Davis St, San Leandro, CA 94577";
      }

      else if (element.dataset.name === "newadd") {
        element.dataset.name = "add";
        element.textContent = "7815 EliteBody Studio Olive St, Oakland, CA 94621";
      }

      if (element.dataset.name === "phone") {
        element.dataset.name = "newphone";
        element.textContent = "510-878-1234";
      }else if (element.dataset.name === "newphone") {
        element.dataset.name = "phone";
        element.textContent = "510-466-9876";
      }
    });
}

toggleButton.addEventListener("click", handleButton) 

formDetails.addEventListener("submit", function(event) {
  event.preventDefault();
  userName=event.currentTarget.name.value;
  alert(`Dear ${userName}, Thank you for contacting us. We will get back to you shortly.`)
  event.currentTarget.reset();
})




