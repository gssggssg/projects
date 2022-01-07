/**
 * guid 生成 Universally Unique IDentifier（通用唯一识别码）的算法函数
 * @return UUID
 */
const guid = (): string => {
  function s4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (s4() + s4() + "-" + s4() + "-" + s4() +
    "-" + s4() + "-" + s4() + s4() + s4());
};
export default guid;