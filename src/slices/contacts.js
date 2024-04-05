import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  searchKeyword: '',
  categoryFilter: '',
  contacts: [
    {
      key: 'a1',
      icon: 'Mama akma',
      name: 'Mama akma',
      phone: '085236725506',
      is_fav: true,
    },
    {
      key: 'a2',
      icon: '',
      name: 'Mama Bapak',
      phone: '085236725501',
      is_fav: true,
    },
    {
      key: 'a6',
      icon: '',
      name: 'Ibu',
      phone: '085236725505',
      is_fav: true,
    },
    {
      key: 'a3',
      icon: '',
      name: 'Ivan',
      phone: '085236725502',
      is_fav: false,
    },
    {
      key: 'a4',
      icon: '',
      name: 'Unying',
      phone: '0852367255023',
      is_fav: false,
    },
    {
      key: 'a5',
      icon: '',
      name: 'A cecep',
      phone: '0852367255024',
      is_fav: false,
    },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, {payload}) => {
      state.contacts = payload;
    },
  },
});

export const {setContacts} = contactsSlice.actions;

export const contactsSelector = (state) => state.contacts;

export const updateFav = (props) => {
  const {contacts, key} = props;
  return async (dispatch) => {
    const contactsUpdate = contacts.map((contact) => {
      if (contact.key === key) {
        return {
          key: contact.key,
          name: contact.name,
          icon: contact.icon,
          phone: contact.phone,
          is_fav: contact.is_fav === true ? false : true,
        };
      }
      return contact;
    });
    dispatch(setContacts(contactsUpdate));
  };
};

export default contactsSlice.reducer;
