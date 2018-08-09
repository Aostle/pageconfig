package com.bsb.ees.common;

import org.apache.commons.lang3.StringUtils;
import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * <p>Title: CustomDateConverter</p>
 * <p>Description:日期转换器 </p>
 * @author	lzj
 * @date	2017年3月20日 14:22:38
 * @version 1.0
 */
public class CustomDateConverter implements Converter<String,Date> {

	@Override
	public Date convert(String source) {
		
		//实现 将日期串转成日期类型(格式是yyyy-MM-dd HH:mm:ss)
	    if(StringUtils.isBlank(source)){
	        return null;
	    }
	    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if("yyyy-MM-dd".length() == source.length()){
		    simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		}
		
		try {
			//转成直接返回
			return simpleDateFormat.parse(source);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		//如果参数绑定失败返回null
		return null;
	}

}
