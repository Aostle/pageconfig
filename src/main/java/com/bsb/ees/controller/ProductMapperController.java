package com.bsb.ees.controller;

import com.bsb.ees.domain.ProductMapper;
import com.bsb.ees.service.ProductMapperService;
import com.bsb.ees.utils.EasyuiPageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/product/")
public class ProductMapperController {

    @Autowired
    ProductMapperService productMapperService;

    /*
    * @Description: 根据产品编号和交易类型查询
    * @Param: [prodNo, transType]
    * @return: com.bsb.ees.domain.ProductMapper
    * @Author: Huangzhiqiang
    * @Date: 2018/7/16
    */
    @RequestMapping("query")
    public @ResponseBody
    List<ProductMapper> queryByProdNo(String prodNo, String transType) {
        List<ProductMapper> list=new ArrayList<ProductMapper>();
         list.add(productMapperService.queryByProdNo(prodNo, transType));
         return list;
    }

   /*
   * @Description: 分页查询
   * @Param: [page, rows]
   * @return: com.bsb.ees.utils.EasyuiPageUtils<com.bsb.ees.domain.ProductMapper>
   * @Author: Huangzhiqiang
   * @Date: 2018/7/16
   */
    @RequestMapping("queryBypage")
    public @ResponseBody
    EasyuiPageUtils<ProductMapper> getPage(int page, int rows) {
        EasyuiPageUtils<ProductMapper> pageUtils = null;
        try {
            pageUtils = productMapperService.getPage(page, rows);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return pageUtils;
    }

    /*
    * @Description:用于添加和修改
    * @Param: [p]
    * @return: java.lang.String
    * @Author: Huangzhiqiang
    * @Date: 2018/7/16
    */
    @RequestMapping(value = "save", produces="text/html;charset=utf-8")

    public  @ResponseBody String save(ProductMapper p){
        String str="";

        if(p.getId()==0) {
            str="添加";
        }else {
            str="修改";
        }
        try {
            productMapperService.save(p);
            str+="成功";
        } catch (SQLException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();

            str+="失败";


        }

        return str;
    }

    /*
    * @Description: 根据主键删除
    * @Param: [id]
    * @
    * return: java.lang.String
    * @Author: Huangzhiqiang
    * @Date: 2018/7/16
    */
    @RequestMapping(value="delete", produces="text/html;charset=utf-8")
    public @ResponseBody String  delete(int id)throws Exception{
        int re=productMapperService.delete(id);
        if(re>0) {
            return "删除成功";
        }
        return "删除失败";
    }
}
