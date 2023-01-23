const getRawMobile = (mobile: number | string) => {
  const length = mobile?.toString().length;
  return mobile
    ?.toString()
    .slice(length - 10, length)
    .toString();
};

export default getRawMobile;
