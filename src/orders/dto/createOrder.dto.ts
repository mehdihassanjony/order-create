export class CreateOrderDto {
  orderCode: string;
  orderType: string;
  products: string[];
  orderStatus: string;
  userId: string;
  quantity: number;
  totalPrice: number;
}

export default CreateOrderDto;
