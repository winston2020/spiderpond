<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UrlController extends Controller
{
    //


    function getUrl(){
        $name = 'bv7389';

        $re1='{[a-zA-z]+://[a-zA-Z]*(\d+)(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)(\d+)(.)(comment)}';
//        $re1='{[a-zA-z]+://[a-zA-Z]*(\d+)[a-z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)(\d+)(.)(comment)}';
//        $re1='{[a-zA-z]+://[a-zA-Z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)(\d+)(.)(comment)}';
//        $re1='{[a-zA-z]+://[a-zA-Z]*(.)[a-zA-Z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)[a-z]*(.)(\d+)(.)(comment)}';

        for ($i = 1;$i < 43;$i++) {
            $html = file_get_contents('https://'.$name.'.tian.yam.com/posts?page='.$i);
            $dom = new \DOMDocument();
            @$dom->loadHTML($html);
//            print ($html.$i);
            $xpath = new \DOMXPath($dom);
            dd($xpath);
            $hrefs = $xpath->evaluate('/html/body//a');
//        dd($hrefs->length);
            for ($j = 0; $j < $hrefs->length; $j++) {
                $href = $hrefs->item($j);
                $url = $href->getAttribute('href');

                if (substr($url, 0, 4) == 'http') {

                    if (preg_match_all($re1, $url) != 0)
                        print ($url . '<br>');

                }
//            print ($url);
            }

        }
    }
}
