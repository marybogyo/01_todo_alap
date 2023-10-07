import { LISTA } from "./adat.js";
import TodoView from "./TodoView.js";

$(function(){
    const SzElem = $(".tabla");
    new TodoView(LISTA, SzElem);
})
