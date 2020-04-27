import axios from 'axios';

const Madlibz = {
  getRandomMadlibTemplate() {
    return axios.get(`https://madlibz-tx.herokuapp.com/api/madlibs`);
  },
};

export default Madlibz;