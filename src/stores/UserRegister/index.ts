import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserRegisterState {
  user: {
    [inputName: string]: { value: string; validation: boolean };
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
          switch (id) {
            case 'email':
              return {
                user: {
                  ...state.user,
                  email: {
                    value: value,
                    validation: state.user.email.validation,
                  },
                },
              };
            case 'password':
              return {
                user: {
                  ...state.user,
                  password: {
                    value: value,
                    validation: state.user.password.validation,
                  },
                },
              };
            case 'passwordCheck':
              return {
                user: {
                  ...state.user,
                  passwordCheck: {
                    value: value,
                    validation: state.user.passwordCheck.validation,
                  },
                },
              };
            case 'nickName':
              return {
                user: {
                  ...state.user,
                  nickName: {
                    value: value,
                    validation: state.user.nickName.validation,
                  },
                },
              };
            default:
              return {
                ...state.user,
              };
          }
        }),
      setUserValidation: (value, id) =>
        set((state) => {
          switch (id) {
            case 'email':
              return {
                user: {
                  ...state.user,
                  email: {
                    value: state.user.email.value,
                    validation: value,
                  },
                },
              };
            case 'password':
              return {
                user: {
                  ...state.user,
                  password: {
                    value: state.user.password.value,
                    validation: value,
                  },
                },
              };
            case 'passwordCheck':
              return {
                user: {
                  ...state.user,
                  passwordCheck: {
                    value: state.user.passwordCheck.value,
                    validation: value,
                  },
                },
              };
            case 'nickName':
              return {
                user: {
                  ...state.user,
                  nickName: {
                    value: state.user.nickName.value,
                    validation: value,
                  },
                },
              };
            default:
              return {
                ...state.user,
              };
          }
        }),
    }),
    {
      name: 'user-register-storage',
    },
  ),
);
