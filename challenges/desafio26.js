db.produtos.updateMany({
  valoresNutricionais: { 
    $elemMatch: { 
      $and: [
        { tipo: "sódio",
        percentual: { $gt: 20 } },
        { tipo: "sódio",
        percentual: { $lt: 40 } },
      ],
    }, 
  },
}, {
  $push: { 
    tags: "contém sódio", 
  },
});

db.produtos.find({}, { nome: true, tags: true, _id: false });
