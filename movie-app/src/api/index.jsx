import React from 'react'

// Api Key: 66bb4395550c25d9a321ac6f8024d4e6
// Requisition Api example: https://api.themoviedb.org/3/movie/550?api_key=66bb4395550c25d9a321ac6f8024d4e6

function ApiTests() {
  const testRequest = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=66bb4395550c25d9a321ac6f8024d4e6')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
  };

  testRequest()
}

export default ApiTests