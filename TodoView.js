class TodoView{
constructor(LISTA, SzElem){
this.LISTA = LISTA;
this.SzElem = SzElem;
let sor = this.Tablabarak();
this.SzElem.find("tbody").html(sor);
}



Tablabarak(){
    let sor = "";
    for (let index = 0; index < this.LISTA.length; index++) {
        const ad = this.LISTA[index];
        let tr = $("<tr>");
        tr.append($("<tr>").text(ad.szo));
        sor+= tr.prop('outerHTML');
    }
    return sor;
}
}
export default TodoView;
