package com.bsb.ees.domain;

import com.smy.framework.base.BaseEntity;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class ProductMapper extends BaseEntity implements Serializable {
    //主键id
    private Integer id;

    //
    private String prodNo;

    //交易类型
    private String transType;

    //产品关键值
    private String productKey;

    //保全点
    private String savePoint;

    //创建日期
    @DateTimeFormat(pattern = "yyyy-MM-dd" )
    private Date createDatetime;

    //失效日期
    @DateTimeFormat(pattern = "yyyy-MM-dd" )
    private Date expirationDatetime;

    //B/C端标识
    private String clientFlag;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProdNo() {
        return prodNo;
    }

    public void setProdNo(String prodNo) {
        this.prodNo = prodNo;
    }

    public String getTransType() {
        return transType;
    }

    public void setTransType(String transType) {
        this.transType = transType;
    }

    public String getProductKey() {
        return productKey;
    }

    public void setProductKey(String productKey) {
        this.productKey = productKey;
    }

    public String getSavePoint() {
        return savePoint;
    }

    public void setSavePoint(String savePoint) {
        this.savePoint = savePoint;
    }

    public Date getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }

    public Date getExpirationDatetime() {
        return expirationDatetime;
    }

    public void setExpirationDatetime(Date expirationDatetime) {
        this.expirationDatetime = expirationDatetime;
    }

    public String getClientFlag() {
        return clientFlag;
    }

    public void setClientFlag(String clientFlag) {
        this.clientFlag = clientFlag;
    }
}