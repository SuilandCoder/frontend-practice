import { Observable } from 'rx'
import * as $ from 'jquery'
//* 通过 fromPromise 来创建一个Observable

const SEARCH_REPOS = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=';
const KB2MB = 0.0009765625;
const KB2BYTES = 1024;

//* 创建一个 ajax的 promise
const getReposPromise = (query)=>{
    return $.ajax({
        type:'GET',
        url:`${SEARCH_REPOS}${query}`,
    }).promise();
};

const getUserPromise = (data) => {
    const { url, conatiner } = data;
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: `${url}?access_token=${TOKEN}`,
        success: (data) => {
          resolve({
            conatiner,
            data
          });
        },
        error: (err) => {
          console.log(err);
          reject(null);
        }
      });
    });
};

const formatRepoSize = (repoSize) => {
    return parseInt(repoSize).toFixed(2);
};

export const getRepos = (query)=>{
    const promise = getReposPromise(query);
    return Observable.fromPromise(promise);
}

export const getUser = (data) => {
    const promise = getUserPromise(data);
    return Observable.fromPromise(promise);
};

export const formatRepoSizeAndUnit = (repoSize) => {
    if (repoSize < 1) {
      return [formatRepoSize(repoSize * KB2BYTES), 'Bytes'];
    }
    if (repoSize >= 1 / KB2MB) {
      return [formatRepoSize(repoSize * KB2MB), 'MB'];
    }
    return [repoSize, 'KB'];
  };
