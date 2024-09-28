class Renderer{
    
    render(data) {
        $('#recipes-container').empty();
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $('#recipes-container').append(newHTML);
    }
}