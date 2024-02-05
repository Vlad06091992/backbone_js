const prices = {
    beze: 100,
    biscuit: 60,
    curd: 50
}

var BuilderSettingsView = Backbone.View.extend({
    el: '#tmpl',

    events: {
        "click .addLayer": "addLayer",
    },

    addLayer() {
        this.collection.add({})
    },

    initialize() {
        this.render();
        this.listenTo(this.collection, 'all', this.render)
    },

    render() {
        let price = 0
        this.template = _.template($('#cakeBuilder').html());
        this.$el.html(this.template);
        this.collection.each((model, index) => {
            const tableLayerView = new TableLayerView({model, index});
            const showView = new TableShowView({model, index});
            this.$('.tbody').append(tableLayerView.render());
            this.$('.cake').append(showView.render());
            console.log(model.attributes.background)
            price += prices[model.attributes.background] * model.attributes.height

        });
        this.$('.price').text(`Цена ${price} рублей`)
    }
});

