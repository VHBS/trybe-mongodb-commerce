db.produtos.updateMany({
  valoresNutricionais: { 
    $elemMatch: { 
      tipo: "sódio",
      $and: [

        { percentual: { $gt: 40 } },
      ],
    }, 
  },
}, {
  $push: { 
    tags: "muito sódio", 
  },
});

db.produtos.find({}, { nome: true, tags: true, _id: false });
