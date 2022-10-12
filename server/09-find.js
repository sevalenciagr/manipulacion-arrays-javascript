// const numbers = [1, 30, 41, 29, 50, 60]

// const respuesta = numbers.find(item => item === 30)
// const respuesta2 = numbers.findIndex(item => item >= 40)

// console.log(respuesta) 
// console.log(respuesta2) 

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta3 = products.find(item => item.id ==='🍔');
  console.log('find', rta3);
  const rta4 = products.findIndex(item => item.id ==='🍔');
  console.log('rta4', rta4);