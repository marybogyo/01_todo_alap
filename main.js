import { TODOLIST } from "./adatok.js";
import TodoView from "./TodoView.js";

$(function(){
    const SzElem = $(".tabla");
    new TodoView(TODOLIST, SzElem);
})
