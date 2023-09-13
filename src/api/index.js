import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos:(data) => FetchJson.get('/photos', data),
    getPhotoById:(id) => FetchJson.get(`/photos/${id}`),
    getPhotoRelated:(id, data) => FetchJson.get(`/photos/${id}/related`, data),
    searchPhotos:(data) => FetchJson.get('/search/photos', data),
    getTopicPhoto:(slug, data) => FetchJson.get(`/topics/${slug}/photos`, data),
    listTopics:(data) => FetchJson.get('/topics', data),
    getTopics:(slug) => FetchJson.get(`/topics/${slug}`),
    getCollections:(data) => FetchJson.get('/search/collections', data),
    getUsers:(data) => FetchJson.get('/search/users', data)
}

export default API;