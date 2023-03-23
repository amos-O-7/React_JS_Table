import React, { useState } from 'react';
import CustomerTable from './components/Table/CustomerTable';
import Navigation from './components/Navigation/Navigation';


const customers = [
  { name: 'amos ondari', email: 'amosondari7@gmail.com', gender: 'male', age: 23, country: 'Kenya', yearJoined: 2021 },
  { name: 'Jane Cate', email: 'hanekate@gmail.com', gender: 'female', age: 28, country: 'Canada', yearJoined: 2020 },
  { name: 'Martin Marto', email: 'martin@gmail.com', gender: 'male', age: 26, country: 'Kenya', yearJoined: 2019 },
  { name: 'Alice Johnson', email: 'alicejohnson@gmail.com', gender:'female', age: 24, country: 'UK', yearJoined: 2022 },
  { name: 'Sam Njenga', email: 'samnjenga@gmail.com', gender: 'male', age: 31, country: 'South Korea', yearJoined: 2018 },
  { name: 'Linda Brown', email: 'lindabrow@gmail.com', gender: 'female', age: 42, country: 'USA', yearJoined: 2020 },
  { name: 'David Miller', email: 'davidmiller@gmail.com', gender: 'male', age: 37, country: 'kenya', yearJoined: 2019 },
  { name: 'Mary Jones', email: 'maryjones@gmail.com', gender: 'female', age: 29, country: 'Australia', yearJoined: 2021 },
  { name: 'Jack Evans', email: 'jackevanson@gmail.com', gender: 'male', age: 33, country: 'UK', yearJoined: 2022 },
  { name: 'Kim kimani', email: 'kimkimani@gmail.com', gender: 'female', age: 26, country: 'Kenya', yearJoined: 2018 },
  ];
  
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];
  
  const Africa = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [countryFilter, setCountryFilter] = useState('');
  
  let filteredData = customers;
  
  if (selectedYear) {
  filteredData = filteredData.filter((customer) => customer.yearJoined === selectedYear);
  }
  
  if (selectedGender) {
  filteredData = filteredData.filter((customer) => customer.gender === selectedGender);
  }
  
  if (countryFilter) {
  filteredData = filteredData.filter((customer) => customer.country.toLowerCase().includes(countryFilter.toLowerCase()));
  }
  
  return (
  <div>
  <Navigation
       years={years}
       selectedYear={selectedYear}
       setSelectedYear={setSelectedYear}
       selectedGender={selectedGender}
       setSelectedGender={setSelectedGender}
       countryFilter={countryFilter}
       setCountryFilter={setCountryFilter}
     />
  <CustomerTable data={filteredData} />
  </div>
  );
  };
  
  export default Africa;
