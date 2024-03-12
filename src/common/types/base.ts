/*
 * @Description  :
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-03-04 09:50:50
 * @LastEditors  : AoBingChi
<<<<<<< HEAD
 * @LastEditTime : 2024-03-04 09:51:56
 * @Version      : 1.0.0
 */
=======
 * @LastEditTime : 2024-03-07 17:51:27
 * @Version      : 1.0.0
 */
/**
 * @description  : CBIM 返回数据 统一格式
 */
>>>>>>> 4603f4cdb269f3726905af56ad1db8773ed5b612
export type TAjaxReturn<T> = {
  code: number
  success: boolean
  message: string
  data: T
  pageNum?: number
  pageSize?: number
  total?: number
}
