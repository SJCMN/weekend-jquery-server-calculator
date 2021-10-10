console.log('Hey from JS');


//jquery load
$( document ).ready(onReady);

// event listeners
function onReady () {
    console.log('JQ is Ready');
    $('#addBtn').on( 'click' , addBtn )
    $('#subtractBtn').on( 'click' , subtractBtn ) 
    $('#multiplyBtn').on( 'click' , multiplyBtn )
    $('#divideBtn').on( 'click' , divideBtn )
    $('#equalBtn').on( 'click' , equalBtn )
    $('#clearBtn').on( 'click' , clearBtn )
}


// POST Routes
function addBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#addBtn').data(),
        }
    })
    console.log($('#addBtn').data());
}

function subtractBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#subtractBtn').data(),
        }
    })
    console.log($('#subtractBtn').data());
}

function multiplyBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#multiplyBtn').data(),
        }
    })
    console.log($('#multiplyBtn').data());
}

function divideBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#divideBtn').data(),
        }
    })
    console.log($('#divideBtn').data());
}

function equalBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#equalBtn').data(),
        }
    })
    console.log($('#equalBtn').data());
}

function clearBtn(){
    $.ajax({
        method: 'POST',
        url: '/math',
        data: {
            method: $('#clearBtn').data(),
        }
    })
    console.log($('#clearBtn').data());
}
