<!DOCTYPE html>
<!-- saved from url=(0021)https://tian.yam.com/ -->
<html lang="zh-TW">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">



    <title>旅游分享平台_天空部落 TIAN</title>


    <meta name="title" content="旅游分享平台_天空部落 TIAN">
    <meta name="description" content="天空部落專為您設計的創作平台，網誌、相簿、社群等，我們通通都有！">
    <meta name="keywords" content="旅游分享平台,海外旅游,沿海地区旅游,台湾旅游,部落格、創作平台，網誌、相簿、社群">
    <meta name="robots" content="index,follow">

    <link href="{{asset('css/layout.css')}}" rel="stylesheet">

    <script>var TianDfp = [];
    var JSVAR = {"environment": {"isMobile": false}, "client": {"isGuest": true, "isBlogger": false}};</script>

    <style></style>
    <script>
        (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            }
            else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();
    </script>
</head>

<body id="theme0" class="">


<div serverno="0">
    <header class="site-header">
        <nav id="site-header__bar" class="site-header__bar"><a href="https://www.sce33.cn" class="site-header__brand"><img
                src="{{asset('images/blog_logo.png')}}" alt=""></a>

        </nav>
        <div class="theme-tabs"><!---->
            <ul id="theme-tab" class="theme-tabs__tabs theme-tab">
                <li><a href="https://www.{{$host}}" class="theme-tabs">
                    首页
                </a></li>
                @foreach($lanmu as $value)
                <li><a href="http://{{$value->ename}}.{{$host}}" class="theme-tabs">
                    {{$value->column}}
                </a></li>
                @endforeach
            </ul>
        </div>
    </header>
    <div class="site-wrapper" widgetstore="[object Object]">
        <div class="wg-content block l-block">
            <div class="pageWidget"><!---->
                <div id="widget-uid-154" class="tripleCoverage wg--form" allow="drop" index="0">
                    <div class="row">
                        @foreach($activeone as $value)
                        <div class="col-xs-12 col-sm-4">

                            <div class="tripleCoverage__body">
                                <a href="/active/{{$value->id}}">
                                <h3>
                                    {{$value->title}}
                                </h3>
                                <div>
                                    <p>{!! $value->desc !!}</p>
                                </div>
                                </a>
                            </div>
                            <div class="tripleCoverage__foot">
                                <span>
                                    <i class="icon-eye theme-text"></i>{{rand(100,5000)}}
                                </span>
                                <span>
                                    <i class="icon-commenting theme-text"></i>0
                                </span>
                                <a href="/active/{{$value->id}}" target="_blank">{!! $value->admin !!}</a>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div> <!---->

            </div>
            <div class="pageWidget"><!---->
                <div id="widget-uid-157" class="avatarSlider wg--form" allow="drop" index="1">
                    <div class="row">
                        <div class="col-xs-12 slider slick-initialized slick-slider">
                            <div aria-live="polite" class="slick-list draggable">
                                <div class="slick-track" role="listbox" style="opacity: 1; width: 1080px; transform: translate3d(0px, 0px, 0px);">
                                    @foreach($admin as $value)
                                    <a href="http://{{$value->ename}}.{{$host}}" class="slide__itm slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide120" style="width: 180px;">
                                    <div class="thumb-head">
                                        <img src="./images/{{$value->ename}}.jpg" alt="" style="background-image: url(&quot;https://cdn-tian.yam.com/2/8/2851029/image/jpeg/2018/05/15/5afa549d2fe02.jpg&quot;);">
                                    </div>
                                    <div>{!! $value->admin !!}</div>
                                    </a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!---->

            </div>
            <div class="pageWidget"><!---->
                <div class="sextupleMixed wg--form" allow="drop" index="2" hashid="widget-uid-160">
                    <div class="row">
                        @foreach($activetwo as $value)
                        <div class="col-xs-12 col-sm-6 col-lg-4">
                            <div class="borderSummary">
                                <a href="/active/{{$value->id}}">
                                    <h3>{{$value->title}}</h3>
                                <p>{!! $value->desc !!}</p>
                                </a>
                            </div>
                        </div>
                        @endforeach

                    </div>
                </div> <!---->

            </div>
            <div class="pageWidget"><!---->
                <div id="widget-uid-163" class="tripleCoverage wg--form" allow="drop" index="3">
                    <div class="row">
                        @foreach($activethree as $value)
                        <div class="col-xs-12 col-sm-4">
                            <a href="/active/{{$value->id}}" target="_blank" class="tripleCoverage__thumb">

                            </a>
                            <div class="tripleCoverage__body">
                                <a href="/active/{{$value->id}}">
                                <h3>
                                    {{$value->title}}
                                </h3>
                                <div>
                                    <p>{!! $value->desc !!}</p>
                                </div>
                                </a>
                            </div>
                            <div class="tripleCoverage__foot">
                                <span>
                                    <i class="icon-eye theme-text"></i>{{rand(10,1000)}}
                                </span>
                                <span>
                                    <i class="icon-commenting theme-text"></i>0
                                </span>
                                <a href="/active/{{$value->id}}" target="_blank">{!! $value->admin !!}</a>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div> <!---->

            </div>
            <div class="pageWidget"><!---->
                <div class="sextupleMixed wg--form" allow="drop" index="4" hashid="widget-uid-166">
                    <div class="row">
                        @foreach($activefour as $value)
                        <div class="col-xs-12 col-sm-6 col-lg-4">
                            <div class="borderSummary">
                                <a href="/active/{{$value->id}}">
                                <h3>{{$value->title}}</h3>
                                <p>{!! $value->desc !!}</p>
                                </a>
                            </div>
                        </div>
                        @endforeach

                    </div>
                </div> <!---->

            </div> <!----></div> <!----> <!----> <!----></div>
    <footer class="site-footer">
        <nav>
            <!--<ul>-->
                <!--<li><a href="https://tian.yam.com/signup?action=signup" target="_blank" title=""-->
                       <!--ga-category="Home/index" ga-label="Footer/免費註冊/member">免費註冊</a></li>-->
                <!--<li><a href="https://member.yam.com/Notice/?duty.htm" target="_blank" title="" ga-category="Home/index"-->
                       <!--ga-label="Footer/服務條款/member">服務條款</a></li>-->
                <!--<li><a href="https://member.yam.com/Notice/?privacy.htm" target="_blank" title=""-->
                       <!--ga-category="Home/index" ga-label="Footer/隱私權政策/member">隱私權政策</a></li>-->
                <!--<li><a href="https://member.yam.com/SiteMap/?Type=1" target="_blank" title="" ga-category="Home/index"-->
                       <!--ga-label="Footer/網站導覽/member">網站導覽</a></li>-->
                <!--<li><a href="https://help.yam.com/" target="_blank" title="" ga-category="Home/index"-->
                       <!--ga-label="Footer/服務中心/member">服務中心</a></li>-->
                <!--<li>-->
                    <!--<a href="https://help.yam.com/m/D21E22D0995A13158474FEB3442D7454C1CBB80DBABF567B950CC33AD56937E00713F2F9229FC23376F08A14C6D3F28D805A1A5AB0AF67C6F0C25339AF4D654E5334DA2C5EFED4393AD9EA94EDC39E1346F17B9A28BC6930"-->
                       <!--target="_blank" title="" ga-category="Home/index" ga-label="Footer/聯絡我們/member">聯絡我們</a></li>-->
                <!--<li><a href="https://value.yam.com/" target="_blank" title="" ga-category="Home/index"-->
                       <!--ga-label="Footer/行銷合作/member">行銷合作</a></li>-->
            <!--</ul>-->
        </nav>
        <div><h3>天空部落</h3>
            <p>專為您設計的創作平台，<br>
                網誌、相簿、社群等，我們通通都有！
            </p></div>
        <div class="small">
            © 2017 yam blog. All Rights Reserved.
        </div>
    </footer>
    <script type="text/x-tmpl" id="tmpl-update-message-block">
    <div class="update-message-block">
    <div class="inner-block" style="background-color: {%=o.bg%}">
        <i class="{%=o.icon%}" aria-hidden="true"></i>
        <span>{%=o.txt %}</span>
    </div>
    </div>

    </script>
</div>

<script src="{{asset('js/js_gaTracker.js')}}"></script>
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{asset('js/manifest.js')}}"></script>
<script src="{{asset('js/vendor.js')}}"></script>
<script src="{{asset('js/libs.js')}}"></script>
<script src="{{asset('js/common.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>


</body>
</html>