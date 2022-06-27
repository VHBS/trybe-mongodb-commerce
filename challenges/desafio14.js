db.produtos.find({ 
    ingredientes: { $all: ["picles"] }, 
  }, 
  { 
    nome: true, 
    ingredientes: true,
    _id: false, 
    valoresNutricionais: { $slice: 3 }, 
  });