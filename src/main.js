import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#finddoctor').click(function() {
    let doctor = $('#docsearch').val();
    $('#docsearch').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.522,-122.682,100&skip=2&limit=10&user_key=772567d7e5113ceaeea1ac0b1cd56630`

    console.log(url);
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) { //hoisted, it can be declared AFTER it is called
    // getElements = function(response) { //unhoisted function, it is declared as a variable IN ITS POSITION
      $('.showDoctor').text(`Name ${doctor} ${response.practices.name}`);
      $('.showAddress').text(`Address: ${response.visit_address.street}`);
    }
  });
});
