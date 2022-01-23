export interface VehicleDetailType {
  make: string;
  model: string;
  year: string;
  price: string;
  comments: string;
  sType: string;
  seller: VehicleDetailSellerType;

  discountPrice: string;
  discountPercent: string;
}

export interface VehicleDetailSellerType {
  name: string;
  suburb: string;
  state: string;
}
