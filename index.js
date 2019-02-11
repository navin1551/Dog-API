//function for when user submits number of dogs by hitting "click" button

function numberSubmitHandle() {
    $('.selection-form').on('submit', function(event){
        event.preventDefault();
        getDogImage();
    })
}



//function to retrieve the number of dog images submitted from API

function getDogImage(){
    let dogNumber = $('#user-input').val();
    $('.dog-pics').empty();
    fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
        .then(response => response.json())
        .then(responseJson => {console.log(responseJson),displayImages(responseJson)});
        $('.result-area').show();
}




//function to display requested number of dog images to DOM

function displayImages(responseJson){
    responseJson.message.forEach(function(img){$('.dog-pics').append(
        `<img src= "${img}" class= ".dog-pics">`)});
}



$(numberSubmitHandle);