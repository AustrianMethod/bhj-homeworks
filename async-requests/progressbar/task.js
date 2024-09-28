const progress = document.getElementById( 'progress' );
const file = document.getElementById( 'file' );
const form = document.getElementById( 'form' );

form.onsubmit = ( e ) => {
    e.preventDefault();
    const downFile = file.files[0];
    if ( downFile ) {
        const formData = new FormData(form);
        const request = new XMLHttpRequest();
        request.open( 'POST',  form.action );
        request.upload.onprogress = ( e ) => {
            progress.value = ( e.loaded/e.total ).toFixed( 2 );
        } 
        request.send( formData );
    }
}

