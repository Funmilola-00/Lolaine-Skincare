document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("button");
    submitButton.addEventListener("click", submitForm);
  });
  
  const responseElement = document.getElementById("container2");
  
  function submitForm() {
    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
  
    const customerData = {
      fullName: fullName,
      phone: phone,
      date: date,
      email: email,
      address: address,
    };
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(customerData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form Submitted Successfully!:", data);
        displayResponseMessage("Your Data has been loaded successfully!", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        displayResponseMessage("Sorry, an error occurred. Try Again!");
      });
  }
  
  function displayResponseMessage(message, data) {
    responseElement.style.display = "block";
    responseElement.innerHTML = `<p>${message}</p>`;
  
    responseElement.innerHTML +=
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  }
  