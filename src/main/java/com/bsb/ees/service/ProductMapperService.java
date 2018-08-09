package com.bsb.ees.service;

import com.bsb.ees.domain.ProductMapper;
import com.bsb.ees.utils.EasyuiPageUtils;

import java.sql.SQLException;

public interface ProductMapperService {

    ProductMapper queryByProdNo(String prodNo, String transType);

    EasyuiPageUtils<ProductMapper> getPage(int pageno, int pagesize) throws SQLException;
    void save(ProductMapper p) throws SQLException ;
    int delete(int id) throws SQLException;

}
