export const initialState = {
  posts: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    logged: true,
    data: {
      email: '',
    },
  },
};
