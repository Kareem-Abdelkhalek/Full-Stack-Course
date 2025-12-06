function convertTemp() {
  // Get the value from input
  let celsius = parseFloat(document.getElementById("celsius").value);
  let resultDiv = document.getElementById("result");

  // Convert from Celsius to Fahrenheit
  let fahrenheit = (celsius * 9) / 5 + 32;

  // Remove show class to reset animation
  resultDiv.classList.remove("show", "cold", "normal", "hot");

  // if conditions based on temperature
  if (celsius < 0) {
    resultDiv.className = "result cold show";
    resultDiv.innerHTML = `
            Freezing Cold!<br>
            ${celsius}°C = ${fahrenheit.toFixed(1)}°F<br>
            <small>It's very cold outside. Wear warm clothes.</small>
        `;
  } else if (celsius >= 0 && celsius <= 25) {
    resultDiv.className = "result normal show";
    resultDiv.innerHTML = `
            Nice Weather!<br>
            ${celsius}°C = ${fahrenheit.toFixed(1)}°F<br>
            <small>Perfect temperature to go outside.</small>
        `;
  } else {
    resultDiv.className = "result hot show";
    resultDiv.innerHTML = `
            Very Hot!<br>
            ${celsius}°C = ${fahrenheit.toFixed(1)}°F<br>
            <small>It's really hot. Stay hydrated.</small>
        `;
  }
}

// Allow Enter key to trigger conversion
document.getElementById("celsius").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    convertTemp();
  }
});
