// Collapsible navigation menu--------------------

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const collapsibles_item = document.querySelectorAll(".collapsible-item");

collapsibles_item.forEach((item) =>
  item.addEventListener("click", function () {
    // Collapse all items
    collapsibles_item.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("collapsible--expanded--item");
      }
    });

    // Toggle the clicked item
    this.classList.toggle("collapsible--expanded--item");
  })
);

/*

toggle is a method of classList that adds the specified class
if it's not present,
and removes it if it is. In this case, 
it toggles the class "collapsible--expanded" on the clicked element.
 
*/

// Image Slide JsCode--------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Automatic slideshow
function autoSlides() {
  plusSlides(1); // Move to the next slide
}

// Set interval to call the autoSlides function every 2 seconds
setInterval(autoSlides, 4000);

//   document.getElementById("c_typeCharge").value = "Rs " + cCharges;

//   // Calculate service charges
//   if (sType == 1) {
//     sCharges = 2000;
//   } else if (sType == 2) {
//     sCharges = 2500;
//   }

//   document.getElementById("s_typeCharges").value = "Rs " + sCharges;

//   // Calculate weight charges
//   if (weight == 1) {
//     wCharges = 1000;
//   } else if (weight == 2) {
//     wCharges = 1500;
//   } else if (weight == 3) {
//     wCharges = 2000;
//   } else if (weight == 4) {
//     wCharges = 2500;
//   } else if (weight == 5) {
//     wCharges = 7000;
//   }

//   document.getElementById("weightCharges").value = "Rs " + wCharges;
//   document.getElementById("addCharges").value = "Rs " + addCharges;

//   totalChrages = sCharges + cCharges + wCharges + addCharges;
//   document.getElementById("totalCharges").value =
//     "Rs " + totalChrages.toFixed(2);

//   return false;
// }

// User Form validation--------------------------

let pType = 0;
let cType = 0;
let weight = 0;
let sType = 0;

let pTypeCharges = 0;
let cTypeCharges = 0;
let weightCharges = 0;
let sTypeCharges = 0;

let protectionWrap = "NO";
let presentWrap = "NO";

let protectionWrapCharges = 0;
let presentWrapCharges = 0;

let totalCharges = 0;

function validation() {
  // Get input values
  const pType = document.getElementById("packageType").value;
  const cType = document.getElementById("courierType").value;
  const weight = document.getElementById("weight").value;
  const sType = document.getElementById("serviceType").value;
  const protectionWrap = document.getElementById("Protection").checked
    ? "YES"
    : "NO";
  const presentWrap = document.getElementById("Decoratings").checked
    ? "YES"
    : "NO";

  // Initialize charges
  let pTypeCharges = 0;
  let cTypeCharges = 0;
  let sTypeCharges = 0;
  let weightCharges = 0;
  let protectionWrapCharges = 0;
  let presentWrapCharges = 0;

  // Calculate package type charges
  if (pType === "Fragile Items") {
    pTypeCharges = 150.0;
  } else if (pType === "Medical Supplies") {
    pTypeCharges = 300.0;
  } else if (pType === "Miscellaneous" || pType === "Other") {
    pTypeCharges = 200.0;
  }

  // Calculate courier type charges
  if (cType === "Refrigerated") {
    cTypeCharges = 500.0;
  } else if (cType === "Medical Courier") {
    cTypeCharges = 300.0;
  } else if (cType === "Normal Delivery") {
    cTypeCharges = 200.0;
  }

  // Calculate service type charges
  if (sType === "Sameday Delivery") {
    sTypeCharges = 650.0;
  } else if (sType === "Overnight Delivery") {
    sTypeCharges = 350.0;
  }

  // Calculate weight charges
  switch (weight) {
    case "1":
      weightCharges = 300.0;
      break;
    case "2":
      weightCharges = 350.0;
      break;
    case "3":
      weightCharges = 700.0;
      break;
    case "4":
      weightCharges = 1000.0;
      break;
    case "5":
      weightCharges = 1500.0;
      break;
  }

  // Calculate additional charges
  if (protectionWrap === "YES") {
    protectionWrapCharges = 200.0;
  }

  if (presentWrap === "YES") {
    presentWrapCharges = 300.0;
  }

  // Calculate total charges
  const totalCharges =
    weightCharges +
    protectionWrapCharges +
    presentWrapCharges +
    cTypeCharges +
    pTypeCharges +
    sTypeCharges;

  // Validate phone numbers (sweet alert)-------------------

  const senderNumber = document.getElementById("sender_number").value.trim();
  const receiverNumber = document
    .getElementById("receiver_number")
    .value.trim();

  if (!/^\d{10}$/.test(senderNumber)) {
    Swal.fire({
      icon: "error",
      title: "Please enter a valid Sender contact number",
      html: "<b>Contact number must be 10 digits</b>",
    });
    return false;
  }

  if (!/^\d{10}$/.test(receiverNumber)) {
    Swal.fire({
      icon: "error",
      title: "Please enter a valid Receiver contact number",
      html: "<b>Contact number must be 10 digits</b>",
    });
    return false;
  }

  // Passing data using local storage---------------------------

  localStorage.setItem("P_TYPE", pType);
  localStorage.setItem("C_TYPE", cType);
  localStorage.setItem("WEIGHT", weight);
  localStorage.setItem("S_TYPE", sType);
  localStorage.setItem("P_TYPE_CHARGES", "Rs" + pTypeCharges + ".00");
  localStorage.setItem("C_TYPE_CHARGES", "Rs" + cTypeCharges + ".00");
  localStorage.setItem("WEIGHT_CHARGES", "Rs" + weightCharges + ".00");
  localStorage.setItem("S_TYPE_CHARGES", "Rs" + sTypeCharges + ".00");
  localStorage.setItem(
    "PROTECTION_CHARGES",
    "Rs" + protectionWrapCharges + ".00"
  );
  localStorage.setItem("PROTECTION", protectionWrap);
  localStorage.setItem("PRESENT_CHARGES", "Rs" + presentWrapCharges + ".00");
  localStorage.setItem("PRESENT", presentWrap);
  localStorage.setItem("TOTAL", "Rs" + totalCharges + ".00");

  return true;
}
