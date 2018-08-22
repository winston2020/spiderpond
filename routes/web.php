<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//function checkhost(){
//    $host = str_after($_SERVER['HTTP_HOST'],'.');
//    $dbyuming =  \Illuminate\Support\Facades\DB::table('yuming')->select('host')->get()->toArray();
//    foreach ($dbyuming as $item){
//        if ($host == $item->host){
//            return $yuming = $item->host;
//        }
//    }
//}

//Route::get('/sp','SpiderController@start');
//Route::get('/url','UrlController@getUrl');
//Route::get('/demo','DemoController@start');
Route::domain('twj33.cn')->group(function (){
    Route::get('/','HomeController@index');
});
Route::domain('www.twj33.cn')->group(function (){
    Route::get('/','HomeController@index');
});
Route::domain('{account}.'.'twj33.cn')->group(function ($account) {
    Route::get('/','HomeController@fan');
});
Route::get('/active/{id}','HomeController@show');



//Route::domain(group(function () {
//    Route::middleware(['cacheResponse:5'])->get('/','HomeController@index');
//});

//Route::domain('www.'.checkhost())->group(function () {
//    Route::middleware(['cacheResponse:5'])->get('/','HomeController@index');
//});
//
//



