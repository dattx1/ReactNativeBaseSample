import StateListenerRegistry from '../StateListenerRegistry';
import { RootState } from '../store';

StateListenerRegistry.register(
  /* selector */ (state: RootState) => state?.User.isLogined,
  /* listener */ (_isLogined: boolean, _store: any) => {},
);
