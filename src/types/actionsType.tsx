import { todo } from "types/storeType";

// For Action Creator
export interface markCompleteAction {
	type: actionIds.MARK_COMPLETE;
	id: string;
}

export interface markIncompleteAction {
	type: actionIds.MARK_INCOMPLETE;
	id: string;
}

export interface deleteTodoAction {
	type: actionIds.DELETE_TODO;
	id: string;
}

export interface createTodoAction {
	type: actionIds.CREATE_TODO;
	title: string;
}

export interface getTodos {
	type: actionIds.GET_TODOS;
}

// For Reducers
export interface createdTodoAction {
	type: actionIds.CREATED_TODO;
	todo: todo;
}

export interface deletedTodoAction {
	type: actionIds.DELETED_TODO;
	id: string;
}

export interface markedCompleteAction {
	type: actionIds.MARKED_COMPLETE;
	id: string;
}

export interface markedIncompleteAction {
	type: actionIds.MARKED_INCOMPLETE;
	id: string;
}

export interface gotTodos {
	type: actionIds.GOT_TODOS;
	todos: todo[];
}

export enum actionIds {
	MARK_COMPLETE = "MARK_COMPLETE",
	MARK_INCOMPLETE = "MARK_INCOMPLETE",
	DELETE_TODO = "DELETE_TODO",
	CREATE_TODO = "CREATE_TODO",
	GET_TODOS = "GET_TODOS",
	CREATED_TODO = "CREATED_TODO",
	DELETED_TODO = "DELETED_TODO",
	MARKED_COMPLETE = "MARKED_COMPLETE",
	MARKED_INCOMPLETE = "MARKED_INCOMPLETE",
	GOT_TODOS = "GOT_TODOS"
};
