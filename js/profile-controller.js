define(['Vue','../data/countries.js','../data/profile/services.js'],function(Vue) {
    var profileUserVm = new Vue({
        el:"#vue-profile-user",
        data:{
            countries:countriesData,

            // location 数据
            countryData:{
                origin:{
                    country:'China',
                    city:'nanjing',
                },
                result:{
                    country:'China',
                    city:'nanjing',
                },
                hideOrigin : true
            },

            // position 数据
            positionData:{
                origin:{
                    position:'Law Consultant'
                },
                result:{
                    position:'Law Consultant'
                },
                hideOrigin : true
            },

            // summary 数据
            summaryData:{
                origin:{
                    summary:"Compliance Consultant, Founder and CEO of ComplyEthic Consulting LLC, a firm dedicated to providing professional compliance support and cost-effective solutions tailored to meet company needs in a rapidly changing world. Leona led product compliance policy and process development for a Fortune 100 retailer. She's able to connect legal requirements to operational requirements by working with cross functional groups. "
                },
                result:{
                    summary:"Compliance Consultant, Founder and CEO of ComplyEthic Consulting LLC, a firm dedicated to providing professional compliance support and cost-effective solutions tailored to meet company needs in a rapidly changing world. Leona led product compliance policy and process development for a Fortune 100 retailer. She's able to connect legal requirements to operational requirements by working with cross functional groups. "
                },
                hideOrigin : true
            },

            //  services 数据
            servicesData : servicesData,

            // add 数据
            addServiceName : '',
            addServicePrice : '',
            addServiceContent : '',

        },
        methods:{

            // 公用方法
            hide:function(data){
                data.hideOrigin = false;
            },
            save:function(data){
                for( key in data.result ){
                    data.origin[i] = data.result[i];
                }

                // 可以引入ajax
                // var data = data.result,
                //     url = "";

                // $.post(url,data,function(data){
                //     // 提示成功
                // });
                
                data.hideOrigin = true;
            },
            cancel:function(data){
                for( key in data.result ){
                    data.result[i] = data.origin[i];
                }
                data.hideOrigin = true;
            },
            remove:function(data,index){
                data.splice(index, 1)
            },

            // 私有方法
            ServiceAdd:function(){

            }
        }
    })

});