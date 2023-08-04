/**
 * 用于格式化树形数据
 * @param children
 * @returns {*}
 */
export const getParsedTreeData = (children) =>
  children.map((item) => {
    if (item.display) {
      item.children = [];
    }
    return {
      key: item.id,
      title: item.name,
      type: item.type,
      id: item.id,
      children: item.children ? getParsedTreeData(item.children) : [],
    };
  });

export const parseTreeData = (children) =>
  children.map((item, index) => ({
    ...item,
    key: item.id,
    value: item.id,
    label: item.name,
    title: item.name,
    children: item.children ? parseTreeData(item.children) : [],
    subscript: item.subscript ? item.subscript : index,
  }));

/**
 * 获取某个节点的所有父节点
 * @param list
 * @param id
 * @returns {T[]|*[]}
 */
export function getAllParentNodes(list, id) {
  for (let i in list) {
    if (list[i].id === id) {
      return [list[i]].filter((v) => v.id !== id);
    }
    if (list[i].children?.length > 0) {
      let node = getAllParentNodes(list[i].children, id);
      if (node) return node.concat(list[i]).filter((v) => v.id !== id);
    }
  }
}

/**
 * 获取某个节点的兄弟节点
 * @param list
 * @param id
 * @returns {*}
 */
export function getBrotherNodes(list, id) {
  for (let i in list) {
    if (list[i].id === id) {
      return list.filter((v) => v.id !== id);
    }
    if (list[i].children?.length > 0) {
      let node = getBrotherNodes(list[i].children, id);
      if (node) return node.filter((v) => v.id !== id);
    }
  }
}

/**
 * 获取某个节点的所有子节点
 * @param list
 * @param id
 * @param arr
 * @returns {*[]}
 */
export function getAllChildrenNodes(list, id, arr = []) {
  for (let i in list) {
    if (list[i].id === id) {
      arr.push(list[i]);
      if (list[i].children?.length > 0) {
        getChild(list[i].children, arr);
      }
    } else {
      if (list[i].children?.length > 0) {
        getAllChildrenNodes(list[i].children, id, arr);
      }
    }
  }
  return arr.filter((v) => v.id !== id);
}
function getChild(list, arr) {
  list.forEach((v) => {
    arr.push(v);
    if (v.children) {
      getChild(v.children, arr);
    }
  });
}
