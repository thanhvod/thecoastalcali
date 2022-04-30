export const post = ({ path, data }) =>
  new Promise((resolve, reject) =>
    XHR({
      method: 'POST',
      detail: { path, data },
    }).then(
      (result) => resolve(result),
      ({ errors, data }) => reject({ errors, data })
    )
  );

export const del = ({ path, data }) =>
  new Promise((resolve, reject) =>
    XHR({
      method: 'DELETE',
      detail: { path, data },
    }).then(
      (result) => resolve(result),
      ({ errors, data }) => reject({ errors, data })
    )
  );

export const get = ({ path, data = {} }) =>
  new Promise((resolve, reject) =>
    XHR({
      method: 'GET',
      detail: { path, data },
    }).then(
      (result) => resolve(result),
      ({ errors, data }) => reject({ errors, data })
    )
  );

export const patch = ({ path, data }) =>
  new Promise((resolve, reject) =>
    XHR({
      method: 'PATCH',
      detail: { path, data },
    }).then(
      (result) => resolve(result),
      ({ errors, data }) => reject({ errors, data })
    )
  );

export const put = ({ path, data }) =>
  new Promise((resolve, reject) =>
    XHR({
      method: 'PUT',
      detail: { path, data },
    }).then(
      (result) => resolve(result),
      ({ errors, data }) => reject({ errors, data })
    )
  );

const XHR = ({ method, detail: { path, data } }) =>
  new Promise((resolve, reject) => {
    const accessToken = localStorage.accessToken;
    let xhr = new XMLHttpRequest();
    xhr.open(method, `${process.env.REACT_APP_API_SERVER}/v1${path}`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-type', 'application/json');
    !!accessToken &&
      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
    xhr.withCredentials = true;
    xhr.addEventListener('load', function () {
      try {
        const { success, errors, ...data } = JSON.parse(this.responseText);
        if (!!success) return resolve(data);
        if (!!errors) return reject({ errors, data });
      } catch (e) {
        reject();
      }
    });

    xhr.send(JSON.stringify(data));
  });
