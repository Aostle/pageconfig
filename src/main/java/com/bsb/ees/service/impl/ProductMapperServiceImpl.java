package com.bsb.ees.service.impl;


import com.bsb.ees.dao.ProductMapperDao;
import com.bsb.ees.domain.ProductMapper;
import com.bsb.ees.domain.ProductMapperCriteria;
import com.bsb.ees.domain.ProductMapperCriteria.Criteria;
import com.bsb.ees.service.ProductMapperService;
import com.bsb.ees.utils.EasyuiPageUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("productMapperService")
public class ProductMapperServiceImpl implements ProductMapperService {
    @Resource
    ProductMapperDao productMapperDao;

    @Override
    public ProductMapper queryByProdNo(String prodNo, String transType) {
        ProductMapperCriteria criteria = new ProductMapperCriteria();
        Criteria c = criteria.createCriteria();
        c.andProdNoEqualTo(prodNo);
        c.andTransTypeEqualTo(transType);
        List<ProductMapper> countByCriteria = productMapperDao.selectByCriteria(criteria);
        if(countByCriteria==null||countByCriteria.size() == 0){
            return null;
        }
        return countByCriteria.get(0);
    }

    @Override
    public EasyuiPageUtils<ProductMapper> getPage(int pageno, int pagesize) throws SQLException {
        EasyuiPageUtils<ProductMapper> page = new EasyuiPageUtils<ProductMapper>();
        Map<String,Integer> map = new HashMap<String,Integer>();
        ProductMapperCriteria criteria = new ProductMapperCriteria();
        int totalNum = productMapperDao.countByCriteria(criteria) ;
        int totalPage = totalNum % pagesize == 0 ? totalNum / pagesize : totalNum / pagesize + 1 ;

        if(pageno > totalPage){
            pageno = totalPage ;
        }
        if(pageno <= 0){
            pageno = 1 ;
        }
        map.put("start", (pageno-1)*pagesize) ;
        map.put("end", pagesize) ;

        criteria.setLimitStart(map.get("start"));
        criteria.setPageSize(map.get("end"));

        List<ProductMapper> list = productMapperDao.selectByCriteria(criteria);
        page.setRows(list);
        page.setPages(totalPage);
        page.setTotal(totalNum);
        return page;
    }

    @Override
    public void save(ProductMapper p) throws SQLException {
        if(p.getId()==0) {
            productMapperDao.insert(p);
        }else {
            productMapperDao.updateByPrimaryKeySelective(p);
        }
    }

    @Override
    public int delete(int id) throws SQLException {
        return productMapperDao.deleteByPrimaryKey(id);
    }


}
