console.log('Hey from JS');


//jquery load
$( document ).ready(onReady);

// event listeners
function onReady () {
    console.log('JQ is Ready');

    // buttons
    $('#addBtn').on( 'click' , addBtn )
    $('#subtractBtn').on( 'click' , subtractBtn ) 
    $('#multiplyBtn').on( 'click' , multiplyBtn )
    $('#divideBtn').on( 'click' , divideBtn )
    $('#equalBtn').on( 'click' , equalBtn )
    $('#equalBtn').on( 'click' , displayResults )
    $('#clearBtn').on( 'click' , clearBtn )

    //inputs
    $('#firstNumberInput').keyup( firstNumberInput )
    $('#secondNumberInput').keyup( secondNumberInput )
}


// POST Routes
function addBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: $('#addBtn').data(),
    })
    console.log($('#addBtn').data());
}

function subtractBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data:  $('#subtractBtn').data(),
    })
    console.log($('#subtractBtn').data());
}

function multiplyBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: $('#multiplyBtn').data(),
    })
    console.log($('#multiplyBtn').data());
}

function divideBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: $('#divideBtn').data(),
    })
    console.log($('#divideBtn').data());
}

function equalBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: $('#equalBtn').data(),
    })
    console.log($('#equalBtn').data());
}

function clearBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: $('#clearBtn').data(),
    })
    console.log($('#clearBtn').data());
    $('#firstNumberInput').val('')
    $('#secondNumberInput').val('')
}

function firstNumberInput(event) {
    // console.log($('#firstNumberInput').val(), event);
    $.ajax({
        method: 'POST',
        url: '/firstNumber',
        data: { 
            number: $('#firstNumberInput').val()
        }
    })
  
}

function secondNumberInput(event) {
    // console.log($('#secondNumberInput').val(), event);
    $.ajax({
        method: 'POST',
        url: '/secondNumber',
        data: {
            number: $('#secondNumberInput').val()
        }
    })
  
}

// GET Routes
function displayResults (){
    $.ajax({
        method: 'GET',
        url: '/results',
    }).then(function (response){
        // appendHistoryLog(response);
        // appendResult();
        console.log('This is the result from the server: ', response);
        
    })

}

