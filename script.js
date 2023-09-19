const backendURL = 'https://tickethack-back-end.vercel.app/' + 'trips'
const frontendURL = 'https://tickethack-front-end.vercel.app/'


/*
fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then(data => {
   console.log(data);
 });

 */

fetch('https://tickethack-back-end.vercel.app/trips')
.then(response => response.json())
.then(data => {
  console.log(data);
});