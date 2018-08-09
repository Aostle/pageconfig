package com.bsb.ees.utils;

/**
 * @program: pageconfig
 * @description: ..
 * @author: Huangzhiqiang
 * @create: 2018-08-08 11:13
 **/
public class Test  {

    public static void main(String[] args) {
        int x=91;
        int y=100;
        while(y>0) {
            if (x > 100) {
                x = x - 10;
                y--;
            } else x++;
            System.out.println(x);

        }
    }
}
