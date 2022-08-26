export default function calculateInstallments(price, numberOfPayments) {
  const installment = (price / numberOfPayments).toFixed(2);
  return installment;
}
