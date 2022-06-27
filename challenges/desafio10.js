db.produtos.find({ valoresNutricionais: { 
  $elemMatch: { $and: [
    { tipo: "proteínas",
    percentual: { $gte: 30 } },
    { tipo: "proteínas",
    percentual: { $lte: 40 } },
  ],
  },
} }, { nome: true, _id: false });