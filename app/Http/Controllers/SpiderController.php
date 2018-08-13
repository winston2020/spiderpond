<?php

namespace App\Http\Controllers;

use function GuzzleHttp\Psr7\str;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
//use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\DomCrawler\Crawler;


class SpiderController extends Controller
{
    function start(){
        echo '正在读取URL'.'<br>';
        $data = file(public_path('url/url.txt'));
//        dd($data);
        $i = 0;
        foreach ($data as $url) {
            $i++;
//            dd($this->getadmin());
            echo '开始爬取:'.$url.'<br>';
            $client = new client();
            $http = $client->request('GET',$url);
            echo '已获取网页内容'.'<br>';
            $ta = mb_convert_encoding($http->getBody()->getContents(),'utf-8','GBK,UTF-8,ASCII');
            dd($this->getadmin($ta));
            $this->getdes($ta);
            $t = $this->getbody($ta);
            $title = $this->gettitle($ta);
            $body = $this->chuli($t);
            $text = $title."######".$body.chr(13).chr(10);
//        $ceshi = "换行测试".chr(13).chr(10)."第二行测试";
            echo '网页爬取成功,写入文档.'.'<br>';
            $file = @fopen('demo.txt','a');
            fwrite($file,$text);
            fclose($file);
            echo '第'.$i.'个网页成功写入'.'<br>';

        }



        //        $crawler = new Crawler();
//        $crawler->addHtmlContent($ta);

    }


    //截取文章的标题
    function gettitle($html){
        echo '正在截取标题'.'<br>';
        $str = substr($html,strpos($html,'<h1>'));
        $h1 = substr($str,0,strpos($str,'</h1>')+5);
        $t = substr($h1,4);
        $title = substr($t,0,strpos($t,'</h1>'));
        echo '截取成功！！'.'<br>';
        return $title;
    }

    //截取文章的内容
    function getbody($ta){
        echo '正在截取文章内容'.'<br>';
        $t = substr($ta,strpos($ta,'<!-- post content -->'));
        $t = substr($t,0,strpos($t,'<!-- ./post-content -->'));
        echo '截取成功！！'.'<br>';
        return $t;
    }

    //获取文章的描述
    function getdes($html){

        $str = substr($html,strpos($html,'<meta name="description" content="')+34);
        $des = substr($str,0,strpos($str,'...">'));
//        dd($des.'...');
        return $des.'...';

    }

    //获取文章的作者
    function getadmin($html){
        $str = substr($html,strpos($html,'<div class="blog-headline">')+27);
        $admin = substr($str,0,strpos($str,'</div>'));
        return $admin;
    }



    //
    function chuli($str){
        return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $str);
    }


}
