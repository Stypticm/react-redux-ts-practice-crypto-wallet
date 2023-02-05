

const Orders = () => {

  return (
    <>
      <section className={`w-full h-full p-4 bg-gray-200`}>
        <div className={`flex justify-between pb-2`}>
          <h1 className={`text-xl font-bold`}>Orders</h1>
          <button className={`w-1/4 bg-gray-100 rounded-md p-1 ease-in duration-100 border-2 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md`}>Filter</button>
        </div>
        <div className={`bg-gray-50 p-4 shadow-lg rounded-md`}>
          <div className={`flex`}>
            <span className={`w-1/4 font-bold`}>Order</span>
            <span className={`w-1/4 font-bold`}>Status</span>
            <span className={`w-1/4 font-bold`}>Last order</span>
            <span className={`w-1/4 font-bold`}>Method</span>
          </div>
          <div className={`flex p-1 mb-2 rounded-md bg-gray-200`}>
            <div className={`flex flex-col w-1/4`}>
              <span className={`font-bold`}>$2,759.95</span>
              <span>John</span>
            </div>
            <div className={`w-1/4 flex items-center`}>
              <span className={`bg-yellow-200 p-1 rounded-lg text-gray-600`}>On hold</span>
            </div>
            <span className={`w-1/4 flex items-center`}>15 Minutes ago</span>
            <span className={`w-1/4 flex items-center`}>PayPal</span>
          </div>
          <div className={`flex p-1 mb-2 rounded-md bg-gray-200`}>
            <div className={`flex flex-col w-1/4`}>
              <span className={`font-bold`}>$1,295.85</span>
              <span>Mike</span>
            </div>
            <div className={`w-1/4 flex items-center`}>
              <span className={`bg-green-400 p-1 rounded-lg text-gray-600`}>Processing</span>
            </div>
            <span className={`w-1/4 flex items-center`}>1 Hour ago</span>
            <span className={`w-1/4 flex items-center`}>Visa</span>
          </div>
          <div className={`flex p-1 mb-2 rounded-md bg-gray-200`}>
            <div className={`flex flex-col w-1/4`}>
              <span className={`font-bold`}>$759.05</span>
              <span>Sara</span>
            </div>
            <div className={`w-1/4 flex items-center`}>
              <span className={`bg-blue-500 p-1 rounded-lg text-gray-700`}>Completed</span>
            </div>
            <span className={`w-1/4 flex items-center`}>7 Hours ago</span>
            <span className={`w-1/4 flex items-center`}>Master card</span>
          </div>
          <div className={`flex p-1 mb-2 rounded-md bg-gray-200`}>
            <div className={`flex flex-col w-1/4`}>
              <span className={`font-bold`}>$609.00</span>
              <span>Tim</span>
            </div>
            <div className={`w-1/4 flex items-center`}>
              <span className={`bg-blue-500 p-1 rounded-lg text-gray-700`}>Completed</span>
            </div>
            <span className={`w-1/4 flex items-center`}>1 Day ago</span>
            <span className={`w-1/4 flex items-center`}>Check</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
