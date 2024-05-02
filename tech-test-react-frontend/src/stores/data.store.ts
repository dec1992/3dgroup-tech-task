import { injectable, postConstruct } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { API_URL } from '../config/constants';
import { IProducts } from './data.types';

@injectable()
class DataStore {
    @postConstruct() onInit() {
        makeAutoObservable(this);
        this.init();
    }

    products: IProducts[] = []
    loading = false

    setProducts = (value: IProducts[]) => this.products = value
    setLoading = (value: boolean) => this.loading = value

    init = async () => {
        this.setLoading(true)
        const response = await fetch(API_URL, {
            method: 'GET',
        });
        const json: IProducts[] = await response.json()
        this.setProducts(json ?? [])
        this.setLoading(false)
    }

}

export default DataStore;