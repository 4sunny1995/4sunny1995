$(document).ready(function(){
    // Get the modal
    // var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    $(".img").on('click',function(){
        $("#myModal").css('display',"block");
        var img = $(this).attr('src')
        $("#showimg").attr("src",img)
        // modalImg.src = this.src;
        // captionText.innerHTML = this.alt;
    })
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    $("#close").on('click',function() {
        $("#myModal").css('display','none')
    })
})