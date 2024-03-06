/*
 * @Description  :
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-03-01 16:06:48
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-06 16:08:50
 * @Version      : 1.0.0
 */
import { API } from '@cbim-epc-magic/utils'
import * as T from '@/common/types'

const API_PATH: { [key: string]: string } = {
  testA: '/api/index',
  testList: '/api/ent/list' // 测试地址
}

class api {
  /**
   * @description  : 请求的测试方法
   * @return        {*}
   */
  AjaxTest(parames?: T.T_P_testParames): Promise<any> {
    return API.get(API_PATH.testA, {
      key: parames?.key || '91d3fc46980fb7a4c59adc3685fbe45b',
      type: parames?.type || 'top'
    })
  }
  /**
   * @description  : ***********
   * @return        {*}
   */
  AjaxTestB(parames: T.T_P_testB): Promise<T.TAjaxReturn<Array<T.T_D_testBList>>> {
    return API.post(API_PATH.testList, {
      name: parames.name
    })
  }
}

export default new api()
