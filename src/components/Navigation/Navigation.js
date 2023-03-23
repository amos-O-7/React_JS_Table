import React from 'react';
import './Navigation.css';


const Navigation = ({ years, selectedYear, setSelectedYear, selectedGender, setSelectedGender, countryFilter, setCountryFilter }) => {
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const handleCountrySelect = (event) => {
    setCountryFilter(event.target.value);
  };

  const countryOptions = [
    { value: '', label: 'All countries' },
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Mexico', label: 'Mexico' },
    // Add more countries here as you needed
  ];

  return (
    <div className="navigation">
      <div className="years">
        {years.map((year) => (
          <button key={year} onClick={() => handleYearClick(year)} disabled={selectedYear === year}>
            {year}
          </button>
        ))}
      </div>
      <div className="gender">
        <button onClick={() => handleGenderClick('male')} disabled={selectedGender === 'male'}>
          Male
        </button>
        <button onClick={() => handleGenderClick('female')} disabled={selectedGender === 'female'}>
          Female
        </button>
      </div>
      <div className="country">
        <select  value={countryFilter} onChange={handleCountrySelect}>
          {countryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navigation;
