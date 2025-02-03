import { http } from "@/utils/http";

// 这里定义返回值类型，使接口拥有良好的类型推导
export type MyDateResult = {
  /** 是否请求成功 */
  code: number;
  data: {
    daysOfLife: number;
    dayOfYear: number;
    targetDate: string;
    dayInYear: number;
    age: number;
  };
};

/** 登录接口 */
export const getMyDate = async (data?: object): Promise<MyDateResult> => {
  // console.log(import.meta.env);

  let result = (await http.request<MyDateResult>(
    "post",
    "/api/hello/timestamp",
    { data }
  )) as MyDateResult;
  // result.data.targetDate = new Date(result.data.targetDate);
  return result;
};
