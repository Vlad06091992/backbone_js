const RocketModel = Backbone.Model.extend({
    defaults: {
        name: "name",
        description: "description",
        size: 100
    },
    validate(attrs) {
        if (attrs.size > 300 || attrs.size < 1) {
            debugger
            console.log('incorrect size')
            return 'incorrect size'
        }
    }
})

const RocketsCollection = Backbone.Collection.extend({
    model: RocketModel,
    sortParam: 'size',
    sortMode: 1,
    comparator(a, b) {
        // debugger
        if (a.get(this.sortParam) > b.get(this.sortParam)) return -1 * this.sortMode
        if (a.get(this.sortParam) < b.get(this.sortParam)) return this.sortMode
        return 0
    }
})
