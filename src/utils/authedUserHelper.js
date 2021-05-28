export const defaultAuthedUid = '';

export function isAuthenticated(user) {
  return user !== defaultAuthedUid;
}