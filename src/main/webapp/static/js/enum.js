
function Map(){
	this.container = new Object();
}
Map.prototype.put = function(key, value){
	this.container[key] = value;
};
Map.prototype.get = function(key){
	return this.container[key];
};
Map.prototype.keyArray = function(){
	var keys = new Array();
	for(var key in this.container){
		keys.push(key);
	}
	return keys;
};

function loadSelect(enumObj,selectId){
	if(enumObj!=null||enumObj!=""){
		var data = [{ "text": "请选择", "id": "0"}];
		$.each(enumObj.keyArray(),function(i,key){
			data.push({ "text": enumObj.get(key), "id": key });
		})
		$("#"+selectId).combobox("loadData",data);
	}
}

/**
 * cts-oms js 常量配置
 */
//账户状态码
var ENUM_AcctStatus = new Map();
ENUM_AcctStatus.put("1","活动户");
ENUM_AcctStatus.put("2","注销户");
ENUM_AcctStatus.put("3","锁定");

//账户类型码
var ENUM_AcctType = new Map();
ENUM_AcctType.put("101","分期账户");
ENUM_AcctType.put("01","保证金户");
ENUM_AcctType.put("02","结算户");
ENUM_AcctType.put("03","佣金户");
ENUM_AcctType.put("04","贴息户");
ENUM_AcctType.put("05","收单户");
ENUM_AcctType.put("06","应收户");
ENUM_AcctType.put("07","应付户");
ENUM_AcctType.put("08","备付金户");
ENUM_AcctType.put("09","溢缴款账户");
ENUM_AcctType.put("10","渠道对公账户");
ENUM_AcctType.put("11","债转账户");

//金额类型码
var ENUM_AmtType = new Map();
ENUM_AmtType.put("1","本金");
ENUM_AmtType.put("2","费用");
ENUM_AmtType.put("3","利息");

//额度运算规则
var ENUM_AvailLimitCalculateRule = new Map();
ENUM_AvailLimitCalculateRule.put("0","正常额度使用");
ENUM_AvailLimitCalculateRule.put("1","额度互斥,只能存在一笔交易");
ENUM_AvailLimitCalculateRule.put("2","额度占用，未还清不恢复额度");

//银行卡状态
var ENUM_BankCardStatus = new Map();
ENUM_BankCardStatus.put("00","正常");
ENUM_BankCardStatus.put("10","停用");
ENUM_BankCardStatus.put("11","假绑卡");

//币种码
var ENUM_BankCardType = new Map();
ENUM_BankCardType.put("0","借记卡和贷记卡");
ENUM_BankCardType.put("1","借记卡");
ENUM_BankCardType.put("2","贷记卡");

//自扣文件处理状态
var ENUM_BatchFileProcessStatus = new Map();
ENUM_BatchFileProcessStatus.put("0","初始化状态");
ENUM_BatchFileProcessStatus.put("1","文件生成成功");
ENUM_BatchFileProcessStatus.put("2","文件上传成功");

//判断激活渠道码是否正确
var ENUM_BatchStatus = new Map();
ENUM_BatchStatus.put("IT","起始");
ENUM_BatchStatus.put("ST","开始");
ENUM_BatchStatus.put("DL","处理中");
ENUM_BatchStatus.put("BD","银行处理中");
ENUM_BatchStatus.put("FH","处理完成");

//额度总控规则
var ENUM_BatchType = new Map();
ENUM_BatchType.put("000","账户平账");
ENUM_BatchType.put("001","账户对账");
ENUM_BatchType.put("002","账户当天发生额核对");
ENUM_BatchType.put("003","订单当天发生额核对");
ENUM_BatchType.put("004","处理费用利息");
ENUM_BatchType.put("005","账户贷款形态转移");
ENUM_BatchType.put("006","还款计划贷款形态转移");
ENUM_BatchType.put("007","自扣明细生成");
ENUM_BatchType.put("008","自扣明细上传");
ENUM_BatchType.put("009","自扣明细结果获取");
ENUM_BatchType.put("010","自扣对账明细结果获取");
ENUM_BatchType.put("011","自扣对账明细结果对账");
ENUM_BatchType.put("012","实时还款交易结果更新获取");
ENUM_BatchType.put("013","实时对账明细结果对账");
ENUM_BatchType.put("014","实时还款交易对账结果生成");
ENUM_BatchType.put("015","实时对账");
ENUM_BatchType.put("016","自扣结果进行还款");
ENUM_BatchType.put("017","客户设置自扣还款，T-2发送自扣提醒短信，系统批量发送短信生成");
ENUM_BatchType.put("018","T日扣款回，发送短信告知客户自扣结果短信生成");
ENUM_BatchType.put("019","T-2日还款提醒（与自扣短信排他）短信生成");
ENUM_BatchType.put("020","T+1日逾期提醒短信生成");
ENUM_BatchType.put("021","T+5日逾期提醒短信生成");
ENUM_BatchType.put("023","T+28日逾期提醒短信生成");
ENUM_BatchType.put("024","T+31日逾期提醒短信生成");
ENUM_BatchType.put("025","T+61日逾期提醒短信生成");

//币种码
var ENUM_BillResource = new Map();
ENUM_BillResource.put("01","邮箱");
ENUM_BillResource.put("02","网银");

//账户状态码
var ENUM_CapitalReceiveStatus = new Map();
ENUM_CapitalReceiveStatus.put("0","未付款");
ENUM_CapitalReceiveStatus.put("1","已付款");

//钞汇标志
var ENUM_CashFlag = new Map();
ENUM_CashFlag.put("0","本币");
ENUM_CashFlag.put("1","现钞");
ENUM_CashFlag.put("2","现汇");

//激活渠道码/交易渠道码/交易来源码
var ENUM_ChannelCode = new Map();
ENUM_ChannelCode.put("00000000","包银APP");
ENUM_ChannelCode.put("0102020001","会分期");

//会计对账状态
var ENUM_CheckStatus = new Map();
ENUM_CheckStatus.put("01","未处理");
ENUM_CheckStatus.put("02","核对成功");
ENUM_CheckStatus.put("03","短款");
ENUM_CheckStatus.put("04","长款");

//币种码
var ENUM_Currency = new Map();
ENUM_Currency.put("156","人民币");
ENUM_Currency.put("840","美元");

//客户状态码
var ENUM_CustStatus = new Map();
ENUM_CustStatus.put("1","活动");
ENUM_CustStatus.put("2","锁定");
ENUM_CustStatus.put("3","销户");

//自扣协议状态
var ENUM_DealStatus = new Map();
ENUM_DealStatus.put("00","正常");
ENUM_DealStatus.put("10","停用");

//授权用途
var ENUM_DeductMethod = new Map();
ENUM_DeductMethod.put("A01","银行卡");
ENUM_DeductMethod.put("A02","沃支付");
ENUM_DeductMethod.put("A03","话费");

//代扣操作类型码
var ENUM_DeductOperateType = new Map();
ENUM_DeductOperateType.put("0","代扣签约");
ENUM_DeductOperateType.put("1","代扣解约");

//授信额度表的处理状态
var ENUM_DeductResultProcessStatus = new Map();
ENUM_DeductResultProcessStatus.put("001","未处理");
ENUM_DeductResultProcessStatus.put("002","处理失败");
ENUM_DeductResultProcessStatus.put("003","处理成功");
ENUM_DeductResultProcessStatus.put("004","扣款失败或异常,自扣结果处理完成");

//动态码类型码
var ENUM_DynamicCodeType = new Map();
ENUM_DynamicCodeType.put("01","注册");
ENUM_DynamicCodeType.put("02","修改登陆密码");
ENUM_DynamicCodeType.put("03","修改交易密码");
ENUM_DynamicCodeType.put("04","借款");
ENUM_DynamicCodeType.put("05","绑卡");
ENUM_DynamicCodeType.put("06","代收");

//密码状态码
var ENUM_DynamicSendStatus = new Map();
ENUM_DynamicSendStatus.put("1","有效");
ENUM_DynamicSendStatus.put("0","失效");

//学历
var ENUM_Education = new Map();
ENUM_Education.put("1","中专及以下");
ENUM_Education.put("2","专科");
ENUM_Education.put("3","本科");
ENUM_Education.put("4","硕士研究生及以上");

//容错码类型
var ENUM_FaultCode = new Map();
ENUM_FaultCode.put("01","登陆密码");
ENUM_FaultCode.put("02","交易密码");
ENUM_FaultCode.put("03","动态码");

//费用类型
var ENUM_FeeType = new Map();
ENUM_FeeType.put("01", "分期利率");
ENUM_FeeType.put("02", "服务费率");
ENUM_FeeType.put("03","管理费率");
ENUM_FeeType.put("04","逾期利率");
ENUM_FeeType.put("05","逾期手续费率");
ENUM_FeeType.put("06","提前结清利率");
ENUM_FeeType.put("07","提前结清管理费");
ENUM_FeeType.put("50","手续费");
ENUM_FeeType.put("51","周期数");
ENUM_FeeType.put("10","退货手续费");

//客户类型
var ENUM_CustCategory = new Map();
ENUM_CustCategory.put("000", "普通客户");
ENUM_CustCategory.put("001", "包商员工");


//伪冒管制码
var ENUM_FraudBlockCode = new Map();
//ENUM_FraudBlockCode.put("000","正常");
//ENUM_FraudBlockCode.put("100","疑似伪冒");
//ENUM_FraudBlockCode.put("200","确定伪冒");
//ENUM_FraudBlockCode.put("111","疑似被伪冒申请客户");
//ENUM_FraudBlockCode.put("112","疑似伪冒申请伪冒者");
//ENUM_FraudBlockCode.put("121","疑似被账户盗用客户");
//ENUM_FraudBlockCode.put("122","疑似账户盗用伪冒者");
//ENUM_FraudBlockCode.put("131","疑似中介代办客户");
//ENUM_FraudBlockCode.put("132","疑似中介");
//ENUM_FraudBlockCode.put("141","疑似垃圾注册客户");
//ENUM_FraudBlockCode.put("101","疑似其他伪冒类型客户");
//ENUM_FraudBlockCode.put("102","疑似其他伪冒类型伪冒者");
//ENUM_FraudBlockCode.put("211","确认被伪冒申请客户");
//ENUM_FraudBlockCode.put("212","确认伪冒申请伪冒者");
//ENUM_FraudBlockCode.put("221","确认被账户盗用客户");
//ENUM_FraudBlockCode.put("222","确认账户盗用伪冒者");
//ENUM_FraudBlockCode.put("231","确认中介代办客户");
//ENUM_FraudBlockCode.put("232","确认中介");
//ENUM_FraudBlockCode.put("241","确认垃圾注册客户");
//ENUM_FraudBlockCode.put("201","确认其他伪冒类型客户");
//ENUM_FraudBlockCode.put("202","确认其他伪冒类型伪冒者");
ENUM_FraudBlockCode.put("000","正常");
ENUM_FraudBlockCode.put("510","欺诈");
ENUM_FraudBlockCode.put("511","疑似欺诈");
ENUM_FraudBlockCode.put("512","死亡");
ENUM_FraudBlockCode.put("513","账号被盗");
ENUM_FraudBlockCode.put("514","诉讼");
ENUM_FraudBlockCode.put("515","多头借贷");
ENUM_FraudBlockCode.put("516","同业逾期");
ENUM_FraudBlockCode.put("517","信用高危");
ENUM_FraudBlockCode.put("518","其他");


//授权处理器

//证件类型
var ENUM_IdType = new Map();
ENUM_IdType.put("01","身份证");
ENUM_IdType.put("02", "军官证");
ENUM_IdType.put("03", "护照");
ENUM_IdType.put("04", "港澳通行证");
ENUM_IdType.put("05", "台湾通行证");
ENUM_IdType.put("06", "外国人居留证");
ENUM_IdType.put("07", "户口本");
ENUM_IdType.put("08", "警官证");
ENUM_IdType.put("09", "士兵证");
ENUM_IdType.put("10","工商营业执照");
ENUM_IdType.put("11", "事业单位编号");
ENUM_IdType.put("12","组织机构代码");
ENUM_IdType.put("13", "其他证件类型");

//客户层额度总控规则
var ENUM_LimitRule = new Map();
ENUM_LimitRule.put("MAX","额度中取最大值");
ENUM_LimitRule.put("SUM","额度相加");

//业务额度类型码  产品号-产品名称  
var ENUM_LimitType = new Map();
ENUM_LimitType.put("100","现金代");
ENUM_LimitType.put("200","代理");
ENUM_LimitType.put("100001","现金贷");
ENUM_LimitType.put("200001","萨摩耶信用卡代偿");
//额度使用类型码
var ENUM_LimitUseType = new Map();
ENUM_LimitUseType.put("1","单次");
ENUM_LimitUseType.put("2","循环");

//AvailLimitCalculateRule : 额度使用规则
var ENUM_AvailLimitRule = new Map();
ENUM_AvailLimitRule.put("0","全循环");
ENUM_AvailLimitRule.put("1","非循环");
ENUM_AvailLimitRule.put("2","半循环");

//借款申请状态码
var ENUM_LoanApplyStatus = new Map();
ENUM_LoanApplyStatus.put("01","未打款");
ENUM_LoanApplyStatus.put("02","打款中");
ENUM_LoanApplyStatus.put("03","已打款");
ENUM_LoanApplyStatus.put("04","拒绝");

//贷款形态码
var ENUM_LoanStatus = new Map();
ENUM_LoanStatus.put("01","正常");
ENUM_LoanStatus.put("02","逾期90天内");
ENUM_LoanStatus.put("03","逾期90天外");
ENUM_LoanStatus.put("04","打呆");
ENUM_LoanStatus.put("05","核销");

//借款类型码
var ENUM_LoanType = new Map();
ENUM_LoanType.put("1","现金贷款");
ENUM_LoanType.put("2","余额代偿");

//日志事件类型
var ENUM_LogEventType = new Map();
ENUM_LogEventType.put("C01","客户伪冒管制码维护");
ENUM_LogEventType.put("C02","客户销户");
ENUM_LogEventType.put("C03","客户重新激活");
ENUM_LogEventType.put("C04","账单日维护");
ENUM_LogEventType.put("A01","账户伪冒管制码维护");
ENUM_LogEventType.put("A02","账户固额调整");
ENUM_LogEventType.put("A03","账户临额调整");
ENUM_LogEventType.put("A04","账户冻结");
ENUM_LogEventType.put("A05","账户解冻");
ENUM_LogEventType.put("P01","业务参数维护");
ENUM_LogEventType.put("P11","分期手续费参数维护");
ENUM_LogEventType.put("P13","短信模板维护");
ENUM_LogEventType.put("T01","费用调整");
ENUM_LogEventType.put("T02","利息调整");
ENUM_LogEventType.put("T03","还款补账");
ENUM_LogEventType.put("T04","还款删账");
ENUM_LogEventType.put("T05","本金调账");
ENUM_LogEventType.put("T06","转账异常删帐");
ENUM_LogEventType.put("L01", "额度总控开关");
ENUM_LogEventType.put("D01", "自扣协议设置");

//
var ENUM_LoginAuthWay = new Map();
ENUM_LoginAuthWay.put("appAuth","登录名+密码");
ENUM_LoginAuthWay.put("weChatAuth","微信号+手机号");

//删补账标志
var ENUM_ManulProcessCode = new Map();
ENUM_ManulProcessCode.put("A","手工补账");
ENUM_ManulProcessCode.put("D","手工删账");

//
var ENUM_MaritalStatus = new Map();
ENUM_MaritalStatus.put("10","未婚");
ENUM_MaritalStatus.put("20","已婚");
ENUM_MaritalStatus.put("30","离异");

//消息业务码
var ENUM_NotifyBusizzCode = new Map();
ENUM_NotifyBusizzCode.put("CTS0101","微信用开户成功通知");
ENUM_NotifyBusizzCode.put("CTS0102","微信用还款成功通知");
ENUM_NotifyBusizzCode.put("CTS0104","微信用交易成功通知");
ENUM_NotifyBusizzCode.put("CTS0105","微信用退货成功通知");
ENUM_NotifyBusizzCode.put("CTS0106","微信用账单日前3天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0107","微信用账单日逾期2天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0108","微信用账单日逾期8天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0109","微信用账单日逾期15、20天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0110","微信用账单日逾期25天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0111","微信用账单日逾期31天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0112","微信用账单日逾期38天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0113","微信用账单日逾期45、50天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0114","微信用账单日逾期55天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0115","微信用账单日逾期61天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0116","微信用账单日逾期70天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0117","微信用账单日催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0202","分期还款成功通知");
ENUM_NotifyBusizzCode.put("CTS0203","分期交易成功通知");
ENUM_NotifyBusizzCode.put("CTS0204","分期退货成功通知");
ENUM_NotifyBusizzCode.put("CTS0208","分期自扣还款失败通知");
ENUM_NotifyBusizzCode.put("CTS0201","分期最迟还款日前3天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0205","分期逾期2天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0206","分期逾期8天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0207","分期逾期15、20天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0209","分期逾期25天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0210","分期逾期31天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0211","分期逾期38天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0212","分期逾期45、50天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0213","分期逾期55天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0214","分期逾期61天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0215","分期逾期70天催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0216","分期最迟还款日催收还款通知");
ENUM_NotifyBusizzCode.put("CTS0301","分期交易提现通知");
ENUM_NotifyBusizzCode.put("CTS0302","分期蜜柚开户确认通知");

//信息通知类型码
var ENUM_NotifyType =new Map();
ENUM_NotifyType.put("100","最迟还款日前2天自扣提醒短信发送");
ENUM_NotifyType.put("101","自扣成功结果短信发送");
ENUM_NotifyType.put("102","自扣失败结果短信发送");
ENUM_NotifyType.put("103","最迟还款日前2天还款提醒短信发送");
ENUM_NotifyType.put("104","还款计划逾期1天催收还款通知");
ENUM_NotifyType.put("105","还款计划逾期5天催收还款通知");
ENUM_NotifyType.put("106","还款计划逾期28天催收还款通知");
ENUM_NotifyType.put("107","还款计划逾期31天催收还款通知");
ENUM_NotifyType.put("108","还款计划逾期61天催收还款通知");

//操作动作码
var ENUM_OperateAction = new Map();
ENUM_OperateAction.put("A","新增");
ENUM_OperateAction.put("U","修改");
ENUM_OperateAction.put("D","删除");
ENUM_OperateAction.put("T","交易");
ENUM_OperateAction.put("C","客户信息操作");

//操作角色（记日志用）
var ENUM_OperateRole = new Map();
ENUM_OperateRole.put("0","经办");
ENUM_OperateRole.put("1","授权");
ENUM_OperateRole.put("2","复核");
ENUM_OperateRole.put("3","客户");
ENUM_OperateRole.put("4","系统");
ENUM_OperateRole.put("CBUSER","普通业务用户");
ENUM_OperateRole.put("HROUSR","借聘业务用户");
ENUM_OperateRole.put("BEOUSR","外包业务用户");
ENUM_OperateRole.put("CADMIN","普通管理员用户");
ENUM_OperateRole.put("SYSADM","超级管理员用户");
ENUM_OperateRole.put("CFGADM","配置管理员用户");

//操作类型枚举
var ENUM_OperateType = new Map();
ENUM_OperateType.put("C01","注册");
ENUM_OperateType.put("C02","登录");
ENUM_OperateType.put("C03","教育信息录入");
ENUM_OperateType.put("C04","身份信息录入");
ENUM_OperateType.put("C05","银行卡信息录入");
ENUM_OperateType.put("C06","交易密码设置");
ENUM_OperateType.put("C07","地址信息录入");
ENUM_OperateType.put("C08","联系人信息录入");
ENUM_OperateType.put("C09","额度激活");
ENUM_OperateType.put("C10","自扣协议设置");
ENUM_OperateType.put("C11","活体照片录入");
ENUM_OperateType.put("C12","绑定信用卡");
ENUM_OperateType.put("C13","解绑借记卡");
ENUM_OperateType.put("C14","解绑贷记卡");
ENUM_OperateType.put("C15","自扣协议解约");
ENUM_OperateType.put("C16","注册获取动态码");
ENUM_OperateType.put("C17","重置登录密码获取动态码");
ENUM_OperateType.put("C18","重置交易密码获取动态码");
ENUM_OperateType.put("C19","余额代偿交易获取动态码");
ENUM_OperateType.put("C20","绑定借记卡获取动态码");
ENUM_OperateType.put("C21","还款获取动态码");
ENUM_OperateType.put("C22","登录密码重置");
ENUM_OperateType.put("C23","修改登录密码");
ENUM_OperateType.put("C24","修改交易密码");
ENUM_OperateType.put("C25","聚信立认证完成");
ENUM_OperateType.put("C26","设置交易密码获取动态码");
ENUM_OperateType.put("C27","设置交易密码");
ENUM_OperateType.put("C28","额度调增");

	/**
	 *交易操作，以T开头，三位码
	 */
ENUM_OperateType.put("T01","已授权借款申请");
ENUM_OperateType.put("T02","指定期数还款成功");
ENUM_OperateType.put("T03","指定金额还款成功");
ENUM_OperateType.put("T04","未授权借款申请");
ENUM_OperateType.put("T05","自扣还款");
ENUM_OperateType.put("T06","指定期数还款失败");
ENUM_OperateType.put("T07","指定金额还款失败");
ENUM_OperateType.put("T08","指定期数还款处理中");
ENUM_OperateType.put("T09","指定金额还款处理中");
	/**
	 * 运营端或调度任务操作，以M开头，三位码
	 */
ENUM_OperateType.put("M01","打款成功");
ENUM_OperateType.put("M02","额度调整");
ENUM_OperateType.put("M03","参数设置");
ENUM_OperateType.put("M04","修改伪冒管制码");
ENUM_OperateType.put("M05","修改客户状态");
ENUM_OperateType.put("M06","修改账户状态");
ENUM_OperateType.put("M07","手续费调减");
ENUM_OperateType.put("M08","服务费调减");
ENUM_OperateType.put("M09","利息调减");
ENUM_OperateType.put("M10","交易删账");
ENUM_OperateType.put("M11","还款删账");
ENUM_OperateType.put("M12","还款补账");
ENUM_OperateType.put("M13","账户贷款形态");
ENUM_OperateType.put("M14","账户免滞纳金标志");
ENUM_OperateType.put("M15","账户免超限费标志");
ENUM_OperateType.put("M16","添加系统参数");
ENUM_OperateType.put("M17","修改系统参数");
ENUM_OperateType.put("M18","上传资金方收款明细");
ENUM_OperateType.put("M19","打款失败");
ENUM_OperateType.put("M20","确认资金方收款");
ENUM_OperateType.put("M21","手续费调增");
ENUM_OperateType.put("M22","服务费调增");
ENUM_OperateType.put("M23","利息调增");
ENUM_OperateType.put("M24","滞纳金调增");
ENUM_OperateType.put("M25","滞纳金调减");
ENUM_OperateType.put("M26","备注");
ENUM_OperateType.put("M27","修改风险等级");
ENUM_OperateType.put("M28","银行卡解绑");
ENUM_OperateType.put("M29","修改客户姓名");
ENUM_OperateType.put("M30","修改客户伪冒管制码");
ENUM_OperateType.put("M31","修改银行卡第三方支付来源");

//分期订单状态码
var ENUM_OrderStatus = new Map();
ENUM_OrderStatus.put("00","分期还款中");
ENUM_OrderStatus.put("01","已经结清");
ENUM_OrderStatus.put("10","已退货");
ENUM_OrderStatus.put("11","已冲正");

//参数分类
var ENUM_ParamCategory = new Map();
ENUM_ParamCategory.put("000", "公共");
ENUM_ParamCategory.put("100", "贷款");

//系统参数码值
var ENUM_ParamCode = new Map();
ENUM_ParamCode.put("AVAILABLE_CNT","系统支持的分期期数");
ENUM_ParamCode.put("GRACE_PERIOD","分期宽限期天数");
ENUM_ParamCode.put("OVERDUE_30DAY","逾期30天数");
ENUM_ParamCode.put("OVERDUE_60DAY","逾期60天数");
ENUM_ParamCode.put("OVERDUE_90DAY","逾期90天数");
ENUM_ParamCode.put("DAY_INTEREST_DUE_RATE","分期逾期日利率");
ENUM_ParamCode.put("DUE_FEE_RATE","分期逾期滞纳金率");
ENUM_ParamCode.put("BAT_PAGE_SIZE","批次处理的条数");
ENUM_ParamCode.put("NEED_REPAY_QUERY_DAY","今日应还款推算天数");

//参数类型
var ENUM_ParamType = new Map();
ENUM_ParamType.put("000", "系统参数");
ENUM_ParamType.put("100", "业务参数");

//参数值类型码
var ENUM_ParamTypeCode = new Map();
ENUM_ParamTypeCode.put("1","字符串");
ENUM_ParamTypeCode.put("2","数字型");
ENUM_ParamTypeCode.put("3","浮点型");

//支付方式码
var ENUM_PayType = new Map();
ENUM_PayType.put("0", "银行卡");
ENUM_PayType.put("1", "支付宝");

//处理状态
var ENUM_ProcessStatus = new Map();
ENUM_ProcessStatus.put("0","未处理");
ENUM_ProcessStatus.put("1"," 已处理");

//客户进度标志枚举类
var ENUM_ProgressInd = new Map();
ENUM_ProgressInd.put(1,"客户证件信息");
ENUM_ProgressInd.put(2,"活体信息");
ENUM_ProgressInd.put(3,"绑定银行卡");
ENUM_ProgressInd.put(4,"聚信立认证");
ENUM_ProgressInd.put(5, "客户地址关联人信息");

//密码状态码
var ENUM_PwdStatus = new Map();
ENUM_PwdStatus.put("1","有效");
ENUM_PwdStatus.put("0","失效");

//密码类型码
var ENUM_PwdType = new Map();
ENUM_PwdType.put("1","登陆密码");
ENUM_PwdType.put("2","交易密码");

//实名认证方式码
var ENUM_RealnameMethod = new Map();
ENUM_RealnameMethod.put("01","诺亚");
ENUM_RealnameMethod.put("02","快钱");
ENUM_RealnameMethod.put("03", "中金");

//关联关系类型码
var ENUM_RelationType = new Map();
ENUM_RelationType.put("1","直系联系人");
ENUM_RelationType.put("2","朋友");
ENUM_RelationType.put("3","其他联系人");

//还款方式码
var ENUM_RepayMethod = new Map();
ENUM_RepayMethod.put("A03", "支付宝");
ENUM_RepayMethod.put("C01","信用卡");
ENUM_RepayMethod.put("D01","借记卡");
ENUM_RepayMethod.put("A01","沃账户");
ENUM_RepayMethod.put("A02","手机话费");
ENUM_RepayMethod.put("C01","信用卡");
ENUM_RepayMethod.put("D01","借记卡");


//还款分账表里的状态码(被转入，被转出)
var ENUM_RepaySplitStatus = new Map();
ENUM_RepaySplitStatus.put("0","被转出");
ENUM_RepaySplitStatus.put("1","被转入");

//还款状态码
var ENUM_RepayStatus = new Map();
ENUM_RepayStatus.put("1","成功");
ENUM_RepayStatus.put("2","失败");
ENUM_RepayStatus.put("3","处理中");
ENUM_RepayStatus.put("4","短信验证码不通过");
ENUM_RepayStatus.put("6","部分成功");

//还款类型码
var ENUM_RepayType = new Map();
//ENUM_RepayType.put("P01","快捷支付");
//ENUM_RepayType.put("P02","一般支付");
//ENUM_RepayType.put("B01","虚拟账户余额");
ENUM_RepayType.put("01","分期等额收取手续费");
ENUM_RepayType.put("02","一次收取手续费");
ENUM_RepayType.put("03","等额本息");
ENUM_RepayType.put("04","等额本金");
ENUM_RepayType.put("05","净息还款");


//记录cts批量短信发送状态(微信用账单日提醒，分期账单日提醒)
var ENUM_SendStatus = new Map();
ENUM_SendStatus.put("01","未发送");
ENUM_SendStatus.put("02","发送成功");
ENUM_SendStatus.put("03","发送失败");

//性别
var ENUM_Sex = new Map();
ENUM_Sex.put("F","女");
ENUM_Sex.put("M","男");

//费用分摊类型码
var ENUM_ShareType = new Map();
ENUM_ShareType.put("000","设置默认情况的收费情况");
ENUM_ShareType.put("F01","全部在首期");
ENUM_ShareType.put("A00","每期均摊");
ENUM_ShareType.put("B04","从第4期开始均摊");
ENUM_ShareType.put("B07","从第7期开始均摊");
ENUM_ShareType.put("B10","从第10期开始均摊");
ENUM_ShareType.put("B13","从第13期开始均摊");

//系统参数码
var ENUM_SysParamCode = new Map();
ENUM_SysParamCode.put("DAY_INTEREST_RATE","日利率");
ENUM_SysParamCode.put("OVERDUE_INTEREST_RATE","逾期利率");
ENUM_SysParamCode.put("OVERDUE_FEE_RATE","滞纳金利率");
ENUM_SysParamCode.put("AVAILABLE_CNT","有效期数");
ENUM_SysParamCode.put("LEAST_TRANS_AMT","最少交易金额");
ENUM_SysParamCode.put("NEED_REPAY_QUERY_DAY","最迟还款日推迟天数");
ENUM_SysParamCode.put("REPAY_BEFORE_DAY","还款提前天数");

//表ID类型码，用于生成ID
var ENUM_TableIdCode = new Map();
ENUM_TableIdCode.put("01","SEQ_TRX_TRANS_DETAIL_INFO");
ENUM_TableIdCode.put("02","SEQ_TRX_ORDER_INFO");
ENUM_TableIdCode.put("03","SEQ_TRX_REPAY_INFO");
ENUM_TableIdCode.put("04","SEQ_TRX_REPAY_DELETE_DETAIL");
ENUM_TableIdCode.put("05","SEQ_TRX_REPAY_DETAIL");
ENUM_TableIdCode.put("06","SEQ_TRX_FEE_DETAIL");
ENUM_TableIdCode.put("07","SEQ_TRX_INTEREST_DETAIL");
ENUM_TableIdCode.put("08","SEQ_TRX_TRANS_DELETE_DETAIL");
ENUM_TableIdCode.put("09","SEQ_TRX_REPAY_SPLIT_DETAIL");
ENUM_TableIdCode.put("10","SEQ_SYS_PARAM");
ENUM_TableIdCode.put("11","SEQ_TRX_OPERATE_LOG");
ENUM_TableIdCode.put("12","SEQ_TRX_OPERATE_LOG_HIS");
ENUM_TableIdCode.put("13","SEQ_TRX_TRANS_FAIL_INFO");
ENUM_TableIdCode.put("14","SEQ_SYS_ACTIVITY_RULE_INFO");
ENUM_TableIdCode.put("15","SEQ_SMS_DETAIL");
ENUM_TableIdCode.put("16","SEQ_SMS_DETAIL_HIS");
ENUM_TableIdCode.put("17","SEQ_CST_CUST_RELATION_INFO");
ENUM_TableIdCode.put("18","SEQ_CST_BANK_CARD_INFO");
ENUM_TableIdCode.put("19","SEQ_CST_CUST_EDUCATION_INFO");
ENUM_TableIdCode.put("20","SEQ_CST_CUST_PWD_INFO");
ENUM_TableIdCode.put("21","SEQ_CST_CUST_DYNAMIC_INFO");
ENUM_TableIdCode.put("22","SEQ_CST_CUST_LOGIN_STATUS_INFO");
ENUM_TableIdCode.put("23","SEQ_CST_CUST_PROFESSION_INFO");
ENUM_TableIdCode.put("24","SEQ_CAP_CAPITAL_INFO");
ENUM_TableIdCode.put("25","SEQ_CAP_CAPITAL_FEE_INFO");
ENUM_TableIdCode.put("26","SEQ_STT_CAPITAL_TRANS_STATISTICS");
ENUM_TableIdCode.put("27","SEQ_CAP_CAPITAL_TRANSFER_DETAIL");
ENUM_TableIdCode.put("28","SEQ_BAT_BATCH_INFO");
ENUM_TableIdCode.put("29","SEQ_BAT_BATCH_ERROR_DETAIL");
ENUM_TableIdCode.put("30","SEQ_BAT_BATCH_ERROR_DETAIL");
ENUM_TableIdCode.put("31","SEQ_DEC_DEDUCT_DETAIL");
ENUM_TableIdCode.put("32","SEQ_DEC_DEDUCT_RESULT");
ENUM_TableIdCode.put("33","SEQ_BAT_TRANSFER_CHECK_DETAIL");
ENUM_TableIdCode.put("34","SEQ_CLS_TRANSFER_CHECK_DIFF");
ENUM_TableIdCode.put("35","SEQ_CON_CONTRACT_INFO");
ENUM_TableIdCode.put("36","SEQ_CST_FAULT_TOLERANT_INFO");
ENUM_TableIdCode.put("37","SEQ_CRS_APPLY_INFO");
ENUM_TableIdCode.put("38","SEQ_CRS_TERMINAL_INFO");

//交易码
var ENUM_TransCode = new Map();
ENUM_TransCode.put("C00","借款申请");
ENUM_TransCode.put("C01","余额代偿");
ENUM_TransCode.put("C02","取现交易");
ENUM_TransCode.put("R01","按期数还款");
ENUM_TransCode.put("R02","按指定金额还款");
ENUM_TransCode.put("R03","自动还款");
ENUM_TransCode.put("R04","还款补账");
ENUM_TransCode.put("D01","借款申请删账");
ENUM_TransCode.put("D02","还款删账");

ENUM_TransCode.put("F01","费用");
ENUM_TransCode.put("F02","服务费");
ENUM_TransCode.put("F03","逾期费用");
ENUM_TransCode.put("F04","费用调增");
ENUM_TransCode.put("F05","费用调减");

ENUM_TransCode.put("I01","利息");
ENUM_TransCode.put("I02","利息调增");
ENUM_TransCode.put("I03","利息调减");

//打款类型
var ENUM_TransferType = new Map();
ENUM_TransferType.put("A01","银行卡");
ENUM_TransferType.put("A02","支付宝");

//交易状态码
var ENUM_TransStatus = new Map();
ENUM_TransStatus.put("00","未处理");
ENUM_TransStatus.put("01","打款中");
ENUM_TransStatus.put("02","已打款");
ENUM_TransStatus.put("03","拒绝");

//
var ENUM_YesNo = new Map();
ENUM_YesNo.put("Y","是");
ENUM_YesNo.put("N","否");

//风险等级
var ENUM_RiskType = new Map();
ENUM_RiskType.put("R01","R01");
ENUM_RiskType.put("R02","R02");
ENUM_RiskType.put("R03","R03");
ENUM_RiskType.put("R04","R04");
ENUM_RiskType.put("R00","R00");
ENUM_RiskType.put("R55","R55");
ENUM_RiskType.put("R99","R99");

//是否绑定微信公众号
var ENUM_BidingWechat = new Map();
ENUM_BidingWechat.put("Y", "是");
ENUM_BidingWechat.put("N", "否");

//发送渠道
var ENUM_SEND_CHANNEL = new Map();
ENUM_SEND_CHANNEL.put("PCS","调用pcs系统接口");
ENUM_SEND_CHANNEL.put("CCS","调用ccs系统接口");

//资金方简称
var ENUM_THIRD_CAP_ORG = new Map();
ENUM_THIRD_CAP_ORG.put("BSB","包商");
ENUM_THIRD_CAP_ORG.put("HRBB","上海哈行");
ENUM_THIRD_CAP_ORG.put("BEE","北京哈行");
ENUM_THIRD_CAP_ORG.put("01","包银账户");
ENUM_THIRD_CAP_ORG.put("02","包银有氧联合账户");

//产品编号
var ENUM_PROD_NO = new Map();
ENUM_PROD_NO.put("100100","现金贷");
ENUM_PROD_NO.put("200100","代理产品");

var LockObject =new Map();
LockObject.put("01","登录密码");
LockObject.put("02","交易密码");
LockObject.put("03","动码");



var LockDimensionality  =new Map();
LockDimensionality.put("1","客户维度");
LockDimensionality.put("2","设备ID维度");


var LockReason   =new Map();
LockReason.put("01","动码发送过多");
LockReason.put("02","动码连续错误次数过多");
LockReason.put("03","动码总共错误次数过多");
LockReason.put("04","密码连续错误次数过多");
LockReason.put("05","密码总共错误次数过多");


var validateResult   =new Map();
validateResult.put("0","失败");
validateResult.put("1","成功");
validateResult.put("2","未验证");


var riskJudge   =new Map();
riskJudge.put("01","风险待确认");
riskJudge.put("02","风险排除");
riskJudge.put("03","疑似风险");


var eventType   =new Map();
eventType.put("001","注册");
eventType.put("002","重置登录密码");
eventType.put("003","重置交易密码");
eventType.put("004","借款");
eventType.put("005","绑卡");
eventType.put("006","还款");
eventType.put("007","修改登录密码");
eventType.put("008","修改交易密码");
eventType.put("009","登录");

//产品号-产品名称  
var ENUM_productName = new Map();
ENUM_productName.put("100","现金代");
ENUM_productName.put("200","代理");
ENUM_productName.put("100001","现金贷");
ENUM_productName.put("200001","萨摩耶信用卡代偿");
ENUM_productName.put("300001","会分期商户贴息");
ENUM_productName.put("400001","证大财富信用贷");
ENUM_productName.put("500001","达飞云贷现金贷");
ENUM_productName.put("501001","功夫贷");
ENUM_productName.put("200","萨摩耶信用卡代偿");
ENUM_productName.put("300","会分期商户贴息");
ENUM_productName.put("400","证大财富信用贷");
ENUM_productName.put("500","达飞云贷");
ENUM_productName.put("501","功夫贷");
ENUM_productName.put("CUS","客户级");



//还款方式码
var ENUM_RepayType = new Map();
ENUM_RepayType.put("1", "按月还本付息");
ENUM_RepayType.put("2","按月付息，期末还本");
ENUM_RepayType.put("3","一次性还本付息");


//提前还款计息方式
var ENUM_PreInterestType = new Map();
ENUM_PreInterestType.put("01", "按整笔本金计算");
ENUM_PreInterestType.put("02","按剩余本金计算");







