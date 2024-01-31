const RocketView = Backbone.View.extend({
    // events: {
    //     "click .changeSize": "changeSize",
    //     "click .deleteRow": "deleteRow",
    //     "blur .desc": "editValue",
    //     "blur .name": "editValue",
    //     "blur .size": "editValue",
    // },
    //
    // initialize() {
    //     this.template = _.template($('#viewRocket').html())
    //     this.listenTo(this.model, "change", this.render)
    //     this.listenTo(this.model, "destroy", this.remove)
    //     this.render();
    // },
    //
    // deleteRow() {
    //     this.model.destroy()
    // },
    //
    // editValue() {
    //     // debugger
    //     this.model.set({
    //         name: this.$('.name').text(),
    //         description: this.$('.desc').text(),
    //         size:parseInt(this.$('input.size').attr('value'))
    //     })
    // },
    //
    // changeSize(event){
    //     this.model.set({
    //         size: this.model.get('size') + +event.target.dataset.rel
    //     },{validate:true})
    // },
    //
    // render() {
    //     const json = this.model.toJSON()
    //     const view = this.template(json)
    //     this.$el.html(view)
    //     console.log(json)
    // }


    events: {
        "click .changeSize": "changeSize",
        "click .deleteRow": "deleteRow",
        "blur .desc": "editValue",
        "blur .name": "editValue",
        "blur .size": "editValue",
    },

    initialize() {
        this.template = _.template($('#viewRockets').html())
        this.render();
    },

    deleteRow() {
        this.model.destroy()
    },

    editValue() {
        // debugger
        this.model.set({
            name: this.$('.name').text(),
            description: this.$('.desc').text(),
            size:parseInt(this.$('input.size').attr('value'))
        })
    },

    changeSize(event){
        this.model.set({
            size: this.model.get('size') + +event.target.dataset.rel
        },{validate:true})
    },

    render() {
        const json = this.model.toJSON()
        const view = this.template(json)
        this.$el.html(view)
        console.log(json)
    }


});