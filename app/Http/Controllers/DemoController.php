<?php

namespace App\Http\Controllers;

use function GuzzleHttp\Psr7\str;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
//use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\DomCrawler\Crawler;


class DemoController extends Controller
{
    function start(){
        echo '正在读取URL'.'<br>';
        $data = file(public_path('url/北部青旅.txt'));
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
//            dd($this->getadmindesc($ta));
//            $this->getadmin($ta);
//            $this->getadminimg($url);
//            $this->getdes($ta);
            $t = $this->getbody($ta);
            $title = $this->gettitle($ta);
            $body = $this->chuli($t);
            $text = $title."##########".$body.chr(13).chr(10);
//        $ceshi = "换行测试".chr(13).chr(10)."第二行测试";
            echo '网页爬取成功,写入文档.'.'<br>';
            $file = @fopen('qinglv.txt','a');
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

    //获取用户的头像和专属背景
    function getadminimg(){
        $url = "https://yjlr520.tian.yam.com/posts/222156503";
        $imgs = array("","");
        $content = file_get_contents($url);
        preg_match_all("<img src=\"(.*?).jpg\">",$content,$matches);
        $path = base_path();
        $i = 0;
        foreach ($matches as $match) {
            foreach ($match as $value){
                if (strpos($value,'img src="')!==false){
                    $value = str_replace("img src=\"","",$value);
                    $value = str_replace("\"","",$value);
                    $img = file_get_contents($value);
                    file_put_contents($path.'/public/img/'.basename($value),$img);
                    $imgs[$i] = basename($value);
                    $i++;
                }
            }
        }
        //0为背景,1为头像,返回的都是名字
        return $imgs;
    }

    //
    function getcover($body){

    }

    //获取作者签名
    function getadmindesc($html){
        $str = substr($html,strpos($html,'<div class="txt-des">')+21);
        $admindesc = substr($str,0,strpos($str,'</div>'));
        return $admindesc;
    }



    //
    function chuli($str){
        return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $str);
    }


}
