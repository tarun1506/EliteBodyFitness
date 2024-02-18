const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const modifyDiv = document.querySelector(".gym-equipments");

function handleClick(event) {
  event.preventDefault();
  modifyDiv.classList.add("styling");
  if (event.target.dataset.item === "dumbbell") 
  {
    html = `<div class="equipment-img">
    <img class="equipment" src="./images/dumbbell.jpeg" alt="Dumbbell">
      </div>
      <div class="equipment-description">
          <p> Dumbbells are a type of free weight
              used in weight training. They are
              a type of free weight, and are
              different from barbells. Most gyms
              will have a dumbbell rack that has
              an assortment of fixed weight
              dumbbells. </p>
      </div> `;
    modifyDiv.innerHTML = html;
  }
  if (event.target.dataset.item === "treadmill")
  {
    html = `<div class="equipment-img">
    <img class="equipment" src="./images/treadmill.jpg" alt="Treadmill">
      </div>
      <div class="equipment-description">
          <p> A treadmill is a device generally
              for walking, running or climbing
              while staying in the same place.
              Treadmills were introduced before
              the development of powered
              machines, to harness the power of
              animals or humans to do work,
              often a type of mill that was
              operated by a person or animal
              treading steps of a treadwheel to
              grind grain. </p>
      </div> `;
    modifyDiv.innerHTML = html;
  }

  if (event.target.dataset.item === "barbell")
  {
    html = `<div class="equipment-img">
    <img class="equipment" src="./images/barbell.jpeg" alt="Barbell">
      </div>
      <div class="equipment-description">
          <p> A barbell is a piece of exercise
              equipment used in weight training,
              bodybuilding, weightlifting and
              powerlifting, consisting of a long
              bar, usually with weights attached
              at each end. </p>
      </div> `;
    modifyDiv.innerHTML = html;
  }

  if (event.target.dataset.item === "stairmaster")
  {
    html = `<div class="equipment-img">
    <img class="equipment" src="./images/stairmaster.jpg" alt="Stairmaster">
      </div>
      <div class="equipment-description">
          <p> A stairmaster is a stationary
              fitness machine that simulates
              climbing stairs. It is used for
              cardiovascular exercise while also engaging the muscles of the lower body, including the quadriceps, hamstrings, glutes, and calves. </p>
      </div> `;
    modifyDiv.innerHTML = html;
  }
  
}

menuItems.addEventListener("click", handleClick);