$("#button").on('click', function() {
    const ingredient = $("#input").val();
    apiManager.getrecipe(ingredient, renderer.render);
})
