define(['Vue','../data/countries.js','../data/profile/services.js','../data/profile/skills.js','../data/profile/experience.js','../data/profile/language.js'],function(Vue) {
   
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

            // skill 数据
            skillsData : skillsData,

            // experience 数据
            experienceData : experienceData,

            // language 数据
            languageData : languageData,

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

            // 专属方法
            /*
                添加服务
             */
            ServiceAdd:function(){
                var data = {
                    origin : {
                        name : this.addServiceName,
                        price : this.addServicePrice,
                        content : this.addServiceContent
                    },
                    result:{
                        name : this.addServiceName,
                        price : this.addServicePrice,
                        content : this.addServiceContent
                    },
                    hideOrigin : true
                };
                this.servicesData.push(data);

                // 清空表单
                this.addServiceName = '';
                this.addServicePrice = '';
                this.addServiceContent = '';
            },

            /**
             * 添加技能
             */
            SKillAdd:function(){
                var data = {
                    origin : {
                        name : this.addSkillName
                    },
                    result:{
                        name : this.addSkillName
                    },
                    hideOrigin : true
                };
                this.skillsData.push(data);
                this.addSkillName = '';
            },

            /**
             * 添加经验
             */
            ExperienceAdd:function(){
                var data = {
                    origin : {
                        position : this.addExperienceName,
                        company: this.addExperienceCompany,
                        startTime:{
                            month:this.addExperienceStartMonth,
                            year:this.addExperienceStartYear
                        },
                        lastTime:{
                            month:this.addExperienceLastMonth,
                            year:this.addExperienceLastYear
                        },
                        content:this.addExperienceContent
                    },
                    result:{
                        position : this.addExperienceName,
                        company:this.addExperienceCompany,
                        startTime:{
                            month:this.addExperienceStartMonth,
                            year:this.addExperienceStartYear
                        },
                        lastTime:{
                            month:this.addExperienceLastMonth,
                            year:this.addExperienceLastYear
                        },
                        content:this.addExperienceContent
                    },
                    hideOrigin : true
                };
                this.experienceData.push(data);
                this.addExperienceName = '';
                this.addExperienceCompany = '';
                this.addExperienceStartMonth = '';
                this.addExperienceStartYear = '';
                this.addExperienceLastMonth = '';
                this.addExperienceLastYear = '';
                this.addExperienceContent = '';



            }
        }
    })

});