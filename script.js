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

const tableTrips = [

    {departure:"Marseille", arrival :"Lyon", date :{ $date :"2023-09-19T09:57:46.321Z"}, price :48, cart : false, bookings : false},
    {departure:"Paris", arrival :"Bruxelles", date :{ $date :"2023-09-19T09:58:58.072Z"}, price :86, cart : false, bookings : false},
    {departure:"Bruxelles", arrival :"Marseille", date :{ $date :"2023-09-19T09:59:53.956Z"}, price :30, cart : false, bookings : false},
    {departure:"Marseille", arrival :"Lyon", date :{ $date :"2023-09-19T10:01:19.555Z"}, price :37, cart : false, bookings : false},
    {departure:"Marseille", arrival :"Lyon", date :{ $date :"2023-09-19T10:42:50.354Z"}, price :68, cart : false, bookings : false},
    {departure:"Bruxelles", arrival :"Paris", date :{ $date :"2023-09-19T11:16:04.496Z"}, price :111, cart : false, bookings : false},
    {departure:"Bruxelles", arrival :"Lyon", date :{ $date :"2023-09-19T11:29:17.306Z"}, price :44, cart : false, bookings : false},
    {departure:"Lyon", arrival :"Bruxelles", date :{ $date :"2023-09-19T11:53:11.286Z"}, price :70, cart : false, bookings : false},
    {departure:"Bruxelles", arrival :"Paris", date :{ $date :"2023-09-19T11:59:35.327Z"}, price :75, cart : false, bookings : false},
    {departure:"Paris", arrival :"Lyon", date :{ $date :"2023-09-19T12:00:22.812Z"}, price :43, cart : false, bookings : false},
    {departure:"Marseille", arrival :"Bruxelles", date :{ $date :"2023-09-19T12:06:15.579Z"}, price :80, cart : false, bookings : false},
    {departure:"Paris", arrival :"Lyon", date :{ $date :"2023-09-19T12:09:49.913Z"}, price :90, cart : false, bookings : false},
    {departure:"Bruxelles", arrival :"Lyon", date :{ $date :"2023-09-19T12:14:39.891Z"}, price :144, cart : false, bookings : false},
    {departure:"Marseille", arrival :"Lyon", date :{ $date :"2023-09-19T12:37:26.052Z"}, price :146, cart : false, bookings : false},
    {departure:"Paris", arrival :"Lyon", date :{ $date :"2023-09-19T12:48:50.661Z"}, price :81, cart : false, bookings : false},
    {departure:"Paris", arrival :"Bruxelles", date:{ $date :"2023-09-19T12:51:55.676Z"}, price :140, cart : false, bookings : false}

]

let searchButton = document.querySelector('#search')

searchButton.addEventListener('click', () => {

    let departureValue = document.querySelector('#departure').value;
    let arrivalValue = document.querySelector('#arrival').value;
    let dateValue = document.querySelector('#date').value;
    
    if (departureValue.trim() && arrivalValue.trim() && dateValue.trim()) {

        console.log(`Departure : ${departureValue} - Arrival : ${arrivalValue} - Date : ${dateValue}`);
        
        const dataSearch = {

            departure: departureValue,
        
            arrival: arrivalValue,

            date: dateValue
        
        }
        
        fetch('https://tickethack-back-end.vercel.app/trips/search', {
        
            method: 'POST',
        
            headers: { 'Content-Type': 'application/json' },
        
            body: JSON.stringify(dataSearch)
        
        })
         .then(response => response.json())
         .then(data => {
           console.log(data);

           if (data[1]) {

            alert('plusieurs résultats')

           } else {

            document.querySelector('#img-default').src = './images/notfound.png'
            document.querySelector('#infosearch').textContent = 'No trip found'

           }


         });

    
    }

});



