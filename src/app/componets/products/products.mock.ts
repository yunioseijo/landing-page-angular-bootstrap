export const productsList:IProduct[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de un litro'},
    {id: 2, name: 'Detergente', price: 5, description: 'Dura 45 lavados'},
    {id: 3, name: 'Leche Condensada', price: 3.89, description: 'El sabor de tu preferencia'},
    {id: 4, name: 'Arroz', price: 1.3},
]
export interface IProduct{
    id: number;
    name: string;
    price: number;
    description?:  string;
}