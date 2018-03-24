import { docSearch } from '../js/docsearch';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../.env";
import "./styles.css";

$(document).ready(function() {
  $('#search-docname').click(function() {
    let name = $('#docname').val();
    $('#docname').val("");
    docSearch (true, name);
  });
