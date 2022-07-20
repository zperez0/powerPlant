import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {stateControl, changeState} from './src/plant.js'

$(document).ready(function () {
  const newState = stateControl(blueFood);
  $("soil-value").text(`Soil: ${newState.soil}`);

  // for demostration purposes only (does not do anything in this app)
  //to see the current state
  $("#show-state").click(function () {
    // call stateControl() without agruments to see current state
    const currentState = stateControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
  });
});
