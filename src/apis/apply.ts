import { iotRequest } from '@/apis/api'

export const getApplyList = (params: any) => {
  return iotRequest('get', '/developercenter-api/common/environment', params)
}
