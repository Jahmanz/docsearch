import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#searchdoc").submit(function(event) {
    event.preventDefault();
    $("#errorMessage").text("");

 let docsearch = $("#docsearch").val();

$.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docsearch}&location=45.522,-122.682,100&skip=2&limit=10&user_key=` + process.env.API_KEY).then(function(response){
      console.log(response);

  if(response.data.length === 0)
      {
    $("#results").text("No Doctors match that search. Please try again!");
      }

  for(let i = 0; i < response.data.length; i++)
      {
        $("#results").append(`<div class = "border"><h3>${response.data[i].practices[0].name} </h3>
          <br>
          <h2>Specialty: ${response.data[i].specialties[0].name} </h2>
          <br>
          <h2> ${response.data[i].practices[0].visit_address.street},
          ${response.data[i].practices[0].visit_address.city},
          ${response.data[i].practices[0].visit_address.state}
          ${response.data[i].practices[0].visit_address.zip} </h2>
          <br>
        <h2> Phone: ${response.data[i].practices[0].phones[0].number} </h2>
        <br>
        <h2> Accepting Patients:  ${response.data[i].practices[0].accepts_new_patients} </h2>
        <br></div>`);
    }


  }).fail(function(error) {
       $("#errorMessage").text("No Doctors match that search. Please try again!" + `${error.responseText}`);
     });

     $("#docsearch").val("");
   });


  $("#searchspecialty").submit(function(event) {
    event.preventDefault();
    $("#errorMessage").text("");

  let specialtysearch = $("#specialtysearch").val();

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${specialtysearch}&location=45.522,-122.682,100&skip=2&limit=10&user_key=` + process.env.API_KEY).then(function(response){
      console.log(response);

  if(response.data.length === 0)
      {
    $("#results").text("No Doctors match that search. Please try again!");
      }
  for(let i = 0; i < response.data.length; i++)
      {
        $("#results").append(`<div class = "border"><h3>${response.data[i].practices[0].name} </h3>
          <br>
          <h2>Specialty: ${response.data[i].specialties[0].name} </h2>
          <br>
          <h2> ${response.data[i].practices[0].visit_address.street},
          ${response.data[i].practices[0].visit_address.city},
          ${response.data[i].practices[0].visit_address.state}
          ${response.data[i].practices[0].visit_address.zip} </h2>
          <br>
        <h2> Phone: ${response.data[i].practices[0].phones[0].number} </h2>
        <br>
        <h2> Accepting Patients:  ${response.data[i].practices[0].accepts_new_patients} </h2><br></div>`);
    }


  }).fail(function(error) {
     $("#errorMessage").text("No Doctors match that search. Please try again!" + `${error.responseText}`);
   });

   $("#specialtysearch").val("");
 });
});
