const xAxisData = [
  { name: 'Jan', Sale: 112000 },
  { name: 'Feb', Sale: 99000 },
  { name: 'Mar', Sale: 12000 },
  { name: 'Apr', Sale: 99000 },
  { name: 'May', Sale: 54000 },
  { name: 'Jun', Sale: 85000 },
  { name: 'Jul', Sale: 34000 },
  { name: 'Aug', Sale: 18598 },
  { name: 'Sep', Sale: 0 },
  { name: 'Oct', Sale: 73078 },
  { name: 'Nov', Sale: 12900 },
  { name: 'Dec', Sale: 97000 },
]

const newMemebers = [
  { id: 1, userName: 'Erfan Roozbahani', title: 'programer', img: 'images/profile.webp' },
  { id: 2, userName: 'Mania Baharvand', title: 'Manager', img: 'images/profile4.webp' },
  { id: 3, userName: 'Dylan Obrien', title: 'Designer', img: 'images/profile5.webp' },
  { id: 4, userName: 'Billie eilish🤍', title: 'Singer', img: 'images/profile2.webp' },
  { id: 5, userName: 'Baran Alidosti', title: 'Actor', img: 'images/profile6.webp' },
  { id: 6, userName: 'Neda Ghasemi', title: 'Cleaner', img: 'images/profile7.webp' },
  { id: 7, userName: 'Ziba Mirzaei', title: 'Teacher', img: 'images/profile8.webp' },
  { id: 8, userName: 'Raha Hosseini', title: 'Nurse', img: 'images/profile9.webp' },
  { id: 9, userName: 'Kamran Tafti', title: 'Actor', img: 'images/profile3.webp' },
  { id: 10, userName: 'Sepehr Khalse', title: 'Singer', img: 'images/profile10.webp' },
  { id: 11, userName: 'Sarah Williams', title: 'Seo Engineer', img: 'images/profile11.webp' },
  { id: 12, userName: 'Mohsen Yeganeh', title: 'Singer', img: 'images/profile12.webp' },
  { id: 13, userName: 'Jadi Mirmirani', title: 'Hacker', img: 'images/profile13.webp' },
  { id: 14, userName: 'Mehrad Hidden', title: 'Singer', img: 'images/profile14.webp' },
]

const transactions = [
  { id: 1,
     customer: 'Erfan Roozbahani',
     data: '12 May 2026',
     amount: 123,
     status: 'Approved',
     img: 'images/profile.webp'
  },
  { id: 2,
     customer: 'Mania Baharvand',
     data: '11 Nov 2026',
     amount: 345,
     status: 'Pending',
     img: 'images/profile4.webp'
  },
  { id: 3,
     customer: 'Dylan Obrien',
     data: '30 Jul 2026',
     amount: 5325,
     status: 'Approved',
     img: 'images/profile5.webp'
  },
  { id: 4,
     customer: 'Sarah Williams',
     data: '3 May 2024',
     amount: 225,
     status: 'Declined',
     img: 'images/profile11.webp'
  },
  { id: 5,
     customer: 'Mohsen Yeganeh',
     data: '5 Apr 2021',
     amount: 4555,
     status: 'Declined',
     img: 'images/profile12.webp'
  },
  { id: 6,
     customer: 'Jadi Mirmirani',
     data: '1 Mar 2021',
     amount: 39925,
     status: 'Approved',
     img: 'images/profile13.webp'
  },
  { id: 7,
     customer: 'Mehrad Hidden',
     data: '14 Aug 2020',
     amount: 62,
     status: 'Pending',
     img: 'images/profile14.webp'
  },
  { id: 8,
     customer: 'Kamran Tafti',
     data: '12 Feb 2020',
     amount: 120,
     status: 'Pending',
     img: 'images/profile3.webp'
  },
]

let userRows = [
  { 
    id: 1,
    userName: 'Erfan Roozbahani',
    avatar: 'images/profile.webp',
    status: 'Active',
    transactions: 296,
    email: 'Erfanroozbahani6@gmail.com'
    },
  { 
    id: 2,
    userName: 'Mania Baharvand',
    avatar: 'images/profile4.webp',
    status: 'non-Active',
    transactions: 973,
    email: 'Maniamaina2007@gmail.com'
    },
  { 
    id: 3,
    userName: 'Dylan Obrien',
    avatar: 'images/profile5.webp',
    status: 'non-Active',
    transactions: 2000,
    email: 'DylanObrien22@gmail.com'
    },
  { 
    id: 4,
    userName: 'Billie eilish🤍',
    avatar: 'images/profile2.webp',
    status: 'Active',
    transactions: 3500,
    email: 'Billieeilish@gmail.com'
    },
  { 
    id: 5,
    userName: 'Baran Alidosti',
    avatar: 'images/profile6.webp',
    status: 'Active',
    transactions: 1200,
    email: 'BaranAlidosti85@gmail.com'
    },
  { 
    id: 6,
    userName: 'Neda Ghasemi',
    avatar: 'images/profile7.webp',
    status: 'non-Active',
    transactions: 1000,
    email: 'NedaGhasemi33@gmail.com'
    },
  { 
    id: 7,
    userName: 'Ziba Mirzaei',
    avatar: 'images/profile8.webp',
    status: 'Active',
    transactions: 1500,
    email: 'ZibaMirzaei@gmail.com'
    },
  { 
    id: 8,
    userName: 'Kamran Tafti',
    avatar: 'images/profile3.webp',
    status: 'Active',
    transactions: 2000,
    email: 'KamranTafti@gmail.com'
    },
    { 
    id: 9,
    userName: 'Sepehr Khalse',
    avatar: 'images/profile10.webp',
    status: 'Active',
    transactions: 32200,
    email: 'SepehrKhalse@gmail.com'
    },
]

let products = [
  { id: 1,
   title: 'Xiaomi 17 Pro Max', 
   price: 2000, avatar: 'images/product.webp', 
   status: 'Active',
   active: 'Yes',
   inStock: 'in Stock',
  },
  { id: 2, 
    title: 'Samsung S26 Black', 
    price: 2500, 
    avatar: 'images/product2.webp',
    status: 'Non-Active',
    active: 'No',
    inStock: 'out of Stock',
  },
  { id: 3, 
    title: 
    'iPhone 12 Pro Max', 
    price: 1200, 
    avatar: 'images/product3.webp', 
    status: 'Non-Active',
    active: 'No',
    inStock: 'out of Stock',
  },
  { id: 4, 
    title: 
    'Asus ROG laptop', 
    price: 5300, 
    avatar: 'images/product4.webp',
    status: 'Active',
    active: 'Yes',
    inStock: 'in Stock',
  },
  { id: 5, 
    title: 
    'Samsung S21 Ultra', 
    price: 1600, 
    avatar: 'images/product5.webp',
    status: 'Active',
    active: 'No',
    inStock: 'in Stock',

  },
  { id: 6, 
    title: 
    'Xiaomi Poco X7 Pro', 
    price: 1500, 
    avatar: 'images/product6.webp',
    status: 'Active',
    active: 'No',
    inStock: 'in Stock',

  },
  { id: 7, 
    title: 
    'Lenovo IdeaPad 3', 
    price: 5200, 
    avatar: 'images/product7.webp',
    status: 'Non-Active',
    active: 'No',
    inStock: 'out of Stock',

  },
  { id: 8, 
    title: 
    'Asus normal laptop', 
    price: 3000, 
    avatar: 'images/product8.webp',
    status: 'Active',
    active: 'Yes',
    inStock: 'in Stock',
  },
  { id: 9, 
    title: 
    'Xiaomi Redmi Note 15 Pro', 
    price: 1000, 
    avatar: 'images/product9.webp',
    status: 'Active',
    active: 'Yes',
    inStock: 'in Stock',
  },
  { id: 10, 
    title: 
    'iPhone 17 Pro Max', price: 8000, 
    avatar: 'images/product10.webp',
    status: 'Active',
    active: 'Yes',
    inStock: 'in Stock',
  },
  { id: 11, 
    title: 
    'Samsung A57', 
    price: 1200, 
    avatar: 'images/product11.webp' ,
    status: 'Active',
    active: 'Yes',
    inStock: 'in Stock',
  },
]

const productsData = [
  { name: 'Jan',
    sales: 4000
  },
  { name: 'Feb',
    sales: 3000
  },
  { name: 'Mar',
    sales: 5000
  },
  { name: 'Apr',
    sales: 6000
  },
  { name: 'May',
    sales: 200
  },
  { name: 'Jun',
    sales: 1000
  },
  { name: 'Jul',
    sales: 0
  },
  { name: 'Aug',
    sales: 10000
  },
]

let MailBoxData = [
  { id: 1,
    name: 'Maina Baharvand',
    content: "Hi! I just wanted to remind you about our meeting tomorrow at 10:00 AM. Plea..."
  },
  { id: 2,
    name: 'Billie eilish🤍',
    content: "Thank you so much for your support .I want tell you somthing Erfan,I lov... "
  },
  { id: 3,
    name: "Dylan O'Brien",
    content: "yeeeeee men what's up? I'm so excited to be here! my new movie is coming out soon so..."
  },
  { id: 4,
    name: 'Sepehr Khalse',
    content: "Hasti dadash? Emshab bia biron, ye chilli konim. Har ja shod mimonim koli ham daf..."
  },
  {
    id: 5,
    name: 'Kamran Tafti',
    content: "dadash dari ye 200 gharz bedi. mano to in film jadide rah nemid..."
  },
  { id: 6,
    name: 'Jadi Mirmirani',
    content: "salam behem python yad midi? namosan sakhte koli az bakhshaye mohe..."
  },
]


export { xAxisData };
export { newMemebers };
export { transactions };
export { userRows };
export { products };
export { productsData };
export { MailBoxData };