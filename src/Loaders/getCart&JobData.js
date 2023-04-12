// import { getStoredCart } from "../Utilities/FakeDB";

// export const jobsAndCartData = async () => {
//   const jobsData = await fetch("jobs.json");
//   const jobs = await jobsData.json();

//   const savedCart = getStoredCart();
//   let cartArray = [];
//   for (const id in savedCart) {
//     const foundJob = jobs.find((job) => job.id === id);
//     if (foundJob) {
//       foundJob.quantity = savedCart[id];
//       cartArray.push(foundJob);
//     }
//   }
//   return { cartArray, jobs };
// };
