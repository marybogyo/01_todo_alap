class TodoView{
constructor(TODOLIST, SzElem){
this.TODOLIST = TODOLIST;
this.SzElem = SzElem;
let sor = this.Tablabarak();
this.SzElem.find("tbody").html(sor);
}



Tablabarak(){
    let sor = "";
    for (let index = 0; index < this.TODOLIST.length; index++) {
        const ad = this.TODOLIST[index];
        let tr = $("<tr>");
        tr.append($("<td>").text(ad));
        sor+= tr.prop('outerHTML');
    }
    return sor;
}
}
export default TodoView;
