import { RootState } from './../redux/reducers/index';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
