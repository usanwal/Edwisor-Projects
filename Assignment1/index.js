$(document).ready(() => {


$(".panel1").hide();
$(".panel2").hide();
$(".panel3").hide();
$("#accordion1").click(() => {

$(".panel1").show();
$(".panel2").hide();
$(".panel3").hide();

})

$("#accordion1").dblclick(() => {

$(".panel1").hide();
$(".panel2").hide();
$(".panel3").hide();

})


$("#accordion2").click(() => {

$(".panel2").show();
$(".panel1").hide();
$(".panel3").hide();

})


$("#accordion2").dblclick(() => {

$(".panel1").hide();
$(".panel2").hide();
$(".panel3").hide();

})

$("#accordion3").click(() => {

$(".panel3").show();
$(".panel2").hide();
$(".panel1").hide();

})

$("#accordion3").dblclick(() => {

$(".panel1").hide();
$(".panel2").hide();
$(".panel3").hide();

})

}
)