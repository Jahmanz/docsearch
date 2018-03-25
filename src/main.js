import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#searchform").submit(function(event) {
    event.preventDefault();
    $("#output").text("");

    let docsearch = $("#docsearch").val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docsearch}&location=45.522,-122.682,100&skip=2&limit=10&user_key=772567d7e5113ceaeea1ac0b1cd56630`).then(function(response){
      console.log(response);

      if(response.data.length === 0)
      {
        $("#output").text("No Doctors match that search. Please try again!");
      }

      for(let i = 0; i < response.data.length; i++)
      {
        $("#results").append(`<h3>${response.data[i].practices[0].name} </h3>
          <h2> Specialty: ${response.data[i].specialties[0].name} </h2>
          <h2> Phone: ${response.data[i].practices[0].phones[0].number} </h2>
          <h2> ${response.data[i].practices[0].visit_address.street},
          ${response.data[i].practices[0].visit_address.city},
          ${response.data[i].practices[0].visit_address.state}
          ${response.data[i].practices[0].visit_address.zip} </h2>
          <h2> Accepting new Patients: ${response.data[i].practices[0].accepts_new_patients} </h2>`);
        }
      }).fail(function(error) {
        $("#errors").text("Sorry, there's not a doctor that matches your criteria " + `${error.responseText}`);
      });
      $("#docsearch").val("");
    });
  });
