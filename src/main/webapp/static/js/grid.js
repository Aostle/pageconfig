/**
 * 列表查询编辑功能
 * Created by ywp on 2016/9/3.
 */
(function ($) {
    $.fn.customGrid = function (option) {
        $(this).datagrid({
            toolbar:option.toolbar,
            url:option.url,
            columns:option.columns,
            resizable:true,
            fitColumns:false,
            striped:true,//设置为true将交替显示行背景
            singleSelect:true,//设置为true将只允许选择一行
            checkOnSelect:false,//如果设置为 true，当用户点击一行的时候 checkbox checked(选择)/unchecked(取消选择)。 如果为false，当用户点击刚好在checkbox的时候，checkbox checked(选择)/unchecked(取消选择)
            selectOnCheck:true,
            rownumbers:true, //设置为true将显示行数
            pagination:true, //设置true将在数据表格底部显示分页工具栏
            pageNumber:1,//当设置分页属性时，初始化分页码
            pageSize:10,//当设置分页属性时，初始化每页记录数
            pageList:[10,20,50] //当设置分页属性时，初始化每页记录数列表
        });
        
      /*  // 
        var col = option.columns;
        var btn = document.querySelector('button')
        if('' !== col){
        	btn.style.display = 'block';
        }*/
        
        
    }
    $.fn.customEditForm = function (option) {
        var gridSelector = option.grid;
        var addSelector = option.add;
        var editSelector = option.edit;
        var successFun = option.success;
        var _beforeOpen = option.beforeOpen;
        var _this = this;
        if(addSelector){
            $(addSelector).click(function () {
                addOrEdit();
            });
        }
        if(editSelector){
            $(editSelector).click(function () {
                var rows = $(gridSelector).datagrid('getSelections');
                if(rows.length<1){
                    $.messager.alert('提示','请选择要修改的行数据！');
                    return;
                }
                var obj = $(gridSelector).datagrid("getSelected");
                addOrEdit(obj);
            });
        }
        function addOrEdit(obj){
            if(!_beforeOpen || _beforeOpen(obj)){
                $(_this).find("form").find("[name]").each(function () {
                    if($(this)[0].tagName.toUpperCase() == "SELECT"){
                        $(this).find("option:eq(0)").attr('selected','selected');;
                    }
                    else {
                        $(this).val("");
                    }

                });
                if(obj){
                    $(_this).find("form").form("load",obj);
                }
                if(option.reloadForm){
                    option.reloadForm(obj);
                }
                $(_this).dialog("open");
            }

        }
        $(_this).find("form").form({
            success:function(data){
                data = eval('(' + data + ')');
                if(data && data.code == "200"){
                    if(successFun){
                        successFun(_this,gridSelector,data);
                    }
                    else{
                        $(_this).dialog('close');
                        $(gridSelector).datagrid("reload");
                    }
                }
                else if(data){
                    $.messager.alert('提示', data.message, '提示');
                }
                else{
                    $.messager.alert('提示', '网络异常', '提示');
                }
            },
            error:function () {
                $.messager.alert('提示','网络异常');
            }
        });

    }
    $.fn.searchForm = function (option) {
        var _this = this;
        $(this).parents("form").submit(function () {
            $(_this).click();
            return false;
        });
        $(this).click(function () {
            var attr = $(this).parents("form").serializeArray();
            var obj = {};
            $(attr).each(function () {
                obj[this.name] = this.value;
            });
            if(option.url){
                var queryParam = $(option.grid).datagrid('options');
                queryParam.url = option.url;
                queryParam.queryParams = obj;
                $(option.grid).datagrid(queryParam);
            }
            else{
                $(option.grid).datagrid('load',obj);
            }

        });
    }
})(jQuery)


