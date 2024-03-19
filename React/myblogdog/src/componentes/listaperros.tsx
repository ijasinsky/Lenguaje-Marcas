import React from "react";
import { useEffect } from "react";
<table>
    <thead>
        <th>Lista de perros</th>
    </thead>
    <tbody>
        <tr>
            <td>*Lista*</td>
        </tr>
    </tbody>
</table>

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); 

    React.useEffect(() => {
        document.title = 'You click ${headers} for dogs';
    }
    ,[])