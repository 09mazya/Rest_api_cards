import { makeAutoObservable  } from 'mobx';
import axios from 'axios';
import { API_URL } from './Urls';

class UserStore {
  users = [];
  errors = [];
  isLoading = false;
  filter = ''; 

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users) {
    this.users = users;
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.isLoading = loading;
  }
  setFilter(filter) {
    this.filter = filter;
  }

  async fetchUsers() {
    try {
      this.setLoading(true);
      const response = await axios.get(API_URL);
      this.setUsers(response.data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false); 
    }
  }
}

const userStore = new UserStore();
export default userStore;
