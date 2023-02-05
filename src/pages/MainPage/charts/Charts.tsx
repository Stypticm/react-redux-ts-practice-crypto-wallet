import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// interface Icandles {
//   timestamp: string | number;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
// }

const Charts: React.FC = () => {
  const location = useLocation();
  const [dataCrypt, setDataCrypt] = useState([]);
  const [nameCrypt, setNameCrypt] = useState('');
  const [period, setPeriod] = useState('1');

  useEffect(() => {
    if (location.state !== null) {
      try {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${location.state}/ohlc?vs_currency=usd&days=${period}`
          )
          .then((response) => response.data)
          .then((result) => {
            setDataCrypt(result);
            setNameCrypt(location.state);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [location.state, period]);

  const options: ApexOptions = {
    chart: {
      type: 'candlestick'
    },
    title: {
      text: `${location.state}`,
      align: 'center'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  const series = [{ data: dataCrypt }];

  const btnStyle =
    'w-2/12 bg-gray-100 rounded-md p-1 ease-in duration-100 border-2 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md';
  const btnDisableStyle = `w-2/12 bg-gray-100 p-1 border-2 cursor-not-allowed`;

  const handleClickPeroid = (value: string) => {
    if (value === 'd1') {
      setPeriod('30');
    } else if (value === 'm1') {
      setPeriod('365');
    } else {
      setPeriod('1');
    }
  };
  return (
    <>
      <section className={`bg-gray-200 p-4 w-full overflow-x-hidden`}>
        <div className={`flex justify-between`}>
          <div className={`w-1/2 text-xl font-bold`}>Charts</div>
          <div className={`w-1/2 flex justify-end`}>
            <button
              className={period === '1' ? `${btnDisableStyle}` : `${btnStyle}`}
              onClick={() => handleClickPeroid('h1')}
            >
              h1
            </button>
            <button
              className={period === '30' ? `${btnDisableStyle}` : `${btnStyle}`}
              onClick={() => handleClickPeroid('d1')}
            >
              d1
            </button>
            <button
              className={period === '365' ? `${btnDisableStyle}` : `${btnStyle}`}
              onClick={() => handleClickPeroid('m1')}
            >
              m1
            </button>
          </div>
        </div>

        {location.state === null ? (
          ''
        ) : (
          <ReactApexChart options={options} series={series} type='candlestick' height='80%' />
        )}
      </section>
    </>
  );
};

export default Charts;
