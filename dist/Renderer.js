class Renderer{
    
    render(data) {
        $('#recipes-container').empty();
        data.forEach(d => {
            const source = $('#recipes-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template(d);
            $('#recipes-container').append(newHTML);
        })
    }
}

const renderer = new Renderer;