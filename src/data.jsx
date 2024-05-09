export const sideLinks = [
  {
    icon: '/assets/home.svg',
    name: 'dashboard',
  },
  {
    icon: '/assets/transfer 1.svg',
    name: 'transactions',
  },
  {
    icon: '/assets/user 3 1.svg',
    name: 'accounts',
  },
  {
    icon: '/assets/economic-investment 1.svg',
    name: 'investments',
  },
  {
    icon: '/assets/credit-card 1.svg',
    name: 'credit cards',
  },
  {
    icon: '/assets/loan 1.svg',
    name: 'loans',
  },
  {
    icon: '/assets/service 1.svg',
    name: 'services',
  },
  {
    icon: '/assets/settings solid 1.svg',
    name: 'settings',
  },
];
export const employeesData = [
  {
    name: 'Griffin Dior',
    title: 'CEO',
    image:
      'https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9~VajC2pxllvE4NjPskLqk7ijt9xJ7aAe4QBvgXuOaeTUko7ZmapTpu8FtamtgLLKaxE6GQXBexIVGllP0VkFzC~OJPtMRPO5WVOcPxxgGhgaVhuw7BlqpjdgroontRZEaW8g0CPfrwXzkuXnFwmrih~9vEAVktPI0Q8Q7i6Pn1f5G~Tr3MyZK4kF0Hncw~M8MILd1gM-aOI8ekwOWyBw36t5BNfOh-lhRLa-aVHOcI7dEhvNcFfYYHcI~71USuwsKiKm7GnBT4J7QxWE4obyRSwXpoTQh8OvImnD62LQAytJYq-nqTtqfttzjL7MCLaigpbrRJ7t3CociqdLRzOw__',
  },
  {
    name: 'Griffin Dior',
    title: 'CEO',
    image:
      'https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9~VajC2pxllvE4NjPskLqk7ijt9xJ7aAe4QBvgXuOaeTUko7ZmapTpu8FtamtgLLKaxE6GQXBexIVGllP0VkFzC~OJPtMRPO5WVOcPxxgGhgaVhuw7BlqpjdgroontRZEaW8g0CPfrwXzkuXnFwmrih~9vEAVktPI0Q8Q7i6Pn1f5G~Tr3MyZK4kF0Hncw~M8MILd1gM-aOI8ekwOWyBw36t5BNfOh-lhRLa-aVHOcI7dEhvNcFfYYHcI~71USuwsKiKm7GnBT4J7QxWE4obyRSwXpoTQh8OvImnD62LQAytJYq-nqTtqfttzjL7MCLaigpbrRJ7t3CociqdLRzOw__',
  },
  {
    name: 'Griffin Dior',
    title: 'CEO',
    image:
      'https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9~VajC2pxllvE4NjPskLqk7ijt9xJ7aAe4QBvgXuOaeTUko7ZmapTpu8FtamtgLLKaxE6GQXBexIVGllP0VkFzC~OJPtMRPO5WVOcPxxgGhgaVhuw7BlqpjdgroontRZEaW8g0CPfrwXzkuXnFwmrih~9vEAVktPI0Q8Q7i6Pn1f5G~Tr3MyZK4kF0Hncw~M8MILd1gM-aOI8ekwOWyBw36t5BNfOh-lhRLa-aVHOcI7dEhvNcFfYYHcI~71USuwsKiKm7GnBT4J7QxWE4obyRSwXpoTQh8OvImnD62LQAytJYq-nqTtqfttzjL7MCLaigpbrRJ7t3CociqdLRzOw__',
  },
];
export const barChartData = {
  labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Deposit',
      data: [500, 400, 500, 700, 600, 200, 600],
      borderColor: '#36A2EB',
      borderRadius: 24,
      backgroundColor: '#1814F3',
      // barThickness: 8,
      barPercentage: 0.4,
      borderSkipped: false,
    },
    {
      label: 'Expenses',
      data: [600, 800, 200, 400, 300, 200, 300],
      borderColor: '#36A2EB',
      borderRadius: 24,
      backgroundColor: '#16DBCC',
      // barThickness: 8,
      barPercentage: 0.4,
      borderSkipped: false,
    },
  ],
};

export const pieChartData = {
  labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
  datasets: [
    {
      label: 'Expenses',
      data: [30, 15, 20, 35],
      backgroundColor: ['#343C6A', '#FC7900', '#FA00FF', '#1814F3'],
      hoverOffset: 4,
    },
  ],
};

export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Balance history',
      data: [100, 620, 410, 700, 400,],
      borderColor: '#1814F3',
      backgroundColor: '#1814F3',
      hoverOffset: 4,
    },
  ],
};
