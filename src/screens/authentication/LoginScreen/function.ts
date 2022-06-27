import { store } from '@src/redux/store';

export const getStore = () => {
  console.log(
    '🚀 ~ file: function.ts ~ line 4 ~ getStore ~ store',
    store.getState(),
  );
};

class UserInformation {
  getStore() {
    console.log(
      '🚀 ~ file: function.ts ~ line 4 ~ getStore ~ store',
      store.getState(),
    );
  }
}

export default new UserInformation();
