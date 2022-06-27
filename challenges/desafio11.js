db.produtos.find({ 
  $and: 
  [ 
    { 
    nome: { 
      $ne: "Big Mac" },
    }, { 
    nome: { 
      $ne: "McChicken" },
    },
  ] }, { nome: true, vendidos: true, curtidas: true, _id: false });