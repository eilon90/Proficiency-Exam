class APIManager {
    constructor() {
        this.recipes = [];
    }

    getrecipe = (ingredient, func) => {
        this.recipes = [];
        $.get(`/recipes/${ingredient}`, res => {
            const result = JSON.parse(res).results;
            const fixedData = result.map(r => {return {
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            }});
            fixedData.forEach(f => this.recipes.push(f));
            func(this.recipes);
        })
    }
}

const apiManager = new APIManager;