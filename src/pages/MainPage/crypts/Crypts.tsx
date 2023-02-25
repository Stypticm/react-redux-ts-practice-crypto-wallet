// React
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// axios
import axios from 'axios';

// redux
import { decrease, purchase } from '@redux_/walletSlice';
import { useAppSelector, useAppDispatch } from '@hooks';

// React Query
import { QueriesObserver, QueryClient, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useGetAllCryptsQuery } from '@redux_/redux_tk_query';

interface Icrypto {
  name: string;
  id: string;
  symbol: string;
  current_price: string;
  image: string;
  market_cap_rank: number;
  description: string;
}

interface IallCrypts extends Icrypto {
  market_data: {
    current_price: {
      bmd: string;
    };
  };
}

interface IAmount {
  value: string;
  currentPrice: string;
}

const Crypts = () => {
  // const {data = [], isLoading, isError} = useGetAllCryptsQuery()
  const wallet = useAppSelector((state) => state.wallet.value);
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['allCrypts'],
    queryFn: () =>
      axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
        .then((res) => res.data)
  });

  const [price, setPrice] = React.useState('');
  const [crypts, setCrypts] = React.useState<Icrypto[]>([]);

  const [amount, setAmount] = React.useState<String>('');
  const [amountValue, setAmountValue] = React.useState<String>('');
  const [walletMessage, setWalletMessage] = React.useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setCrypts(data);
    }
  }, [data]);

  const getTwentyCrypts = () => {
    if (data) {
      setCrypts(data.slice(0, 20));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setCrypts(data);
      return;
    } else if (e.target.value.length > 1) {
      const filteredValues = data.filter((item: IallCrypts) => {
        return item.id.indexOf(e.target.value) !== -1;
      });
      setCrypts(filteredValues);
    }
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setWalletMessage(false);
    }
    setAmount(e.target.value);
  };

  const handleAmount = ({value, currentPrice}: IAmount) => {
    if (Number(wallet) - Number(amount) < 0 || Number(amount) < 0) {
      setWalletMessage(true);
    } else {
      dispatch(decrease(Number(amount)));
      dispatch(purchase({ value: value, price: Number(amount), amountOfCurrency: Number(currentPrice), status: 'hold', isVisible: true }));
      setAmount('');
    }

    const element = document.getElementById(`amount_${value}`);
    if (element instanceof HTMLInputElement) {
      element.value = '';
    }
  };

  const chooseCryptoCard = (value: string) => {
    console.log(value);
    navigate('/charts', { replace: true, state: value });
  };

  return (
    <>
      <div className={`p-4 flex bg-gray-200`}>
        <div className={`w-full`}>
          <div className={`flex justify-between`}>
            <h1 className={`text-xl font-bold`}>Crypts</h1>
            {walletMessage ? (
              <p
                className={`absolute w-1/2 m-auto p-3 drop-shadow-lg bg-slate-100 rounded-lg cursor-pointer text-red-500 right-1/4 left-1/4 top-5`}
                onClick={() => setWalletMessage(!walletMessage)}
              >
                You don't have much money. Click for close and enter correct count.
              </p>
            ) : (
              ''
            )}
            <p className={` p-1 font-bold`}>
              Wallet: {wallet}
              <span>$</span>
            </p>
          </div>

          <div className={`flex justify-between p-2 w-full`}>
            <input
              className={`w-2/4 rounded-md p-1 shadow-md`}
              type='text'
              placeholder='Search here...'
              name='searchWord'
              // value={uniqueWord}
              onChange={handleChange}
            />
            <button
              className={`w-1/4 bg-gray-100 rounded-md p-1 ease-in duration-100 border-2 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md`}
              onClick={getTwentyCrypts}
            >
              Top 20 crypts
            </button>
          </div>
          <div className='flex flex-wrap'>
            {crypts.length === 0 ? (
              <p>Nothing was found</p>
            ) : (
              crypts.map((value) => (
                <div
                  key={value.id}
                  className='m-1 p-2 drop-shadow-lg bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer'
                >
                  <div onClick={() => chooseCryptoCard(value.id)}>
                    <div>
                      <img src={`${value.image}`} alt='picture' style={{ width: '100px' }} />
                      <div>
                        <p>{value.name}</p>
                        <p>{Number(value.current_price).toFixed(4)} $</p>
                      </div>
                    </div>
                  </div>
                  <div className={`flex justify-between`}>
                    <input
                      className={`w-1/2 rounded-md p-1 shadow-md`}
                      type='text'
                      id={`amount_${value.id}`}
                      onChange={handleChangeAmount}
                    />
                    {!Number.isNaN(Number(amount) + 1) && amount !== '' ? (
                      <button
                        className={`w-1/2 bg-gray-100 rounded-md p-1 ease-in duration-100 border-2 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md`}
                        onClick={() => handleAmount({value: value.id, currentPrice: value.current_price})}
                      >
                        Buy
                      </button>
                    ) : (
                      <button
                        className={`w-1/2 bg-gray-100 p-1 border-2 cursor-not-allowed disabled:`}
                      >
                        Buy
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default Crypts;
