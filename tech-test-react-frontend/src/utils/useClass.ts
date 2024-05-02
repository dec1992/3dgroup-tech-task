import container from '../config/ioc';
import { useState } from 'react';

function useClassStore<StoreType>(initialValue: StoreType) {
    const [store] = useState(initialValue);
    return store;
}

export const useClass = <T>(presenter: any) =>
    useClassStore<T>(container.get<T>(presenter));

export default useClass;