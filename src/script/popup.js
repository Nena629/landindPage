import $ from "jquery"
import "magnific-popup";


$(document).ready(function(){
  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

})
