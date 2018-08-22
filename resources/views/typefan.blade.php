<!DOCTYPE html>
<!-- saved from url=(0021)https://tian.yam.com/ -->
<html lang="zh-TW">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google-site-verification" content="7sQu6w5GJnlooY4Jrrctxeb2jP9HWhn_dC1JnygknSc">
    <meta name="msvalidate.01" content="77B6903645E366893758041A9CA70684">
    <meta name="csrf-param" content="_csrf">
    <meta name="csrf-token"
          content="flDsDOmkSKGZ8fqklY6sWuYJa3RHyTA6VeoaEoCRpbofaIRk0ZIuxc26k83v9pgtiHFdQnDkYH0n0moi0MTg-A==">
    <title>天空部落 TIAN</title>



    <!-- Google Tag Manager -->
    <!-- <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5PBV26C');</script> -->
    <!-- End Google Tag Manager -->

    <meta name="title" content="天空部落 TIAN">
    <meta name="description" content="天空部落專為您設計的創作平台，網誌、相簿、社群等，我們通通都有！">
    <meta name="keywords" content="部落格、創作平台，網誌、相簿、社群">
    <meta name="robots" content="index,follow">

    <link href="{{asset('css/layout.css')}}" rel="stylesheet">

    <script>var TianDfp = [];
    var JSVAR = {"environment": {"isMobile": false}, "client": {"isGuest": true, "isBlogger": false}};</script>

    <style></style>
</head>

<body id="theme0" class="">


<div serverno="0">
    <header class="site-header">
        <nav id="site-header__bar" class="site-header__bar"><a href="http://{{$host}}" class="site-header__brand"><img
                src="./images/blog_logo.png" alt=""></a>

        </nav>
        <div class="theme-tabs"><!---->
            <ul id="theme-tab" class="theme-tabs__tabs theme-tab">
                <li><a href="http://{{$host}}" class="theme-tabs">
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
                                    <div>{{$value->ename}}</div>
                                    </a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pageWidget"><!---->
                <div id="widget-uid-154" class="tripleCoverage wg--form" allow="drop" index="0">
                    @foreach($actives as $value)
                    <div class="row">
                        <div class="col-xs-12 col-sm-4">

                            <div class="tripleCoverage__body">
                                <a href="/active/{{$value->id}}">
                                    <h3>
                                        {{$value->title}}
                                    </h3>
                                    <div>
                                        <p>{{$value->desc}}</p>
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
                                <a href="/active/{{$value->id}}" target="_blank">{{$value->admin}}</a>
                            </div>
                        </div>

                        </div>
                    @endforeach
                </div>
                </div> <!---->

            </div>
            <!----></div> <!----> <!----> <!----></div>
    <footer class="site-footer">
        <nav>

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
<script src="{{asset('js/app.js')}}"></script>        <!-- Google Tag Manager (noscript) -->
<!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PBV26C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
<!-- End Google Tag Manager (noscript) -->



</body>
</html>