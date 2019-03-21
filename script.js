(function(){

  var slideIndex = 1;
  var slideCount=1;
  var slides = document.getElementsByClassName("mySlides");
  constructPagination(slideCount);
  showSlides(slideIndex,slideCount);

  document.getElementById("countSelector").addEventListener("change",function(e){
    
    slideCount=Number(e.target.value);
    constructPagination(slideCount);
    showSlides(slideIndex,slideCount);
  })

  document.getElementById("prev").addEventListener("click",function(e){
    showSlides(slideIndex -=1,slideCount);
  });

  document.getElementById("next").addEventListener("click",function(e){
    showSlides(slideIndex +=1,slideCount);
  });

  function constructPagination(slideCount){

    document.getElementById("pagination").innerHTML="";
    for (var k = 0; k < Math.ceil(slides.length / slideCount); k++) {
      var dots=document.createElement('span');
      dots.setAttribute('class','dot');
     // dots.setAttribute("onclick",`showSlides(${slideIndex=k+1})`);
      dots.onclick= (function(k) {
        return function() {
           showSlides(slideIndex=k+1,slideCount);
        };
      })(k);
      document.getElementById("pagination").appendChild(dots)
    }
  }

  function showSlides(n,slideCount) {
    var i;
    var startIndex=0;
    var dots = document.getElementsByClassName("dot");
    if (n > Math.ceil(slides.length/ slideCount)) {slideIndex = 1}    
    if (n < 1) {slideIndex = Math.ceil(slides.length/ slideCount)}
    for (i = 0; i < slides.length; i++) {
      var width=(100/slideCount)-2;
      slides[i].style.width=`${width}%`;
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slideIndex > Math.floor(slides.length /slideCount)){
      startIndex=(slideCount*(slideIndex-1))-(slideCount -(slides.length % slideCount));
    }else{
      startIndex=slideCount*(slideIndex-1);
    }
    
    for(var j=startIndex;j<slideIndex*slideCount && j<slides.length;j++){
        slides[j].style.display = "inline-block";
    }

    dots[slideIndex-1].className += " active";
    
  }
})();