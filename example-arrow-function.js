var names=['Kanth','Mammu','Pandu','Kammu'];
//
// names.forEach((name,i) => {
//   console.log('Name From ForEach ',i,name);
// });
// names.forEach(function(name){
//   console.log('Name from function ForEach',name);
// });

// names.forEach((name)=>console.log('Name from function ForEach',name) );

// var returnme=(name)=>name+'!!!';
// console.log(returnme('KANTH'));


var person={
  name:'Kanth',
  greet:function(){

    names.forEach((name)=> console.log(this.name +' says hi to '+name));
  }
};

person.greet();
