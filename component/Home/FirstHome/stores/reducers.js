import {
  CREATE_BOARD,
  DELETE_BOARD,
  EDIT_BOARD,
  createBoard,
  deleteBoard,
  editBoard
} from "./actions";

const initialState = {
  board: [
    {
      key: "1",
      title: "제목1",
      content: "내용1입니다."
    },
    {
      key: "2",
      title: "제목2",
      content: "내용2 안녕하세요."
    }
  ],
  lastBoardId: 2
};

function boardApp(state = initialState, action) {
  // action ==> Action 객체
  switch (action.type) {
    case CREATE_BOARD:
      const key = state.lastBoardId + 1;
      return Object.assign({}, state, {
        board: [
          ...state.board,
          {
            key,
            title: action.payload.title,
            content: action.payload.content
          }
        ],
        lastBoardId: key
      });

    case DELETE_BOARD:
      return Object.assign({}, state, {
        ...state,
        board: state.board.filter(({ key }) => key !== action.payload.itemKey)
      });

    case EDIT_BOARD:
      return Object.assign({}, state, {
        ...state,
        board: state.board.map(item => {
          if (item.key == itemKey) {
            return {
              key: itemKey,
              title: title,
              content: content
            };
          } else {
            return item;
          }
        })
      });

    default:
      return state;
  }
}
export default boardApp;
