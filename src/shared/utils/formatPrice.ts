// TODO： locale和precision后续再加
const formatPrice = (price: number) => {
  if (!price && price !== 0) {
    throw `必须输入参数数字`;
  }
  return price && price?.toString()?.includes('.') ? `¥ ${price}` : `¥ ${price}.00`;
};
export default formatPrice;
