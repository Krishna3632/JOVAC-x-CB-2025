const shoppingUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    country: "USA",
    active: true,
    totalSpend: 1240.50,
    orders: [
      { orderId: "A001", amount: 300.25, date: "2025-05-10" },
      { orderId: "A002", amount: 940.25, date: "2025-06-01" }
    ]
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    country: "Canada",
    active: false,
    totalSpend: 580.00,
    orders: [
      { orderId: "B001", amount: 250.00, date: "2025-04-15" },
      { orderId: "B002", amount: 330.00, date: "2025-05-20" }
    ]
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie.lee@example.com",
    age: 22,
    country: "USA",
    active: true,
    totalSpend: 220.75,
    orders: [
      { orderId: "C001", amount: 220.75, date: "2025-06-10" }
    ]
  },
  {
    id: 4,
    name: "Diana Adams",
    email: "diana.adams@example.com",
    age: 41,
    country: "UK",
    active: true,
    totalSpend: 3100.00,
    orders: [
      { orderId: "D001", amount: 1500.00, date: "2025-05-05" },
      { orderId: "D002", amount: 1600.00, date: "2025-06-12" }
    ]
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
    age: 30,
    country: "Australia",
    active: false,
    totalSpend: 450.00,
    orders: [
      { orderId: "E001", amount: 450.00, date: "2025-04-22" }
    ]
  },
  {
    id: 6,
    name: "Fiona Davis",
    email: "fiona.davis@example.com",
    age: 27,
    country: "India",
    active: true,
    totalSpend: 820.20,
    orders: [
      { orderId: "F001", amount: 400.20, date: "2025-05-28" },
      { orderId: "F002", amount: 420.00, date: "2025-06-15" }
    ]
  },
  {
    id: 7,
    name: "George Wilson",
    email: "george.wilson@example.com",
    age: 34,
    country: "USA",
    active: true,
    totalSpend: 1125.00,
    orders: [
      { orderId: "G001", amount: 1125.00, date: "2025-06-01" }
    ]
  },
  {
    id: 8,
    name: "Hannah Miller",
    email: "hannah.miller@example.com",
    age: 24,
    country: "Canada",
    active: false,
    totalSpend: 390.00,
    orders: [
      { orderId: "H001", amount: 390.00, date: "2025-03-30" }
    ]
  },
  {
    id: 9,
    name: "Ian Clark",
    email: "ian.clark@example.com",
    age: 29,
    country: "UK",
    active: true,
    totalSpend: 950.50,
    orders: [
      { orderId: "I001", amount: 950.50, date: "2025-06-10" }
    ]
  },
  {
    id: 10,
    name: "Julia Lewis",
    email: "julia.lewis@example.com",
    age: 38,
    country: "India",
    active: false,
    totalSpend: 720.00,
    orders: [
      { orderId: "J001", amount: 720.00, date: "2025-04-12" }
    ]
  },
  {
    id: 11,
    name: "Kevin Young",
    email: "kevin.young@example.com",
    age: 31,
    country: "USA",
    active: true,
    totalSpend: 1400.75,
    orders: [
      { orderId: "K001", amount: 700.25, date: "2025-05-05" },
      { orderId: "K002", amount: 700.50, date: "2025-06-18" }
    ]
  },
  {
    id: 12,
    name: "Laura Scott",
    email: "laura.scott@example.com",
    age: 26,
    country: "Australia",
    active: true,
    totalSpend: 615.00,
    orders: [
      { orderId: "L001", amount: 615.00, date: "2025-06-02" }
    ]
  },
  {
    id: 13,
    name: "Michael Hill",
    email: "michael.hill@example.com",
    age: 33,
    country: "Canada",
    active: false,
    totalSpend: 880.00,
    orders: [
      { orderId: "M001", amount: 880.00, date: "2025-04-18" }
    ]
  },
  {
    id: 14,
    name: "Nina Allen",
    email: "nina.allen@example.com",
    age: 40,
    country: "UK",
    active: true,
    totalSpend: 1960.50,
    orders: [
      { orderId: "N001", amount: 960.50, date: "2025-05-15" },
      { orderId: "N002", amount: 1000.00, date: "2025-06-05" }
    ]
  },
  {
    id: 15,
    name: "Oscar Wright",
    email: "oscar.wright@example.com",
    age: 25,
    country: "India",
    active: false,
    totalSpend: 300.00,
    orders: [
      { orderId: "O001", amount: 300.00, date: "2025-05-20" }
    ]
  },
  {
    id: 16,
    name: "Paula Green",
    email: "paula.green@example.com",
    age: 29,
    country: "Australia",
    active: true,
    totalSpend: 725.00,
    orders: [
      { orderId: "P001", amount: 725.00, date: "2025-06-12" }
    ]
  },
  {
    id: 17,
    name: "Quincy Turner",
    email: "quincy.turner@example.com",
    age: 37,
    country: "USA",
    active: true,
    totalSpend: 1350.00,
    orders: [
      { orderId: "Q001", amount: 1350.00, date: "2025-06-08" }
    ]
  },
  {
    id: 18,
    name: "Rachel Collins",
    email: "rachel.collins@example.com",
    age: 32,
    country: "UK",
    active: false,
    totalSpend: 500.00,
    orders: [
      { orderId: "R001", amount: 500.00, date: "2025-03-25" }
    ]
  },
  {
    id: 19,
    name: "Sam Parker",
    email: "sam.parker@example.com",
    age: 23,
    country: "Canada",
    active: true,
    totalSpend: 650.00,
    orders: [
      { orderId: "S001", amount: 650.00, date: "2025-06-11" }
    ]
  },
  {
    id: 20,
    name: "Tina Martinez",
    email: "tina.martinez@example.com",
    age: 36,
    country: "India",
    active: true,
    totalSpend: 1750.00,
    orders: [
      { orderId: "T001", amount: 1750.00, date: "2025-06-15" }
    ]
  }
];

// Name
// const name=shoppingUsers.map(user => user.name);
// console.log(name);

// // Emails of active user 
// const emailsActive=shoppingUsers.filter(user => user.active).map(user => user.email);
// console.log(emailsActive);

// const totalRevenue=shoppingUsers.reduce((sum,user)=>sum+user.totalSpend,0);
// console.log(totalRevenue);

// const spendMore=shoppingUsers.filter(user => user.totalSpend>1000).map(user => user.id);
// console.log(spendMore);


// const activeUsers=shoppingUsers.filter(user => user.active).length;
// console.log(activeUsers);

// const topSpender = shoppingUsers.reduce((maxUser, user) => user.totalSpend > maxUser.totalSpend ? user : maxUser);
// console.log(topSpender.name, topSpender.totalSpend);


const totalSpendByCountry = shoppingUsers.reduce((acc,user) =>{
if(acc[user.country]){
    acc[user.country]+=user.totalSpend;
}
else{
    acc[user.country]=user.totalSpend;
}
return acc;
},{});
console.log(totalSpendByCountry);


