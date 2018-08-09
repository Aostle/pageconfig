<%--
  Created by IntelliJ IDEA.
  User: master
  Date: 2018/7/12
  Time: 9:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    System.out.println(path);
    String basePath = path + "/";
%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>产品映射表配置</title>
    <jsp:include page="/common.jsp"></jsp:include>
    <style>
        td {
            padding: 10px;
        }
    </style>
</head>
<body>
<div id="p" class="easyui-panel"
     style="width: 100%; height: 100px; padding: 10px; background: #fafafa;"
     data-options="collapsible:true,iconCls:'icon-search'" title="查询条件">
    <form id="searchParamForm">
        <table border="0">
            <tr>
                <td align="right">【产品编号】</td>
                <td><input class="easyui-textbox" type="text"
                           name="prodNo" id="prodNo1"></td>
                <td align="right">【交易类型】</td>
                <td>
                    <select id="transType1" class="easyui-combobox"  data-options="editable:false,required:true,novalidate:true"  style="width:100px;">
                        <option value=1>主体</option>
                        <option value=2>授信</option>
                        <option value=3>借款</option>
                        <option value=4>还款</option>
                    </select>
                </td>
                <td><input type="button" class="btn-search"
                           onclick="searchForm()" value="查询" /></td>
            </tr>
        </table>
    </form>
</div>

<div id="pp" class="easyui-panel" title="产品映射参数列表">
    <table id="dataList"></table>
</div>

<!-- 添加修改参数 -->
<div id="addParam" class="easyui-dialog" closed="true" title="添加参数 " data-options="modal:true" style="width:420px;height:400px;padding:10px;top:20%">
    <form id="addParamForm" action="">
        <input type="hidden" name="id" id="id1" value="0"/>
        <table>
            <tr>
                <td>产品编号：</td>
                <td>
                    <input class="easyui-textbox" type="text" name="prodNo"  id="prodNo"/>
                </td>
            </tr>
            <tr>
                <td>交易类型：</td>
                <td>
                    <select id="transType" class="easyui-combobox" name="transType" data-options="editable:false,required:true,novalidate:true"  style="width:100px;">
                        <option value=1>主体</option>
                        <option value=2>授信</option>
                        <option value=3>借款</option>
                        <option value=4>还款</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>产品key值：</td>
                <td>
                    <input class="easyui-textbox" type="text" name="productKey" id="productKey"/>
                </td>
            </tr>
            <tr>
                <td>保全点：</td>
                <td>
                    <input class="easyui-textbox" type="text" name="savePoint" id="savePoint" />
                </td>
            </tr>
            <tr>
                <td>创建日期</td>
                <td>
                    <input  id="createDatetime"  type= "text" class= "easyui-datebox" name="createDatetime" required ="required"> </input>
                </td>
            </tr>
            <tr>
                <td>失效日期</td>
                <td>
                    <input  id="expirationDatetime"  type= "text" class= "easyui-datebox" name="expirationDatetime" required ="required"> </input>
                </td>
            </tr>

            <tr>
                <td>b/c端标识：</td>
                <td>
                    <select id="clientFlag" name="clientFlag" class="easyui-combobox"  data-options="editable:false,required:true,novalidate:true"  style="width:100px;">
                        <option value='b'>b端</option>
                        <option value='c'>c端</option>
                    </select>
                </td>
            <tr>
                <td colspan="4" align="center">
                    &nbsp;&nbsp;
                    <input type="button" class="btn-save" onclick="addParam()" value="保存"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" class="btn-clear" onclick="document.getElementById('addParamForm').reset();" value="清空"/>
                </td>
            </tr>
        </table>
    </form>
</div>

</body>

<script>
    $(function(){
        $("#addParam").dialog("close");
        loadPage();
    })

    /* --------------------------------------------------------------- */

    function loadPage(){
        $('#dataList').datagrid({
            url:'<%=basePath %>product/queryBypage',
            width:"auto",
            frozenColumns :[[
                /* {field:'id',checkbox:true}, */
                {field:'id',title:'ID',align:'center',width:'10%'},
                {field:'prodNo',title:'产品编号',align:'center',width:'10%'},
                {field:'transType',title:'交易类型',align:'center',width:'10%',
                    formatter: function(value,row){
                        if(value==1) return '主体';
                        if(value==2) return '授信';
                        if(value==3) return '借款';
                        if(value==4) return '还款';

                    }
                },
                {field:'productKey',title:'产品key值',align:'center',width:'10%'},
                {field:'savePoint',title:'保全点',align:'center',width:'10%'},
                {field:'createDatetime',title:'创建时间',align:'center',width:'20%',formatter : formatDate},
                {field:'expirationDatetime',title:'失效日期',align:'center',width:'20%',formatter : formatDate},
                {field:'clientFlag',title:'B/C端标识',align:'center',width:'10%',
                    formatter: function(value,row){
                        if (value=='b'){
                            return 'B端';
                        }else if(value=='c'){
                            return 'c端';
                        }else{
                            return '未知';
                        }
                    }
                },

            ]],
            toolbar: [
                {
                    text: '添加',
                    iconCls: 'icon-add',
                    handler: function() {
                        $('#addParamForm').form('reset');
                        $('input[name="id"]').val(0);

                        $("#addParam").show();
                        $("#addParam").window("open").window("center");
                    }
                }
                , '-',
                {
                    text: '修改',
                    iconCls: 'icon-edit',
                    handler: function() {

                        $('#addParamForm').form('clear');
                        //得到所有被选中的行
                        var sel=$('#dataList').datagrid('getSelections');
                        if(sel.length!=1){
                            $.messager.alert("提示","请选择一条记录修改");
                        }else{
                            //选中的行数据
                            var u=sel[0];
                            var creaTime=formatDate(u.createDatetime);
                            var expTime=formatDate(u.expirationDatetime);
                            //把选中的行数据填充到表单中
                            $('#addParamForm').form('load',{
                                id:u.id,
                                prodNo:u.prodNo,
                                transType:u.transType,
                                productKey:u.productKey,
                                savePoint:u.savePoint,
                                createDatetime:creaTime,
                                expirationDatetime:expTime,
                                clientFlag:u.clientFlag
                            });

                            $("#addParam").show();
                            $("#addParam").window("open").window("center");
                        }


                    }
                }
                ,'-',
                {
                    text: '删除',
                    iconCls: 'icon-remove',
                    handler: function() {
                        var rows = $("#dataList").datagrid("getSelections");// 获取所有选中的行
                        if(rows.length == 1){
                            var u=rows[0];
                            if(rows){
                                $.ajax({
                                    url:'<%=basePath %>product/delete',
                                    type:'POST',
                                    data:{
                                        //"rand" :Math.random(),
                                        "id" : u.id
                                    },
                                    success:function(data){
                                        $.messager.alert('提示',data);
                                        $("#dataList").datagrid("reload");

                                    }
                                });
                            }
                        }else if(rows.length == 0){
                            $.messager.alert('警告','必须选择一项进行修改！');
                        }else{
                            $.messager.alert('警告','只能对一项进行修改！');
                        }
                    }
                }
            ],
            striped:true,//设置为true将交替显示行背景
            singleSelect:true,//设置为true将只允许选择一行
            checkOnSelect:false,//如果设置为 true，当用户点击一行的时候 checkbox checked(选择)/unchecked(取消选择)。 如果为false，当用户点击刚好在checkbox的时候，checkbox checked(选择)/unchecked(取消选择)
            selectOnCheck:true,
            striped: true,//True 奇偶行使用不同背景色
            rownumbers:true, //设置为true将显示行数
            pagination:true, //设置true将在数据表格底部显示分页工具栏
            pageNumber:1,//当设置分页属性时，初始化分页码
            pageSize:10,//当设置分页属性时，初始化每页记录数
            pageList:[10,20] //当设置分页属性时，初始化每页记录数列表
        });
    }

    /* --------------------------------------------------------------- */

    function searchForm(){
        var prodNo = $("#prodNo1").val();
        var transType = $("#transType1").combobox("getValue");
        $('#dataList').datagrid({
            url:'<%=basePath %>product/query',
            loadMsg : "正在加载，请稍等...",
            width:"auto",
            queryParams: {
                "prodNo" : prodNo ,
                "transType": transType,
            },
            frozenColumns :[[
                {field:'id',title:'ID',align:'center',width:'10%'},
                {field:'prodNo',title:'产品编号',align:'center',width:'10%'},
                {field:'transType',title:'交易类型',align:'center',width:'10%',
                    formatter: function(value,row){
                        if(value==1) return '主体';
                        if(value==2) return '授信';
                        if(value==3) return '借款';
                        if(value==4) return '还款';

                    }
                },
                {field:'productKey',title:'产品key值',align:'center',width:'10%'},
                {field:'savePoint',title:'保全点',align:'center',width:'10%'},
                {field:'createDatetime',title:'创建时间',align:'center',width:'20%',formatter : formatDate},
                {field:'expirationDatetime',title:'失效日期',align:'center',width:'20%',formatter : formatDate},
                {field:'clientFlag',title:'B/C端标识',align:'center',width:'10%',
                    formatter: function(value,row){
                        if (value=='b'){
                            return 'B端';
                        }else if(value=='c'){
                            return 'c端';
                        }else{
                            return '未知';
                        }
                    }
                },

            ]],
            toolbar: [
                {
                    text: '添加',
                    iconCls: 'icon-add',
                    handler: function() {
                        $('#addParamForm').form('reset');
                        $('input[name="id"]').val(0);

                        $("#addParam").show();
                        $("#addParam").window("open").window("center");
                    }
                }
                , '-',
                {
                    text: '修改',
                    iconCls: 'icon-edit',
                    handler: function() {

                        $('#addParamForm').form('clear');
                        //得到所有被选中的行
                        var sel=$('#dataList').datagrid('getSelections');
                        if(sel.length!=1){
                            $.messager.alert("提示","请选择一条记录修改");
                        }else{
                            //选中的行数据
                            var u=sel[0];
                            var creaTime=formatDate(u.createDatetime);
                            var expTime=formatDate(u.expirationDatetime);
                            //把选中的行数据填充到表单中
                            $('#addParamForm').form('load',{
                                id:u.id,
                                prodNo:u.prodNo,
                                transType:u.transType,
                                productKey:u.productKey,
                                savePoint:u.savePoint,
                                createDatetime:creaTime,
                                expirationDatetime:expTime,
                                clientFlag:u.clientFlag
                            });

                            $("#addParam").show();
                            $("#addParam").window("open").window("center");
                        }


                    }
                }
                ,'-',
                {
                    text: '删除',
                    iconCls: 'icon-remove',
                    handler: function() {
                        var rows = $("#dataList").datagrid("getSelections");// 获取所有选中的行
                        if(rows.length == 1){
                            var u=rows[0];
                            if(rows){
                                $.ajax({
                                    url:'<%=basePath %>product/delete',
                                    type:'POST',
                                    data:{
                                        //"rand" :Math.random(),
                                        "id" : u.id
                                    },
                                    success:function(data){
                                        $.messager.alert('提示',data);
                                        $("#dataList").datagrid("reload");

                                    }
                                });
                            }
                        }else if(rows.length == 0){
                            $.messager.alert('警告','必须选择一项进行修改！');
                        }else{
                            $.messager.alert('警告','只能对一项进行修改！');
                        }
                    }
                }
            ],
            striped:true,//设置为true将交替显示行背景
            singleSelect:true,//设置为true将只允许选择一行
            checkOnSelect:false,//如果设置为 true，当用户点击一行的时候 checkbox checked(选择)/unchecked(取消选择)。 如果为false，当用户点击刚好在checkbox的时候，checkbox checked(选择)/unchecked(取消选择)
            selectOnCheck:true,
            striped: true,//True 奇偶行使用不同背景色
            rownumbers:true, //设置为true将显示行数
            pagination:false, //设置true将在数据表格底部显示分页工具栏
           /* pageNumber:1,//当设置分页属性时，初始化分页码
            pageSize:10,//当设置分页属性时，初始化每页记录数
            pageList:[10,20] //当设置分页属性时，初始化每页记录数列表*/
        });
    }

    //保存方法
    /* --------------------------------------------------------------- */

    function addParam(){
        var id=$("#id1").val();
        var prodNo = $("#prodNo").val();
        var transType = $("#transType").combobox("getValue");
        var productKey = $("#productKey").val();
        var savePoint = $("#savePoint").val();
        var createDatetime = $("#createDatetime").datebox('getValue');
        var expirationDatetime = $("#expirationDatetime").datebox('getValue');
        var clientFlag = $("#clientFlag").combobox("getValue");

        $.ajax({
            url:'<%=basePath %>product/save',
            data:{
                "id":id,
                "prodNo" : prodNo,
                "transType" : transType,
                "productKey" : productKey,
                "savePoint" : savePoint,
                "createDatetime" : createDatetime,
                "expirationDatetime" : expirationDatetime,
                "clientFlag" : clientFlag

            },
            type:"POST",
            success:function(data){
                $('#addParam').dialog('close');
                $('#addParam').form('clear');
                $.messager.alert("提示",data);
                $("#dataList").datagrid("reload");

            }
        });
    }

    //取消编辑框
    /* --------------------------------------------------------------- */


    function cancelEdit(){
        $("#addParam").dialog("close");
    }
    //格式化时间方法
    function formatDate(value) {
        if (value == null) {
            return "";
        }
        var time = new Date(value);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var f = time.getMinutes();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-'
            + (d < 10 ? ('0' + d) : d);
    }
</script>
</html>
