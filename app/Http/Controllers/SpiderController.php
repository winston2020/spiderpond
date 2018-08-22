<?php

namespace App\Http\Controllers;

use App\Active;
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
        $data = file(public_path('url/精选文章.txt'));
//        dd($data);
        $i = 0;

        foreach ($data as $url) {
            $i++;
//            dd($this->getadmin());
            $active = new Active();
            echo '开始爬取:'.$url.'<br>';
            $client = new client();
            $http = $client->request('GET',$url);
            echo '已获取网页内容'.'<br>';
            $ta = mb_convert_encoding($http->getBody()->getContents(),'utf-8','GBK,UTF-8,ASCII');
            //文章内容，未处理
            $t = $this->getbody($ta);
            try{
                $active->typeid = 9;
                //文章标题
                $active->title = $this->gettitle($ta);
                //作者名
                $active->admin = $this->getadmin($ta);
                //文章描述
                $active->desc = $this->getdes($ta);
                $active->cover = '';
                //文章内容
                $active->content = $this->chuli($t);
                $active->volume = rand(1000,9999);
                $active->type = '精选文章';
                $if = $active->save();
                if ($if){
                    echo $url.'插入数据库成功'.'<br>';
                }else{
                    echo $url.'不明原因失败'.'<br>';
                }
            }catch (\Exception $e){
                echo $url.'跳过'.'<br>';
            }
//            //作者签名
//            $this->getadmindesc($ta);
//
//
//            //作者专属背景和头像，返回数组
//            $this->getadminimg($url);





            //最终处理好的文章内容

//            $text = $title."##########".$body.chr(13).chr(10);
////        $ceshi = "换行测试".chr(13).chr(10)."第二行测试";
//            echo '网页爬取成功,写入文档.'.'<br>';
//            $file = @fopen('qinglv.txt','a');
//            fwrite($file,$text);
//            fclose($file);
//            echo '第'.$i.'个网页成功写入'.'<br>';

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
        $str = str_replace('<a','<div',$str);
        return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $str);
    }


}
