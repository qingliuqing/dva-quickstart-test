import dva from 'dva';

export default {
  namespace: 'products',
  state: [{ name: 'dva', id: 1 },
       { name: 'antd', id: 2 },
       { name: 'liuliuliu', id: 3 },
       { name: 'jinjinjin', id: 4 },],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};