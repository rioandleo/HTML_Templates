var app = new Vue({
    el: "#_sidebar",
    data: {
        classtop: {
            "push": false,
            "visible": false,
            "animating": false,
        },
        classpush: {
            "dim": false,
        },
        classdim: {
            "dimm1": false,
            "dimm2": true,
        },
        showstatus: false,
    },
    methods: {
        showmenu: function () {
            this.showstatus = !this.showstatus;
            this.classtop.push = !this.classpush;
            this.classtop.visible = !this.classtop.visible;
            this.classtop.animating = !this.classtop.animating;
            this.classpush.dim = !this.classpush.dim;
            this.classdim.dimm1 = !this.classdim.dimm1;
            this.classdim.dimm2 = !this.classdim.dimm2;
        },
    },
});
