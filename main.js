// создаем объект
const app = {};

$(function () {

//events
    const object = {};
    _.extend(object, Backbone.Events);
    let callback = function (msg) {
        debugger
        alert("Сработало " + msg);
    };
    object.on("alert", callback);

    object.on("alert", function (msg) {
        console.log(msg)
    });


    //models

    app.MyObject = Backbone.Model.extend({
        defaults: {             //настройки по дефолту
            name: 'name',
            description: '-',
            size: 100
        },
        initialize(){ //функция которая вызывается после создания объекта
            console.log('obj created')
            this.on('change',()=>{
                console.log('obj changed')
                const json = this.toJSON()
                // const json = this.changedAttributes() //выводим лишь изм.аттрибуты
                console.log(json)
            })
        },
        increaseSize(){
            this.set({
                size: this.get('size') + 100
            },{validate:true})                                 //включение валидации
        },
        validate(attrs){                       //валидация на изменение объекта
            console.log(attrs)
            if(attrs.size >= 500) return 'incorrect size'
        }

    }) //функция конструктор
    app.myObject = new app.MyObject({                  //создание экземпляра
        name: 'Rocket',
        description: 'Super',
        isChanged:false

    })

    app.myObject.set({ //изменяем объект
        size: 100,
        isChanged: true
    })

    const json = app.myObject.toJSON()

    $('.btn').live('click', ()=>{
        app.myObject.increaseSize()
    })


    const compiled = _.template("hello: <%= name %>");


    $('.template').append(compiled({name: 'moe'}))

    //
    // //создаем прототип нашего объекта или модели
    // app.MyObject = Backbone.Model.extend({
    //     //атрибуты по умолчанию
    //     defaults: {
    //         name: "name",
    //         description: "-",
    //         size: 100
    //     },
    //
    //     //инициализируем объект после создания
    //     initialize: function() {
    //         console.log('obj created');
    //
    //         //слушаем изминения объекта
    //         this.on('change',function(){
    //             console.log('obj changed');
    //             //получаем только измененную часть объекта
    //             var json = this.changedAttributes();
    //             console.log(json);
    //         });
    //     },
    //
    //     //валидатор
    //     validate: function(attrs) {
    //         if (attrs.size>1000) {
    //             console.log('Incorrect size');
    //             return 'Incorrect size';
    //         }
    //         //если ошибок нет, то ничего не возвращаем
    //     },
    //
    //     //добавляем функцию, увеличивающую size
    //     increaseSize: function() {
    //         this.set({
    //             size: this.get('size')+100
    //         },{
    //             validate:true //проверяем на валидность
    //         });
    //     }
    // });
    //
    // //создаем объект
    // app.myObject = new app.MyObject({
    //     name: "rocket",
    //     description: "super"
    // });
    //
    // //записываем новые атрибуты
    // app.myObject.set({
    //     size: 250,
    //     type: 'active'
    // });
    //
    // //увеличиваем size объекта по нажатию на кнопку
    // $('#myButton').live('click',function(){
    //     app.myObject.increaseSize();
    // });

});

console.log(1)