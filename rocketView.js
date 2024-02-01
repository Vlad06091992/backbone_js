const RocketView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        "click .changeSize": "changeSize",
        "click .deleteRow": "deleteRow",
        "blur .desc, .name, .size": "editValue",
    },

    changeSize(event) {
        let res = this.model.set({
            size: +this.$('.size').attr('value') + +event.target.dataset.rel
        },{validate: true})
        if(!res){
            debugger
            this.render()
        }
    },

    deleteRow() {
        this.model.destroy()
    },

    editValue() {
        let res =  this.model.set({
            name: this.$('.name').text(),
            description: this.$('.desc').text(),
            size: +(this.$('.size').attr('value'))
        }, {validate: true})

        if (!res) {
            debugger
            this.render()
        }

    },

    initialize() {
        this.template = _.template($('#viewRocket').html())
        this.listenTo(this.model, 'change', this.render)
        this.listenTo(this.model, 'destroy', this.remove)
        this.render();
    },
    render() {
        const json = this.model.toJSON()
        const view = this.template(json)
       return  this.$el.html(view)
    }
})