import { http } from "@/utils/http";

// 这里定义返回值类型，使接口拥有良好的类型推导
export type MyListResult = {
  /** 是否请求成功 */
  code: number;
  data: {
    list: [
      {
        id: string;
      }
    ];
    count: number;
  };
};

// export type columnFieldList = {
//   code: number;
//   data: {
//     columns: [
//       {
//         label: string;
//         prop: string;
//       }
//     ];
//   };
// };

/** 登录接口 */
export const getDefaultList = async (data?: object): Promise<MyListResult> => {
  let result = (await http.request<MyListResult>(
    "post",
    "/api/daas/main/list",
    { data }
  )) as MyListResult;
  // result.data.targetDate = new Date(result.data.targetDate);
  return result;
};
