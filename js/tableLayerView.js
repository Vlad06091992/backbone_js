const CakeModel = Backbone.Model.extend({
    // Ваш код модели здесь
});

const TableLayerView = Backbone.View.extend({
    tagName: 'tr',
    // el:'.tbody',
    initialize() {
        this.template = _.template($('#viewTableLayer').html())
    },
    render() {
        return this.$el.html(this.template)
    }
})




const CakeCollection = Backbone.Collection.extend({
    // Ваш код коллекции здесь
});

const arr = [{},{}]

const cakeCollection = new CakeCollection(arr);
