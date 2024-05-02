import { inject, injectable, postConstruct } from "inversify";
import { makeAutoObservable, when } from "mobx";
import DataStore from "../stores/data.store";
import { EStatuses, IProducts } from "../stores/data.types";

@injectable()
class AppPresenter {
    @postConstruct() onInit() {
        makeAutoObservable(this);
    }

    @inject(DataStore) private dataStore!: DataStore

    stateProducts: IProducts[] = []

    setStateProducts = (value: IProducts[]) => this.stateProducts = value

    get products() {
        return this.dataStore.products
    }

    get loading() {
        return this.dataStore.loading
    }

    init = async () => {
        await when(() => Boolean(this.products.length))
        this.setStateProducts(this.products)
    }

    handleChangeStatus = (name: string, status: EStatuses) => {
        const products = [...this.stateProducts]
        const index = products.findIndex((product) => product.name === name)
        if (index < 0) return
        const productToEdit = products[index]
        if (!productToEdit) return
        const newProduct: IProducts = {
            ...productToEdit,
            status
        }
        products.splice(index, 1, newProduct)
        this.setStateProducts(products)
    }

    handleDeleteProduct = async (name: string) => {
        const products = [...this.stateProducts]
        const index = products.findIndex((product) => product.name === name)
        console.log(index)
        if (index < 0) return
        products.splice(index, 1)
        console.log(products)
        this.setStateProducts(products)
    }



}

export default AppPresenter;