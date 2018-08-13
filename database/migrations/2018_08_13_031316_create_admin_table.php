<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('作者名');
            $table->string('imgurl')->comment('头像图片路径');
            $table->string('type')->comment('所属板块分类');
            $table->string('describe')->comment('自我描述');
            $table->string('background')->comment('内容页个人专属背景');
            $table->integer('today')->comment('今日人气');
            $table->integer('popularity')->comment('总人气');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin');
    }
}
