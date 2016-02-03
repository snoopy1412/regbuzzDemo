define(['Vue','../data/countries.js'],function(Vue) {
    var profileUserVm = new Vue({
        el:"#vue-profile-user",
        data:{
            country:'China',
            countries:countriesData,
            city:'nanjing',
            countryResult:'China',
            cityResult:'nanjing',
            hideOrigin:true
        },
        methods:{
            hide:function(){
                this.hideOrigin = false;
            },
            saveCountry:function(){
                this.countryResult = this.country;
                this.cityResult = this.city;
                this.hideOrigin = true;
            },
            cancelCountry:function(){
                this.country =this.countryResult;
                this.city = this.cityResult;
                 this.hideOrigin = true;
            }
        }
    })

});