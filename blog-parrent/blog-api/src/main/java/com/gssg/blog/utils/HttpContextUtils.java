package com.gssg.blog.utils;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

/**
 * HttpServletRequest
 *
 */
public class HttpContextUtils {

  public static HttpServletRequest getHttpServletRequest() {
    return ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
  }
}
