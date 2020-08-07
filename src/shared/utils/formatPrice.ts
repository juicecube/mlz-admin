// TODO： locale和precision后续再加
const formatPrice = (price: number) => (price && price?.toString()?.includes('.') ? `¥ ${price}` : `¥ ${price}.00`);
export default formatPrice;
