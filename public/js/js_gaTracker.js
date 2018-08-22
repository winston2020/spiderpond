'use strict';

/*
 * prototype of gaTrack
 */
var _gaTrack = function(o){

    // initialize
    o.init = function(){
        var self = this;
        if (!self.trackers)
            self.trackers = [];

        if (self.trackers.length>0){
            for(var i=0; i<self.trackers.length; i++)
                self.trackers[i] = createTracker(self.trackers[i]);
        }

        $('body').on('click', '.ga', function(e){
            switch(e.type){
                case 'mouseover':
                    return onTrack(e, '滑入');
                    break;
                case 'change':
                    return onTrack(e, '選取');
                    break;
                case 'click':
                default:
                    return onTrack(e, '點擊');
                    break;
            }

        });
        return self;
    }

    /**
     * private method
     * create tarcker
     * @params (object) tracker, {account, isSendPageView, isSendEvent config}
     * @return (object) tracker
     */
    var createTracker = function(tracker){
        var trackerName, requireName;

        if (!tracker.name){
            ga('create', tracker.account, 'auto');
            tracker.name = '';
            trackerName = 'send';
            requireName = 'require';
        }else{
            ga('create', tracker.account, 'auto', {name: tracker.name});
            trackerName = tracker.name + '.send';
            requireName = tracker.name + '.require';
        }

        ga(requireName, 'displayfeatures');
        ga(requireName, 'linkid', 'linkid.js');
        ga(trackerName, 'pageview');

        return tracker;
    }

    /**
     * Private method
     * handle click track
     * @params (object) e, event
     * @params (string) eventName
     */
    var onTrack = function(e, eventName){
        var self = o,
            $el = $(e.currentTarget),
            category = $el.attr('ga-category'),
            label = e.type=='change' ? $el.find("option:selected").attr("ga-label") : $el.attr('ga-label'),
            len = self.trackers.length,
            i = 0;

        if (!category)
            category = '按鈕';

        if (!label)
            return true;

        for(i; i<len; i++){
            var t = self.trackers[i], name;
            if (t.isSendEvent){
                name = (t.name.length==0) ? 'send' : t.name + '.send';
                // alert(category+'/'+eventName+'/'+label);
                ga(name, 'event', category, eventName, label);
            }
        }
        return true;
    }

    return o.init();
}

var checkGA = function(){
    if (typeof(ga)=='undefined')
        setTimeout(checkGA, 50);
    else{
        gaTracker = _gaTrack({
            trackers: [
                {account: 'UA-83423815-11', isSendEvent: true, isSendPageView: true},
                {account: 'UA-16227618-1', isSendEvent: true, isSendPageView: true, name:'yamall'}
            ]
        });
    }
};

var gaTracker;

checkGA();

/**
 * ga global library function pointer is ga
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');