const RocketsView = Backbone.View.extend({
    events: {
    'click .addOne':'addObject',
    'click .toJSON':'toJSON',
    'click [data-sort]':'renderList',
    },

    toJSON(){
        let json = this.coll.toJSON();
        this.$('.jsonOut').html(JSON.stringify(json));
    },

    addObject() {
        this.coll.add({});
    },

    addOne(model) {
        const view = new RocketView({model});
        this.$('.rocketsList').append(view.render());
    },

    initialize() {
        this.template = _.template($('#viewRockets').html())
        this.$el.html(this.template)
        this.coll = new RocketsCollection()
        this.listenTo(this.coll,'all',this.render)
        this.listenTo(this.coll,'add',this.addOne)
    },

    renderList: function (e) {
        this.$('.rocketsList').html('');
        this.coll.sortParam = $(e.target).attr('data-sort');
        this.coll.sortMode = this.coll.sortMode*(-1);
        this.coll.sort();
        var that = this;
        this.coll.each(function(model,index){
            that.addOne(model);
        });
    },

    render() {
        let size = 0
        this.coll.each((el,i)=>{
            size += el.get('size')
        })
        this.$('.totalItems').text(this.coll.length)
        this.$('.totalSize').text(size)
    }
});