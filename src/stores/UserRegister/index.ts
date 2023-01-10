import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserRegisterState {
  user: {
    email: { value: string; validation: boolean };
    password: { value: string; validation: boolean };
    passwordCheck: { value: string; validation: boolean };
    nickName: { value: string; validation: boolean };
  };
  setUser: (value: string, id: string) => void;
  setUserValidation: (value: boolean, id: string) => void;
}

export const useUserRegisterStore = create<UserRegisterState>()(
  devtools(
    (set) => ({
      user: {
        email: { value: '', validation: false },
        password: { value: '', validation: false },
        passwordCheck: { value: '', validation: false },
        nickName: { value: '', validation: false },
      },
      setUser: (value, id) =>
        set((state) => {
          if (id === 'email') {
            return {
              user: {
                email: {
                  value: value,
                  validation: state.user.email.validation,
                },
                password: { ...state.user.password },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'password') {
            return {
              user: {
                email: { ...state.user.email },
                password: {
                  value: value,
                  validation: state.user.password.validation,
                },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'passwordCheck') {
            return {
              user: {
                email: { ...state.user.email },
                password: { ...state.user.password },
                passwordCheck: {
                  value: value,
                  validation: state.user.passwordCheck.validation,
                },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'nickName') {
            return {
              user: {
                email: { ...state.user.email },
                password: { ...state.user.password },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: {
                  value: value,
                  validation: state.user.nickName.validation,
                },
              },
            };
          }

          return {
            user: {
              email: { ...state.user.email },
              password: { ...state.user.password },
              passwordCheck: { ...state.user.passwordCheck },
              nickName: { ...state.user.nickName },
            },
          };
        }),
      setUserValidation: (value, id) =>
        set((state) => {
          if (id === 'email') {
            return {
              user: {
                email: {
                  value: state.user.email.value,
                  validation: value,
                },
                password: { ...state.user.password },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'password') {
            return {
              user: {
                email: { ...state.user.email },
                password: {
                  value: state.user.password.value,
                  validation: value,
                },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'passwordCheck') {
            return {
              user: {
                email: { ...state.user.email },
                password: { ...state.user.password },
                passwordCheck: {
                  value: state.user.passwordCheck.value,
                  validation: value,
                },
                nickName: { ...state.user.nickName },
              },
            };
          }

          if (id === 'nickName') {
            return {
              user: {
                email: { ...state.user.email },
                password: { ...state.user.password },
                passwordCheck: { ...state.user.passwordCheck },
                nickName: {
                  value: state.user.nickName.value,
                  validation: value,
                },
              },
            };
          }

          return {
            user: {
              email: { ...state.user.email },
              password: { ...state.user.password },
              passwordCheck: { ...state.user.passwordCheck },
              nickName: { ...state.user.nickName },
            },
          };
        }),
    }),
    {
      name: 'user-register-storage',
    },
  ),
);
