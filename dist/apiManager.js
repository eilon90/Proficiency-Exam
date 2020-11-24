class APIManager {
    constructor() {
        this.data = {
            recipes: []
        };
    }

    getrecipe = (ingredient, func) => {
        this.data.recipes = [];
        $.get(`/recipes/${ingredient}`, res => {
            res.forEach(r => this.data.recipes.push(r));
            func(this.data);
        })
    }
}