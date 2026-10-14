"use strict";

// Keep money in integer cents and the percentage in hundredths of a percent.
function toHundredths(raw, label) {
  const text = String(raw).trim();
  if (!/^\d+(\.\d{1,2})?$/.test(text)) {
    throw new Error(`${label} must be a number with no more than two decimal places.`);
  }
  const [whole, fraction = ""] = text.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

function calculatePayment(rawAmount, rawRate) {
  const invoiceCents = toHundredths(rawAmount, "Invoice amount");
  const rateHundredths = toHundredths(rawRate, "Discount percent");
  if (invoiceCents < 1 || invoiceCents > 100000000) {
    throw new Error("Enter an invoice amount from $0.01 to $1,000,000.00.");
  }
  if (rateHundredths < 0 || rateHundredths > 10000) {
    throw new Error("Enter a discount percent from 0 to 100.");
  }
  const discountCents = Math.round(invoiceCents * rateHundredths / 10000);
  return { invoiceCents, discountCents, paymentCents: invoiceCents - discountCents };
}

function dollars(cents) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

if (typeof document !== "undefined") {
  const form = document.getElementById("invoice-form");
  const amount = document.getElementById("invoice-amount");
  const rate = document.getElementById("discount-rate");
  const output = document.getElementById("payment-amount");
  const error = document.getElementById("error-message");
  const results = document.getElementById("results");

  function render() {
    try {
      const calculation = calculatePayment(amount.value, rate.value);
      output.textContent = dollars(calculation.paymentCents);
      const comparison = document.getElementById("comparison");
      comparison.replaceChildren();
      for (const [label, value] of [
        ["Without the discount", calculation.invoiceCents],
        ["Dollars saved", calculation.discountCents],
        ["With the discount", calculation.paymentCents]
      ]) {
        const line = document.createElement("p");
        line.textContent = label + ": " + dollars(value);
        comparison.append(line);
      }
      const explanation = document.createElement("p");
      explanation.textContent = "The discount is rounded to the nearest cent and subtracted from the invoice amount. Confirm eligibility before paying.";
      comparison.append(explanation);
      error.hidden = true;
      results.hidden = false;
    } catch (problem) {
      error.textContent = problem.message;
      error.hidden = false;
      results.hidden = true;
    }
  }

  form.addEventListener("submit", event => { event.preventDefault(); render(); });
  // Clear stale results while someone is changing an input.
  for (const input of [amount, rate]) {
    input.addEventListener("input", () => { results.hidden = true; error.hidden = true; });
  }
  render();
}

if (typeof module !== "undefined") module.exports = { calculatePayment, dollars };
