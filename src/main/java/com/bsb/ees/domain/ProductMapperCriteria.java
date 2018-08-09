package com.bsb.ees.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ProductMapperCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected int limitStart = -1;

    protected int pageSize = -1;

    public ProductMapperCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setLimitStart(int limitStart) {
        this.limitStart=limitStart;
    }

    public int getLimitStart() {
        return limitStart;
    }

    public void setPageSize(int pageSize) {
        this.pageSize=pageSize;
    }

    public int getPageSize() {
        return pageSize;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andProdNoIsNull() {
            addCriterion("PROD_NO is null");
            return (Criteria) this;
        }

        public Criteria andProdNoIsNotNull() {
            addCriterion("PROD_NO is not null");
            return (Criteria) this;
        }

        public Criteria andProdNoEqualTo(String value) {
            addCriterion("PROD_NO =", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoNotEqualTo(String value) {
            addCriterion("PROD_NO <>", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoGreaterThan(String value) {
            addCriterion("PROD_NO >", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoGreaterThanOrEqualTo(String value) {
            addCriterion("PROD_NO >=", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoLessThan(String value) {
            addCriterion("PROD_NO <", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoLessThanOrEqualTo(String value) {
            addCriterion("PROD_NO <=", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoLike(String value) {
            addCriterion("PROD_NO like", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoNotLike(String value) {
            addCriterion("PROD_NO not like", value, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoIn(List<String> values) {
            addCriterion("PROD_NO in", values, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoNotIn(List<String> values) {
            addCriterion("PROD_NO not in", values, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoBetween(String value1, String value2) {
            addCriterion("PROD_NO between", value1, value2, "prodNo");
            return (Criteria) this;
        }

        public Criteria andProdNoNotBetween(String value1, String value2) {
            addCriterion("PROD_NO not between", value1, value2, "prodNo");
            return (Criteria) this;
        }

        public Criteria andTransTypeIsNull() {
            addCriterion("TRANS_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andTransTypeIsNotNull() {
            addCriterion("TRANS_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andTransTypeEqualTo(String value) {
            addCriterion("TRANS_TYPE =", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeNotEqualTo(String value) {
            addCriterion("TRANS_TYPE <>", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeGreaterThan(String value) {
            addCriterion("TRANS_TYPE >", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeGreaterThanOrEqualTo(String value) {
            addCriterion("TRANS_TYPE >=", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeLessThan(String value) {
            addCriterion("TRANS_TYPE <", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeLessThanOrEqualTo(String value) {
            addCriterion("TRANS_TYPE <=", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeLike(String value) {
            addCriterion("TRANS_TYPE like", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeNotLike(String value) {
            addCriterion("TRANS_TYPE not like", value, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeIn(List<String> values) {
            addCriterion("TRANS_TYPE in", values, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeNotIn(List<String> values) {
            addCriterion("TRANS_TYPE not in", values, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeBetween(String value1, String value2) {
            addCriterion("TRANS_TYPE between", value1, value2, "transType");
            return (Criteria) this;
        }

        public Criteria andTransTypeNotBetween(String value1, String value2) {
            addCriterion("TRANS_TYPE not between", value1, value2, "transType");
            return (Criteria) this;
        }

        public Criteria andProductKeyIsNull() {
            addCriterion("PRODUCT_KEY is null");
            return (Criteria) this;
        }

        public Criteria andProductKeyIsNotNull() {
            addCriterion("PRODUCT_KEY is not null");
            return (Criteria) this;
        }

        public Criteria andProductKeyEqualTo(String value) {
            addCriterion("PRODUCT_KEY =", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyNotEqualTo(String value) {
            addCriterion("PRODUCT_KEY <>", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyGreaterThan(String value) {
            addCriterion("PRODUCT_KEY >", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyGreaterThanOrEqualTo(String value) {
            addCriterion("PRODUCT_KEY >=", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyLessThan(String value) {
            addCriterion("PRODUCT_KEY <", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyLessThanOrEqualTo(String value) {
            addCriterion("PRODUCT_KEY <=", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyLike(String value) {
            addCriterion("PRODUCT_KEY like", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyNotLike(String value) {
            addCriterion("PRODUCT_KEY not like", value, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyIn(List<String> values) {
            addCriterion("PRODUCT_KEY in", values, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyNotIn(List<String> values) {
            addCriterion("PRODUCT_KEY not in", values, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyBetween(String value1, String value2) {
            addCriterion("PRODUCT_KEY between", value1, value2, "productKey");
            return (Criteria) this;
        }

        public Criteria andProductKeyNotBetween(String value1, String value2) {
            addCriterion("PRODUCT_KEY not between", value1, value2, "productKey");
            return (Criteria) this;
        }

        public Criteria andSavePointIsNull() {
            addCriterion("SAVE_POINT is null");
            return (Criteria) this;
        }

        public Criteria andSavePointIsNotNull() {
            addCriterion("SAVE_POINT is not null");
            return (Criteria) this;
        }

        public Criteria andSavePointEqualTo(String value) {
            addCriterion("SAVE_POINT =", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointNotEqualTo(String value) {
            addCriterion("SAVE_POINT <>", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointGreaterThan(String value) {
            addCriterion("SAVE_POINT >", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointGreaterThanOrEqualTo(String value) {
            addCriterion("SAVE_POINT >=", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointLessThan(String value) {
            addCriterion("SAVE_POINT <", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointLessThanOrEqualTo(String value) {
            addCriterion("SAVE_POINT <=", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointLike(String value) {
            addCriterion("SAVE_POINT like", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointNotLike(String value) {
            addCriterion("SAVE_POINT not like", value, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointIn(List<String> values) {
            addCriterion("SAVE_POINT in", values, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointNotIn(List<String> values) {
            addCriterion("SAVE_POINT not in", values, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointBetween(String value1, String value2) {
            addCriterion("SAVE_POINT between", value1, value2, "savePoint");
            return (Criteria) this;
        }

        public Criteria andSavePointNotBetween(String value1, String value2) {
            addCriterion("SAVE_POINT not between", value1, value2, "savePoint");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeIsNull() {
            addCriterion("CREATE_DATETIME is null");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeIsNotNull() {
            addCriterion("CREATE_DATETIME is not null");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeEqualTo(Date value) {
            addCriterion("CREATE_DATETIME =", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeNotEqualTo(Date value) {
            addCriterion("CREATE_DATETIME <>", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeGreaterThan(Date value) {
            addCriterion("CREATE_DATETIME >", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CREATE_DATETIME >=", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeLessThan(Date value) {
            addCriterion("CREATE_DATETIME <", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeLessThanOrEqualTo(Date value) {
            addCriterion("CREATE_DATETIME <=", value, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeIn(List<Date> values) {
            addCriterion("CREATE_DATETIME in", values, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeNotIn(List<Date> values) {
            addCriterion("CREATE_DATETIME not in", values, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeBetween(Date value1, Date value2) {
            addCriterion("CREATE_DATETIME between", value1, value2, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andCreateDatetimeNotBetween(Date value1, Date value2) {
            addCriterion("CREATE_DATETIME not between", value1, value2, "createDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeIsNull() {
            addCriterion("EXPIRATION_DATETIME is null");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeIsNotNull() {
            addCriterion("EXPIRATION_DATETIME is not null");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeEqualTo(Date value) {
            addCriterion("EXPIRATION_DATETIME =", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeNotEqualTo(Date value) {
            addCriterion("EXPIRATION_DATETIME <>", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeGreaterThan(Date value) {
            addCriterion("EXPIRATION_DATETIME >", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeGreaterThanOrEqualTo(Date value) {
            addCriterion("EXPIRATION_DATETIME >=", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeLessThan(Date value) {
            addCriterion("EXPIRATION_DATETIME <", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeLessThanOrEqualTo(Date value) {
            addCriterion("EXPIRATION_DATETIME <=", value, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeIn(List<Date> values) {
            addCriterion("EXPIRATION_DATETIME in", values, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeNotIn(List<Date> values) {
            addCriterion("EXPIRATION_DATETIME not in", values, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeBetween(Date value1, Date value2) {
            addCriterion("EXPIRATION_DATETIME between", value1, value2, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andExpirationDatetimeNotBetween(Date value1, Date value2) {
            addCriterion("EXPIRATION_DATETIME not between", value1, value2, "expirationDatetime");
            return (Criteria) this;
        }

        public Criteria andClientFlagIsNull() {
            addCriterion("CLIENT_FLAG is null");
            return (Criteria) this;
        }

        public Criteria andClientFlagIsNotNull() {
            addCriterion("CLIENT_FLAG is not null");
            return (Criteria) this;
        }

        public Criteria andClientFlagEqualTo(String value) {
            addCriterion("CLIENT_FLAG =", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagNotEqualTo(String value) {
            addCriterion("CLIENT_FLAG <>", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagGreaterThan(String value) {
            addCriterion("CLIENT_FLAG >", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagGreaterThanOrEqualTo(String value) {
            addCriterion("CLIENT_FLAG >=", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagLessThan(String value) {
            addCriterion("CLIENT_FLAG <", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagLessThanOrEqualTo(String value) {
            addCriterion("CLIENT_FLAG <=", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagLike(String value) {
            addCriterion("CLIENT_FLAG like", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagNotLike(String value) {
            addCriterion("CLIENT_FLAG not like", value, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagIn(List<String> values) {
            addCriterion("CLIENT_FLAG in", values, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagNotIn(List<String> values) {
            addCriterion("CLIENT_FLAG not in", values, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagBetween(String value1, String value2) {
            addCriterion("CLIENT_FLAG between", value1, value2, "clientFlag");
            return (Criteria) this;
        }

        public Criteria andClientFlagNotBetween(String value1, String value2) {
            addCriterion("CLIENT_FLAG not between", value1, value2, "clientFlag");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}