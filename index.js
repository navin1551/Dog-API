//function for when user submits number of dogs by hitting "click" button

function numberSubmitHandle() {
    $('.selection-form').on('submit', function(event){
        event.preventDefault();
        console.log('test');
        $('.question-area').hide();
        getDogImage();
    })
}



//function to retrieve the number of dog images submitted from API

function getDogImage(){
    let dogNumber = $('#user-input').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        $('.result-area').show();
}




//function to display requested number of dog images to DOM

function displayImages(){
    $('.dog-pics').replaceWith(
        `<img src="${responseJson.message}" class="dog-pics">`);
}



$(numberSubmitHandle);