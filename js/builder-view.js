var BuilderView = Backbone.View.extend({
    el: '#tmpl',

    initialize() {
        this.render();
    },

    render() {
        this.template = _.template($('#cakeBuilder').html());
        this.$el.html(this.template);
        this.collection.each(() => {
            const tableLayerView = new TableLayerView({});
            this.$('.tbody').append(tableLayerView.render());
        });
    }
});

