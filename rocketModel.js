const RocketModel = Backbone.Model.extend({
    defaults:{ name:"name",
        description:"description",
        size:100},
    validate(attrs) {
        if(attrs.size > 300 || attrs.size < 1){
            console.log('incorrect size')
            return 'incorrect size'
        }
    }
})