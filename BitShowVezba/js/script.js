const cards = $('.cards');
var searchText = '';
var searchText2 = '';
var newID = '';
var autoComp2 = [];
const link = 'https://api.tvmaze.com/search/shows?q=';
const linkID = 'https://api.tvmaze.com/shows/';



// function search() {
//   var input = $('input').val()
//   var apiAdress = 'http://api.tvmaze.com/shows' + input
//   $.ajax({
//       url: apiAdress,
//       method: 'GET',

//   }).done(function (response) {



//   }).fail(function (response) {

//   })
// }
// search()





function landingPage() {
  var apiAdress = 'http://api.tvmaze.com/shows?page=1'
  $.ajax({
    url: apiAdress,
    method: 'GET'
  }).done(function (response) {
console.log(response[0].image.medium)
var item = response[i];

for(i=0;i< 50; i++){

  
}


  }).fail(function (response) {
    console.log(response)
    alert('greska')
  }).always(function (response) {
    console.log('lading page complete');
  })
}
landingPage()

// function landingPage() {
//   var apiAdress = 'http://api.tvmaze.com/shows?page=1'
//   $.ajax({
//     url: apiAdress,
//     method: 'GET',

//   }).done(function (response) {
//     console.log(response)

//     for (var i = 0; i < 50; i++) {

//       var item = response[i];
//       var card = $(`
//                     <div class="col-lg-4 col-md-6 col-12  justify-content-center my-2 p-4">
//                       <div class="card style="width:20rem">
//                       <img class="card-img-top" src="${item.image.medium}" alt="Card image cap">
//                          <div class="card-body">
//                             <a href="./information.html" onclick="showInfo(${item.id})" class="text-decoration-none fs-5 fw-bold" id="${item.id}">${item.name}</a>
                            
//                          </div>
//                       </div>
//                     </div>
//                  `)
//       cards.append(card);
//     }


//   }).fail(function (response) {
//     console.log(response)
//     alert(response)
//   }).always(function (response) {
//     console.log('complete');
//   })
// }

// function pageInfo() {
//   var apiAdress = 'http://api.tvmaze.com/shows/:id/seasons'
//   $.ajax({
//     url: apiAdress,
//     method: 'GET',

//   }).done(function (response) {
//     console.log(response)


//     var item = response[i];
//     var card = $(`
//                    ${item.id}">${item.name}</a>
                       
//                  `)
//     cards.append(card);



//   }).fail(function (response) {
//     console.log(response)
//     alert(response)
//   })
// }



// // Search filed

// function inputSearch() {
//   var req = $.ajax({
//     url: `${link}${searchText2}`,
//     method: 'GET'
//   })

//   req.done(function (response) {
//     console.log(response);
//     autoComp2.length = 0;
//     response.forEach(function (index) {
//       console.log(`Index ${index}`);
//       var newItem = index.show.name;
//       autoComp2.push({ id: index.show.id, name: newItem });
//     })
//     autoComp2.length = 10;

//   }).fail(function (response) {
//     console.log(response)

//   }).always(function (response) {
//     console.log('search zahtev zavsen');
//   })

// }
// inputSearch();




// $(document).ready(function () {
//   $('#serachInput').change(function () {
//     searchText = this.value;
//     if (searchText == '') {
//       searchText = 'a';
//     }
//     landingPage();
//   });

//   searchText = 'a';
//   landingPage();


//   $('#serachInput').keyup(function () {
//     searchText2 = this.value;
//     inputSearch();
//   });

//   $("#serachInput").autocomplete({
//     source: function (req, resp) {
//       resp($.map(autoComp2, function (value, key) {
//         return {
//           label: value.name,
//           value: value.id
//         }
//       }))
//     },
//     select: function (event, ui) {
//       $('#serachInput').html('');
//       sessionStorage.setItem('numberID', ui.item.value);
//       location.assign('./information.html');
//     }
//   });
// });

// function showInfo(event) {
//   var id = event;
//   sessionStorage.setItem('numberID', id);

// }
