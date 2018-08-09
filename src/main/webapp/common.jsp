<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();  
String basePath =path + "/";
%>
<link rel="stylesheet" type="text/css" href="<%=basePath %>static/jquery-easyui-1.4.3/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="<%=basePath %>static/jquery-easyui-1.4.3/themes/icon.css">
<link rel="stylesheet" type="text/css" href="<%=basePath %>static/css/base.css">
<link rel="stylesheet" type="text/css" href="<%=basePath %>static/css/button.css">
<script type="text/javascript" src="<%=basePath %>static/jquery-easyui-1.4.3/jquery.min.js"></script>
<script type="text/javascript" src="<%=basePath %>static/jquery-easyui-1.4.3/jquery.easyui.min.js"></script>
<script type="text/javascript" src="<%=basePath %>static/jquery-easyui-1.4.3/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=basePath %>static/jquery-easyui-1.4.3/datagrid-bufferview.js"></script>
<script type="text/javascript" src="<%=basePath %>static/js/common.js"></script>
<script type="text/javascript" src="<%=basePath %>static/js/util/validType.js"></script>
<script type="text/javascript" src="<%=basePath %>static/js/enum.js"></script>
<script type="text/javascript" src="<%=basePath %>/static/js/grid.js?v=1.0.4"></script>

<style type="text/css">
    .controls-pane{
        padding: 10px;
    }
    .controls-pane .control-box{
        padding: 10px 20px;
    }
    .controls-pane .control-box label{
        width: 60px;
        text-align: left;
        display: inline-block;
    }
    .controls-pane .control-box input[type=text]
    {
        width: 200px;
        padding: 5px;
    }

    .controls-pane .control-box select{
        width: 200px;
        padding: 5px;
    }

    .controls-pane .control-btn{
        padding-left: 20px;
    }
    .datagrid-cell-c1-operation a{padding-left: 5px;}

    .fl{float: left}
    .clear{clear: both}
</style>