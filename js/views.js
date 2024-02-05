const Model = Backbone.Model.extend({
    defaults: {
        background: 'beze',
        height: '1',
    }
});


const CakeCollection = Backbone.Collection.extend({
    model: Model
});

const cakeCollection = new CakeCollection([{
    color: 'red',
}, {color: 'blue'}, {color: 'yellow'}, {}, {}]);


const TableLayerView = Backbone.View.extend({
    events: {
        "change .size": "changeHeight",
        "change .changeLayer": "changeLayer",
        "click .deleteRow": "deleteLayer",
    },

    tagName: 'tr',
    initialize() {
        this.template = _.template($('#viewTableLayer').html())
        this.listenTo(this.model, 'destroy', this.remove)
    },
    render() {
        const renderedHTML = this.template({
            background: this.model.attributes.background,
            height: this.model.attributes.height
        })
        return this.$el.html(renderedHTML);
    },

    deleteLayer(){
        this.model.destroy()
    },

    changeHeight(event) {
        this.model.set({
            height:
                +(event.target.value)
        })
    },

    changeLayer(event) {
        console.log(event.target.value)
        this.model.set({
            background:
            event.target.value
        })

        this.$('.changeLayer').val(event.target.value)
this.render()
    },
})

const TableShowView = Backbone.View.extend({
    tagName: 'div',
    initialize() {
        this.template = _.template($('#viewShowLayer').html())
        this.listenTo(this.model, 'destroy', this.remove)
    },
    render() {
        const renderedHTML = this.template({
            background: `images/${this.model.attributes.background}.jpg`,
            height: (this.model.attributes.height) * 70 + 'px'
        })
        return this.$el.html(renderedHTML);
    }
})





