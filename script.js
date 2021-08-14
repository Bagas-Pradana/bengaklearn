const tagphpbuka = document.querySelectorAll("span.tagphpbuka");
tagphpbuka.forEach((tagphpbukasatuan) => {
    tagphpbukasatuan.innerHTML = "&#60;&#63;php";
});
const tagphptutup = document.querySelectorAll("span.tagphptutup");
tagphptutup.forEach((tagphptutupsatuan) => {
    tagphptutupsatuan.innerHTML = "&#63;&#62;";
});
const taghtmlbuka = document.querySelectorAll("span.taghtmlbuka");
taghtmlbuka.forEach((taghtmlbukasatuan) => {
    taghtmlbukasatuan.innerHTML = "&#60;";
});
const taghtmltutup = document.querySelectorAll("span.taghtmltutup");
taghtmltutup.forEach((taghtmltutupsatuan) => {
    taghtmltutupsatuan.innerHTML = "&#62;";
});
const tagbr = document.querySelectorAll("span.tagbr");
tagbr.forEach((tagbrsatuan) => {
    tagbrsatuan.innerHTML = "&#60;br&#62;";
});
