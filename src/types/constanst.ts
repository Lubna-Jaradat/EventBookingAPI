export const MODULES_NAMES = {
  auth: 'AUTH',
  user: 'USER',
  post: 'EVENT',
  ticket: 'TICKET',
} as const;

export type ModuleNameType = (typeof MODULES_NAMES)[keyof typeof MODULES_NAMES];
export type StringObject = Record<string, unknown>;