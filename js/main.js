new Vue({
    el: "#page",
    data: {
        cars: cars, //для локальной версии
        baskets: [
        {
            "id": 1,
            "quantity": 5,
        },
        ],
        search: "",
        phoneVisibility: false,
        modalVisibility: false,
    },
    computed: {
        // розкоментировать перед загрузкой
        // cars: function() {
        //     axios.get("data.json").then(function (response) {
        //         return response
        //     });
        // },
        makes: function() {
            const makes =[]
            for(var i in cars) {
                if (makes.indexOf(cars[i].make) === -1) {
                    makes.push(cars[i].make);
                }
            }
            return makes
        },
        filterCars: function() {
            var self = this
            return this.cars.filter(function (car) {
                return car.make.toUpperCase().indexOf(self.search.toUpperCase()) > -1 || car.model.toUpperCase().indexOf(self.search.toUpperCase()) > -1
            })
        },
    },
});