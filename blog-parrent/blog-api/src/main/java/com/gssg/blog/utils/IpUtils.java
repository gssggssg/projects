package com.gssg.blog.utils;

import javax.servlet.http.HttpServletRequest;

public class IpUtils {

  /**
   * 获取客户端真实IP地址
   *
   * @param request HttpServletRequest对象
   * @return 真实IP地址
   */
  public static String getIpAddr(HttpServletRequest request) {
    if (request == null) {
      return "unknown";
    }

    String ip = null;

    // 1. 首先尝试从X-Forwarded-For头部获取
    ip = request.getHeader("X-Forwarded-For");
    if (isValidIp(ip)) {
      // X-Forwarded-For可能包含多个IP，第一个是真实IP
      int index = ip.indexOf(',');
      if (index != -1) {
        ip = ip.substring(0, index);
      }
      return ip.trim();
    }

    // 2. 尝试从Proxy-Client-IP头部获取
    ip = request.getHeader("Proxy-Client-IP");
    if (isValidIp(ip)) {
      return ip.trim();
    }

    // 3. 尝试从WL-Proxy-Client-IP头部获取
    ip = request.getHeader("WL-Proxy-Client-IP");
    if (isValidIp(ip)) {
      return ip.trim();
    }

    // 4. 尝试从HTTP_CLIENT_IP头部获取
    ip = request.getHeader("HTTP_CLIENT_IP");
    if (isValidIp(ip)) {
      return ip.trim();
    }

    // 5. 尝试从HTTP_X_FORWARDED_FOR头部获取
    ip = request.getHeader("HTTP_X_FORWARDED_FOR");
    if (isValidIp(ip)) {
      return ip.trim();
    }

    // 6. 最后使用getRemoteAddr()
    ip = request.getRemoteAddr();
    if ("0:0:0:0:0:0:0:1".equals(ip) || "127.0.0.1".equals(ip)) {
      // 本地访问，返回本地IP
      return "127.0.0.1";
    }

    return ip;
  }

  /**
   * 验证IP地址是否有效
   *
   * @param ip IP地址
   * @return 是否有效
   */
  private static boolean isValidIp(String ip) {
    return ip != null && !ip.isEmpty() && !"unknown".equalsIgnoreCase(ip);
  }

  /**
   * 获取客户端真实IP地址（简化版本）
   *
   * @param request HttpServletRequest对象
   * @return 真实IP地址
   */
  public static String getClientIp(HttpServletRequest request) {
    if (request == null) {
      return "unknown";
    }

    String[] headers = {
      "X-Forwarded-For",
      "Proxy-Client-IP",
      "WL-Proxy-Client-IP",
      "HTTP_CLIENT_IP",
      "HTTP_X_FORWARDED_FOR"
    };

    for (String header : headers) {
      String ip = request.getHeader(header);
      if (isValidIp(ip)) {
        // 处理多个IP的情况
        if (ip.contains(",")) {
          ip = ip.split(",")[0].trim();
        }
        return ip;
      }
    }

    return request.getRemoteAddr();
  }
}