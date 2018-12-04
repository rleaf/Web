/* 
Available as a WordPress plugin - https://wordpress.org/plugins/snow-flurry/ 
*/

jQuery(document).ready(function($){
  
  $(document).snowFlurry({
        maxSize: 5,
        numberOfFlakes: 25,
        minSpeed: 10,
        maxSpeed: 15,
        color: '#fff',
        timeout: 0
    });
  
});