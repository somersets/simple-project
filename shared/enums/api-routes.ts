export enum API_ROUTES {
  LOGIN = `users/auth/login`,
  REGISTER = `users/auth/register`,
  REFRESH_TOKEN = `users/auth/refresh`,
  ACTIVATE_ACCOUNT = `users/auth/activate/`,

  CURRENT_USER = `users/current`,
  USER_UPDATE = `users/current`,
  USER_UPDATE_PHOTOS = `users/photos`,
  USER_SORT_PHOTOS = `users/photos/order`,
  USER_PHOTOS_STATIC = `users/photos/static/`,
  USER_LOGOUT = `users/auth/logout`,
  USER_ORIENTATION = `users/orientations`,

  MESSAGES_HISTORY = `chat/history`,
}
