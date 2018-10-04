<?php

namespace App\Http\Controllers;

use App\Active;
use App\Admin;
use App\Mcategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    function __construct()
    {
        $this->host = $_SERVER['HTTP_HOST'];
        $this->domain = str_after($this->host,'.');
    }

    function index(){
        $admin = Admin::take(6)->get();
        $activeone = Active::where(['typeid'=>1])->take(3)->get();
        $activetwo = Active::where(['typeid'=>2])->take(6)->get();
        $activethree = Active::where(['typeid'=>3])->take(3)->get();
        $activefour = Active::where(['typeid'=>4])->take(6)->get();
        $lanmu = Mcategory::all();
        $host = $this->domain;
        return view('index',compact('admin','activefour','activeone','activethree','activetwo','lanmu','host'));
    }


    function fan($account){
//        dd(1);
        $ename = str_before($account,'.');
        $adminename = Admin::where(['ename'=>$ename])->first();
        $mcateename = Mcategory::where(['ename'=>$ename])->first();

         if ($adminename!=null){
            $admin = Admin::where(['ename'=>$ename])->first();
//            dd($admin->admin);
            $actives = Active::where(['admin'=>$admin->admin])->take(40)->orderby('id','desc')->get();
            $host = $this->domain;
            return view('adminlist',compact('admin','actives','host'));

        }else if ($mcateename!=null){
            $mcategory = Mcategory::where(['ename'=>$ename])->first();
            $admin = Admin::where(['type'=>$mcategory->id])->get();
            $actives = Active::where(['typeid'=>$mcategory->id])->take(40)->get();
            $host = $this->domain;
            $lanmu = Mcategory::all();
            return view('typefan',compact('mcategory','actives','admin','host','lanmu'));
        }

    }

    function show($id){

        $active = Active::where(['id'=>$id])->get()->toArray();
//        dd($active[0]['admin']);
        $admin = Admin::where(['admin'=>$active[0]['admin']])->get()->toArray();
        dd($admin);
        $actives = Active::where(['typeid'=>$active[0]['typeid']])->take(9)->get();
        $host = $this->domain;
        return view('show',compact('active','host','admin','actives'));
    }




}
