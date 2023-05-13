export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

//state is how the datalayer currently looks like
//action is how we manipulate how the data layer looks like
const reducer = (state, action) => {
  console.log(action);
  //Action -> type, [payload] //payload can be anything for eg user here
  //what is happing in set user case is that action is throwing this user into the data layer and asking it to store it

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
