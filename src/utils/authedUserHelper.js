export const emptyAuthedUid = '';

export function isAuthenticated(user) {
  return user !== emptyAuthedUid;
}