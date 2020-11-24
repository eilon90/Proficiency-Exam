$('#button').on('click', function() {
    const ingredient = $("#input").val();
    apiManager.getrecipe(ingredient, renderer.render);
    $("#input").val('');
})

$('body').on('click', '.image', function() {
    const firstIn = $(this).closest('.recipe').find('li').first().text();
    alert(firstIn);
})
