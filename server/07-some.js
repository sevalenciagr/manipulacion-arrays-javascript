const numbers = [1,2,3,4];

const rta = numbers.some(item => item % 2 ===0);
console.log('rta', rta);

const dates = [
    {
        starDate: new Date (2022, 1, 1, 10),
        endDate: new Date (2022, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        starDate: new Date (2022, 1, 1, 15),
        endDate: new Date (2022, 1, 15, 13),
        title: "Cita con mi jefe",
    },
    {
        starDate: new Date (2022, 1, 1, 20),
        endDate: new Date (2022, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    starDate: new Date (2022, 1, 1, 19),
    endDate: new Date (2022, 1, 20, 30),
};

const areIntervalOverlapping = require ('date-fns/areIntervalOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalOverlapping(
            {star:date.starDate, end:date.end},
            {star:newDate.starDate, end:newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));