const apiUrl = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    // Sort ASCENDING by NRR
    data.sort((a, b) => a.NRR - b.NRR);

    const tbody = document.querySelector("#pointsTable tbody");

    data.forEach(team => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${team.No}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR}</td>
        <td>${team.Points}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error:", error));