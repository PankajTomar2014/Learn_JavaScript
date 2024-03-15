let apiData = [];

const card_ids = [1, 2, 5, 15];

// 1st way to call multiple api using foor loop
// const fetchCartProduct = async (id) => {
//   try {
//     await fetch("https://fakestoreapi.com/products/" + id)
//       .then((res) => res.json())
//       .then((json) => {
//         apiData.push(json);
//         console.log(apiData);
//       });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// for (let index = 0; index < card_ids.length; index++) {
//   const element = card_ids[index];
//   setTimeout(() => {
//     fetchCartProduct(element);
//   }, 1000);
// }

// 2nd way to call multiple api using promise
const fetchProducts = async () => {
  try {
    const promises = card_ids.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
        response.json()
      )
    );
    const productsData = await Promise.all(promises);
    apiData = productsData;
    console.log(apiData);
  } catch (error) {
    console.log(error.message);
  }
};

fetchProducts();
