// Récup des trips ajoutés au panier pour valider le bon fonctionnement de la route
 
 
 fetch('https://tickethack-back-end.vercel.app/trips/cart')
 .then(response => response.json())
 .then(cartData => {
   console.log(cartData);

   if (cartData[0]) {

    console.log('Résultats disponibles')

    } else {

    console.log('Panier vide')
    
    }

 });


 