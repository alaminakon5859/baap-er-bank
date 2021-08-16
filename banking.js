// handle the deposit
document.getElementById("deposit-button").addEventListener("click",function (){ const depositinput =document.getElementById("deposit-amount");
  const newdeposittex=depositinput.value;
  const newdepositamount= parseFloat(newdeposittex);
  const deposittotal =document.getElementById("deposit-total");
  // update deposit
  const previasdiposittex =deposittotal.innerText;
  const previasdipositamount = parseFloat(previasdiposittex);
  const newdeposittotal = previasdipositamount +  newdepositamount;

  deposittotal.innerText= newdeposittotal;
  // update account ballance
  const balancetotal =document.getElementById("balance-total");
  const balancetotaltex = balancetotal.innerText;
  const previasbalancetotal =parseFloat(balancetotaltex);
  const newbalancetotal = previasbalancetotal + newdepositamount;
  balancetotal.innerText =newbalancetotal;



//   clear the deposit input value
   depositinput.value = "";

})


// handle withdro even handle

document.getElementById("withdrow-button").addEventListener("click", function(){  const withdrowinput = document.getElementById("withdrow-input")
     const withdroamoundtex=withdrowinput.value;
     const newwithdrowamound = parseFloat(withdroamoundtex);
     console.log(newwithdrowamound);

    //  set withdrow total 
    const withdrowtotal =document.getElementById("withdrow-total");
    const previaswithdrowtex =withdrowtotal.innerText;
    const previaswithdrowtotal =parseFloat(previaswithdrowtex);
    const newwithdrowtotal =previaswithdrowtotal + newwithdrowamound;
    withdrowtotal.innerText=newwithdrowtotal;
    // update withdrow3 balance
    const balancetotal = document.getElementById("balance-total");
    const previasbalancetex =balancetotal.innerText;
    const previasbalancetotal = parseFloat(previasbalancetex);
    const newbalancetotal =previasbalancetotal - newwithdrowamound;
    balancetotal.innerText=newbalancetotal;
     
    // clear the withdrow input
    withdrowinput.value ="";
   
})

