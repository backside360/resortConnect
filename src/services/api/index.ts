const baseUrl = 'http://localhost:8080/resort-connect/api/requests';

const api = {
  category: {
    getAll: () =>
      fetch(`${baseUrl}/categories`, { mode: 'cors' }).then(response =>
        response.json(),
      ),
  },
};

// @ts-ignore
window.api = api;

export default api;