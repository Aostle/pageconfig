<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
	<head>
		<title>萨摩耶运营管理平台</title>
		<link rel="stylesheet" type="text/css" href="/static/jquery-easyui-1.4.3/themes/default/easyui.css">
		<link rel="stylesheet" type="text/css" href="/static/jquery-easyui-1.4.3/themes/icon.css">
		<script type="text/javascript" src="/static/jquery-easyui-1.4.3/jquery.min.js"></script>
		<script type="text/javascript" src="/static/jquery-easyui-1.4.3/jquery.easyui.min.js"></script>
	</head>
<body>

	
	<div style="margin:20px 0;">
		<a href="#" class="easyui-linkbutton" onclick="alert1()">正常消息框</a>
		<a href="#" class="easyui-linkbutton" onclick="alert2()">错误消息框</a>
		<a href="#" class="easyui-linkbutton" onclick="alert3()">提醒消息框</a>
		<a href="#" class="easyui-linkbutton" onclick="alert4()">确认操作消息框</a>
		<a href="#" class="easyui-linkbutton" onclick="alert5()">警告消息框</a>
	</div>
	
	<script type="text/javascript">
			function alert1(){
				$.messager.alert('消息提醒','Here is a message!');
			}
			function alert2(){
				$.messager.alert('消息提醒','Here is a error message!','error');
			}
			function alert3(){
				$.messager.alert('消息提醒','Here is a info message!','info');
			}
			function alert4(){
				$.messager.alert('消息提醒','Here is a question message!','question');
			}
			function alert5(){
				$.messager.alert('消息提醒','Here is a warning message!','warning');
			}
	</script>
</body>
</html>