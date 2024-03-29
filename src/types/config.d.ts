// Export type VForm cuz vee-validate module doesn't support @type of Instance
// https://stackoverflow.com/questions/52109471/typescript-in-vue-property-validate-does-not-exist-on-type-vue-element
export type VForm = Vue & { validate: () => boolean }

// export type notifications
export interface NotificationItemType {
  id: string
  username: string
  createdAt: Date
  isImportant: boolean
  unRead: boolean
  userThumbnailSrc: string
  message: string
}
