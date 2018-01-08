class Api {
  static getJSON(resource) {
    return $.getJSON(`http://localhost:4000/${resource}`)
  }
  static post(resource, params) {
    return $.post(`http://localhost:4000/${resource}`, params)
  }
}
