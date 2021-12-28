document.getElementById('generate').addEventListener('click', function(e){
  
  let input = document.getElementById('input').value;
  if(input === '' || input === null){
    Swal.fire({
      icon: 'warning',
      title: 'Eitss...',
      text: 'Belum ada text udin!',
    })
  } else{
    let stringArr = input.split('');
    let arr = [];
    for(let i = 0; i < stringArr.length; i++){
      if(stringArr[i] === "a" || stringArr[i] === "u" || stringArr[i] === "o" || stringArr[i] === "e"){
        arr.push("i");
      }else if( stringArr[i] === "A" || stringArr[i] === "U" || stringArr[i] === "O" || stringArr[i] === "E"){
        arr.push("I");
      }
      else{
        arr.push(stringArr[i]);
      }
    }
    hasil = arr.join('');
    console.log(hasil);
    
    document.querySelector('.output').innerHTML = `<h4>${hasil}</h4>`;
  }
  e.preventDefault();
});

document.getElementById('clear').addEventListener('click', function(e){
  document.querySelector('.output').innerHTML = '';
  document.getElementById('input').value = '';
  e.preventDefault();
});
