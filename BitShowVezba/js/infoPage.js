// const linkID = 'https://api.tvmaze.com/shows/';
// var newID = sessionStorage.getItem('numberID');


// //INFOPAGE

// function infoPage(){

//     $.ajax({
//         url:`${linkID}${newID}`,
//         method:'GET'
//     }).done(function(response){
//     //console.log(response);

//         var info = $('.infoMore')
        
//         var item = response.image.medium;
            

//         var infoShow = $( `
//         <div id="InfoDate">
//            <h1 class="text-center pt-2"><span id="title"></span> ${response.name}</h1>
//             <div class="row">
//                 <div class="col-lg-6 col-md-4 col-sm-12" style="margin-top:2.5rem">
//                     <img src="${item}" class="card-img-top">
//                 </div>
//                 <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top:2.5rem">
//                     <h3>Sesons</h3>
//                     <div id="seasons" class="mt-2"></div>
//                         <h3 class="pt-2">Cast</h3>
//                     <div id="cast"></div>
//                 </div>
//             </div>
//             <h3 class="mt-2">Show Details</h3>
//             <p>${response.summary}</p>
//         </div>
//          `); 

//         info.append(infoShow); 

//     }).fail(function(response){
//         //console.log(response)

//     }).always(function(response){
//         console.log('zahtev zavrsen');
//     })
// }

// infoPage()

// //SEASONE

// function seasone(){

//     $.ajax({
//         url:`${linkID}${newID}/seasons`,
//         method:'GET'
//     }).done(function(response){

//     console.log(response, 'seasone pozvan');
//         var info = $('#seasons')


//         response.forEach(function(response) {
//             var infoShow = $( `
//             <li>${response.premiereDate} - ${response.endDate}</li>
//          `);

//         info.append(infoShow);    
//         });

//     }).fail(function(response){
//         console.log(response)

//     }).always(function(response){
//         console.log(' seasons zahtev zavsen');
//     })
// }
// seasone()

// //CAST

// function cast(){

//     $.ajax({
//         url:`${linkID}${newID}/cast`,
//         method:'GET'
//     }).done(function(response){
        
//         console.log(response);

//         var info = $('#cast');

//         response.forEach(function(response) {
//             if(!response.person){
//                 var infoShow = $( `
//                 <p>No additonal info about the Cast!</p>
//              `);  
//              console.log('Test');
//             } else{
//             var infoShow = $( `
//             <li>${response.person.name}</li>
//             `);  
//             }
//          info.append(infoShow);    
//         });


//     }).fail(function(response){
//         console.log(response)

//     }).always(function(response){
//         console.log('cast zahtev zavsen');
//     })
// }
// cast()