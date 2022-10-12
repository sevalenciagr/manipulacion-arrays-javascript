// const numbers = [1,30,39,29,10,13];

// const rta = numbers.every (number => number < 40);
// console.log('rta', rta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta = team.every (member => member.age < 15);
  console.log('rta', rta);