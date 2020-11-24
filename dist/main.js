$("#button").on('click', function() {
    const ingredient = $("#input").val();
    $.get(`/recipes/${ingredient}`, function(res){
        const result = JSON.parse(res).results;
        const recipes = result.map(r => {return {
            ingredients: r.ingredients,
            title: r.title,
            thumbnail: r.thumbnail,
            href: r.href
        }});
        console.log(recipes);
    })
})