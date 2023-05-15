export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // REMOVE AFTER FINISHED DEVELOPING
  // token:
  //   "BQDKvfSO27HOG7gyqNM2Llv-xIeMilDYs-heJ3SLuSOtEWo77Zx5oN55jVvbQBvbuCZyTpkZZF0FmlnyLmrNdTa-wSbi_muATibm3tC1dg3JDiNAOpcicZ61R34KiCSG0ynkoIIIyCIoGgtHkJH1HUuxKHpO4u0ysa9xk9D00-4SkEwOumIo5xMSlq37MPw",
};

//state is how the datalayer currently looks like
//action is how we manipulate how the data layer looks like
const reducer = (state, action) => {
  //Action -> type, [payload] //payload can be anything for eg user here
  //what is happing in set user case is that action is throwing this user into the data layer and asking it to store it

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
