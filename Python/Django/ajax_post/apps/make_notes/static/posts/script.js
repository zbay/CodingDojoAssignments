$('form').submit(function(e){
    e.preventDefault();
    console.log($(this).serialize()); 
    $.ajax({
        url: e.target.action, // form's action attribute, a URL on the API
        method: 'post',
        data: $(this).serialize(), // serialized form data
        success: function(response){
            console.log(response)
            $('#notes').html(renderNotes(response)) // the server returns all the notes. render them
        }
    })
    $(this)[0].reset(); //reset the first element of the field, the text input
})
$().ready(function(){ // show all existing notes, on load
    $.ajax({
        url: '/get_saved',
        method: 'get',
        success: function(response){
            $('#notes').html(renderNotes(response))    
        }
    })
})
function renderNotes(notes){ // render all notes in a common format
    var el = document.createElement('div');
    for(post in notes){
        var n = document.createElement('div');
        n.setAttribute('class', 'note');
        t = document.createElement('h2');
        t.innerText = notes[post].fields.content;
        n.appendChild(t);
        el.appendChild(n);
    }
    return el
}