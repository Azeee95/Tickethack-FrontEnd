// Récup des trips ajoutés au panier pour valider le bon fonctionnement de la route
 
 
 fetch('https://tickethack-back-end.vercel.app/trips/cart')
 .then(response => response.json())
 .then(cartData => {
   console.log(cartData);

   if (!cartData[0]) {

    console.log('Panier vide')

   document.querySelector('#carttrips').innerHTML = []

   document.querySelector('#carttrips').innerHTML += `
   
   <p> No tickets in your cart </p>
   <br>
   <p> Why not plan a trip ? </p> 
   
   `

   document.querySelector('.total').classList.add('invisible');

    } else {
    
        console.log('Résultats disponibles')

        document.querySelector('#carttrips').innerHTML = []
        let totalCart = 0;

        for (let i = 0; i < cartData.length; i++) {

            totalCart = totalCart + cartData[i].price;

        document.querySelector('#carttrips').innerHTML +=

        `
        <nav aria-label="breadcrumb" >
                        
                      <ol class="breadcrumb breadcrumb-chevron p-3 --bs-primary-text-emphasis rounded-3 ol">
                        
                          <li>
                              <a class="link-body-emphasis text-decoration-none">${cartData[i].departure}</a>
                          </li>
                  
                        <li>
                  
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                  
                          <a class="link-body-emphasis text-decoration-none">${cartData[i].arrival}</a>
                        </li>
                        
                        <li>
                  
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                  
                          <a class="link-body-emphasis text-decoration-none"> ${(cartData[i].date).substr(11, 5)} </a>
                          
                        </li>
                  
                        <li>
                  
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                  
                          <a class="link-body-emphasis text-decoration-none price">${cartData[i].price} € </a>
                          
                        </li>
                  
                  
                        <li class="breadcrumb-item active" aria-current="page">
                  
                          <button type="button" class="btn btn-success btn-delete" style = 'margin-left: 10rem;' id = ID${cartData[i]._id}>X</button>
                        
                      </li>
                  
                      </ol>
                    </nav>
                  </div>
        
        
        `

    }

    console.log('Total : ' + totalCart);
    document.querySelector('#totalcart').textContent = `Total : ${totalCart} €`


    // Sélection des boutons pour supprimer les trips dans le cart et activation de l'eventListener

    const elements = document.querySelectorAll('.btn-delete');

    elements.forEach(element => {

        element.addEventListener('click', () => {

            let idSelector = '#' + element.id;
            let finalId = idSelector.substring(3, idSelector.length);

            console.log(finalId);

            // Suppression du trip de la liste des résultats du cart

            document.querySelector(idSelector).parentNode.parentNode.remove();
    
            // Suppression du trip du panier

            const dataCart = {

                _id: finalId
            
            }

            fetch('https://tickethack-back-end.vercel.app/trips/deletecart', {      
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(dataCart)


            })
                .then(response => response.json())
                .then(data => {

                console.log(data);

                })
                .then (() => {

                console.log('Refresh du total nécessaire');

                // document.querySelector('#totalcart').textContent = `Total : ${totalCart} €`

                // Refresh du total

                const priceElements = document.querySelectorAll('.price')
                
                let newtotalprice = 0

                priceElements.forEach(priceelement => {
                
                console.log(newtotalprice);

                newtotalprice = newtotalprice + +(priceelement[i].text.trim().slice(0, this.length-1).trim())

                })

                document.querySelector('#totalcart').textContent = `Total : ${newtotalprice} €`

        })

         // --



    })

}


});

