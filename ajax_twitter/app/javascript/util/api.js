const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    ...options.headers
  };

  return await fetch(url, options);
};

export const followUser = function followUser(id) {
  return customFetch(`/users/${id}/follow`, { method: "post"})
};

export const unfollowUser = function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, { method: "delete"})
}
