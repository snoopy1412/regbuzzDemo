define(['Vue', 'VueComponent', '../../Public/data/countries.js', '../../Public/data/profile/country.js', '../../Public/data/profile/position.js', '../../Public/data/profile/summary.js', '../../Public/data/profile/price.js', '../../Public/data/profile/services.js', '../../Public/data/profile/skills.js', '../../Public/data/profile/experience.js', '../../Public/data/profile/language.js', '../../Public/data/profile/educations.js', '../../Public/data/profile/certificate.js', '../../Public/data/profile/publish.js'], function(Vue, VueComponent) {
    var wordcount = VueComponent.wordcount;

    var profileUserVm = new Vue({
        el: "#vue-profile-user",
        components: {
            wordcount: wordcount
        },
        data: {
            loading: true,
            errorMsg: false,
            /**
             * 页面数据初始化
             * @type {Array}
             */
            countries: [],

            // location 数据
            countryData: {},

            // position 数据
            positionData: {},

            // summary 数据
            summaryData: {},

            // price 数据
            priceData: {},

            //  services 数据
            servicesData: [],

            // skill 数据
            skillsData: [],

            // experience 数据
            experienceData: [],

            // language 数据
            languageData: [],

            // education 数据
            educationsData: [],

            // certificate 数据
            certificateData: [],

            // publish 数据
            publishData: [],


            /**
             * 这一部分是为了初始化add部分数据
             */

            // 服务
            addServiceName: '',
            addServicePrice: '',
            addServiceContent: '',

            // 技能
            addSkillName: '',

            // 经验
            addExperienceName: '',
            addExperienceCompany: '',
            addExperienceStartMonth: '',
            addExperienceStartYear: '',
            addExperienceLastMonth: '',
            addExperienceLastYear: '',
            addExperienceContent: '',

            // 语言
            addLanguageTitle: '',
            addLanguageLevel: '',

            // 教育
            addEducationDegree: '',
            addEducationSchool: '',
            addEducationStartTime: '',
            addEducationEndTime: '',

            // 认证
            addCertificateTitle: '',
            addCertificateAuthority: '',
            addCertificateMonth: '',
            addCertificateYear: '',

            // 证书
            addPublishTitle: '',
            addPublishAgency: '',
            addPublishMonth: '',
            addPublishYear: '',

        },
        created: function() {
            this.countries = countriesData;

            // location 数据
            this.countryData = countryData;

            // position 数据
            this.positionData = positionData;

            // summary 数据
            this.summaryData = summaryData;

            // price 数据
            this.priceData = priceData;

            //  services 数据
            this.servicesData = servicesData;

            // skill 数据
            this.skillsData = skillsData;

            // experience 数据
            this.experienceData = experienceData;

            // language 数据
            this.languageData = languageData;

            // education 数据
            this.educationsData = educationsData;

            // certificate 数据
            this.certificateData = certificateData;

            // publish 数据
            this.publishData = publishData;

            // 初始化模拟  模拟加载
            var self = this;
            setTimeout(function() {
                self.loading = false;
            }, 2000)
        },
        methods: {

            // 公用方法
            hide: function(data) {
                data.hideOrigin = false;
            },
            save: function(data) {
                for (key in data.result) {
                    var text = data.result[key].trim();
                    if (text === '') {
                        this.errorMsg = true;
                        return false;
                    }
                    data.origin[key] = data.result[key];
                }

                // 可以引入ajax
                // var data = data.result,
                //     url = "";

                // $.post(url,data,function(data){
                //     // 提示成功
                // });

                data.hideOrigin = true;
            },
            cancel: function(data) {
                for (key in data.origin) {
                    data.result[key] = data.origin[key];
                }

                data.hideOrigin = true;
            },

            remove: function(data, index) {
                data.splice(index, 1)
                    // 可引入ajax 进行删除处理
            },

            // 专属方法
            /*
                添加服务
             */
            ServiceAdd: function() {
                if (this.addServiceName === '' || this.addServicePrice === '' || this.addServiceContent === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        name: this.addServiceName,
                        price: this.addServicePrice,
                        content: this.addServiceContent
                    },
                    result: {
                        name: this.addServiceName,
                        price: this.addServicePrice,
                        content: this.addServiceContent
                    },
                    hideOrigin: true
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
            SKillAdd: function() {
                if (this.addSkillName === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        name: this.addSkillName
                    },
                    result: {
                        name: this.addSkillName
                    },
                    hideOrigin: true
                };
                this.skillsData.push(data);
                this.addSkillName = '';
            },

            /**
             * 添加经验
             */
            ExperienceAdd: function() {
                if (this.addExperienceName === '' || this.addExperienceCompany === '' || this.addExperienceStartMonth === '' || this.addExperienceStartYear === '' || this.addExperienceLastMonth === '' || this.addExperienceLastYear === '' || this.addExperienceContent === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        position: this.addExperienceName,
                        company: this.addExperienceCompany,
                        startTime: {
                            month: this.addExperienceStartMonth,
                            year: this.addExperienceStartYear
                        },
                        lastTime: {
                            month: this.addExperienceLastMonth,
                            year: this.addExperienceLastYear
                        },
                        content: this.addExperienceContent
                    },
                    result: {
                        position: this.addExperienceName,
                        company: this.addExperienceCompany,
                        startTime: {
                            month: this.addExperienceStartMonth,
                            year: this.addExperienceStartYear
                        },
                        lastTime: {
                            month: this.addExperienceLastMonth,
                            year: this.addExperienceLastYear
                        },
                        content: this.addExperienceContent
                    },
                    hideOrigin: true
                };
                this.experienceData.push(data);
                this.addExperienceName = '';
                this.addExperienceCompany = '';
                this.addExperienceStartMonth = '';
                this.addExperienceStartYear = '';
                this.addExperienceLastMonth = '';
                this.addExperienceLastYear = '';
                this.addExperienceContent = '';
            },

            /**
             * 添加语言
             */
            LanguageAdd: function() {
                if (this.addLanguageTitle === '' || this.addLanguageLevel === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        title: this.addLanguageTitle,
                        level: this.addLanguageLevel
                    },
                    result: {
                        title: this.addLanguageTitle,
                        level: this.addLanguageLevel
                    },
                    hideOrigin: true
                };
                this.languageData.push(data);
                this.addLanguageTitle = '';
                this.addLanguageLevel = '';
            },

            /**
             * 添加教育
             */
            educationAdd: function() {
                if (this.addEducationDegree === '' || this.addEducationSchool === '' || this.addEducationStartTime === '' || this.addEducationEndTime === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        degree: this.addEducationDegree,
                        school: this.addEducationSchool,
                        startTime: this.addEducationStartTime,
                        endTime: this.addEducationEndTime
                    },
                    result: {
                        degree: this.addEducationDegree,
                        school: this.addEducationSchool,
                        startTime: this.addEducationStartTime,
                        endTime: this.addEducationEndTime
                    },
                    hideOrigin: true
                };
                this.educationsData.push(data);
                this.addEducationDegree = '';
                this.addEducationSchool = '';
                this.addEducationStartTime = '';
                this.addEducationEndTime = '';
            },

            /**
             * 添加认证 
             */
            CertificateAdd: function() {
                if (this.addCertificateTitle === '' || this.addCertificateAuthority === '' || this.addCertificateMonth === '' || this.addCertificateYear === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        title: this.addCertificateTitle,
                        agency: this.addCertificateAuthority,
                        month: this.addCertificateMonth,
                        year: this.addCertificateYear
                    },
                    result: {
                        title: this.addCertificateTitle,
                        agency: this.addCertificateAuthority,
                        month: this.addCertificateMonth,
                        year: this.addCertificateYear
                    },
                    hideOrigin: true
                };
                this.certificateData.push(data);
                this.addCertificateTitle = '';
                this.addCertificateAuthority = '';
                this.addCertificateMonth = '';
                this.addCertificateYear = '';
            },

            /**
             * 添加证书
             */
            publishAdd: function() {
                if (this.addPublishTitle === '' || this.addPublishAgency === '' || this.addPublishMonth === '' || this.addPublishYear === '') {
                    this.errorMsg = true;
                    return false;
                }
                var data = {
                    origin: {
                        title: this.addPublishTitle,
                        agency: this.addPublishAgency,
                        month: this.addPublishMonth,
                        year: this.addPublishYear
                    },
                    result: {
                        title: this.addPublishTitle,
                        agency: this.addPublishAgency,
                        month: this.addPublishMonth,
                        year: this.addPublishYear
                    },
                    hideOrigin: true
                };
                this.publishData.push(data);
                this.addPublishTitle = '';
                this.addPublishAgency = '';
                this.addPublishMonth = '';
                this.addPublishYear = '';
            }

        }
    })

});