const backendURL = 'https://tickethack-back-end.vercel.app/' + 'trips'
const frontendURL = 'https://tickethack-front-end.vercel.app/'

/*
fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then(data => {
   console.log(data);
 });

 */

 // Récup de l'ensemble des trips disponibles dans la base pour valider le bon fonctionnement de la route

fetch('https://tickethack-back-end.vercel.app/trips')
.then(response => response.json())
.then(data => {
  console.log(data);
});

// EventListener sur le bouton Search - Page d'accueil

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
        
        // Recup des données corrspondant à la recherche

        fetch('https://tickethack-back-end.vercel.app/trips/search', {
        
            method: 'POST',
        
            headers: { 'Content-Type': 'application/json' },
        
            body: JSON.stringify(dataSearch)
        
        })
         .then(response => response.json())
         .then(data => {
           console.log(data);

           if (!data[1]) {

            // Affichage de l'absence de résultat si le fetch retourne un objet avec 1 seul élément : L'élément message

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

            let tabresult = [] // Ce tableau sert uniqument d'affichage pour voir la liste des id de chaque ligne de résultat

            for (let i = 1; i < data.length; i++) {

               // let dateTrip = new Date(data[i].date);

              //  console.log((data[i].date).substr(11, 5));
                
                tabresult.push(data[i]._id);

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
                
                        <button type="button" class="btn btn-success btn-book" style = 'margin-left: 40px' id = ID${data[i]._id}> Book </button>
                      
                    </li>
                
                    </ol>
                  </nav>
                `
            
            }

            
            console.log(tabresult); 

            // Sélection des boutons et activation de l'eventListener

            const elements = document.querySelectorAll('.btn-book');

            elements.forEach(element => {

                element.addEventListener('click', () => {

                    let idSelector = '#' + element.id;
                    let finalId = idSelector.substring(3, idSelector.length);

                    console.log(finalId);

                    // Suppression du trip de la liste des résultat

                    document.querySelector(idSelector).parentNode.parentNode.hidden=true
            
                    // Ajout du trip dans le panier

                    const dataCart = {

                        _id: finalId
                    
                    }

                    fetch('https://tickethack-back-end.vercel.app/trips/addcart', {      
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
        
                    body: JSON.stringify(dataCart)
        
        
                    })
                        .then(response => response.json())
                        .then(data => {

                        console.log(data);

                        })


                 // --


                         })

    
                
            });

        

        } 
        

         });
        
         
    }

});


 // Récup de l'ensemble des trips disponibles dans la base pour valider le bon fonctionnement de la route
 
 fetch('https://tickethack-back-end.vercel.app/trips/cart')
 .then(response => response.json())
 .then(cartData => {
   console.log('Cart : ' + cartData);
 });

 

