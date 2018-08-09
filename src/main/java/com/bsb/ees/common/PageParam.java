package com.bsb.ees.common;

/**
 * Created by ywp on 2016/9/2.
 */
public class PageParam {
    private Integer page = 1;
    private Integer pageSize = 10;

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getRows() {
        return pageSize;
    }

    public void setRows(Integer rows) {
        this.pageSize = rows;
    }
}
