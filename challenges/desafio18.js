db.produtos.updateMany({
  $or: [{ nome: "Big Mac" }, { nome: "Quarteirão com Queijo" }],
}, {
  $push: { ingredientes: "bacon" },
});

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });