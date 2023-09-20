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

    } else {
    
        console.log('Résultats disponibles')

    
    }

 });


 