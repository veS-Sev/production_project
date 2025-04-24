import { type Notification } from '../module/notification'
import { rtkApi } from 'shared/api/index'
export const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationList: build.query<Notification[], null>({
      query: (limit) => ({
        url: '/notifications'
      })
    })
  })
})

export const useNotificationList = notificationApi.useGetNotificationListQuery
