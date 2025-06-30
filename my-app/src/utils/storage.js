export function loadData(key) {
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      return JSON.parse(raw);
    } else {
      return [];
    }
  } catch (e) {
    console.error('Load error', e);
    return [];
  }
}
export function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Save error', e);
  }
}