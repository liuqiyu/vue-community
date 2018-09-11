import api from './index';

const path = {
  getClass: '/overview/getClass',
  getTag: '/overview/getTag',
  getArtList: '/overview/getArtList',
  createArticle: '/overview/createArticle',
  getArtDetails: '/overview/getArtDetails',
};

const getClass = () => api.get(path.getClass);

const getTag = () => api.get(path.getTag);

const getArtList = (page, count, form) => api.get(path.getArtList, {
  params: {
    page,
    count,
    class_id: form.class_id,
    tag_id: form.tag_id,
    list_status: form.list_status,
  },
});

const createArticle = form => api.post(path.createArticle, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => {
    // Do whatever you want to transform the data
    let ret = '';
    const keys = Object.keys(data);
    keys.forEach((key) => {
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    });
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }],
});

const getArtDetails = id => api.get(path.getArtDetails, {
  params: {
    art_id: id,
  },
});

export default {
  getClass,
  getTag,
  getArtList,
  createArticle,
  getArtDetails,
};
