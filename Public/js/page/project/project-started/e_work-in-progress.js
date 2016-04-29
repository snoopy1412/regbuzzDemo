define(['jquery', 'raty', 'datetimepicker'], function($, raty, datetimepicker) {

    // 申请延期
    $('.work-extend').on("show.bs.modal", function(event) {

        var self = this,
            status = false,
            $button = $(event.relatedTarget), // 获得
            userId = $button.data('userid'), // 获得用户id
            projectId = $button.data('projectid'), // 获得项目id
            choiceTime = ''; //选取的日期

        // 日历插件初始化
        $('#datetimepicker6').datetimepicker({
            format: 'YYYY-MM-DD',
            useCurrent: true,
        });

        $("#datetimepicker6").on("dp.change", function(e) {
            choiceTime = e.date._d;
            $('#datetimepicker6').data("DateTimePicker").minDate(e.date);
        });

        $(document).on('click', '#js_saveWorkExtendTime', function() {

            // 逻辑错误？？？
            choiceTimestamp = +new Date(choiceTime);

        })
    })


    // 申请退款
    $('.work-refund').on("show.bs.modal", function(event) {
        var self = this,
            status = false,
            $button = $(event.relatedTarget), // 获得
            userId = $button.data('userid'), // 获得用户id
            projectId = $button.data('projectid'), // 获得项目id
            projectStatus = $button.data('status'), // 项目状态
            $reason = $('#work-refund-reason'),
            $reasonAdd = $("#work-refund-reason_add"),
            ajaxData = [];

        $(document).on('click', '#js_saveWorkRefund', function() {

            var selectVal = $reason.val(); // 数组
            var addVal = $reasonAdd.val(); //字符串
            console.log(selectVal, addVal)
            if (selectVal === null && addVal === '') {
                alert('原因不能为空');
                return false;
            }

            if (selectVal !== null) {
                $.each(selectVal, function(i, element) {
                    ajaxData.push({
                        text: element
                    })
                })
            }
            if (addVal !== '') {
                ajaxData.push({
                    text: addVal
                })
            }

            if (ajaxData.length && !status) {
                $.ajax({
                    url: 'data.json',
                    type: 'post',
                    data: ajaxData,
                    timeout: 5 * 1000,
                    beforeSend: function() {
                        status = true; // 防止重复提交
                    },
                    success: function(data) {
                        // 执行回调函数
                        $(self).modal('hide');
                    },
                    complete: function() {
                        status = false;
                    },
                    error: function(xhr, error) {
                        console.log(xhr, error)
                    }
                })
            }
        })
    })

    $('.work-refund').on("hide.bs.modal", function(event) {
        $(document).off('click', '#js_saveWorkRefund');
    })

    // 项目确认
    $('.work-extend').on("show.bs.modal", function(event) {

        var self = this,
            status = false,
            $button = $(event.relatedTarget), // 获得
            userId = $button.data('userid'), // 获得用户id
            projectId = $button.data('projectid'), // 获得项目id
            projectStatus = $button.data('status'); // 项目状态

        $(document).on('click', '#js_workDonwConfirm', function() {

            // ajax操作，最关键的还是后台的验证方式，保证安全性
            if (!status) {
                $.ajax({
                    url: 'data.json',
                    type: 'post',
                    data: data,
                    timeout: 5 * 1000,
                    beforeSend: function() {
                        status = true; // 防止重复提交
                    },
                    success: function(data) {
                        // 执行回调函数
                        $(self).modal('hide');
                    },
                    complete: function() {
                        status = false;
                    },
                    error: function(xhr, error) {
                        console.log(xhr, error)
                    }
                })
            }
        })
    })

    $('.work-refund').on("hide.bs.modal", function(event) {
        $(document).off('click', '#js_workDonwConfirm');
    })

    // 付款确认
    $('.work-confirmed-release').on("show.bs.modal", function(event) {

        var self = this,
            status = false,
            $button = $(event.relatedTarget), // 获得
            userId = $button.data('userid'), // 获得用户id
            projectId = $button.data('projectid'), // 获得项目id
            projectStatus = $button.data('status'); // 项目状态

        $(document).on('click', '#js_workConfirmedRelease', function() {

            // ajax操作，最关键的还是后台的验证方式，保证安全性
            if (!status) {
                $.ajax({
                    url: 'data.json',
                    type: 'post',
                    data: data,
                    timeout: 5 * 1000,
                    beforeSend: function() {
                        status = true; // 防止重复提交
                    },
                    success: function(data) {
                        // 执行回调函数
                        $(self).modal('hide');
                    },
                    complete: function() {
                        status = false;
                    },
                    error: function(xhr, error) {
                        console.log(xhr, error)
                    }
                })
            }
        })
    })

    $('.wwork-confirmed-release').on("hide.bs.modal", function(event) {
        $(document).off('click', '#js_workConfirmedRelease');
    })

    // 服务评价
    /**
     * 评分插件
     */
     
    $('.work-reviews-score-container').raty({
        half: true,
        score: 'bad',
        precision: false,
        hints: ['Poor!', 'Fair!', 'Average!', 'Good!', 'Excellent!'],
        path: './Public/img/stars',
        target: '.work-reviews-score',
        targetKeep: true,
        click: function(score, evt) {
            alert("\nscore: " + score);
        }
    });


})