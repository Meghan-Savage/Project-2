import React from "react";
import store from "../../server/models/store";

const StoreDetails = (props) => {
  const [selectedStore, setSelectedStore] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/store/${props.id}`);
        setSelectedStore(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [props.id]);

  return (
    <>
      {selectedStore && (
        <section>
          <div key={selectedStore.id} className="m-4 w-60">
            <div>
              <h1> {selectedStore.name} </h1>
              <p>{selectedStore.storeBannerName}</p>
              <p>${selectedStore.address.formattedAddress}</p>
            </div>
            <div>
              <form action="/store/delete-store" method="POST">
                <input type="hidden" value={props.id} name="storeId" />
                <button
                  type="submit"
                  className="w-64 m-6 text-white bg-green-900 hover:bg-lime-600 block"
                >
                  delete
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StoreInfo;
