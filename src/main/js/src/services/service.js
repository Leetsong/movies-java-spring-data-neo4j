import request from '@/utils/request';

export async function search(q) {
  const res = await
    request(`/movies/search/findByTitleLike?title=*${encodeURIComponent(q)}*`);
  return res.body;
}

export async function searchMovie(m) {
  const res = await
  request(`/movies/search/findByTitle?title=${encodeURIComponent(m)}`);
  return res.body;
}

export async function searchPerson(href) {
  const res = await request(href);
  return res.body;
}

export async function fetchGraph() {
  const res = await request('/graph');
  return res.body;
}