var Lock = require('../../lib/lock.js');
var app = getApp();

Page({
    data: {
        title: '绘制解锁图案',
        width:0,
        chooseType:4
    },
    onLoad: function () {
        wx.getSystemInfo({
            success: (res) => {
                let w = res.windowWidth * 0.8;
                this.setData({
                    width:w
                })
                this.init();
            },
        })
    },
    init(val){
        let params = {
            width: this.data.width,
            height: this.data.width,
            chooseType: val || this.data.chooseType
        }
        this.lock = new Lock(this, params);
    },
    change(e){
        this.init(e.detail.value);
    },
    resetPwd: function() {
        this.lock.updatePassword();
    },
    onTitleChanged: function(newTitle) { // 文字变化的事件，自定义
        this.setData({
            title: newTitle
        });
    }
});
