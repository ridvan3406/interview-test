// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
//falsy   =>0,"",null,unddefined /
//nullish =>undefined ve null
//"0"
// results.filter((vehicle) => vehicle && !!vehicle.price)
const getData = async () => {
    try {
        const { data } = await axios.get("/api/vehicles.json");

        const promises = data.map((vehicle) => request(vehicle.apiUrl));
        return Promise.all(promises)
            .then((results) => {
                console.log(
                    results.filter((vehicle) => vehicle && vehicle.price)
                );
                return results
                    .filter((vehicle) => vehicle && vehicle.price) //[4 tane araba]
                    .map((vehicle) => {
                        return {
                            ...data.find((car) => car.id === vehicle.id),
                            ...vehicle,
                        };
                    });
            })
            .catch((e) => {
                return error;
            });
    } catch (error) {}
};
export default getData;

// let promises = input.map(element => {
//   return urlToBase64(element.image)
//     .then(base64 => {
//       element.base64Data = base64;
//       return element;
//     })
// });

// // Wait for all Promises to complete
// Promise.all(promises)
//   .then(results => {
//     // Handle results
//   })
//   .catch(e => {
//     console.error(e);
//   })

//    {
//     "id": "xe",
//     "modelYear": "k17",
//     "apiUrl": "/api/vehicle_xe.json",
//     "media": [
//       {
//         "name": "vehicle",
//         "url": "/images/16x9/xe_k17.jpg"
//       },
//       {
//         "name": "vehicle",
//         "url": "/images/1x1/xe_k17.jpg"
//       }
//     ]

//     ,
//         "id": "xe",
//         "description": "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
//         "price": "£30,000",
//         "meta": {
//           "passengers": 5,
//           "drivetrain": [
//             "AWD",
//             "RWD"
//           ],
//           "bodystyles": [
//             "saloon"
//           ],
//           "emissions": {
//             "template": "CO2 Emissions $value g/km",
//             "value": 99
//           }
//         }

//    }
