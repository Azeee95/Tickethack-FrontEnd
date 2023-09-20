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

           if (!data[1]) {

            document.querySelector('#resultcart').innerHTML = ` 
            
            <div>

            <img src="./images/notfound.png" class="center-train" id = "img-default">

           </div>
           <hr class="my-4">
           <p class="textp" id ="infosearch"> No trip found </p>

          </div>

            `

           } else {

            document.querySelector("#resultcart").innerHTML ='';

            for (let i = 1; i < data.length; i++) {

               // let dateTrip = new Date(data[i].date);

              //  console.log((data[i].date).substr(11, 5));

              console.log(data[i]._id); 

                document.querySelector("#resultcart").innerHTML += ` 
            
                <nav aria-label="breadcrumb">
                
                    <ol class="breadcrumb breadcrumb-chevron p-3 bg-primary-subtle border border-primary-subtle rounded-3">
                      
                        <li>
                            <a class="link-body-emphasis text-decoration-none">${data[i].departure}</a>
                        </li>
                
                      <li>
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                
                        <a class="link-body-emphasis text-decoration-none">${data[i].arrival}</a>
                      </li>
                      
                      <li>
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                
                        <a class="link-body-emphasis text-decoration-none"> ${(data[i].date).substr(11, 5)} </a>
                        
                      </li>
                
                      <li>
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                
                        <a class="link-body-emphasis text-decoration-none">${data[i].price} € </a>
                        
                      </li>
                
                
                      <li class="breadcrumb-item active" aria-current="page">
                
                        <button type="button" class="btn btn-success btn-book" style = 'margin-left: 40px'> Book </button>
                      
                    </li>
                
                    </ol>
                  </nav>
                `
            
            }

            let bookButton = document.querySelectorAll('.btn-book')
        
            bookButton.addEventListener('click', () => { 
    
                console.log('button clicked');
    
            })


        } 
        

         });
        
         
    }

});



