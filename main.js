// API - section

// Get the selected currency and the exchange rates
async function getSelectedCurrencyData(currency) {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(currency);
    // console.log(data[currency]);
  } catch (error) {
    console.log(error);
  }
}

// Get exhange rates
async function getExchangeRate(currency) {
  const usdUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/usd.json`;
  const audUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/aud.json`;
  const eurUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/eur.json`;
  const cadUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/cad.json`;
  const chfUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/chf.json`;
  const nzdUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/nzd.json`;
  const bgnUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/bgn.json`;
  let converted_array = [];
  try {
    if (currency === "usd") {
      console.log(`Currecny is ${currency}`);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);

      //console.log(converted_array);
      // console.log(`${currency} to eur is ${eurData.eur}`);
      // console.log(`${currency} to cad is ${cadData.cad}`);
      // console.log(`${currency} to chf is ${chfData.chf}`);
      // console.log(`${currency} to nzd is ${nzdData.nzd}`);
      // console.log(`${currency} to bgn is ${bgnData.bgn}`);
    } else if (currency === "eur") {
      console.log(`Currecny is ${currency}`);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);

      //console.log(converted_array);
    } else if (currency === "aud") {
      console.log(`Currecny is ${currency}`);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);

      //console.log(converted_array);
    } else if (currency === "cad") {
      console.log(`Currecny is ${currency}`);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);
      //console.log(converted_array);
    } else if (currency === "chf") {
      console.log(`Currecny is ${currency}`);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);

      console.log(converted_array);
    } else if (currency === "nzd") {
      console.log(`Currecny is ${currency}`);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get bgn rate for selected currency
      const bgnRes = await fetch(bgnUrl);
      const bgnData = await bgnRes.json();
      let bgnObj = {};
      bgnObj.label = "bgn";
      bgnObj.value = Number(bgnData.bgn.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(bgnObj);

      //console.log(converted_array);
    } else if (currency === "bgn") {
      console.log(`Currecny is ${currency}`);

      // get aud rate for selected currency
      const audRes = await fetch(audUrl);
      const audData = await audRes.json();
      let aud_obj = {};
      aud_obj.label = "aud";
      aud_obj.value = Number(
        audData.aud.toString().match(/^\d+(?:\.\d{0,2})?/)
      );
      converted_array.push(aud_obj);

      // get usd rate for selected currency
      const usdRes = await fetch(usdUrl);
      const usdData = await usdRes.json();
      let usdObj = {};
      usdObj.label = "usd";
      usdObj.value = Number(usdData.usd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(usdObj);

      // get eur rate for selected currency
      const eurRes = await fetch(eurUrl);
      const eurData = await eurRes.json();
      let eurObj = {};
      eurObj.label = "eur";
      eurObj.value = Number(eurData.eur.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(eurObj);

      // get cad rate for selected currency
      const cadRes = await fetch(cadUrl);
      const cadData = await cadRes.json();
      let cadObj = {};
      cadObj.label = "cad";
      cadObj.value = Number(cadData.cad.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(cadObj);

      // get chf rate for selected currency
      const chfRes = await fetch(chfUrl);
      const chfData = await chfRes.json();
      let chfObj = {};
      chfObj.label = "chf";
      chfObj.value = Number(chfData.chf.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(chfObj);

      // get nzd rate for selected currency
      const nzdRes = await fetch(nzdUrl);
      const nzdData = await nzdRes.json();
      let nzdObj = {};
      nzdObj.label = "nzd";
      nzdObj.value = Number(nzdData.nzd.toString().match(/^\d+(?:\.\d{0,2})?/));
      converted_array.push(nzdObj);

      //console.log(converted_array);
    }
  } catch (error) {
    console.log(error);
  }
  displayData(converted_array, currency);
}

// get default currency
window.onload = function setDefaultCurrencyValue() {
  const defaultCurrency = document.getElementById("currency").value;
  //console.log(`The default currency is ${defaultCurrency}`);
  getSelectedCurrencyData(defaultCurrency);
  getExchangeRate(defaultCurrency);
};

// update currency value
function updateCurrency() {
  const selectedCurrency = document.getElementById("currency").value;
  //console.log(`The selected currency is ${selectedCurrency}`);
  getSelectedCurrencyData(selectedCurrency);
  getExchangeRate(selectedCurrency);
}

function displayData(converted_array, currency) {
  const cardOne = document.querySelector(".grp-one");
  const cardTwo = document.querySelector(".grp-two");
  const cardThree = document.querySelector(".grp-three");

  let group_one = "";
  let group_two = "";
  let group_three = "";

  let group_one_counter = 0;
  let group_two_counter = 0;
  let group_three_counter = 0;

  let group_one_counter_display = document.querySelector(".grp-one-counter");
  let group_two_counter_display = document.querySelector(".grp-two-counter");
  let group_three_counter_display =
    document.querySelector(".grp-three-counter");

  let grp_one_array = [];
  let grp_two_array = [];
  let grp_three_array = [];

  for (let index = 0; index < converted_array.length; index++) {
    if (converted_array[index].value < 1) {
      // push to array for sorting for grp one
      grp_one_array.push(converted_array[index]);
    } else if (
      converted_array[index].value >= 1 &&
      converted_array[index].value < 1.5
    ) {
      // push to array for sorting
      grp_two_array.push(converted_array[index]);
    } else if (converted_array[index].value >= 1.5) {
      // push to array for sorting
      grp_three_array.push(converted_array[index]);
    }
  }

  // sort grp one array
  let sorted_grp_one = [
    ...grp_one_array.sort(function (a, b) {
      return a.value - b.value;
    }),
  ];

  // sort group two array
  let sorted_grp_two = [
    ...grp_two_array.sort(function (a, b) {
      return a.value - b.value;
    }),
  ];

  let sorted_grp_three = [
    ...grp_three_array.sort(function (a, b) {
      return a.value - b.value;
    }),
  ];

  //display sorted group array
  for (let index = 0; index < sorted_grp_one.length; index++) {
    if (sorted_grp_one[index].value < 1) {
      // increment counter
      group_one_counter++;
      group_one += `<div class="card">
      <h5>${currency} - ${sorted_grp_one[index].label}</h5>
      <h6>${sorted_grp_one[index].value}</h6>
      </div>`;

      // condtion to reset counters to zero
      if (group_three_counter === 0) {
        group_three_counter = 0;
        group_three_counter_display.innerHTML = group_three_counter;
      }

      if (group_two_counter === 0) {
        group_two_counter = 0;
        group_two_counter_display.innerHTML = group_two_counter;
      }
      // display
      group_one_counter_display.innerHTML = group_one_counter;
    }
  }

  for (let index = 0; index < sorted_grp_two.length; index++) {
    if (sorted_grp_two[index].value >= 1 && sorted_grp_two[index].value < 1.5) {
      // group 2 if greater than or equal to 1 and less than 1.5
      group_two_counter++;
      group_two += `<div class="card">
      <h5>${currency} - ${sorted_grp_two[index].label}</h5>
      <h6>${sorted_grp_two[index].value}</h6>
    </div>
    `;

      // condtion to reset counters to zero if value is 0
      if (group_one_counter === 0) {
        group_one_counter = 0;
        group_one_counter_display.innerHTML = group_one_counter;
      }
      if (group_three_counter === 0) {
        group_three_counter = 0;
        group_three_counter_display.innerHTML = group_three_counter;
      }
      // display
      group_two_counter_display.innerHTML = group_two_counter;
    }
  }

  for (let index = 0; index < sorted_grp_three.length; index++) {
    if (sorted_grp_three[index].value >= 1.5) {
      // push to array for sorting
      grp_three_array.push(converted_array[index]);
      // group three if grater than 1.5
      group_three_counter++;
      group_three += `<div class="card">
      <h5>${currency} - ${sorted_grp_three[index].label}</h5>
      <h6>${sorted_grp_three[index].value}</h6>
    </div>
    `;

      // condtions of reset counters to zero
      if (group_two_counter === 0) {
        group_two_counter = 0;
        group_two_counter_display.innerHTML = group_two_counter;
      }
      if (group_one_counter === 0) {
        group_one_counter = 0;
        group_one_counter_display.innerHTML = group_one_counter;
      }
      // display
      group_three_counter_display.innerHTML = group_three_counter;
    }
  }

  //card.innerHTML = currency_card;
  cardOne.innerHTML = group_one;
  cardTwo.innerHTML = group_two;
  cardThree.innerHTML = group_three;
}
