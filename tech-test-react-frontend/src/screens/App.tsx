import { observer } from "mobx-react-lite";
import useClass from "../utils/useClass";
import AppPresenter from "./App.presenter";
import { useEffect } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import StatusSelector from "../components/StatusSelector";
import LoadingScreen from "../components/LoadingScreen";

const App = () => {
  const { loading, stateProducts, init, handleChangeStatus, handleDeleteProduct } = useClass<AppPresenter>(AppPresenter)

  useEffect(() => {
    init()
  }, [])

  if (loading || !stateProducts.length) return <LoadingScreen loading={loading} text={loading ? 'Loading...' : 'Unable to find any products.'} />

  return (
    <table className="table">
      <thead>
        <tr>
          <th><abbr title="Name">Name</abbr></th>
          <th><abbr title="Price">Price (£)</abbr></th>
          <th><abbr title="Categories">Categories</abbr></th>
          <th><abbr title="status">Status</abbr></th>
          <th><abbr title="Delete">Delete</abbr></th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      {stateProducts.map(({ name, priceInPounds, categories, status }) => {
        return <tr key={name}>
          <td>{name}</td>
          <td>{formatCurrency(priceInPounds)}</td>
          <td>{categories.join(', ')}</td>
          <td><StatusSelector name={name} value={status} onChange={handleChangeStatus} /></td>
          <td><button onClick={() => handleDeleteProduct(name)} className="button is-danger">Delete</button></td>
        </tr>
      })}
    </table>
  );
}

export default observer(App);
