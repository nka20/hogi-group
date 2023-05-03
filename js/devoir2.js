let tableau=[4,8,1,9,0,3];

//ordre par ordre croissant
tableau.sort((a,b)=>{
    return a-b;
})
let max=Math.max(...tableau);//maximum
let min=Math.min(...tableau);//minimum

//pair
for(let i=0;i<=tableau.length;i++){
if(tableau[i]%2===0){
    console.log(tableau[i])
}
}

// impair
for(let i=0;i<=tableau.length;i++){
    if(tableau[i]%2!==0){
        console.log(tableau[i])
    }
    }
console.log(tableau);

tableau.push()=78;

let cni={
    nom:"ntwari",
    prenom:"ken allan",
    age:21,
    nom_du_pere:"joe doe",
    nom_du_mere:"jeanne doe",
    fullName(){return this.nom_du_pere+" et "+this.nom_du_mere},
    fullage(){return this.nom+" et "+this.age},
}

// la difference entre for -- in et for --of
// est que for---in :prend object inclue le tableau
// est que for---of :prend itirable uniquement le tableau

for (let card in cni){
    console.log(cni[card]);// ntwari,ken allan,21,joe doe ,joe doe
}
for (let card in cni){
    console.log(card);// nom,prenom,age,nom--
}
for (let card in tableau){//
    console.log(tableau[card]); //si c'etait card seulement il montrerait le longeur du tableau a savoir 1,2,3,4,5
}
/*
 4
 8
 1
 9
 0
 3
*/
for (let card of cni){
    console.log(card);
}
/*
 4
 8
 1
 9
 0
 3
*/