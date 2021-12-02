import authHeader from "./auth-header";
import axios from "axios";

const API_URL = 'http://localhost:8080/api/group';

class GroupService {
    getGroups() {
        return axios.get(API_URL, {
            headers: authHeader()
        });
    }

    getIdGroup(id) {
        return axios.get(`${API_URL}/${id}`, {
            headers: authHeader()
        });
    }

    addGroup(name, users) {
        return axios.post(API_URL + '/add', {
            nameGroup: name,
            users: users
        }, {
            headers: authHeader()
        });
    }

    updateGroup(id, name, users) {
        return axios.put(API_URL + '/' + id, {
            nameGroup: name,
            users: users
        }, {
            headers: authHeader()
        });
    }

    deleteGroup(id) {
        return axios.delete(`${API_URL}/${id}`, {
            headers: authHeader()
        });
    }
}

export default new GroupService();