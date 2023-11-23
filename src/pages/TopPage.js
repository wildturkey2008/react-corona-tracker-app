// TopPage.js

import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = (props) => {
  console.log(props);
  return (
    <div>
      <Title />
      <Selector
        countriesJson={props.countriesJson}
        setCountry={props.setCountry}
        getCountryData={props.getCountryData}
      />
      <Results countryData={props.countryData} />
    </div>
  );
};

export default TopPage;
