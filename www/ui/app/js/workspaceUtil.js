// Keep consistence with the file .react/src/workspaces/workspaceUtil.js
rsb.workspaces = rsb.workspaces || {};
rsb.workspaces.WORKSPACE_STORE_KEY = "cdata.arc.workspace";

rsb.workspaces.defaultStore = () => {
  return {
    access: []
  };
}

rsb.workspaces.updateAccessDate = (workspaceId) => {
  const data = rsb.workspaces.loadFromStorage();
  let found = false;
  for (let i = 0; i < data.access.length; i++) {
    const item = data.access[i];
    if (item.workspaceId === workspaceId) {
      found = true;
      item.accessTime = new Date();
      break;
    }
  }
  if (!found) {
    data.access.push({
      workspaceId: workspaceId,
      accessTime: new Date(),
    })
  }
  rsb.workspaces.saveToStorage(data);
}

rsb.workspaces.loadFromStorage = () => {
  const state = window?.localStorage?.getItem(rsb.workspaces.WORKSPACE_STORE_KEY);
  try {
    return state ? JSON.parse(state) : rsb.workspaces.defaultStore();
  } catch {
    return rsb.workspaces.defaultStore();
  }
}

rsb.workspaces.saveToStorage = (settings) => {
  window?.localStorage?.setItem(rsb.workspaces.WORKSPACE_STORE_KEY, JSON.stringify(settings));
}
