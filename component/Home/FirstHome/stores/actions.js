// action Type정의
const CREATE_BOARD = "CREATE_BOARD";
const DELETE_BOARD = "DELETE_BOARD";
const EDIT_BOARD = "EDIT_BOARD";
// Action Creator
function createBoard(title, content) {
  return {
    type: CREATE_BOARD,
    payload: {
      title,
      content
    }
  };
}
function deleteBoard(boardId) {
  return {
    type: DELETE_BOARD,
    payload: {
      boardId
    }
  };
}
function editBoard(boardId, title, content) {
  return {
    type: DELETE_BOARD,
    payload: {
      boardId,
      title,
      content
    }
  };
}

export {
  CREATE_BOARD,
  DELETE_BOARD,
  EDIT_BOARD,
  createBoard,
  deleteBoard,
  editBoard
};
