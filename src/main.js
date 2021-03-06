import { pingPong } from "./ping-pong";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";

$(document).ready(function () {
  $("#ping-pong-form").submit(function (event) {
    event.preventDefault();
    const goal = $("#goal").val();
    const output = pingPong(goal);
    output.forEach(function (element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
