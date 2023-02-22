//redux
import { changeStatus, changeStatusToCompleted } from '@redux_/walletSlice';

//icons
import { useAppDispatch, useAppSelector } from '@hooks';

// style
const methodButtonsStyle = `text-lg w-1/2 flex justify-center gap-4 items-center bg-gray-500 text-yellow-100 rounded-md px-3 py-1 ease-in duration-100 border-2 hover:bg-gray-400 hover:-translate-y-1 hover:shadow-md`;

interface IPurchase {
  id: string;
  value: string;
  price: number;
  status: 'hold' | 'processing' | 'completed';
  method: string;
}

interface IGetMethodAndId {
  method: string;
  id: string;
}

const Orders = () => {
  const orders = useAppSelector((state) => state.wallet.boughtCrypts);
  const wallet = useAppSelector((state) => state.wallet.value);
  const dispatch = useAppDispatch()

  const methodBtn = (value: IGetMethodAndId) => {
    dispatch(changeStatus(value))
    setTimeout(() => {
      dispatch(changeStatusToCompleted(value))
    }, 3000)
  }


  return (
    <>
      <section className={`w-full h-full p-4 bg-gray-200`}>
        <div className={`flex justify-between pb-2`}>
          <h1 className={`text-xl font-bold`}>Orders</h1>
          <div className={`w-1/4 flex justify-between`}>
            <button
              className={`w-1/2 bg-gray-100 rounded-md p-1 ease-in duration-100 border-2 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md`}
            >
              Filter
            </button>
            <p className={`w-1/2 p-1 font-bold`}>
              Wallet: {wallet}
              <span>$</span>
            </p>
          </div>
        </div>
        <div className={`bg-gray-50 p-4 shadow-lg rounded-md`}>
          <div className={`flex`}>
            <span className={`w-1/4 font-bold`}>Order</span>
            <span className={`w-1/4 font-bold`}>Status</span>
            <span className={`w-1/4 font-bold`}>Last order</span>
            <span className={`w-1/4 font-bold`}>Method</span>
          </div>
          {orders.map((item: IPurchase) => {
            if (item.status === 'hold') {
              return (
                <div className={`flex p-1 mb-2 rounded-md bg-gray-200`} key={item.id}>
                  <div className={`flex flex-col w-1/4`}>
                    <span className={`font-bold`}>$ {item.price}</span>
                    <span className={`font-bold`}>Coin - {item.value}</span>
                  </div>
                  <div className={`w-1/4 flex items-center`}>
                    <span className={`bg-yellow-200 p-1 rounded-lg text-gray-600`}>On hold</span>
                  </div>
                  <span className={`w-1/4 flex items-center`}>15 Minutes ago</span>
                  <div className={`w-1/4 flex items-center`}>
                    <div className={`flex w-full justify-center`}>
                      Choose method:
                      <button className={`${methodButtonsStyle}`} onClick={() => methodBtn({method: 'Pay Pal', id: item.id})}>
                        Pay Pal
                      </button>
                      <button className={`${methodButtonsStyle}`} onClick={() => methodBtn({method: 'Visa', id: item.id})}>
                        Visa
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (item.status === 'completed') {
              return (
                <div className={`flex p-1 mb-2 rounded-md bg-gray-200`} key={item.id}>
                  <div className={`flex flex-col w-1/4`}>
                    <span className={`font-bold`}>$ {item.price}</span>
                    <span className={`font-bold`}>Coin - {item.value}</span>
                  </div>
                  <div className={`w-1/4 flex items-center`}>
                    <span className={`bg-blue-500 p-1 rounded-lg text-gray-700`}>Completed</span>
                  </div>
                  <span className={`w-1/4 flex items-center`}>7 Hours ago</span>
                  <span className={`w-1/4 flex items-center`}>{item.method}</span>
                </div>
              );
            } else if (item.status === 'processing') {
              return (
                <div className={`flex p-1 mb-2 rounded-md bg-gray-200`} key={item.id}>
                  <div className={`flex flex-col w-1/4`}>
                    <span className={`font-bold`}>$ {item.price}</span>
                    <span className={`font-bold`}>Coin - {item.value}</span>
                  </div>
                  <div className={`w-1/4 flex items-center`}>
                    <span className={`bg-green-400 p-1 rounded-lg text-gray-600`}>Processing</span>
                  </div>
                  <span className={`w-1/4 flex items-center`}>1 Hour ago</span>
                  <span className={`w-1/4 flex items-center`}>{item.method}</span>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default Orders;