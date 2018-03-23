import { docSearch } from '../js/docsearch';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../.env"
import "./styles.css"

$(document).ready(function() {
  $('#search-name').click(function() {
    let name = $('#name').val();
    $('#name').val("");
    docLookup (true, name);
  });
});
