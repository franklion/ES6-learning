function saveFile( url, data ) {
    $.ajax( {
        url,
        data,
        method : 'POST'
    } )
}

const url  = 'http://fileupload.com';
const data = { animal : 'monkey' }

saveFile( url, data );