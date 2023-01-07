import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserRegisterState {
  user: {
    email: string;
    password: string;
    passwordCheck: string;
    nickName: string;
  };
  setUser: (value: string, id: string) => void;
}

export const useUserRegisterStore = create<UserRegisterState>()(
  devtools(
    (set) => ({
      user: { email: '', password: '', passwordCheck: '', nickName: '' },
      setUser: (value, id) =>
        set((state) => {
          if (id === 'email') {
            return {
              user: {
                email: value,
                password: state.user.password,
                passwordCheck: state.user.passwordCheck,
                nickName: state.user.nickName,
              },
            };
          }

          if (id === 'password') {
            return {
              user: {
                email: state.user.email,
                password: value,
                passwordCheck: state.user.passwordCheck,
                nickName: state.user.nickName,
              },
            };
          }

          if (id === 'passwordCheck') {
            return {
              user: {
                email: state.user.email,
                password: state.user.password,
                passwordCheck: value,
                nickName: state.user.nickName,
              },
            };
          }

          if (id === 'nickName') {
            return {
              user: {
                email: state.user.email,
                password: state.user.password,
                passwordCheck: state.user.passwordCheck,
                nickName: value,
              },
            };
          }

          return {
            user: {
              email: '',
              password: '',
              passwordCheck: '',
              nickName: '',
            },
          };
        }),
    }),
    {
      name: 'user-register-storage',
    },
  ),
);
