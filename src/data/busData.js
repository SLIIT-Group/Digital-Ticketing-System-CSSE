const buses = [
  {
    busId: 1,
    busNo: 'KW-138',
    trips: [{ tripId: '123', start: '16:00 PM', end: '19:00 PM' }],
    stops: [
      { halt: 'Malabe', distance: 0 },
      { halt: 'Koswatte', distance: 6 },
      { halt: 'Battaramulla', distance: 9 },
    ],
    rate: 5.0,
  },
  {
    busId: 2,
    busNo: 'DD-1111',
    trips: [{ tripId: '789', start: '07:00 AM', end: '09:00 AM' }],
    stops: [
      { halt: 'Galle', distance: 0 },
      { halt: 'Matara', distance: 20 },
      { halt: 'Hambanthota', distance: 35 },
    ],
    rate: 12.0,
  },
  {
    busId: 3,
    busNo: 'FF-222',
    trips: [{ tripId: '456', start: '14:00 PM', end: '16:00 PM' }],
    stops: [
      { halt: 'Nugegoda', distance: 0 },
      { halt: 'Kotte', distance: 3 },
      { halt: 'Battaramulla', distance: 10 },
    ],
    rate: 3.0,
  },
];

export default buses;
