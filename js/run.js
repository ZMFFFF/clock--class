class Run {
    constructor(second, minute, hour) {
        this.second = second;
        this.minute = minute;
        this.hour = hour;
    }

    rotate() {
        var date = new Date();//获取当前时间
        var h = date.getHours(); //获取时
        var m = date.getMinutes();//获取分
        var s = date.getSeconds();//获取秒

        var sDeg = 360 / 60 * s;//秒针角度   
        var mDeg = (m * 60 + s) / 3600 * 360;//分针角度
        var hDeg = (h * 3600 + m * 60 + s) / (3600 * 12) * 360;//时针角度

        sDeg += 90;
        mDeg += 90;
        hDeg += 90;

        this.second.style.transform = `rotate(${sDeg}deg)`;
        this.minute.style.transform = `rotate(${mDeg}deg)`;
        this.hour.style.transform = `rotate(${hDeg}deg)`;
    }
}

