let id = 0;
const objs = new WeakMap();

/**
 * @param {Record<string, unknown>} obj
 * @returns {number}
 */
export const getObjectId = (obj) => {
  let objId = objs.get(obj);
  if (!objId) {
    objId = ++id;
    objs.set(obj, objId);
  }
  return objId;
};
