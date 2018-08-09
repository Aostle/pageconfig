(function(factory) {
	if (typeof define === "function" && define.amd) {

		// AMD. Register as an anonymous module.
		define([ "jquery", "./core" ], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
})
(function($) {

	$.extend($.ui, {
		ImgPlus : {
			version : "1.0-beta.1"
		}
	});

	var ImgPlus = function() {
		this.options = {
			appendTo : "body",
			autoOpen : true,
			buttons : [],
			closeOnEscape : true,
			closeText : "Close",
			dialogClass : "",
			draggable : true,
			hide : null,
			maxHeight : null,
			maxWidth : null,
			minHeight : 450,
			minWidth : 500,
			winNum : 0,
			indexNo : 10001,
			sizeP : 0.3
		}
	}

	$.extend(
			ImgPlus.prototype,
			{
				_initParam:function(){
					this.imgSize = 1;
					this.roateSize = 0;
					this.imgWin = null;
					this.showImg = null;
					this.dialog=null;
				},
				_getIndexNo : function() {
					return this.options.indexNo++;
				},
				_getWinNo : function() {
					return this.options.winNum++;
				},
				_initImgWindow : function() {
					this._initParam();
					
					var div = $('<div class="panel window" style="display: block; top: 133.6px; left: 928px; z-index: 9018;position: absolute;"><div class="panel-header panel-header-noborder window-header" ><div class="panel-title" style="">图片信息</div><div class="panel-tool"><a href="javascript:void(0)" class="panel-tool-close"></a></div></div><div style="top: 20%;" title="" align="center" class="easyui-dialog panel-body panel-body-noborder window-body" id="imgdialog"></div></div>');
					var tlDiv = $("<button class='x-btn-text icon-controller-edit' type='button'  id='backs'>上一张</button><button class='x-btn-text icon-controller-edit' type='button'  id='toLarge'>放大</button><button class='x-btn-text icon-controller-edit' type='button' id='toSmall'>缩小</button><button class='x-btn-text icon-controller-edit' type='button' id='toBack'>还原</button> <button class='x-btn-text icon-controller-edit' type='button' id='roateLeft'>左转</button><button class='x-btn-text icon-controller-edit' type='button' id='roateRight'>右转</button><button class='x-btn-text icon-controller-edit' type='button'  id='next'>下一张</button><img id='showImg' name='showImg' src=''/>");

					// 设置divid
					div.attr("id", "imgDiv_" + this.attr("id"));
					var winNo = this._getWinNo();
					div.css({
								"left" : (winNo * this.options.minWidth) / 2
							});
					// 设置宽高
					div.width(this.options.minWidth);
					div.height(this.options.minHeight);

					div.find("#imgdialog").append(tlDiv);

					div.appendTo(this.options.appendTo);

					this.imgWin = div;
					this.showImg = div.find("#showImg");
					this.dialog= div.find("#imgdialog");


					this._initButtonClick();

					this._initImgWindowAttach();
				},
				_initImgWindowAttach : function() {
					this.imgWin.draggable();
					var img = this;
					var imgWin = this.imgWin;
					this.imgWin.find(".panel-tool-close").on(
							"click", function() {
								imgWin.remove();
								
								img.options.winNum--;
								img.options.indexNo--;
								img._initParam();
							});
				},
				_attachImgPlus : function(img, settings) {
					if (!img.attr("id")) {
						this.uuid += 1;
						img.id = "imgPlus" + this.uuid;
					}

					if(img[0].tagName =='A'){
						this._click();
					}else if(img[0].tagName =='IMG'){
						this._doubleClick();
					}
					
					
				},
				_initButtonClick : function() {
					var img = this;
					this.imgWin.find("#toLarge").on("click",
							function() {
								img._imgToLarge();
							});

					this.imgWin.find("#toSmall").click(
							function() {
								img._imgToSmall();
							});

					this.imgWin.find("#toBack").click(
							function() {
								img._imgToBack();
							});

					this.imgWin.find("#roateLeft").click(
							function() {
								img._roateLeft();
							});

					this.imgWin.find("#roateRight").click(
							function() {
								img._roateRight();
							});
					this.imgWin.find("#backs").click(
							function() {
								img._backs();
							});
					this.imgWin.find("#next").click(
							function() {
								img._next();
							});
					
					this.imgWin.find(".panel-tool-close").click(
							function() {
								img.imgWin.css("display","none")
							});
				},
				_next:function(){
					var img = this;
					var num=Number(img.attr("num"))+1
					if(num>=6){
						num=0;
					}
					img.showImg
					.attr("src", imgs[num]);
					img.attr("num",num);
				},
				_backs:function(){
					var img = this;
					var num1=Number(Number(img.attr("num"))-1)
					if(num1<0){
						num1=5;
					}
					img.showImg.attr("src", imgs[num1]);
					img.attr("num",num1);
				},
				_doubleClick : function() {
					var img = this;
					this.dblclick(function() {
						if(img.imgWin == null){
							img._initImgWindow();
						}

						img.showImg
								.attr("src", img.attr("src"));
						img.showImg.rotate({
							duration : 0,
							animateTo : 0
						});

						img._imgToBack();
						img.imgWin.show();
					});
				},
				_click : function() {
					var img = this;
					this.click(function() {
						
						if(img.imgWin == null){
							img._initImgWindow();
						}

						img.showImg.attr("src", img.attr("src"));
						img.showImg.rotate({
							duration : 0,
							animateTo : 0
						});

						img._imgToBack();
						img.imgWin.css("display","block");

					});
				},
				_changeSizeP : function(size) {
					this.imgSize += size * this.options.sizeP;

					if (this.imgSize <= 0.7)
						this.imgSize = 0.7;

					return this.imgSize
				},
				_imgToLarge : function() {
					this._changeSizeP(1);
					
					
					this.showImg.width((this.options.minWidth-100)
							* this.imgSize);
					this.showImg.height((this.options.minHeight-50)
							* this.imgSize);
					this.imgWin.width(this.showImg.width()+50);
					this.imgWin.height(this.showImg.height()+50);
				},
				_imgToSmall : function() {
					this._changeSizeP(-1);
					this.showImg.width((this.options.minWidth-100)
							* this.imgSize);
					this.showImg.height((this.options.minHeight-50)
							* this.imgSize);
					this.imgWin.width(this.showImg.width()+50);
					this.imgWin.height(this.showImg.height()+50);
				},
				_imgToBack : function() {
					this.imgSize = 1;
					this.showImg.width(this.options.minWidth-100);
					this.showImg.height(this.options.minHeight-50);
					this.imgWin.width(this.showImg.width()+50);
					this.imgWin.height(this.showImg.height()+50);
				},
				_roateLeft : function() {
					this.roateSize -= 90;
					this.showImg.rotate({
						duration : 10,
						animateTo : this.roateSize
					});

					// alert(showImg.getRotateAngle());
				},
				_roateRight : function() {
					this.roateSize += 90;
					this.showImg.rotate({
						duration : 10,
						animateTo : this.roateSize
					});

					// alert(showImg.getRotateAngle());
				}
			});

	$.fn.imgPlus = function(options) {
		/* Verify an empty collection wasn't passed - Fixes #6976 */
		if (!this.length) {
			return this;
		}

		$.extend(this, $.imgPlus);

		return this._attachImgPlus(this, options);
	};

	$.imgPlus = new ImgPlus(); // singleton instance
	$.imgPlus.uuid = new Date().getTime();
	$.imgPlus.version = "1.0-beta.1";

	return $.imgPlus;

});