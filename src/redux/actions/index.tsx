import {
	markCompleteActionCreator,
	markIncompleteActionCreator,
	deleteTodoActionCreator,
	createTodoActionCreator,
	getTodosActionCreator,
} from "types/actionCreatorTypes";
import { actionIds } from "types/actionsType";

export const markComplete: markCompleteActionCreator = (id) => {
	return {
		type: actionIds.MARK_COMPLETE,
		id,
	};
};

export const markIncomplete: markIncompleteActionCreator = (id) => {
	return {
		type: actionIds.MARK_INCOMPLETE,
		id,
	};
};

export const deleteTodo: deleteTodoActionCreator = (id) => {
	return {
		type: actionIds.DELETE_TODO,
		id,
	};
};

export const createTodo: createTodoActionCreator = (title) => {
	return {
		type: actionIds.CREATE_TODO,
		title,
	};
};

export const getTodos: getTodosActionCreator = () => {
	return {
		type: actionIds.GET_TODOS,
	};
};
