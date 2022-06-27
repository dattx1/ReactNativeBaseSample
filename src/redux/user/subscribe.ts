import StateListenerRegistry from '../StateListenerRegistry';

StateListenerRegistry.register(
  /* selector */ state => state?.User.isLogined,
  /* listener */ (isLogined: boolean, store: any) => {
    console.log('🚀 ~ file: subscribe.ts ~ line 6 ~ isLogined', store);
  },
);
