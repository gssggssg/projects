package com.gssg.blog.common.aop;

import java.lang.annotation.*;

// Type 代表可以房子啊类上面 Method 代表可以放在方法上
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LogAnnotation {

  String module() default "";

  String operator() default "";
}
