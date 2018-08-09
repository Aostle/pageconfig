<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();  
String basePath =path + "/";
%>

<html>
	<head>
		<title>萨摩耶运营管理平台</title>
		<jsp:include page="/common.jsp"></jsp:include>
		<style>
		td{
			padding:10px;
		}
		</style>
<script src="static/js/jquery-1.6.1.min.js"></script>
<script src="static/js/jquery.artZoom.js"></script>
<link href="static/css/jquery.artZoom.css" rel="stylesheet" type="text/css">
<script>
jQuery(function ($) {
	$('.artZoom').artZoom({
		path: './images',	// 设置artZoom图片文件夹路径
		preload: true,		// 设置是否提前缓存视野内的大图片
		blur: true,			// 设置加载大图是否有模糊变清晰的效果
		
		// 语言设置
		left: '左旋转',		// 左旋转按钮文字
		right: '右旋转',		// 右旋转按钮文字
		source: '看原图'		// 查看原图按钮文字
	});
	
	$('#myEmail').html(1987 + '.tangbin@' + 'gmail.com');
});
</script>
<style type="text/css">
/*演示*/
</style>
</head>
<body>

	<div id=uploadDlg class="easyui-dialog" title="sss" data-options="modal:true" style="width:500px;height:400px;padding:10px;top:20%">
	<div style="display: none;" class="ui-artZoom ui-artZoom-ready"><div class="ui-artZoom-toolbar" style="display: none;"><span class="ui-artZoom-buttons" style=""><a href="#" data-go="left" class="ui-artZoom-left"><span></span>左旋转</a><a href="#" data-go="right" class="ui-artZoom-right"><span></span>右旋转</a><a href="#" data-go="source" class="ui-artZoom-source"><span></span>看原图</a><a href="#" data-go="hide" class="ui-artZoom-hide"><span></span>×</a></span><span style="display: none;" class="ui-artZoom-loading"><img data-live="stop" src="./images/loading.gif" style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle;width:16px;height:16px;"> <span>Loading..</span></span></div><div class="ui-artZoom-box" style=""><span class="ui-artZoom-photo" data-go="hide" style="display:inline-block;*display:inline;*zoom:1;overflow:hidden;position:relative;cursor:url('./images/zoomout.cur'), pointer"><img style="width: 582px; height: 436.5px; display: none;" data-name="thumb" data-go="hide" data-live="stop" src="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png"><img class="ui-artZoom-show" title="" alt="" src="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png" style="width: 582px; height: 436.5px; position: static; left: auto; top: auto; background: transparent none repeat scroll 0% 0%; display: none;"><canvas height="436.5" width="582" title="" class="ui-artZoom-show"></canvas></span></div></div><a href="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png" rel="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png"><img style="cursor: url(&quot;./images/zoomin.cur&quot;), pointer; display: inline;" class="artZoom" src="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png" height="100px;" width="100px;"></a>
	
	</div>
<center>
<div id="demo">
  <h2>演示</h2>
  <ul class="imgList">
    <li> <div  style="width: 600px; height:600px;"><a href="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png" rel="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png"><img width="300px;" height="300px;" class="artZoom" src="http://192.168.2.219/sitimg/af452061-27c1-4f64-a40f-095d6251148d.png" /></a></div> </li>
    <li> <img class="artZoom" src="images/03m.jpg" data-artZoom-show="images/03.jpg" data-artZoom-source="images/03m.jpg" /> </li>
    <li> <a href="images/04.jpg" data-artZoom-source="images/04.jpg"> <img class="artZoom" src="images/04m.jpg" data-artZoom-source="images/01m.jpg" /> </a> </li>
    <li> <a href="images/05.jpg" rel="images/05.jpg"><img class="artZoom" src="images/05m.jpg" /></a> </li>
  </ul>
  <p><em>下面是一张特别长的图片，这种种图片在微博中非常常见，如果使用artZoom，用户将无需等待图片完全下载完毕即可观看大图：</em></p>
  <p><img class="artZoom" src="images/min.jpg" data-artZoom-show="images/big.jpg" data-artZoom-source="images/big.jpg" /></p>
</div>
</center>
</body>
</html>