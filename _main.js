const checkInput = () => { let _i; document.getElementById("teksti").innerHTML = document.getElementById("word").value.split("").reverse().map((c, i, a) => i !== 0 && i !== a.length - 1 && !_i?.includes(i - 1) && "bcdfghjklmnpqrstvwxz".includes(c) ? (_i ??= []).push(i) && "-" + c : c).reverse().join(""); }