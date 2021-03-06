import request from '@/utils/request';

// eslint-disable-next-line no-useless-concat
const path = '/platform/portal' + '/' + 'resource/auth';

export async function add(params) {
  console.log('resourceAuthApi.add 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/chgAuth`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function deleteData(params) {
  console.log('resourceAuthApi.deleteData 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/delete/${params}`, {
    method: 'DELETE',
  });
}

export async function update(params) {
  console.log('resourceAuthApi.update 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/update`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function pageCount(params) {
  console.log('resourceAuthApi.pageCount 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/count`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function pageList(params) {
  console.log('resourceAuthApi.pageList 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/pageList`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function getResourceList(params) {
  console.log('resourceAuthApi.getResourceList 发送的参数');
  console.log(JSON.stringify(params));
  return request(`${path}/resourceListByUserAndMiddleware`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}







