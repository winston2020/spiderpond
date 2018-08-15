<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActiveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('active', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('typeid')->comment('栏目ID');
            $table->string('title')->comment('标题');
            $table->string('admin')->comment('作者');
            $table->string('desc')->comment('文章描述');
            $table->string('cover')->comment('文章封面');
            $table->text('content')->comment('内容');
            $table->integer('volume')->comment('阅读量');
            $table->string('type')->comment('所属栏目');
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
        Schema::dropIfExists('active');
    }
}
