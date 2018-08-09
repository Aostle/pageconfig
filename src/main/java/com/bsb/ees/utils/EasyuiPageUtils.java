package com.bsb.ees.utils;

import java.util.List;

public class EasyuiPageUtils<T> {
	private List<T> rows ;
	private int total ;
	private int pages ;
	public List<T> getRows() {
		return rows;
	}
	public void setRows(List<T> rows) {
		this.rows = rows;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
}
