import 'reflect-metadata'
import { Container } from 'inversify';
import DataStore from '../stores/data.store';


const getContainer = () => {
    const container = new Container({
        autoBindInjectable: true,
        defaultScope: 'Singleton',
    });

    container
        .bind<DataStore>(DataStore)
        .to(DataStore);

    return container;
};

const container = getContainer();

export default container;