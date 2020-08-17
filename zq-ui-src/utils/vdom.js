import { hasOwn } from 'zq-ui/zq-ui-src/utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
