/* global judgeKittens */
"use strict";

//define global variable
var judgeKittens = judgeKittens || {};

//Random Integer func to get random cat pics:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


//call functions after document is ready
$(document).ready(function(){

  $.ajax({
    url : 'http://localhost:3000/cats/1',
    type: 'GET',
    data: 'json',
  }).done(function(cat){
    console.log(cat);
    $('#catName').html("<p>Cat Name:" + cat.name + "</p>");
    $('#catImageId').attr("src", "http://localhost:3000/" + cat.pic);
  }).fail(function(){
    console.log('error is' + error)
  });

  $(".majToggle").click(function(){
    $("div").find(".selectedJudgement").addClass("col-md-3").removeClass("selectedJudgement col-md-5");
    $(this).removeClass("col-md-3").addClass("selectedJudgement col-md-5");
    $("div").find(".toggle").removeClass("cute").addClass("maj");
    $("div").find(".toggleQuestion").html("<h5>Which cat is more majestic?</h5>")
  });

  $(".cuteToggle").click(function(){
    $("div").find(".selectedJudgement").addClass("col-md-3").removeClass("selectedJudgement col-md-5");
    $(this).removeClass("col-md-3").addClass("selectedJudgement col-md-5");
    $("div").find(".toggle").removeClass("maj").addClass("cute");
    $("div").find(".toggleQuestion").html("<h5>Which cat is cuter?</h5>");
  });




}); //<-document ready

//jquery authenticate and get
$(function(){
  $('#get-token').on('click', function(){
    $.ajax('http://localhost:3000/login',{
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: "json",
      method: "POST"
    }).done(function(data, textStatus) {
      $('#token').val(textStatus == 'nocontent' ? 'login failed' : data['token']);
      localStorage.setItem('token', data.token);
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
      console.log(errorThrown);
    });
  });

});
